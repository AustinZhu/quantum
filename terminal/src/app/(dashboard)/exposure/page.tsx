import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const sectorExposure = [
  { sector: "Technology", long: 42.8, short: -12.1, net: 30.7 },
  { sector: "Consumer", long: 15.2, short: -3.8, net: 11.4 },
  { sector: "Financials", long: 8.4, short: -2.1, net: 6.3 },
  { sector: "Healthcare", long: 6.2, short: -4.8, net: 1.4 },
  { sector: "Industrials", long: 4.1, short: -1.5, net: 2.6 },
  { sector: "Energy", long: 3.2, short: -5.2, net: -2.0 },
];

export default async function ExposurePage() {
  const t = await getTranslations("pages.exposure");

  const exposureMetrics = [
    { label: t("grossExposure"), value: "$2.41M", limit: "$3.00M", pct: 80.3 },
    { label: t("netExposure"), value: "$0.92M", limit: "$1.50M", pct: 61.3 },
    { label: t("marginUsed"), value: "$1.61M", limit: "$2.40M", pct: 67.3 },
    { label: t("availableMargin"), value: "$0.79M", limit: "$2.40M", pct: 32.7 },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {exposureMetrics.map((m) => (
          <Card key={m.label}>
            <CardContent className="pt-6 space-y-2">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{m.label}</div>
              <div className="font-mono text-2xl font-bold">{m.value}</div>
              <Progress value={m.pct} className="h-1.5" />
              <div className="flex justify-between font-mono text-xs text-muted-foreground">
                <span>{m.pct.toFixed(1)}% used</span>
                <span>Limit: {m.limit}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t("sectorBreakdown")}</CardTitle>
          <CardDescription>{t("sectorBreakdownDesc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {[t("colSector"), t("colLong"), t("colShort"), t("colNet")].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sectorExposure.map((s) => (
                  <tr key={s.sector} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-medium">{s.sector}</td>
                    <td className="py-2.5 pr-4 font-mono text-positive">{s.long.toFixed(1)}%</td>
                    <td className="py-2.5 pr-4 font-mono text-negative">{s.short.toFixed(1)}%</td>
                    <td className={`py-2.5 pr-4 font-mono font-semibold ${s.net >= 0 ? "text-positive" : "text-negative"}`}>
                      {s.net >= 0 ? "+" : ""}{s.net.toFixed(1)}%
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
