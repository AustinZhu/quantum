import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="System configuration and parameter tuning"
        
      />

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="trading">Trading</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">System Parameters</CardTitle>
              <CardDescription>Core system configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">BFF Upstream Timeout (ms)</label>
                  <Input type="number" defaultValue="10000" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Max Concurrent Requests</label>
                  <Input type="number" defaultValue="50" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Data Retention (days)</label>
                  <Input type="number" defaultValue="365" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Log Level</label>
                  <Input defaultValue="info" className="font-mono" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Enable Debug Mode</div>
                    <div className="text-xs text-muted-foreground">Show detailed logging and diagnostics</div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Auto-refresh Dashboard</div>
                    <div className="text-xs text-muted-foreground">Automatically refresh data every 5 seconds</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Maintenance Mode</div>
                    <div className="text-xs text-muted-foreground">Halt all trading and show maintenance banner</div>
                  </div>
                  <Switch />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trading" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Trading Parameters</CardTitle>
              <CardDescription>Strategy and execution parameter tuning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Default Lookback (days)</label>
                  <Input type="number" defaultValue="252" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Volatility Scaling Factor</label>
                  <Input type="number" defaultValue="0.15" step="0.01" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Max Position Size ($)</label>
                  <Input type="number" defaultValue="500000" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Stop Loss (%)</label>
                  <Input type="number" defaultValue="2.0" step="0.1" className="font-mono" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardContent className="flex h-[200px] items-center justify-center pt-6">
              <p className="text-muted-foreground">Notification preferences and channel configuration</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="mt-4">
          <Card>
            <CardContent className="flex h-[200px] items-center justify-center pt-6">
              <p className="text-muted-foreground">API key management for external services</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
