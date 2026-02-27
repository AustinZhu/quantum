"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  GitCompareArrows,
  Menu,
  X,
  Hexagon,
  ChevronLeft,
  PanelLeft,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/* ── Navigation structure ── */

type NavItem = { href: string; label: string; icon: LucideIcon; badge?: string };
type NavGroup = { label: string; tag?: string; items: NavItem[] };

const navigation: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/chart", label: "Chart", icon: CandlestickChart },
    ],
  },
  {
    label: "Research",
    items: [
      { href: "/screening", label: "Screening", icon: ScanSearch },
      { href: "/strategies", label: "Strategies", icon: Brain },
      { href: "/backtesting", label: "Backtesting", icon: FlaskConical },
      { href: "/models", label: "Model Registry", icon: Box },
      { href: "/features", label: "Feature Store", icon: Layers },
      { href: "/research", label: "AI Research", icon: Sparkles },
    ],
  },
  {
    label: "Market Data",
    items: [
      { href: "/feed", label: "Live Feed", icon: Radio, badge: "Live" },
      { href: "/news", label: "News", icon: Newspaper },
      { href: "/fundamentals", label: "Fundamentals", icon: BarChart3 },
      { href: "/social", label: "Social Sentiment", icon: Users },
      { href: "/alerts", label: "Alerts", icon: Bell },
    ],
  },
  {
    label: "Execution",
    items: [
      { href: "/orders", label: "Orders", icon: ArrowUpDown },
      { href: "/portfolio", label: "Portfolio", icon: Briefcase },
      { href: "/rules", label: "Risk Rules", icon: Shield },
      { href: "/exposure", label: "Exposure", icon: Gauge },
      { href: "/cost-analysis", label: "Cost Analysis", icon: Calculator },
    ],
  },
  {
    label: "System",
    items: [
      { href: "/health", label: "Health", icon: HeartPulse },
      { href: "/settings", label: "Settings", icon: Settings },
      { href: "/analytics", label: "Analytics", icon: TrendingUp },
      { href: "/reports", label: "Reports", icon: FileText },
      { href: "/feedback", label: "Feedback", icon: MessageCircle },
      { href: "/similarity", label: "Similarity", icon: GitCompareArrows },
    ],
  },
];

/* ── Sidebar content (shared between desktop & mobile) ── */

function SidebarContent({
  onNavigate,
  isCollapsed = false,
  onToggle,
}: {
  onNavigate?: () => void;
  isCollapsed?: boolean;
  onToggle?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
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
            <span className="text-sm font-bold tracking-tight">Quantum</span>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              
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
      <ScrollArea className="flex-1 min-h-0 py-3">
        <nav className={cn("space-y-5 px-3", isCollapsed && "px-2")}>
          {navigation.map((group) => (
            <div key={group.label}>
              {!isCollapsed && (
                <div className="mb-1 flex items-center gap-2 px-2">
                  <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                    {group.label}
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
                          <span className="truncate">{item.label}</span>
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
                          {item.label}
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

      <Separator />

      {/* Footer */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-between px-4 py-3",
          isCollapsed && "flex-col gap-4 px-0"
        )}
      >
        {!isCollapsed && (
          <div className="flex items-center gap-2 text-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">Online</span>
          </div>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}

/* ── Main export ── */

export function AppSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex h-full shrink-0 flex-col overflow-hidden border-r border-sidebar-border bg-sidebar transition-all duration-300 ease-in-out",
          isCollapsed ? "w-[64px]" : "w-[260px]"
        )}
      >
        {isCollapsed ? (
          <div className="flex flex-1 flex-col">
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
            <SidebarContent isCollapsed={true} />
          </div>
        ) : (
          <SidebarContent onToggle={() => setIsCollapsed(true)} />
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
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Hexagon className="h-5 w-5 text-primary" strokeWidth={2.2} />
          <span className="text-sm font-bold tracking-tight">Quantum</span>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
