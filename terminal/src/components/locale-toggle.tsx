"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "@/lib/locale";
import { Button } from "@/components/ui/button";

export function LocaleToggle() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const nextLocale = locale === "en" ? "zh" : "en";
  const label = locale === "en" ? "中文" : "EN";

  function handleToggle() {
    startTransition(async () => {
      await setLocale(nextLocale);
      router.refresh();
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      onClick={handleToggle}
      disabled={isPending}
      className="font-mono text-[11px] font-medium text-muted-foreground/70 hover:text-foreground w-7 h-7"
      title={nextLocale === "zh" ? "切换至中文" : "Switch to English"}
    >
      {label}
    </Button>
  );
}
