"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { callBff } from "@/lib/connect/client";
import {
  buildFindSimilarPayload,
  similarityFormSchema,
  type SimilarityFormInput,
  type SimilarityFormValues,
} from "@/lib/validation/similarity";

const Plot = dynamic<any>(() => import("react-plotly.js").then((mod) => mod.default as any), {
  ssr: false,
});

type ClusterMember = {
  symbol: string;
  sector: string;
  cluster_id: number;
  period_return: number;
  volatility: number;
};

type SimilarStock = {
  symbol: string;
  sector: string;
  cluster_id: number;
  score: number;
  price_action_similarity: number;
  volatility_similarity: number;
  performance_similarity: number;
  sector_similarity: number;
  period_return: number;
  volatility: number;
};

type FigureSpec = {
  artifact_id: string;
  figure_json: string;
  kind: string;
};

type SimilarityResponse = {
  target_symbol: string;
  target_cluster_id: number;
  members: ClusterMember[];
  similar: SimilarStock[];
  cluster_count: number;
  figures: FigureSpec[];
  dropped_symbols: string[];
};

function FigureCard({ figure }: { figure: FigureSpec }) {
  const parsed = useMemo(() => {
    try {
      return JSON.parse(figure.figure_json);
    } catch {
      return null;
    }
  }, [figure.figure_json]);

  return (
    <article className="card">
      <div className="label">{figure.kind}</div>
      {parsed ? (
        <div className="similarity-plot">
          <Plot
            config={{ responsive: true, displaylogo: false }}
            data={parsed.data ?? []}
            layout={{
              ...(parsed.layout ?? {}),
              autosize: true,
              paper_bgcolor: "rgba(0,0,0,0)",
              plot_bgcolor: "rgba(0,0,0,0)",
            }}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler
          />
        </div>
      ) : (
        <p>Unable to parse figure payload for {figure.kind}</p>
      )}
    </article>
  );
}

