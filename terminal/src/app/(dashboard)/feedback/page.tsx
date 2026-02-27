import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, MessageCircle, Clock } from "lucide-react";

const feedbackItems = [
  { id: "fb_041", signal: "CSMOM Buy AMZN", outcome: "Profitable", pnl: "+2.4%", rating: "positive", note: "Good entry timing, held through volatility", time: "2h ago" },
  { id: "fb_040", signal: "TSMOM Sell META", outcome: "Profitable", pnl: "+1.1%", rating: "positive", note: "Clean exit at resistance level", time: "5h ago" },
  { id: "fb_039", signal: "Risk Halt TSLA", outcome: "Correct", pnl: "Avoided -3.2%", rating: "positive", note: "Risk rule prevented loss on gap down", time: "1d ago" },
  { id: "fb_038", signal: "Macro Long SPY", outcome: "Loss", pnl: "-1.8%", rating: "negative", note: "Regime detection was late, should have shorter lookback", time: "2d ago" },
  { id: "fb_037", signal: "Stat Arb AAPL/MSFT", outcome: "Profitable", pnl: "+0.6%", rating: "positive", note: "Pair converged as expected", time: "3d ago" },
  { id: "fb_036", signal: "CSMOM Sell NVDA", outcome: "Missed opportunity", pnl: "Missed +5.2%", rating: "negative", note: "Signal was correct but timing was early", time: "4d ago" },
];

export default async function FeedbackPage() {
  const t = await getTranslations("pages.feedback");

  return (
    <div className="space-y-6">
      <PageHeader title={t("title")} description={t("description")} />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("feedbackItems")}</div>
            <div className="mt-1 font-mono text-3xl font-bold">{feedbackItems.length}</div>
            <div className="mt-1 text-xs text-muted-foreground">{t("last7Days")}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("positiveRate")}</div>
            <div className="mt-1 font-mono text-3xl font-bold text-positive">67%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{t("pendingReview")}</div>
            <div className="mt-1 font-mono text-3xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">{t("feedbackHistory")}</CardTitle>
              <CardDescription>{t("feedbackHistoryDesc")}</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              {t("newFeedback")}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {feedbackItems.map((fb) => (
              <div key={fb.id} className="rounded-md border border-border/50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {fb.rating === "positive" ? (
                        <ThumbsUp className="h-4 w-4 text-positive" />
                      ) : (
                        <ThumbsDown className="h-4 w-4 text-negative" />
                      )}
                      <span className="font-medium">{fb.signal}</span>
                      <Badge variant={fb.outcome === "Loss" || fb.outcome === "Missed opportunity" ? "destructive" : "default"} className="font-mono text-xs">
                        {fb.outcome}
                      </Badge>
                      <span className={`font-mono text-sm ${fb.pnl.includes("+") ? "text-positive" : fb.pnl.includes("-") ? "text-negative" : "text-muted-foreground"}`}>
                        {fb.pnl}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{fb.note}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />{fb.time}
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
