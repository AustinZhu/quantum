import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, ArrowDown } from "lucide-react";

const holdings = [
  { symbol: "NVDA", shares: 450, avgCost: "$820.40", current: "$875.30", pnl: "+$24,705", pnlPct: "+6.7%", weight: "16.2%" },
  { symbol: "AAPL", shares: 800, avgCost: "$192.15", current: "$198.50", pnl: "+$5,080", pnlPct: "+3.3%", weight: "12.8%" },
  { symbol: "MSFT", shares: 350, avgCost: "$408.20", current: "$420.15", pnl: "+$4,182", pnlPct: "+2.9%", weight: "11.9%" },
  { symbol: "AMZN", shares: 500, avgCost: "$178.60", current: "$185.40", pnl: "+$3,400", pnlPct: "+3.8%", weight: "7.5%" },
  { symbol: "GOOGL", shares: 600, avgCost: "$170.50", current: "$175.88", pnl: "+$3,228", pnlPct: "+3.2%", weight: "8.5%" },
  { symbol: "META", shares: -200, avgCost: "$505.10", current: "$510.22", pnl: "-$1,024", pnlPct: "-1.0%", weight: "-8.2%" },
  { symbol: "TSLA", shares: -150, avgCost: "$252.30", current: "$245.80", pnl: "+$975", pnlPct: "+2.6%", weight: "-3.0%" },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Portfolio"
        description="Portfolio positions, allocation, and capital management"
        
      />

      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">NAV</div>
            <div className="mt-1 font-mono text-2xl font-bold">$2,847,392</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Day PnL</div>
            <div className="mt-1 font-mono text-2xl font-bold text-positive">+$42,731</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Positions</div>
            <div className="mt-1 font-mono text-2xl font-bold">{holdings.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Cash</div>
            <div className="mt-1 font-mono text-2xl font-bold">$171,243</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Holdings</CardTitle>
          <CardDescription>Current portfolio positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Symbol", "Shares", "Avg Cost", "Current", "PnL", "PnL %", "Weight"].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider last:text-right last:pr-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {holdings.map((h) => {
                  const isPositive = h.pnl.startsWith("+");
                  return (
                    <tr key={h.symbol} className="border-b border-border/50 last:border-0">
                      <td className="py-2.5 pr-4 font-mono font-semibold">{h.symbol}</td>
                      <td className="py-2.5 pr-4 font-mono">
                        {h.shares < 0 && <Badge variant="secondary" className="mr-1 font-mono text-[10px]">Short</Badge>}
                        {Math.abs(h.shares)}
                      </td>
                      <td className="py-2.5 pr-4 font-mono text-muted-foreground">{h.avgCost}</td>
                      <td className="py-2.5 pr-4 font-mono">{h.current}</td>
                      <td className={`py-2.5 pr-4 font-mono ${isPositive ? "text-positive" : "text-negative"}`}>{h.pnl}</td>
                      <td className={`py-2.5 pr-4 font-mono ${isPositive ? "text-positive" : "text-negative"}`}>
                        <span className="flex items-center gap-1">
                          {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                          {h.pnlPct}
                        </span>
                      </td>
                      <td className="py-2.5 text-right font-mono">{h.weight}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
