import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const rules = [
  { id: "risk_notional", label: "Notional Limit", version: "v1.2", enabled: true, threshold: "$500K", description: "Max notional per order" },
  { id: "risk_quantity", label: "Quantity Limit", version: "v1.0", enabled: true, threshold: "1000 shares", description: "Max quantity per symbol" },
  { id: "risk_exposure", label: "Gross Exposure", version: "v2.1", enabled: true, threshold: "90%", description: "Max portfolio gross exposure" },
  { id: "risk_drawdown", label: "Drawdown Halt", version: "v1.3", enabled: false, threshold: "-5%", description: "Halt trading on daily drawdown" },
  { id: "risk_concentration", label: "Concentration", version: "v1.0", enabled: true, threshold: "15%", description: "Max allocation per position" },
];

export default function RulesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Risk Rules"
        description="Pre-trade and post-trade risk management rules"
        
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Rule Configuration</CardTitle>
          <CardDescription>Manage risk rules for the decision expert system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {["Rule", "Description", "Version", "Threshold", "Enabled"].map((h) => (
                    <th
                      key={h}
                      className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider last:text-right last:pr-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rules.map((rule) => (
                  <tr key={rule.id} className="border-b border-border/50 last:border-0">
                    <td className="py-3 pr-4">
                      <div className="font-medium">{rule.label}</div>
                      <div className="font-mono text-xs text-muted-foreground">{rule.id}</div>
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">{rule.description}</td>
                    <td className="py-3 pr-4">
                      <Badge variant="outline" className="font-mono text-xs">{rule.version}</Badge>
                    </td>
                    <td className="py-3 pr-4 font-mono">{rule.threshold}</td>
                    <td className="py-3 text-right">
                      <Switch defaultChecked={rule.enabled} />
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
