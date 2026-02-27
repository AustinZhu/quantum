import { AppSidebar } from "@/components/app-sidebar";
import { getSessionUser } from "@/lib/session";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();

  return (
    <div className="app-shell">
      <AppSidebar user={user} />
      <main className="app-main">
        <div className="app-main-inner">{children}</div>
      </main>
    </div>
  );
}
