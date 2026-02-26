import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      <section className="grid">
        <article className="card pulse">
          <div className="label">Last Backtest PnL</div>
          <div className="value">+4.27%</div>
        </article>
        <article className="card">
          <div className="label">Signals (24h)</div>
          <div className="value">137</div>
        </article>
        <article className="card">
          <div className="label">Orders Blocked</div>
          <div className="value">12</div>
        </article>
        <article className="card">
          <div className="label">Feed Lag (ms)</div>
          <div className="value">48</div>
        </article>
      </section>

      <section className="card">
        <div className="label">Market Chart & Indicators</div>
        <p>
          TradingView Lightweight Charts and Plotly artifact rendering mount here using generated
          contract payloads.
        </p>
      </section>

      <section className="card">
        <div className="label">Strategy / Feature / Signal Settings</div>
        <p>
          Editable controls for strategy params, indicator windows, and alert thresholds are
          scaffolded for BFF-backed mutations.
        </p>
        <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Button size="sm">Save Strategy</Button>
          <Button variant="secondary" size="sm">
            Run Backtest
          </Button>
        </div>
      </section>
    </>
  );
}
