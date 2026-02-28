import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { SimilarityWorkbench } from "@/components/similarity/similarity-workbench";

const screenResults = [
  { symbol: "NVDA", name: "NVIDIA Corp", sector: "Technology", momentum: "+18.4%", volume: "52.3M", signal: "Strong Buy" },
  { symbol: "AAPL", name: "Apple Inc", sector: "Technology", momentum: "+5.2%", volume: "48.1M", signal: "Buy" },
  { symbol: "AMZN", name: "Amazon.com", sector: "Consumer", momentum: "+9.7%", volume: "35.6M", signal: "Buy" },
  { symbol: "TSLA", name: "Tesla Inc", sector: "Auto", momentum: "-3.1%", volume: "72.8M", signal: "Neutral" },
  { symbol: "JPM", name: "JPMorgan Chase", sector: "Financials", momentum: "+7.8%", volume: "12.4M", signal: "Buy" },
  { symbol: "META", name: "Meta Platforms", sector: "Technology", momentum: "+11.3%", volume: "22.7M", signal: "Strong Buy" },
];

export default async function ScreeningPage() {
  const t = await getTranslations("pages.screening");

  const signalLabel = (s: string) => {
    if (s === "Strong Buy") return t("strongBuy");
    if (s === "Buy") return t("buy");
    if (s === "Neutral") return t("hold");
    if (s === "Sell") return t("sell");
    return s;
  };

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">{t("screenerTitle")}</CardTitle>
              <CardDescription>{t("screenerDesc")}</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              {t("filter")}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder={t("searchPlaceholder")} className="pl-10" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {[t("colSymbol"), t("colName"), t("colSector"), t("colMomentum"), t("colVolume"), t("colSignal")].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider last:text-right last:pr-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {screenResults.map((row) => (
                  <tr key={row.symbol} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono font-semibold">{row.symbol}</td>
                    <td className="py-2.5 pr-4 text-muted-foreground">{row.name}</td>
                    <td className="py-2.5 pr-4">
                      <Badge variant="outline" className="text-xs">{row.sector}</Badge>
                    </td>
                    <td className={`py-2.5 pr-4 font-mono ${row.momentum.startsWith("+") ? "text-positive" : "text-negative"}`}>
                      {row.momentum}
                    </td>
                    <td className="py-2.5 pr-4 font-mono text-muted-foreground">{row.volume}</td>
                    <td className="py-2.5 text-right">
                      <Badge variant={row.signal.includes("Buy") ? "default" : "secondary"} className="font-mono text-xs">
                        {signalLabel(row.signal)}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <SimilarityWorkbench />
    </div>
  );
}
