import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default async function PortfolioPage() {
  const t = await getTranslations("pages.portfolio");
  const tc = await getTranslations("common");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: t("nav"), value: "$2,847,392" },
          { label: t("dayPnl"), value: "+$42,731", positive: true },
          { label: t("positions"), value: String(holdings.length) },
          { label: t("cash"), value: "$171,243" },
        ].map((m) => (
          <Card key={m.label}>
            <CardContent className="pt-6">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{m.label}</div>
              <div className={`mt-1 font-mono text-2xl font-bold ${m.positive ? "text-positive" : ""}`}>{m.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t("holdings")}</CardTitle>
          <CardDescription>{t("holdingsDesc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {[t("colSymbol"), t("colShares"), t("colAvgCost"), t("colCurrent"), t("colPnl"), t("colPnlPct"), t("colWeight")].map((h) => (
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
                        {h.shares < 0 && <Badge variant="secondary" className="mr-1 font-mono text-[10px]">{tc("short")}</Badge>}
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
