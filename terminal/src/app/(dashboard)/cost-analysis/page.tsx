import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const costData = [
  { strategy: "TSMOM Equity L/S", trades: 284, avgSlippage: "0.8 bps", commission: "$4,218", impact: "1.2 bps", totalCost: "$12,480", costPct: "0.44%" },
  { strategy: "CSMOM Factor Rotation", trades: 156, avgSlippage: "1.1 bps", commission: "$2,340", impact: "1.5 bps", totalCost: "$8,920", costPct: "0.57%" },
  { strategy: "Stat Arb Pairs", trades: 892, avgSlippage: "0.4 bps", commission: "$8,920", impact: "0.6 bps", totalCost: "$15,340", costPct: "0.32%" },
  { strategy: "Macro Momentum", trades: 48, avgSlippage: "2.1 bps", commission: "$720", impact: "3.4 bps", totalCost: "$3,210", costPct: "1.12%" },
];

export default function CostAnalysisPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Cost Analysis"
        description="Trade cost analysis: slippage, commissions, and market impact"
        
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Total Costs (MTD)</div>
            <div className="mt-1 font-mono text-2xl font-bold">$39,950</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Avg Slippage</div>
            <div className="mt-1 font-mono text-2xl font-bold">0.9 bps</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Total Trades</div>
            <div className="mt-1 font-mono text-2xl font-bold">1,380</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Cost Breakdown by Strategy</CardTitle>
          <CardDescription>Detailed trade cost attribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Strategy", "Trades", "Avg Slippage", "Commission", "Market Impact", "Total Cost", "Cost %"].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costData.map((c) => (
                  <tr key={c.strategy} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-medium">{c.strategy}</td>
                    <td className="py-2.5 pr-4 font-mono">{c.trades}</td>
                    <td className="py-2.5 pr-4 font-mono">{c.avgSlippage}</td>
                    <td className="py-2.5 pr-4 font-mono">{c.commission}</td>
                    <td className="py-2.5 pr-4 font-mono">{c.impact}</td>
                    <td className="py-2.5 pr-4 font-mono font-semibold">{c.totalCost}</td>
                    <td className="py-2.5 pr-4 font-mono text-muted-foreground">{c.costPct}</td>
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
