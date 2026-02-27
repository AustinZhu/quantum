import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  { name: "returns_1d", group: "Price", dtype: "float64", freshness: "1m ago", source: "TimescaleDB", used_by: 4 },
  { name: "returns_5d", group: "Price", dtype: "float64", freshness: "1m ago", source: "TimescaleDB", used_by: 3 },
  { name: "volatility_20d", group: "Risk", dtype: "float64", freshness: "5m ago", source: "TimescaleDB", used_by: 5 },
  { name: "volume_zscore", group: "Volume", dtype: "float64", freshness: "1m ago", source: "TimescaleDB", used_by: 2 },
  { name: "sentiment_score", group: "NLP", dtype: "float32", freshness: "15m ago", source: "Datafeed", used_by: 2 },
  { name: "sector_momentum", group: "Factor", dtype: "float64", freshness: "1h ago", source: "Internal", used_by: 3 },
  { name: "orderbook_imbalance", group: "Microstructure", dtype: "float64", freshness: "100ms", source: "Datafeed", used_by: 1 },
  { name: "regime_state", group: "Macro", dtype: "int8", freshness: "1d ago", source: "Internal", used_by: 2 },
];

export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Feature Store"
        description="Centralized feature repository for ML models and strategies"
        
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Total Features</div>
            <div className="mt-1 font-mono text-3xl font-bold">{features.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Feature Groups</div>
            <div className="mt-1 font-mono text-3xl font-bold">{new Set(features.map(f => f.group)).size}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Avg Freshness</div>
            <div className="mt-1 font-mono text-3xl font-bold">&lt;5m</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Feature Catalog</CardTitle>
          <CardDescription>Available features with metadata and lineage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Feature", "Group", "Type", "Freshness", "Source", "Used By"].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono font-medium">{f.name}</td>
                    <td className="py-2.5 pr-4">
                      <Badge variant="outline" className="text-xs">{f.group}</Badge>
                    </td>
                    <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{f.dtype}</td>
                    <td className="py-2.5 pr-4 font-mono text-xs">{f.freshness}</td>
                    <td className="py-2.5 pr-4 text-muted-foreground">{f.source}</td>
                    <td className="py-2.5 pr-4 font-mono text-center">{f.used_by} models</td>
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
