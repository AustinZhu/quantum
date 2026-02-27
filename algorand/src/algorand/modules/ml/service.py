"""Machine learning service scaffolding."""

from __future__ import annotations

import math
import time
from dataclasses import dataclass
from datetime import date
from uuid import uuid4

import numpy as np
import plotly.graph_objects as go
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.metrics import silhouette_score
from sklearn.preprocessing import StandardScaler

from algorand.infra.integrations.mlflow import MLflowClient
from algorand.modules.ml.domain import (
    ClusterMember,
    ClusterStocksResult,
    FindSimilarStocksResult,
    ModelVersion,
    PlotlyArtifact,
    SimilarStock,
)
from algorand.modules.ml.ports import ArtifactStore, ModelRepository, SimilarityMarketDataProvider
from algorand.modules.ml.schemas import (
    ClusterStocksRequest,
    FindSimilarStocksRequest,
    SimilarityWeights,
    TimeWindowRequest,
    TrainingRequest,
)


@dataclass(frozen=True)
class _PreparedUniverse:
    symbols: list[str]
    dropped_symbols: list[str]
    sectors: dict[str, str]
    price_matrix: np.ndarray
    volatility: np.ndarray
    performance: np.ndarray
    feature_matrix: np.ndarray
    labels: np.ndarray
    cluster_count: int


