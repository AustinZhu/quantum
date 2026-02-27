import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const data = [
  { symbol: "AAPL", pe: "29.4", pb: "48.2", divYield: "0.55%", marketCap: "$3.01T", revenue: "$394B", epsGrowth: "+8.2%" },
  { symbol: "NVDA", pe: "65.8", pb: "52.1", divYield: "0.02%", marketCap: "$2.18T", revenue: "$113B", epsGrowth: "+128%" },
  { symbol: "MSFT", pe: "35.2", pb: "12.8", divYield: "0.72%", marketCap: "$3.12T", revenue: "$245B", epsGrowth: "+18%" },
  { symbol: "AMZN", pe: "58.1", pb: "8.4", divYield: "—", marketCap: "$1.92T", revenue: "$638B", epsGrowth: "+55%" },
  { symbol: "GOOGL", pe: "24.3", pb: "6.9", divYield: "0.45%", marketCap: "$2.15T", revenue: "$350B", epsGrowth: "+32%" },
  { symbol: "META", pe: "23.8", pb: "8.7", divYield: "0.38%", marketCap: "$1.31T", revenue: "$164B", epsGrowth: "+22%" },
  { symbol: "JPM", pe: "12.1", pb: "1.9", divYield: "2.15%", marketCap: "$578B", revenue: "$162B", epsGrowth: "+12%" },
  { symbol: "TSLA", pe: "71.2", pb: "14.3", divYield: "—", marketCap: "$782B", revenue: "$97B", epsGrowth: "-8%" },
];

export default function FundamentalsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Fundamentals"
        description="Financial statements, valuation metrics, and company data"
        
      />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Financial Overview</CardTitle>
              <CardDescription>Key valuation and growth metrics</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by symbol..." className="pl-10" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Symbol", "P/E", "P/B", "Div Yield", "Market Cap", "Revenue", "EPS Growth"].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d.symbol} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono font-semibold">{d.symbol}</td>
                    <td className="py-2.5 pr-4 font-mono">{d.pe}</td>
                    <td className="py-2.5 pr-4 font-mono">{d.pb}</td>
                    <td className="py-2.5 pr-4 font-mono">{d.divYield}</td>
                    <td className="py-2.5 pr-4 font-mono">{d.marketCap}</td>
                    <td className="py-2.5 pr-4 font-mono">{d.revenue}</td>
                    <td className={`py-2.5 pr-4 font-mono ${d.epsGrowth.startsWith("+") ? "text-positive" : "text-negative"}`}>
                      {d.epsGrowth}
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
