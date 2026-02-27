import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <AppSidebar />
      <main className="app-main">
        <div className="app-main-inner">{children}</div>
      </main>
    </div>
  );
}
