import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function SettingsPage() {
  const t = await getTranslations("pages.settings");
  const tc = await getTranslations("common");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">{t("tabGeneral")}</TabsTrigger>
          <TabsTrigger value="trading">{t("tabTrading")}</TabsTrigger>
          <TabsTrigger value="notifications">{t("tabNotifications")}</TabsTrigger>
          <TabsTrigger value="api">{t("tabApi")}</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("systemParams")}</CardTitle>
              <CardDescription>{t("systemParamsDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("bffTimeout")}</label>
                  <Input type="number" defaultValue="10000" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("maxConcurrent")}</label>
                  <Input type="number" defaultValue="50" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("dataRetention")}</label>
                  <Input type="number" defaultValue="365" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("logLevel")}</label>
                  <Input defaultValue="info" className="font-mono" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{t("debugMode")}</div>
                    <div className="text-xs text-muted-foreground">{t("debugModeDesc")}</div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{t("autoRefresh")}</div>
                    <div className="text-xs text-muted-foreground">{t("autoRefreshDesc")}</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{t("maintenanceMode")}</div>
                    <div className="text-xs text-muted-foreground">{t("maintenanceModeDesc")}</div>
                  </div>
                  <Switch />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>{tc("saveChanges")}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trading" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("tradingParams")}</CardTitle>
              <CardDescription>{t("tradingParamsDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("defaultLookback")}</label>
                  <Input type="number" defaultValue="252" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("volScaling")}</label>
                  <Input type="number" defaultValue="0.15" step="0.01" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("maxPosition")}</label>
                  <Input type="number" defaultValue="500000" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("stopLoss")}</label>
                  <Input type="number" defaultValue="2.0" step="0.1" className="font-mono" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>{tc("saveChanges")}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardContent className="flex h-[200px] items-center justify-center pt-6">
              <p className="text-muted-foreground">{t("notificationsPlaceholder")}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="mt-4">
          <Card>
            <CardContent className="flex h-[200px] items-center justify-center pt-6">
              <p className="text-muted-foreground">{t("apiPlaceholder")}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
