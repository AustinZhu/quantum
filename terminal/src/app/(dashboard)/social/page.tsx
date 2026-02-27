import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const sentiments = [
  { symbol: "NVDA", score: 0.82, mentions: 12847, trend: "up", volume_change: "+340%" },
  { symbol: "AAPL", score: 0.61, mentions: 8432, trend: "neutral", volume_change: "+12%" },
  { symbol: "TSLA", score: 0.34, mentions: 15621, trend: "down", volume_change: "+85%" },
  { symbol: "AMZN", score: 0.71, mentions: 5218, trend: "up", volume_change: "+28%" },
  { symbol: "META", score: 0.58, mentions: 4892, trend: "neutral", volume_change: "-5%" },
  { symbol: "MSFT", score: 0.69, mentions: 6341, trend: "up", volume_change: "+18%" },
  { symbol: "GOOGL", score: 0.55, mentions: 4127, trend: "neutral", volume_change: "+8%" },
  { symbol: "JPM", score: 0.45, mentions: 2891, trend: "down", volume_change: "-12%" },
];

export default function SocialPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Social Sentiment"
        description="Social media sentiment analysis and trending topics"
        
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sentiments.slice(0, 4).map((s) => (
          <Card key={s.symbol}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg font-bold">{s.symbol}</span>
                {s.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-positive" />
                ) : s.trend === "down" ? (
                  <TrendingDown className="h-4 w-4 text-negative" />
                ) : (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <div className="mt-2">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-muted-foreground">Sentiment</span>
                  <span className="font-mono">{(s.score * 100).toFixed(0)}%</span>
                </div>
                <Progress value={s.score * 100} className="h-1.5" />
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>{s.mentions.toLocaleString()} mentions</span>
                <span className="font-mono">{s.volume_change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sentiment Tracker</CardTitle>
          <CardDescription>Real-time social media sentiment scores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Symbol", "Score", "Trend", "Mentions (24h)", "Vol Change"].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sentiments.map((s) => (
                  <tr key={s.symbol} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono font-semibold">{s.symbol}</td>
                    <td className="py-2.5 pr-4">
                      <div className="flex items-center gap-2">
                        <Progress value={s.score * 100} className="h-1.5 w-16" />
                        <span className="font-mono text-xs">{(s.score * 100).toFixed(0)}%</span>
                      </div>
                    </td>
                    <td className="py-2.5 pr-4">
                      <Badge
                        variant={s.trend === "up" ? "default" : s.trend === "down" ? "destructive" : "secondary"}
                        className="font-mono text-xs"
                      >
                        {s.trend}
                      </Badge>
                    </td>
                    <td className="py-2.5 pr-4 font-mono">{s.mentions.toLocaleString()}</td>
                    <td className={`py-2.5 font-mono ${s.volume_change.startsWith("+") ? "text-positive" : "text-negative"}`}>
                      {s.volume_change}
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
