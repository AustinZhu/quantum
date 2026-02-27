import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Clock, Mail, MessageSquare, Smartphone } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const recentAlerts = [
  { type: "Risk", severity: "warning", message: "Equity exposure at 87% — approaching 90% limit", time: "2m ago", channel: "Lark" },
  { type: "Signal", severity: "info", message: "CSMOM buy signal triggered for AMZN (confidence: 0.84)", time: "8m ago", channel: "Push" },
  { type: "System", severity: "error", message: "Market data lag spike: 340ms on NASDAQ feed", time: "14m ago", channel: "Lark" },
  { type: "Model", severity: "info", message: "Backtest completed: TSMOM v2.3 (Sharpe 1.94)", time: "23m ago", channel: "Email" },
  { type: "Risk", severity: "warning", message: "Risk rule triggered: notional limit on TSLA position", time: "31m ago", channel: "Lark" },
  { type: "Signal", severity: "info", message: "TSMOM sell signal for META (confidence: 0.72)", time: "45m ago", channel: "Push" },
  { type: "System", severity: "info", message: "Model registry updated: factor_momentum v4", time: "1h ago", channel: "Email" },
  { type: "Risk", severity: "error", message: "Drawdown alert: Macro Momentum strategy -5.2% daily", time: "2h ago", channel: "Lark" },
];

const channels = [
  { name: "Lark Webhook", icon: MessageSquare, enabled: true, alerts: 142 },
  { name: "Email", icon: Mail, enabled: true, alerts: 38 },
  { name: "Push Notifications", icon: Smartphone, enabled: true, alerts: 87 },
];

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Alerts"
        description="Alert configuration and notification channels"
        
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((ch) => {
          const Icon = ch.icon;
          return (
            <Card key={ch.name}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">{ch.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{ch.alerts} alerts (24h)</div>
                    </div>
                  </div>
                  <Switch defaultChecked={ch.enabled} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Alert History</CardTitle>
              <CardDescription>Recent alerts across all channels</CardDescription>
            </div>
            <Badge variant="outline" className="font-mono text-xs">
              <Bell className="mr-1 h-3 w-3" />
              {recentAlerts.length} recent
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAlerts.map((alert, i) => (
              <div key={i} className="flex items-start gap-3 rounded-md border border-border/50 p-3">
                <span
                  className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
                    alert.severity === "error"
                      ? "bg-destructive"
                      : alert.severity === "warning"
                        ? "bg-warning"
                        : "bg-primary"
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{alert.type}</Badge>
                    <Badge variant="secondary" className="font-mono text-xs">{alert.channel}</Badge>
                  </div>
                  <p className="mt-1 text-sm">{alert.message}</p>
                  <span className="mt-1 flex items-center gap-1 font-mono text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />{alert.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
