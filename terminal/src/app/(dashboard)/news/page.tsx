import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ExternalLink } from "lucide-react";

const articles = [
  { title: "NVIDIA Beats Q4 Estimates, Data Center Revenue Surges 40%", source: "Reuters", time: "23m ago", sentiment: "Positive", symbols: ["NVDA"], category: "Earnings" },
  { title: "Fed Officials Signal Patience on Rate Cuts Amid Sticky Inflation", source: "Bloomberg", time: "1h ago", sentiment: "Negative", symbols: ["SPY", "TLT"], category: "Macro" },
  { title: "Apple Accelerates AI Chip Development for Next iPhone", source: "WSJ", time: "2h ago", sentiment: "Positive", symbols: ["AAPL"], category: "Tech" },
  { title: "Tesla Deliveries Miss Estimates for Second Consecutive Quarter", source: "CNBC", time: "3h ago", sentiment: "Negative", symbols: ["TSLA"], category: "Auto" },
  { title: "JPMorgan Raises S&P 500 Year-End Target to 6,200", source: "MarketWatch", time: "4h ago", sentiment: "Positive", symbols: ["SPY"], category: "Strategy" },
  { title: "Amazon Cloud Growth Accelerates, AWS Revenue Up 19%", source: "Reuters", time: "5h ago", sentiment: "Positive", symbols: ["AMZN"], category: "Earnings" },
];

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="News Feed"
        description="Market news, earnings, and macro event aggregation"
        
      />

      <div className="space-y-3">
        {articles.map((a, i) => (
          <Card key={i}>
            <CardContent className="py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold leading-snug">{a.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{a.source}</span>
                    <span className="text-muted-foreground/40">|</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />{a.time}
                    </span>
                    <span className="text-muted-foreground/40">|</span>
                    <Badge variant="outline" className="text-xs">{a.category}</Badge>
                    <Badge
                      variant={a.sentiment === "Positive" ? "default" : "destructive"}
                      className="font-mono text-xs"
                    >
                      {a.sentiment}
                    </Badge>
                    {a.symbols.map((s) => (
                      <Badge key={s} variant="secondary" className="font-mono text-xs">{s}</Badge>
                    ))}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
