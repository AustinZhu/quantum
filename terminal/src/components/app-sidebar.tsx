"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  CandlestickChart,
  LayoutDashboard,
  ScanSearch,
  Brain,
  FlaskConical,
  Box,
  Layers,
  Sparkles,
  Radio,
  Newspaper,
  BarChart3,
  Users,
  Bell,
  ArrowUpDown,
  Briefcase,
  Shield,
  Gauge,
  Calculator,
  HeartPulse,
  Settings,
  TrendingUp,
  FileText,
  MessageCircle,
  Menu,
  X,
  Hexagon,
  ChevronLeft,
  PanelLeft,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { SessionUser } from "@/lib/session";

/* ── Navigation structure ── */

type NavItem = { href: string; labelKey: string; icon: LucideIcon; badge?: string };
type NavGroup = { labelKey: string; items: NavItem[] };

const navigation: NavGroup[] = [
  {
    labelKey: "Overview",
    items: [
      { href: "/dashboard", labelKey: "Dashboard", icon: LayoutDashboard },
      { href: "/chart", labelKey: "Chart", icon: CandlestickChart },
    ],
  },
  {
    labelKey: "Research",
    items: [
      { href: "/screening", labelKey: "Screening", icon: ScanSearch },
      { href: "/strategies", labelKey: "Strategies", icon: Brain },
      { href: "/backtesting", labelKey: "Backtesting", icon: FlaskConical },
      { href: "/models", labelKey: "Model Registry", icon: Box },
      { href: "/features", labelKey: "Feature Store", icon: Layers },
      { href: "/research", labelKey: "AI Research", icon: Sparkles },
    ],
  },
  {
    labelKey: "Market Data",
    items: [
      { href: "/feed", labelKey: "Live Feed", icon: Radio, badge: "Live" },
      { href: "/news", labelKey: "News", icon: Newspaper },
      { href: "/fundamentals", labelKey: "Fundamentals", icon: BarChart3 },
      { href: "/social", labelKey: "Social Sentiment", icon: Users },
      { href: "/alerts", labelKey: "Alerts", icon: Bell },
    ],
  },
  {
    labelKey: "Execution",
    items: [
      { href: "/orders", labelKey: "Orders", icon: ArrowUpDown },
      { href: "/portfolio", labelKey: "Portfolio", icon: Briefcase },
      { href: "/rules", labelKey: "Risk Rules", icon: Shield },
      { href: "/exposure", labelKey: "Exposure", icon: Gauge },
      { href: "/cost-analysis", labelKey: "Cost Analysis", icon: Calculator },
    ],
  },
  {
    labelKey: "Retrospective",
    items: [
      { href: "/analytics", labelKey: "Analytics", icon: TrendingUp },
      { href: "/reports", labelKey: "Reports", icon: FileText },
      { href: "/feedback", labelKey: "Feedback", icon: MessageCircle },
    ],
  },
  {
    labelKey: "System",
    items: [
      { href: "/health", labelKey: "Health", icon: HeartPulse },
      { href: "/settings", labelKey: "Settings", icon: Settings },
    ],
  },
];

/* ── User avatar with initials fallback ── */

function UserAvatar({ user, size = "sm" }: { user: SessionUser; size?: "sm" | "xs" }) {
  const initials = (user.displayName ?? user.name ?? "?")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const dim = size === "xs" ? "h-6 w-6 text-[9px]" : "h-7 w-7 text-[10px]";

  if (user.avatar) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={user.avatar}
        alt={user.displayName ?? user.name}
        className={cn("rounded-full object-cover", dim)}
      />
    );
  }

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary",
        dim
      )}
    >
      {initials}
    </span>
  );
}

/* ── User profile footer ── */

