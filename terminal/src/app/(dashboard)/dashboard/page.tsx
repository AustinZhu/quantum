import {
  Activity,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  Clock,
  Shield,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

/* ── Mock data ── */

const metrics: {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}[] = [
  { label: "Portfolio PnL", value: "$42,731", change: "+2.14%", trend: "up", icon: TrendingUp },
  { label: "Active Signals", value: "137", change: "+12 today", trend: "up", icon: Zap },
  { label: "Fill Rate", value: "94.2%", change: "-0.8%", trend: "down", icon: Activity },
  { label: "Risk Score", value: "0.72", change: "Low risk", trend: "up", icon: Shield },
];

const strategies = [
  {
    name: "TSMOM Equity L/S",
    status: "Active",
    pnl: "+12.4%",
    sharpe: "1.82",
    positive: true,
  },
  {
    name: "CSMOM Factor Rotation",
    status: "Active",
    pnl: "+8.7%",
    sharpe: "1.45",
    positive: true,
  },
  {
    name: "Mean Reversion HFT",
    status: "Paused",
    pnl: "+3.2%",
    sharpe: "0.98",
    positive: true,
  },
  {
    name: "Macro Momentum",
    status: "Active",
    pnl: "-1.8%",
    sharpe: "-0.32",
    positive: false,
  },
  {
    name: "Stat Arb Pairs",
    status: "Active",
    pnl: "+5.1%",
    sharpe: "1.21",
    positive: true,
  },
];

const alerts = [
  {
    severity: "warning",
    message: "Equity exposure at 87% — approaching limit",
    time: "2m ago",
  },
  {
    severity: "info",
    message: "CSMOM buy signal triggered for AMZN",
    time: "8m ago",
  },
  {
    severity: "error",
    message: "Market data lag spike: 340ms on NASDAQ",
    time: "14m ago",
  },
  {
    severity: "info",
    message: "Backtest completed: TSMOM v2.3 (Sharpe 1.94)",
    time: "23m ago",
  },
  {
    severity: "warning",
    message: "Risk rule triggered: notional limit on TSLA",
    time: "31m ago",
  },
  {
    severity: "info",
    message: "Model registry updated: factor_momentum v4",
    time: "1h ago",
  },
];

const recentOrders = [
  {
    id: "ord_4821",
    symbol: "AAPL",
    side: "BUY",
    qty: 500,
    price: "$198.50",
    status: "Filled",
  },
  {
    id: "ord_4820",
    symbol: "NVDA",
    side: "SELL",
    qty: 200,
    price: "$875.30",
    status: "Filled",
  },
  {
    id: "ord_4819",
    symbol: "TSLA",
    side: "BUY",
    qty: 100,
    price: "$245.80",
    status: "Partial",
  },
  {
    id: "ord_4818",
    symbol: "MSFT",
    side: "SELL",
    qty: 300,
    price: "$420.15",
    status: "Pending",
  },
  {
    id: "ord_4817",
    symbol: "AMZN",
    side: "BUY",
    qty: 150,
    price: "$185.40",
    status: "Filled",
  },
  {
    id: "ord_4816",
    symbol: "META",
    side: "SELL",
    qty: 75,
    price: "$510.22",
    status: "Rejected",
  },
];

/* ── Page ── */

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Real-time overview of your quantitative trading system
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <Card key={m.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardDescription className="font-mono text-xs uppercase tracking-wider">
                  {m.label}
                </CardDescription>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="font-mono text-2xl font-bold">{m.value}</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  {m.trend === "up" ? (
                    <ArrowUp className="h-3 w-3 text-positive" />
                  ) : (
                    <ArrowDown className="h-3 w-3 text-negative" />
                  )}
                  <span className={m.trend === "up" ? "text-positive" : "text-negative"}>
                    {m.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Chart + Alerts row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Trading activity chart placeholder */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Trading Activity</CardTitle>
                <CardDescription>Cumulative PnL and signal volume</CardDescription>
              </div>
              <div className="flex gap-1">
                {["1D", "1W", "1M", "3M", "YTD"].map((period) => (
                  <Button
                    key={period}
                    variant={period === "1M" ? "secondary" : "ghost"}
                    size="xs"
                    className="font-mono text-xs"
                  >
                    {period}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex h-[260px] items-center justify-center rounded-lg border border-dashed border-border/50">
              <div className="text-center">
                <BarChart3 className="mx-auto h-10 w-10 text-muted-foreground/30" />
                <p className="mt-2 text-sm text-muted-foreground">
                  TradingView chart mounts here
                </p>
                <p className="font-mono text-xs text-muted-foreground/60">
                  lightweight-charts + plotly
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts feed */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Alerts & Signals</CardTitle>
              <Badge variant="outline" className="font-mono text-xs">
                <Bell className="mr-1 h-3 w-3" />
                {alerts.length}
              </Badge>
            </div>
            <CardDescription>Latest system and trading alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className="flex gap-3">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      alert.severity === "error"
                        ? "bg-destructive"
                        : alert.severity === "warning"
                          ? "bg-warning"
                          : "bg-primary"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-snug">{alert.message}</p>
                    <p className="mt-0.5 flex items-center gap-1 font-mono text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Strategies + Exposure row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Active strategies */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Active Strategies</CardTitle>
                <CardDescription>Performance summary by strategy</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="font-mono text-xs">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Strategy
                    </th>
                    <th className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                    <th className="pb-2 pr-4 text-right font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      YTD PnL
                    </th>
                    <th className="pb-2 text-right font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Sharpe
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {strategies.map((s) => (
                    <tr key={s.name} className="border-b border-border/50 last:border-0">
                      <td className="py-2.5 pr-4 font-medium">{s.name}</td>
                      <td className="py-2.5 pr-4">
                        <Badge
                          variant={s.status === "Active" ? "default" : "secondary"}
                          className="font-mono text-xs"
                        >
                          {s.status}
                        </Badge>
                      </td>
                      <td
                        className={`py-2.5 pr-4 text-right font-mono ${s.positive ? "text-positive" : "text-negative"}`}
                      >
                        {s.pnl}
                      </td>
                      <td className="py-2.5 text-right font-mono">{s.sharpe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Exposure overview */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base">Exposure Overview</CardTitle>
            <CardDescription>Current portfolio allocation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Equity Long</span>
                <span className="font-mono text-muted-foreground">62%</span>
              </div>
              <Progress value={62} className="h-2" />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Equity Short</span>
                <span className="font-mono text-muted-foreground">24%</span>
              </div>
              <Progress value={24} className="h-2" />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Futures</span>
                <span className="font-mono text-muted-foreground">8%</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Cash</span>
                <span className="font-mono text-muted-foreground">6%</span>
              </div>
              <Progress value={6} className="h-2" />
            </div>
            <Separator />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Gross Exposure</span>
              <span className="font-mono font-semibold">$2.41M</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Net Exposure</span>
              <span className="font-mono font-semibold">$0.92M</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Margin Used</span>
              <span className="font-mono font-semibold">67.3%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent orders */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Recent Orders</CardTitle>
              <CardDescription>Latest order executions across all strategies</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="font-mono text-xs">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Order ID", "Symbol", "Side", "Qty", "Price", "Status"].map((h) => (
                    <th
                      key={h}
                      className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider last:text-right last:pr-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o) => (
                  <tr key={o.id} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">
                      {o.id}
                    </td>
                    <td className="py-2.5 pr-4 font-mono font-semibold">{o.symbol}</td>
                    <td className="py-2.5 pr-4">
                      <Badge
                        variant={o.side === "BUY" ? "default" : "secondary"}
                        className="font-mono text-xs"
                      >
                        {o.side}
                      </Badge>
                    </td>
                    <td className="py-2.5 pr-4 font-mono">{o.qty}</td>
                    <td className="py-2.5 pr-4 font-mono">{o.price}</td>
                    <td className="py-2.5 text-right">
                      <Badge
                        variant={
                          o.status === "Filled"
                            ? "default"
                            : o.status === "Rejected"
                              ? "destructive"
                              : "outline"
                        }
                        className="font-mono text-xs"
                      >
                        {o.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
