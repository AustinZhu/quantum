import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity, Clock, Cpu, Database, HardDrive, Server, ExternalLink,
  Shield, Layers, BarChart3, LineChart,
} from "lucide-react";

const services = [
  { name: "Algorand", type: "API", status: "healthy", uptime: "99.98%", latency: "12ms", icon: Cpu },
  { name: "Datafeed", type: "API", status: "healthy", uptime: "99.99%", latency: "3ms", icon: Activity },
  { name: "Doordash", type: "API", status: "degraded", uptime: "99.82%", latency: "45ms", icon: Server },
  { name: "TimescaleDB", type: "Database", status: "healthy", uptime: "99.99%", latency: "5ms", icon: Database, url: "http://localhost:5050" },
  { name: "DuckDB", type: "Database", status: "healthy", uptime: "99.99%", latency: "1ms", icon: Database, url: "http://localhost:4213" },
  { name: "Redis", type: "Cache", status: "healthy", uptime: "100%", latency: "1ms", icon: Database, url: "http://localhost:5540" },
  { name: "Redpanda", type: "Streaming", status: "healthy", uptime: "99.97%", latency: "2ms", icon: HardDrive, url: "http://localhost:8089" },
  { name: "Minio", type: "Storage", status: "healthy", uptime: "99.99%", latency: "6ms", icon: HardDrive, url: "http://localhost:9001" },
  { name: "Consul", type: "Discovery", status: "healthy", uptime: "99.99%", latency: "2ms", icon: Shield, url: "http://localhost:8500" },
  { name: "Vault", type: "Security", status: "healthy", uptime: "99.99%", latency: "3ms", icon: Shield, url: "http://localhost:8200" },
  { name: "Feast", type: "Feature Store", status: "healthy", uptime: "99.99%", latency: "8ms", icon: Layers, url: "http://localhost:6567" },
  { name: "Airflow", type: "Orchestration", status: "healthy", uptime: "99.95%", latency: "25ms", icon: Clock, url: "http://localhost:8087" },
  { name: "MLflow", type: "Experimentation", status: "healthy", uptime: "99.99%", latency: "5ms", icon: Cpu, url: "http://localhost:5001" },
  { name: "Casdoor", type: "Identity", status: "healthy", uptime: "99.99%", latency: "10ms", icon: Shield, url: "http://localhost:8000" },
  { name: "Temporal", type: "Workflow Engine", status: "healthy", uptime: "99.99%", latency: "4ms", icon: Clock, url: "http://localhost:8088" },
  { name: "Prometheus", type: "Metrics", status: "healthy", uptime: "99.99%", latency: "2ms", icon: BarChart3, url: "http://localhost:9090" },
  { name: "Loki", type: "Logging", status: "healthy", uptime: "99.99%", latency: "1ms", icon: HardDrive },
  { name: "Tempo", type: "Tracing", status: "healthy", uptime: "99.99%", latency: "1ms", icon: Activity },
  { name: "Grafana", type: "Visualization", status: "healthy", uptime: "99.99%", latency: "5ms", icon: LineChart, url: "http://localhost:3001" },
];

export default async function HealthPage() {
  const t = await getTranslations("pages.health");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("totalServices")}</div>
            <div className="mt-1 font-mono text-3xl font-bold">{services.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("healthy")}</div>
            <div className="mt-1 font-mono text-3xl font-bold text-positive">
              {services.filter((s) => s.status === "healthy").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("degraded")}</div>
            <div className="mt-1 font-mono text-3xl font-bold text-warning">
              {services.filter((s) => s.status === "degraded").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <Card key={svc.name} className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{svc.name}</CardTitle>
                      <CardDescription className="text-xs">{svc.type}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {svc.url && (
                      <Button variant="ghost" size="icon-xs" asChild className="h-6 w-6">
                        <a href={svc.url} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-3 w-3" />
                          <span className="sr-only">{t("openUi")}</span>
                        </a>
                      </Button>
                    )}
                    <Badge
                      variant={svc.status === "healthy" ? "outline" : "destructive"}
                      className={
                        svc.status === "healthy"
                          ? "h-5 border-[var(--positive)]/40 bg-[var(--positive)]/10 px-1.5 font-mono text-[10px] text-[var(--positive)]"
                          : "h-5 px-1.5 font-mono text-[10px]"
                      }
                    >
                      {svc.status === "healthy" ? t("statusHealthy") : t("statusDegraded")}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-auto space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t("uptime")}</span>
                  <span className="font-mono">{svc.uptime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t("latency")}</span>
                  <span className="font-mono">{svc.latency}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
