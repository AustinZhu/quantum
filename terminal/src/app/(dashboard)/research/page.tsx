import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Clock } from "lucide-react";

const researches = [
  {
    title: "NVDA Q4 Earnings Impact Analysis",
    type: "Earnings",
    status: "Completed",
    summary: "Strong beat on data center revenue. AI capex guidance raised. Positive momentum signal confirmed.",
    date: "2h ago",
    confidence: "High",
  },
  {
    title: "Fed Rate Decision Market Regime",
    type: "Macro",
    status: "Completed",
    summary: "Hawkish hold scenario. Bond yields likely higher. Equity factor rotation from growth to value expected.",
    date: "6h ago",
    confidence: "Medium",
  },
  {
    title: "Semiconductor Sector Momentum Scan",
    type: "Sector",
    status: "Running",
    summary: "Analyzing cross-sectional momentum signals across SOX components...",
    date: "12m ago",
    confidence: "—",
  },
  {
    title: "TSLA Options Flow Anomaly",
    type: "Flow",
    status: "Completed",
    summary: "Unusual call volume detected at 260 strike. Possible institutional positioning ahead of delivery numbers.",
    date: "1d ago",
    confidence: "Medium",
  },
];

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Research"
        description="Agentic research, summarization, and market analysis"
        
      />

      <div className="flex gap-3">
        <Button>
          <Sparkles className="mr-2 h-4 w-4" />
          New Research
        </Button>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Templates
        </Button>
      </div>

      <div className="space-y-4">
        {researches.map((r, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">{r.title}</CardTitle>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{r.type}</Badge>
                    <Badge variant={r.status === "Completed" ? "default" : "secondary"} className="font-mono text-xs">
                      {r.status === "Running" && <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-current" />}
                      {r.status}
                    </Badge>
                    {r.confidence !== "—" && (
                      <Badge variant="outline" className="text-xs">
                        Confidence: {r.confidence}
                      </Badge>
                    )}
                  </div>
                </div>
                <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {r.date}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{r.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
