import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskConical, Play } from "lucide-react";

const runs = [
  { id: "bt_0091", strategy: "TSMOM v2.3", period: "2024-01—2025-12", sharpe: "1.94", returns: "+18.2%", status: "Completed", duration: "4m 32s" },
  { id: "bt_0090", strategy: "CSMOM v1.8", period: "2024-06—2025-06", sharpe: "1.52", returns: "+11.4%", status: "Completed", duration: "3m 18s" },
  { id: "bt_0089", strategy: "Stat Arb v3.1", period: "2025-01—2025-12", sharpe: "1.08", returns: "+6.9%", status: "Completed", duration: "5m 47s" },
  { id: "bt_0088", strategy: "Macro v1.0", period: "2024-01—2025-12", sharpe: "-0.21", returns: "-3.4%", status: "Completed", duration: "2m 55s" },
  { id: "bt_0087", strategy: "TSMOM v2.2", period: "2024-01—2025-06", sharpe: "1.71", returns: "+14.8%", status: "Completed", duration: "3m 42s" },
];

export default function BacktestingPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Backtesting"
        description="Run and evaluate strategy backtests and paper trading"
        
      />

      <Tabs defaultValue="history">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="new">New Backtest</TabsTrigger>
            <TabsTrigger value="paper">Paper Trading</TabsTrigger>
          </TabsList>
          <Button size="sm">
            <Play className="mr-2 h-4 w-4" />
            Run Backtest
          </Button>
        </div>

        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Backtest History</CardTitle>
              <CardDescription>Previous backtest runs and results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      {["Run ID", "Strategy", "Period", "Sharpe", "Returns", "Duration", "Status"].map((h) => (
                        <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider last:text-right last:pr-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {runs.map((r) => (
                      <tr key={r.id} className="border-b border-border/50 last:border-0">
                        <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{r.id}</td>
                        <td className="py-2.5 pr-4 font-medium">{r.strategy}</td>
                        <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{r.period}</td>
                        <td className="py-2.5 pr-4 font-mono">{r.sharpe}</td>
                        <td className={`py-2.5 pr-4 font-mono ${r.returns.startsWith("+") ? "text-positive" : "text-negative"}`}>
                          {r.returns}
                        </td>
                        <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{r.duration}</td>
                        <td className="py-2.5 text-right">
                          <Badge variant="default" className="font-mono text-xs">{r.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <div className="text-center">
                <FlaskConical className="mx-auto h-10 w-10 text-muted-foreground/30" />
                <p className="mt-2 text-muted-foreground">Backtest configuration form</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paper" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <div className="text-center">
                <FlaskConical className="mx-auto h-10 w-10 text-muted-foreground/30" />
                <p className="mt-2 text-muted-foreground">Paper trading simulation dashboard</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
