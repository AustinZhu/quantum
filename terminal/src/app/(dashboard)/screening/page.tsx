import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const screenResults = [
  { symbol: "NVDA", name: "NVIDIA Corp", sector: "Technology", momentum: "+18.4%", volume: "52.3M", signal: "Strong Buy" },
  { symbol: "AAPL", name: "Apple Inc", sector: "Technology", momentum: "+5.2%", volume: "48.1M", signal: "Buy" },
  { symbol: "AMZN", name: "Amazon.com", sector: "Consumer", momentum: "+9.7%", volume: "35.6M", signal: "Buy" },
  { symbol: "TSLA", name: "Tesla Inc", sector: "Auto", momentum: "-3.1%", volume: "72.8M", signal: "Neutral" },
  { symbol: "JPM", name: "JPMorgan Chase", sector: "Financials", momentum: "+7.8%", volume: "12.4M", signal: "Buy" },
  { symbol: "META", name: "Meta Platforms", sector: "Technology", momentum: "+11.3%", volume: "22.7M", signal: "Strong Buy" },
];

export default function ScreeningPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Symbol Screening"
        description="Screen and analyze symbols using time series, orderbook, and factor data"
        
      />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Screener</CardTitle>
              <CardDescription>Filter by momentum, volume, sector, and custom factors</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search symbols, sectors, or factors..." className="pl-10" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Symbol", "Name", "Sector", "30D Momentum", "Avg Volume", "Signal"].map((h) => (
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
                        {row.signal}
                      </Badge>
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