function UserProfile({ user, isCollapsed }: { user: SessionUser; isCollapsed: boolean }) {
  const t = useTranslations("common");
  const displayName = user.displayName ?? user.name ?? "User";

  const avatar = <UserAvatar user={user} size={isCollapsed ? "xs" : "sm"} />;

  const trigger = isCollapsed ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md hover:bg-accent"
          aria-label={displayName}
        >
          {avatar}
        </button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={10}>
        <p className="font-medium">{displayName}</p>
        {user.email && <p className="text-xs text-muted-foreground">{user.email}</p>}
      </TooltipContent>
    </Tooltip>
  ) : (
    <button
      className="flex w-full min-w-0 cursor-pointer items-center gap-2 rounded-md px-1 py-0.5 text-left hover:bg-accent"
      aria-label={displayName}
    >
      {avatar}
      <div className="min-w-0 flex flex-1 items-center gap-2">
        <p className="truncate text-xs font-medium leading-tight">{displayName}</p>
      </div>
    </button>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align={isCollapsed ? "center" : "start"}
        sideOffset={8}
        className="w-56"
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-0.5">
            <p className="text-sm font-medium">{displayName}</p>
            {user.email && (
              <p className="font-mono text-xs text-muted-foreground">{user.email}</p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/settings" as never}>
            <Settings className="mr-2 h-4 w-4" />
            {t("settings")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/api/auth/logout" className="text-destructive focus:text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            {t("signOut")}
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* ── Sidebar content (shared between desktop & mobile) ── */

function SidebarContent({
  user,
  onNavigate,
  isCollapsed = false,
  onToggle,
}: {
  user?: SessionUser | null;
  onNavigate?: () => void;
  isCollapsed?: boolean;
  onToggle?: () => void;
}) {
  const pathname = usePathname();
  const tBrand = useTranslations("brand");
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      {/* Brand */}
      <div
        className={cn(
          "flex shrink-0 items-center gap-2.5 px-5 py-4",
          isCollapsed && "justify-center px-0"
        )}
      >
        <Hexagon className="h-6 w-6 shrink-0 text-primary" strokeWidth={2.2} />
        {!isCollapsed && (
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-bold tracking-tight">{tBrand("name")}</span>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              {tBrand("subtitle")}
            </span>
          </div>
        )}
        {onToggle && (
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={onToggle}
            className={cn("text-muted-foreground/50 hover:text-foreground", isCollapsed && "hidden")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      <Separator />

      {/* Navigation */}
      <div className="relative h-0 flex-1">
        <ScrollArea className="h-full">
          <nav className={cn("space-y-5 px-3 pt-2 pb-1", isCollapsed && "px-2")}>
            {navigation.map((group) => (
              <div key={group.labelKey}>
                {!isCollapsed && (
                  <div className="mb-1 flex items-center gap-2 px-2">
                    <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                      {tNav(`groups.${group.labelKey}`)}
                    </span>
                  </div>
                )}
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    const link = (
                      <Link
                        key={item.href}
                        href={item.href as never}
                        onClick={onNavigate}
                        className={cn(
                          "group flex items-center rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
                          isCollapsed ? "justify-center px-0" : "gap-2.5",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0",
                            isActive ? "text-primary" : "text-muted-foreground/70"
                          )}
                          strokeWidth={isActive ? 2.2 : 1.8}
                        />
                        {!isCollapsed && (
                          <>
                            <span className="truncate">{tNav(`items.${item.labelKey}`)}</span>
                            {item.badge && (
                              <Badge
                                variant="default"
                                className="ml-auto h-4 rounded px-1 font-mono text-[9px] font-normal leading-none"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </>
                        )}
                      </Link>
                    );

                    if (isCollapsed) {
                      return (
                        <Tooltip key={item.href}>
                          <TooltipTrigger asChild>{link}</TooltipTrigger>
                          <TooltipContent side="right" sideOffset={10}>
                            {tNav(`items.${item.labelKey}`)}
                          </TooltipContent>
                        </Tooltip>
                      );
                    }

                    return link;
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-sidebar via-sidebar/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-sidebar via-sidebar/70 to-transparent" />
      </div>

      <div className="mt-auto shrink-0">
        <Separator />

        {/* Footer */}
        <div
          className={cn(
            "flex shrink-0 items-center gap-1 px-3 py-2",
            isCollapsed
              ? "justify-center px-0"
              : "justify-between"
          )}
        >
          {user ? (
            <div className={cn("min-w-0", isCollapsed ? "flex justify-center" : "flex-1")}>
              <UserProfile user={user} isCollapsed={isCollapsed} />
            </div>
          ) : (
            !isCollapsed && (
              <div className="flex items-center gap-2 text-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{tCommon("online")}</span>
              </div>
            )
          )}
          {!isCollapsed && (
            <div className="flex items-center gap-1">
              <LocaleToggle />
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main export ── */

export function AppSidebar({ user }: { user?: SessionUser | null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const tCommon = useTranslations("common");

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex h-full min-h-0 shrink-0 flex-col overflow-hidden border-r border-sidebar-border bg-sidebar transition-all duration-300 ease-in-out",
          isCollapsed ? "w-[64px]" : "w-[260px]"
        )}
      >
        {isCollapsed ? (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex h-14 shrink-0 items-center justify-center">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setIsCollapsed(false)}
                className="text-muted-foreground/50 hover:text-foreground"
              >
                <PanelLeft className="h-5 w-5" />
              </Button>
            </div>
            <Separator />
            <SidebarContent user={user} isCollapsed={true} />
          </div>
        ) : (
          <SidebarContent user={user} onToggle={() => setIsCollapsed(true)} />
        )}
      </aside>

      {/* Mobile header bar */}
      <header className="z-40 flex h-14 shrink-0 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur lg:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[260px] p-0">
            <SheetTitle className="sr-only">{tCommon("navigation")}</SheetTitle>
            <SidebarContent user={user} onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Hexagon className="h-5 w-5 text-primary" strokeWidth={2.2} />
          <span className="text-sm font-bold tracking-tight">Quantum</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          {user && <UserProfile user={user} isCollapsed={false} />}
        </div>
      </header>
    </>
  );
}
