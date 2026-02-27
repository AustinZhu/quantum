import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Quantum",
  description: "Admin dashboard for strategies, market feeds, risk rules, and orders",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
