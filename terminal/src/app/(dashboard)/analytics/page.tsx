import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, PieChart } from "lucide-react";

const performanceMetrics = [
  { label: "Total Return", value: "+27.8%", period: "YTD" },
  { label: "Annualized Return", value: "+34.2%", period: "Since Inception" },
  { label: "Sharpe Ratio", value: "1.68", period: "Rolling 12M" },
  { label: "Sortino Ratio", value: "2.41", period: "Rolling 12M" },
  { label: "Max Drawdown", value: "-8.5%", period: "YTD" },
  { label: "Calmar Ratio", value: "4.02", period: "Rolling 12M" },
  { label: "Win Rate", value: "56.3%", period: "YTD" },
  { label: "Profit Factor", value: "1.84", period: "YTD" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Performance analytics, risk metrics, and attribution analysis"
        
      />

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="risk">Risk Analytics</TabsTrigger>
          <TabsTrigger value="attribution">Attribution</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceMetrics.map((m) => (
              <Card key={m.label}>
                <CardContent className="pt-6">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{m.label}</div>
                  <div className={`mt-1 font-mono text-2xl font-bold ${m.value.startsWith("+") ? "text-positive" : m.value.startsWith("-") ? "text-negative" : ""}`}>
                    {m.value}
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-muted-foreground">{m.period}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Equity Curve</CardTitle>
              <CardDescription>Portfolio value over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed border-border/50">
                <div className="text-center">
                  <TrendingUp className="mx-auto h-10 w-10 text-muted-foreground/30" />
                  <p className="mt-2 text-sm text-muted-foreground">Equity curve chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <div className="text-center">
                <BarChart3 className="mx-auto h-10 w-10 text-muted-foreground/30" />
                <p className="mt-2 text-muted-foreground">VaR, drawdown analysis, and risk decomposition</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attribution" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <div className="text-center">
                <PieChart className="mx-auto h-10 w-10 text-muted-foreground/30" />
                <p className="mt-2 text-muted-foreground">Return attribution by factor, strategy, and sector</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
