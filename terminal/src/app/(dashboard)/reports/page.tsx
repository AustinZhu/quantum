import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const reports = [
  { name: "Daily Trading Report", date: "2026-02-27", type: "Daily", trades: 47, pnl: "+$12,840", status: "Ready" },
  { name: "Weekly Performance Summary", date: "2026-02-21", type: "Weekly", trades: 284, pnl: "+$42,731", status: "Ready" },
  { name: "Monthly Risk Report", date: "2026-01-31", type: "Monthly", trades: 1204, pnl: "+$128,420", status: "Ready" },
  { name: "Strategy Attribution Q4", date: "2025-12-31", type: "Quarterly", trades: 3841, pnl: "+$342,180", status: "Ready" },
  { name: "Annual Performance Review", date: "2025-12-31", type: "Annual", trades: 15240, pnl: "+$891,204", status: "Ready" },
];

export default async function ReportsPage() {
  const t = await getTranslations("pages.reports");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">{t("reportLibrary")}</CardTitle>
              <CardDescription>{t("reportLibraryDesc")}</CardDescription>
            </div>
            <Button size="sm">
              <FileText className="mr-2 h-4 w-4" />
              {t("generateNew")}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {[t("colReport"), t("colDate"), t("colTrades"), t("colPnl"), ""].map((h, i) => (
                    <th key={i} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reports.map((r) => (
                  <tr key={r.name} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-medium">{r.name}</td>
                    <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{r.date}</td>
                    <td className="py-2.5 pr-4 font-mono">{r.trades.toLocaleString()}</td>
                    <td className="py-2.5 pr-4 font-mono text-positive">{r.pnl}</td>
                    <td className="py-2.5 pr-4">
                      <Button variant="ghost" size="icon-sm">
                        <Download className="h-4 w-4" />
                      </Button>
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
