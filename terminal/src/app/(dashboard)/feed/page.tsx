import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function FeedPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Live Feed"
        description="Real-time tick data, order recording, and market data stream"
        
      />

      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Ticks/sec</div>
            <div className="mt-1 font-mono text-2xl font-bold">12,847</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Symbols</div>
            <div className="mt-1 font-mono text-2xl font-bold">3,241</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Latency</div>
            <div className="mt-1 font-mono text-2xl font-bold">3ms</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Status</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-2xl font-bold">Live</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Tick Stream</CardTitle>
              <CardDescription>Real-time trade and quote data</CardDescription>
            </div>
            <Badge variant="default" className="font-mono text-xs">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
              Streaming
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Time", "Symbol", "Price", "Size", "Exchange", "Type"].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ticks.map((t, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">{t.time}</td>
                    <td className="py-2 pr-4 font-mono font-semibold">{t.symbol}</td>
                    <td className="py-2 pr-4 font-mono">{t.price}</td>
                    <td className="py-2 pr-4 font-mono text-muted-foreground">{t.size}</td>
                    <td className="py-2 pr-4 font-mono text-xs text-muted-foreground">{t.exchange}</td>
                    <td className="py-2 pr-4">
                      <Badge variant="outline" className="font-mono text-xs">{t.type}</Badge>
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
