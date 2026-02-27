import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, PieChart } from "lucide-react";

export default async function AnalyticsPage() {
  const t = await getTranslations("pages.analytics");

  const performanceMetrics = [
    { label: t("totalReturn"), value: "+27.8%", period: "YTD" },
    { label: t("annualizedReturn"), value: "+34.2%", period: "Since Inception" },
    { label: t("sharpeRatio"), value: "1.68", period: "Rolling 12M" },
    { label: t("sortinoRatio"), value: "2.41", period: "Rolling 12M" },
    { label: t("maxDrawdown"), value: "-8.5%", period: "YTD" },
    { label: t("calmarRatio"), value: "4.02", period: "Rolling 12M" },
    { label: t("winRate"), value: "56.3%", period: "YTD" },
    { label: t("profitFactor"), value: "1.84", period: "YTD" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">{t("tabPerformance")}</TabsTrigger>
          <TabsTrigger value="risk">{t("tabRisk")}</TabsTrigger>
          <TabsTrigger value="attribution">{t("tabAttribution")}</TabsTrigger>
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
              <CardTitle className="text-base">{t("equityCurve")}</CardTitle>
              <CardDescription>{t("portfolioValueTime")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed border-border/50">
                <div className="text-center">
                  <TrendingUp className="mx-auto h-10 w-10 text-muted-foreground/30" />
                  <p className="mt-2 text-sm text-muted-foreground">{t("equityCurveChart")}</p>
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
                <p className="mt-2 text-muted-foreground">{t("riskPlaceholder")}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attribution" className="mt-4">
          <Card>
            <CardContent className="flex h-[300px] items-center justify-center pt-6">
              <div className="text-center">
                <PieChart className="mx-auto h-10 w-10 text-muted-foreground/30" />
                <p className="mt-2 text-muted-foreground">{t("attributionPlaceholder")}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
