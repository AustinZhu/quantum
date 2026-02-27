import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ticks = [
  { time: "14:32:01.342", symbol: "AAPL", price: "198.52", size: "100", exchange: "NASDAQ", type: "Trade" },
  { time: "14:32:01.341", symbol: "NVDA", price: "875.31", size: "50", exchange: "NYSE", type: "Trade" },
  { time: "14:32:01.339", symbol: "TSLA", price: "245.78", size: "200", exchange: "NASDAQ", type: "Trade" },
  { time: "14:32:01.338", symbol: "MSFT", price: "420.14", size: "75", exchange: "NASDAQ", type: "Trade" },
  { time: "14:32:01.335", symbol: "AMZN", price: "185.42", size: "150", exchange: "NASDAQ", type: "Trade" },
  { time: "14:32:01.334", symbol: "META", price: "510.18", size: "60", exchange: "NASDAQ", type: "Trade" },
  { time: "14:32:01.332", symbol: "GOOGL", price: "175.88", size: "300", exchange: "NASDAQ", type: "Trade" },
  { time: "14:32:01.330", symbol: "JPM", price: "198.05", size: "120", exchange: "NYSE", type: "Trade" },
];

export default async function FeedPage() {
  const t = await getTranslations("pages.feed");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("ticksPerSec")}</div>
            <div className="mt-1 font-mono text-2xl font-bold">12,847</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("symbols")}</div>
            <div className="mt-1 font-mono text-2xl font-bold">3,241</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("latency")}</div>
            <div className="mt-1 font-mono text-2xl font-bold">3ms</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("status")}</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-2xl font-bold">{t("statusLive")}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">{t("tickStream")}</CardTitle>
              <CardDescription>{t("tickStreamDesc")}</CardDescription>
            </div>
            <Badge variant="default" className="font-mono text-xs">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
              {t("streaming")}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {[t("colTime"), t("colSymbol"), t("colPrice"), t("colSize"), t("colExchange"), t("colType")].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ticks.map((tick, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">{tick.time}</td>
                    <td className="py-2 pr-4 font-mono font-semibold">{tick.symbol}</td>
                    <td className="py-2 pr-4 font-mono">{tick.price}</td>
                    <td className="py-2 pr-4 font-mono text-muted-foreground">{tick.size}</td>
                    <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">{tick.exchange}</td>
                    <td className="py-2 pr-4">
                      <Badge variant="outline" className="font-mono text-xs">{tick.type}</Badge>
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
