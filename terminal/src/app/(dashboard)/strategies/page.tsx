import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const strategies = [
  {
    name: "TSMOM Equity Long/Short",
    type: "TSMOM",
    version: "v2.3",
    status: "Active",
    pnl: "+12.4%",
    sharpe: "1.82",
    maxDrawdown: "-4.2%",
    winRate: "58%",
    positions: 24,
    description: "Time-series momentum across US large-cap equities with volatility scaling",
  },
  {
    name: "CSMOM Factor Rotation",
    type: "CSMOM",
    version: "v1.8",
    status: "Active",
    pnl: "+8.7%",
    sharpe: "1.45",
    maxDrawdown: "-6.1%",
    winRate: "52%",
    positions: 18,
    description: "Cross-sectional momentum factor rotation with sector neutrality constraints",
  },
  {
    name: "Statistical Arbitrage Pairs",
    type: "Stat Arb",
    version: "v3.1",
    status: "Active",
    pnl: "+5.1%",
    sharpe: "1.21",
    maxDrawdown: "-3.8%",
    winRate: "61%",
    positions: 32,
    description: "Cointegration-based pairs trading with mean reversion signals",
  },
  {
    name: "Macro Momentum",
    type: "TSMOM",
    version: "v1.0",
    status: "Paused",
    pnl: "-1.8%",
    sharpe: "-0.32",
    maxDrawdown: "-8.5%",
    winRate: "44%",
    positions: 0,
    description: "Cross-asset momentum using macro economic indicators and regime detection",
  },
];

export default async function StrategiesPage() {
  const t = await getTranslations("pages.strategies");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">{t("tabOverview")}</TabsTrigger>
          <TabsTrigger value="tsmom">{t("tabTsmom")}</TabsTrigger>
          <TabsTrigger value="csmom">{t("tabCsmom")}</TabsTrigger>
          <TabsTrigger value="config">{t("tabConfig")}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 space-y-4">
          {strategies.map((s) => (
            <Card key={s.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base">{s.name}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono text-xs">{s.version}</Badge>
                    <Badge variant={s.status === "Active" ? "default" : "secondary"} className="font-mono text-xs">
                      {s.status === "Active" ? t("statusActive") : t("statusPaused")}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-5">
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("colYtdPnl")}</div>
                    <div className={`mt-1 font-mono text-lg font-bold ${s.pnl.startsWith("+") ? "text-positive" : "text-negative"}`}>
                      {s.pnl}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("colSharpe")}</div>
                    <div className="mt-1 font-mono text-lg font-bold">{s.sharpe}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("colDrawdown")}</div>
                    <div className="mt-1 font-mono text-lg font-bold text-negative">{s.maxDrawdown}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("colWinRate")}</div>
                    <div className="mt-1 font-mono text-lg font-bold">{s.winRate}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("colPositions")}</div>
                    <div className="mt-1 font-mono text-lg font-bold">{s.positions}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="tsmom" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <p className="text-muted-foreground">{t("tsmomPlaceholder")}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="csmom" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <p className="text-muted-foreground">{t("csmomPlaceholder")}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="config" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <p className="text-muted-foreground">{t("configPlaceholder")}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