class MLService:
    """Offline train / online inference entrypoints."""

    def __init__(
        self,
        repository: ModelRepository,
        market_data_provider: SimilarityMarketDataProvider,
        artifact_store: ArtifactStore,
        mlflow_client: MLflowClient | None = None,
    ) -> None:
        self._repository = repository
        self._market_data_provider = market_data_provider
        self._artifact_store = artifact_store
        self._mlflow_client = mlflow_client

    def run_training_job(self, request: TrainingRequest) -> str:
        model_version = ModelVersion(
            model_version_id=uuid4().hex,
            model_name=request.model_name,
            status="READY",
            trained_ts_ms=int(time.time() * 1000),
            metrics={"cv_score": "0.61", "train_rows": "1200"},
        )
        self._repository.put(model_version)
        self._log_training_to_mlflow(model_version)
        return model_version.model_version_id

    def _log_training_to_mlflow(self, model_version: ModelVersion) -> None:
        if self._mlflow_client is None:
            return

        experiment_id = self._mlflow_client.get_or_create_experiment_id()
        if not experiment_id:
            return

        run_id = self._mlflow_client.create_run(
            experiment_id=experiment_id,
            tags={
                "model_name": model_version.model_name,
                "model_version_id": model_version.model_version_id,
            },
        )
        if not run_id:
            return

        try:
            score = float(model_version.metrics.get("cv_score", "0.0"))
        except Exception:
            score = 0.0

        self._mlflow_client.log_metric(
            run_id=run_id,
            key="cv_score",
            value=score,
            timestamp_ms=model_version.trained_ts_ms,
            step=0,
        )

    def get_model_versions(self, model_name: str) -> list[ModelVersion]:
        return self._repository.list_versions(model_name)

    def cluster_stocks(self, request: ClusterStocksRequest) -> ClusterStocksResult:
        universe = self._cluster_universe(
            symbols=request.symbols,
            interval=request.interval,
            time_window=request.time_window,
            weights=request.weights,
            min_clusters=request.min_clusters,
            max_clusters=request.max_clusters,
        )

        members = self._build_members(universe)
        figures = [self._build_cluster_scatter(universe)]
        return ClusterStocksResult(
            members=members,
            cluster_count=universe.cluster_count,
            figures=figures,
            dropped_symbols=universe.dropped_symbols,
        )

    def find_similar_stocks(self, request: FindSimilarStocksRequest) -> FindSimilarStocksResult:
        universe = self._cluster_universe(
            symbols=request.symbols,
            interval=request.interval,
            time_window=request.time_window,
            weights=request.weights,
            min_clusters=request.min_clusters,
            max_clusters=request.max_clusters,
        )
        target_symbol = request.target_symbol.strip().upper()
        if target_symbol not in universe.symbols:
            raise ValueError("target_symbol must be present in symbols and contain sufficient data")

        target_idx = universe.symbols.index(target_symbol)
        members = self._build_members(universe)
        similar = self._rank_similar(universe, target_idx=target_idx, top_k=request.top_k, weights=request.weights)

        figures = [
            self._build_cluster_scatter(universe, highlight_symbol=target_symbol),
            self._build_similarity_bar(target_symbol=target_symbol, similar=similar),
        ]
        return FindSimilarStocksResult(
            target_symbol=target_symbol,
            target_cluster_id=int(universe.labels[target_idx]),
            members=members,
            similar=similar,
            cluster_count=universe.cluster_count,
            figures=figures,
            dropped_symbols=universe.dropped_symbols,
        )

    def _cluster_universe(
        self,
        symbols: list[str],
        interval: str,
        time_window: TimeWindowRequest,
        weights: SimilarityWeights,
        min_clusters: int,
        max_clusters: int,
    ) -> _PreparedUniverse:
        normalized_symbols = self._normalize_symbols(symbols)
        self._validate_time_window(time_window)
        normalized_weights = self._normalize_weights(weights)

        close_prices = self._market_data_provider.fetch_close_prices(
            symbols=normalized_symbols,
            interval=interval,
            window_bars=time_window.window_bars,
            start_date=time_window.start_date,
            end_date=time_window.end_date,
        )
        if close_prices.empty:
            raise ValueError("no market data returned for symbol universe")

        rows: list[np.ndarray] = []
        valid_symbols: list[str] = []
        dropped_symbols: list[str] = []
        volatility: list[float] = []
        performance: list[float] = []
        for symbol in normalized_symbols:
            if symbol not in close_prices.columns:
                dropped_symbols.append(symbol)
                continue
            series = close_prices[symbol].dropna()
            if len(series) < 20:
                dropped_symbols.append(symbol)
                continue
            returns = series.pct_change().replace([np.inf, -np.inf], np.nan).dropna()
            if len(returns) < 10:
                dropped_symbols.append(symbol)
                continue
            valid_symbols.append(symbol)
            rows.append(returns.to_numpy(dtype=float))
            volatility.append(float(np.std(returns.to_numpy(dtype=float), ddof=1)))
            performance.append(float((series.iloc[-1] / series.iloc[0]) - 1))

        if len(valid_symbols) < 3:
            raise ValueError("at least 3 symbols with sufficient history are required")

        min_len = min(len(row) for row in rows)
        if min_len < 5:
            raise ValueError("not enough aligned return points to cluster symbol universe")

        aligned = np.vstack([row[-min_len:] for row in rows])
        sectors = self._market_data_provider.fetch_sectors(valid_symbols)
        feature_matrix = self._build_feature_matrix(
            price_matrix=aligned,
            volatility=np.asarray(volatility, dtype=float),
            performance=np.asarray(performance, dtype=float),
            sectors=[sectors.get(symbol, "UNKNOWN") for symbol in valid_symbols],
            weights=normalized_weights,
        )
        min_k, max_k = self._resolve_cluster_bounds(
            symbol_count=len(valid_symbols),
            min_clusters=min_clusters,
            max_clusters=max_clusters,
        )
        labels, cluster_count = self._cluster_labels(feature_matrix, min_k=min_k, max_k=max_k)
        return _PreparedUniverse(
            symbols=valid_symbols,
            dropped_symbols=dropped_symbols,
            sectors={symbol: sectors.get(symbol, "UNKNOWN") for symbol in valid_symbols},
            price_matrix=aligned,
            volatility=np.asarray(volatility, dtype=float),
            performance=np.asarray(performance, dtype=float),
            feature_matrix=feature_matrix,
            labels=labels,
            cluster_count=cluster_count,
        )

    @staticmethod
    def _normalize_symbols(symbols: list[str]) -> list[str]:
        deduped: list[str] = []
        seen: set[str] = set()
        for symbol in symbols:
            candidate = symbol.strip().upper()
            if not candidate or candidate in seen:
                continue
            seen.add(candidate)
            deduped.append(candidate)
        if not deduped:
            raise ValueError("symbols cannot be empty")
        return deduped

    @staticmethod
    def _validate_time_window(time_window: TimeWindowRequest) -> None:
        using_window_bars = time_window.window_bars is not None
        using_dates = time_window.start_date is not None or time_window.end_date is not None
        if using_window_bars and using_dates:
            raise ValueError("time_window must set only one mode: window_bars or start/end date")
        if not using_window_bars and not using_dates:
            raise ValueError("time_window is required")

        if using_window_bars:
            if time_window.window_bars is None or time_window.window_bars < 20:
                raise ValueError("window_bars must be >= 20")
            return

        if not time_window.start_date or not time_window.end_date:
            raise ValueError("both start_date and end_date are required when using date range")
        start = date.fromisoformat(time_window.start_date)
        end = date.fromisoformat(time_window.end_date)
        if start > end:
            raise ValueError("start_date must be <= end_date")

    @staticmethod
    def _normalize_weights(weights: SimilarityWeights) -> SimilarityWeights:
        values = np.asarray(
            [
                weights.price_action_weight,
                weights.volatility_weight,
                weights.performance_weight,
                weights.sector_weight,
            ],
            dtype=float,
        )
        if np.any(values < 0):
            raise ValueError("weights must be non-negative")
        total = float(values.sum())
        if total <= 0:
            raise ValueError("weights sum must be greater than zero")
        return SimilarityWeights(
            price_action_weight=float(weights.price_action_weight),
            volatility_weight=float(weights.volatility_weight),
            performance_weight=float(weights.performance_weight),
            sector_weight=float(weights.sector_weight),
        )

    @staticmethod
    def _build_feature_matrix(
        price_matrix: np.ndarray,
        volatility: np.ndarray,
        performance: np.ndarray,
        sectors: list[str],
        weights: SimilarityWeights,
    ) -> np.ndarray:
        price_scaled = StandardScaler().fit_transform(price_matrix)
        vol_scaled = StandardScaler().fit_transform(volatility.reshape(-1, 1))
        perf_scaled = StandardScaler().fit_transform(performance.reshape(-1, 1))

        unique_sectors = sorted(set(sectors))
        sector_idx = {sector: idx for idx, sector in enumerate(unique_sectors)}
        sector_vector = np.asarray([float(sector_idx[sector]) for sector in sectors], dtype=float).reshape(-1, 1)
        if len(unique_sectors) == 1:
            sector_scaled = np.zeros_like(sector_vector)
        else:
            sector_scaled = StandardScaler().fit_transform(sector_vector)

        parts = [
            price_scaled * math.sqrt(weights.price_action_weight),
            vol_scaled * math.sqrt(weights.volatility_weight),
            perf_scaled * math.sqrt(weights.performance_weight),
            sector_scaled * math.sqrt(weights.sector_weight),
        ]
        return np.hstack(parts)

    @staticmethod
    def _resolve_cluster_bounds(symbol_count: int, min_clusters: int, max_clusters: int) -> tuple[int, int]:
        min_k = max(2, min_clusters)
        default_max = max(min_k, min(10, int(math.sqrt(symbol_count))))
        max_k = default_max if max_clusters <= 0 else max_clusters
        max_k = min(max_k, symbol_count - 1)
        if min_k >= symbol_count:
            raise ValueError("min_clusters must be lower than number of valid symbols")
        if max_k < min_k:
            max_k = min_k
        return min_k, max_k

    @staticmethod
    def _cluster_labels(feature_matrix: np.ndarray, min_k: int, max_k: int) -> tuple[np.ndarray, int]:
        best_score = float("-inf")
        best_labels: np.ndarray | None = None
        best_k = min_k

        for k in range(min_k, max_k + 1):
            if k >= len(feature_matrix):
                continue
            labels = KMeans(n_clusters=k, random_state=42, n_init=10).fit_predict(feature_matrix)
            if len(set(labels)) < 2:
                score = float("-inf")
            else:
                score = float(silhouette_score(feature_matrix, labels))
            if score > best_score:
                best_score = score
                best_labels = labels
                best_k = k

        if best_labels is None:
            best_labels = KMeans(n_clusters=min_k, random_state=42, n_init=10).fit_predict(feature_matrix)
            best_k = min_k
        return best_labels, best_k

    @staticmethod
    def _build_members(universe: _PreparedUniverse) -> list[ClusterMember]:
        members = [
            ClusterMember(
                symbol=symbol,
                sector=universe.sectors.get(symbol, "UNKNOWN"),
                cluster_id=int(universe.labels[idx]),
                period_return=float(universe.performance[idx]),
                volatility=float(universe.volatility[idx]),
            )
            for idx, symbol in enumerate(universe.symbols)
        ]
        return sorted(members, key=lambda item: (item.cluster_id, item.symbol))

    def _rank_similar(
        self,
        universe: _PreparedUniverse,
        target_idx: int,
        top_k: int,
        weights: SimilarityWeights,
    ) -> list[SimilarStock]:
        target_vec = universe.price_matrix[target_idx]
        target_vol = float(universe.volatility[target_idx])
        target_perf = float(universe.performance[target_idx])
        target_sector = universe.sectors.get(universe.symbols[target_idx], "UNKNOWN")

        vol_range = max(float(universe.volatility.max() - universe.volatility.min()), 1e-9)
        perf_range = max(float(universe.performance.max() - universe.performance.min()), 1e-9)
        weight_sum = (
            weights.price_action_weight
            + weights.volatility_weight
            + weights.performance_weight
            + weights.sector_weight
        )
        rows: list[SimilarStock] = []
        for idx, symbol in enumerate(universe.symbols):
            if idx == target_idx:
                continue
            corr = float(np.corrcoef(target_vec, universe.price_matrix[idx])[0, 1])
            if np.isnan(corr):
                corr = 0.0
            price_similarity = (corr + 1.0) / 2.0

            vol_similarity = 1.0 - min(1.0, abs(target_vol - float(universe.volatility[idx])) / vol_range)
            perf_similarity = 1.0 - min(1.0, abs(target_perf - float(universe.performance[idx])) / perf_range)
            sector_similarity = 1.0 if universe.sectors.get(symbol, "UNKNOWN") == target_sector else 0.0

            score = (
                weights.price_action_weight * price_similarity
                + weights.volatility_weight * vol_similarity
                + weights.performance_weight * perf_similarity
                + weights.sector_weight * sector_similarity
            ) / weight_sum
            rows.append(
                SimilarStock(
                    symbol=symbol,
                    sector=universe.sectors.get(symbol, "UNKNOWN"),
                    cluster_id=int(universe.labels[idx]),
                    score=float(score),
                    price_action_similarity=float(price_similarity),
                    volatility_similarity=float(vol_similarity),
                    performance_similarity=float(perf_similarity),
                    sector_similarity=float(sector_similarity),
                    period_return=float(universe.performance[idx]),
                    volatility=float(universe.volatility[idx]),
                )
            )
        rows.sort(key=lambda item: item.score, reverse=True)
        limit = max(1, top_k)
        return rows[:limit]

    def _build_cluster_scatter(
        self,
        universe: _PreparedUniverse,
        highlight_symbol: str | None = None,
    ) -> PlotlyArtifact:
        features = universe.feature_matrix
        if features.shape[1] < 2:
            coords = np.hstack([features, np.zeros((features.shape[0], 1))])[:, :2]
        else:
            coords = PCA(n_components=2, random_state=42).fit_transform(features)

        figure = go.Figure()
        unique_clusters = sorted(set(int(label) for label in universe.labels))
        for cluster_id in unique_clusters:
            indices = [idx for idx, label in enumerate(universe.labels) if int(label) == cluster_id]
            x_vals = [float(coords[idx, 0]) for idx in indices]
            y_vals = [float(coords[idx, 1]) for idx in indices]
            symbols = [universe.symbols[idx] for idx in indices]
            hover = [
                (
                    f"{universe.symbols[idx]}<br>Sector: {universe.sectors.get(universe.symbols[idx], 'UNKNOWN')}"
                    f"<br>Return: {universe.performance[idx]:.2%}<br>Vol: {universe.volatility[idx]:.4f}"
                )
                for idx in indices
            ]
            marker_line = []
            for symbol in symbols:
                if highlight_symbol and symbol == highlight_symbol:
                    marker_line.append(3)
                else:
                    marker_line.append(1)
            figure.add_trace(
                go.Scatter(
                    x=x_vals,
                    y=y_vals,
                    mode="markers+text",
                    name=f"Cluster {cluster_id}",
                    text=symbols,
                    textposition="top center",
                    hovertext=hover,
                    hoverinfo="text",
                    marker={"size": 12, "line": {"width": marker_line, "color": "#111111"}},
                )
            )

        figure.update_layout(
            title="Cluster Scatter (PCA Projection)",
            xaxis_title="PC1",
            yaxis_title="PC2",
            template="plotly_dark",
            legend_title="Cluster",
        )
        return self._persist_figure(kind="cluster_scatter", figure=figure)

    def _build_similarity_bar(self, target_symbol: str, similar: list[SimilarStock]) -> PlotlyArtifact:
        figure = go.Figure(
            data=[
                go.Bar(
                    x=[row.symbol for row in similar],
                    y=[row.score for row in similar],
                    marker={"color": "#42f6a4"},
                )
            ]
        )
        figure.update_layout(
            title=f"Similarity Score vs {target_symbol}",
            xaxis_title="Symbol",
            yaxis_title="Score",
            yaxis={"range": [0, 1]},
            template="plotly_dark",
        )
        return self._persist_figure(kind="similarity_bar", figure=figure)

    def _persist_figure(self, kind: str, figure: go.Figure) -> PlotlyArtifact:
        artifact_id = f"{kind}_{uuid4().hex}"
        payload = {
            "artifact_id": artifact_id,
            "figure_json": figure.to_json(),
            "kind": kind,
        }
        self._artifact_store.save_json(artifact_id, payload)
        return PlotlyArtifact(artifact_id=artifact_id, figure_json=payload["figure_json"], kind=kind)