export function SimilarityWorkbench() {
  const [result, setResult] = useState<SimilarityResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SimilarityFormInput, unknown, SimilarityFormValues>({
    resolver: zodResolver(similarityFormSchema),
    defaultValues: {
      targetSymbol: "AAPL",
      symbols: "AAPL,MSFT,NVDA,AMZN,META,XOM,JPM",
      interval: "1D",
      windowMode: "bars",
      windowBars: 120,
      startDate: "",
      endDate: "",
      topK: 10,
      minClusters: 2,
      maxClusters: 0,
      priceActionWeight: 0.5,
      volatilityWeight: 0.2,
      performanceWeight: 0.2,
      sectorWeight: 0.1,
    },
  });

  const windowMode = watch("windowMode");

  const onSubmit = async (values: SimilarityFormValues) => {
    setErrorMessage(null);
    const payload = buildFindSimilarPayload(values);
    try {
      const response = (await callBff(
        "algorand",
        "rpc/quant.algorand.v1.MLService/FindSimilarStocks",
        {
          method: "POST",
          body: JSON.stringify(payload),
        },
      )) as SimilarityResponse & { error?: string; message?: string };
      if (response.error) {
        throw new Error(response.message || response.error);
      }
      setResult(response);
    } catch (error) {
      setResult(null);
      setErrorMessage(error instanceof Error ? error.message : "Request failed");
    }
  };

  return (
    <div className="space-y-4">
      <section className="card">
        <div className="label">Stock Similarity & Clustering</div>
        <form className="similarity-form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            <div className="label">Target Symbol</div>
            <input {...register("targetSymbol")} className="similarity-input" placeholder="AAPL" />
            {errors.targetSymbol ? (
              <p className="similarity-error">{errors.targetSymbol.message}</p>
            ) : null}
          </label>

          <label>
            <div className="label">Universe Symbols</div>
            <input
              {...register("symbols")}
              className="similarity-input"
              placeholder="AAPL,MSFT,NVDA,AMZN"
            />
            {errors.symbols ? <p className="similarity-error">{errors.symbols.message}</p> : null}
          </label>

          <label>
            <div className="label">Interval</div>
            <input {...register("interval")} className="similarity-input" placeholder="1D" />
          </label>

          <label>
            <div className="label">Window Mode</div>
            <select {...register("windowMode")} className="similarity-input">
              <option value="bars">Bars</option>
              <option value="date_range">Date Range</option>
            </select>
          </label>

          {windowMode === "bars" ? (
            <label>
              <div className="label">Window Bars</div>
              <input
                {...register("windowBars")}
                className="similarity-input"
                type="number"
                min={20}
              />
              {errors.windowBars ? (
                <p className="similarity-error">{errors.windowBars.message}</p>
              ) : null}
            </label>
          ) : (
            <>
              <label>
                <div className="label">Start Date</div>
                <input {...register("startDate")} className="similarity-input" type="date" />
                {errors.startDate ? (
                  <p className="similarity-error">{errors.startDate.message}</p>
                ) : null}
              </label>
              <label>
                <div className="label">End Date</div>
                <input {...register("endDate")} className="similarity-input" type="date" />
                {errors.endDate ? (
                  <p className="similarity-error">{errors.endDate.message}</p>
                ) : null}
              </label>
            </>
          )}

          <label>
            <div className="label">Top K</div>
            <input
              {...register("topK")}
              className="similarity-input"
              type="number"
              min={1}
              max={100}
            />
          </label>

          <label>
            <div className="label">Min Clusters</div>
            <input
              {...register("minClusters")}
              className="similarity-input"
              type="number"
              min={2}
              max={50}
            />
          </label>

          <label>
            <div className="label">Max Clusters (0 = auto)</div>
            <input
              {...register("maxClusters")}
              className="similarity-input"
              type="number"
              min={0}
              max={50}
            />
          </label>

          <label>
            <div className="label">Price Action Weight</div>
            <input
              {...register("priceActionWeight")}
              className="similarity-input"
              type="number"
              min={0}
              max={1}
              step="0.01"
            />
          </label>

          <label>
            <div className="label">Volatility Weight</div>
            <input
              {...register("volatilityWeight")}
              className="similarity-input"
              type="number"
              min={0}
              max={1}
              step="0.01"
            />
          </label>

          <label>
            <div className="label">Performance Weight</div>
            <input
              {...register("performanceWeight")}
              className="similarity-input"
              type="number"
              min={0}
              max={1}
              step="0.01"
            />
          </label>

          <label>
            <div className="label">Sector Weight</div>
            <input
              {...register("sectorWeight")}
              className="similarity-input"
              type="number"
              min={0}
              max={1}
              step="0.01"
            />
          </label>

          <div className="similarity-actions">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Running..." : "Find Similar Stocks"}
            </Button>
          </div>
        </form>
        {errorMessage ? <p className="similarity-error mt-3">{errorMessage}</p> : null}
      </section>

      {result ? (
        <>
          <section className="card">
            <div className="label">
              Result: {result.target_symbol} (cluster {result.target_cluster_id}) | clusters:{" "}
              {result.cluster_count}
            </div>
            {result.dropped_symbols.length > 0 ? (
              <p className="mt-2">Dropped symbols: {result.dropped_symbols.join(", ")}</p>
            ) : null}
          </section>

          <section className="card">
            <div className="label">Cluster Members</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Sector</th>
                  <th>Cluster</th>
                  <th>Return</th>
                  <th>Volatility</th>
                </tr>
              </thead>
              <tbody>
                {result.members.map((row) => (
                  <tr key={row.symbol}>
                    <td>{row.symbol}</td>
                    <td>{row.sector}</td>
                    <td>{row.cluster_id}</td>
                    <td>{(row.period_return * 100).toFixed(2)}%</td>
                    <td>{row.volatility.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="card">
            <div className="label">Similar Symbols</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Score</th>
                  <th>Cluster</th>
                  <th>Price Sim</th>
                  <th>Vol Sim</th>
                  <th>Perf Sim</th>
                  <th>Sector Sim</th>
                </tr>
              </thead>
              <tbody>
                {result.similar.map((row) => (
                  <tr key={row.symbol}>
                    <td>{row.symbol}</td>
                    <td>{row.score.toFixed(3)}</td>
                    <td>{row.cluster_id}</td>
                    <td>{row.price_action_similarity.toFixed(3)}</td>
                    <td>{row.volatility_similarity.toFixed(3)}</td>
                    <td>{row.performance_similarity.toFixed(3)}</td>
                    <td>{row.sector_similarity.toFixed(3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="grid">
            {result.figures.map((figure) => (
              <FigureCard key={figure.artifact_id} figure={figure} />
            ))}
          </section>
        </>
      ) : null}
    </div>
  );
}
