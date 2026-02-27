import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch } from "lucide-react";

const models = [
  { name: "factor_momentum", version: "v4.0.1", type: "XGBoost", stage: "Production", updated: "2h ago", metrics: "AUC 0.82" },
  { name: "tsmom_signal", version: "v2.3.0", type: "LSTM", stage: "Production", updated: "1d ago", metrics: "Sharpe 1.94" },
  { name: "pairs_coint", version: "v3.1.2", type: "Statistical", stage: "Production", updated: "3d ago", metrics: "p < 0.01" },
  { name: "regime_detect", version: "v1.5.0", type: "HMM", stage: "Staging", updated: "5d ago", metrics: "Acc 0.78" },
  { name: "sentiment_nlp", version: "v2.0.0-rc1", type: "Transformer", stage: "Staging", updated: "1w ago", metrics: "F1 0.71" },
];

export default async function ModelsPage() {
  const t = await getTranslations("pages.models");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">{t("modelCatalog")}</CardTitle>
              <CardDescription>{t("modelCatalogDesc")}</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <GitBranch className="mr-2 h-4 w-4" />
              {t("compare")}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {[t("colModel"), t("colVersion"), t("colType"), t("colEnv"), t("colMetric"), t("colUpdated")].map((h) => (
                    <th key={h} className="pb-2 pr-4 text-left font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.name} className="border-b border-border/50 last:border-0">
                    <td className="py-2.5 pr-4 font-mono font-medium">{m.name}</td>
                    <td className="py-2.5 pr-4">
                      <Badge variant="outline" className="font-mono text-xs">{m.version}</Badge>
                    </td>
                    <td className="py-2.5 pr-4 text-muted-foreground">{m.type}</td>
                    <td className="py-2.5 pr-4">
                      <Badge variant={m.stage === "Production" ? "default" : "secondary"} className="font-mono text-xs">
                        {m.stage === "Production" ? t("envProduction") : t("envStaging")}
                      </Badge>
                    </td>
                    <td className="py-2.5 pr-4 font-mono text-xs">{m.metrics}</td>
                    <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{m.updated}</td>
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
