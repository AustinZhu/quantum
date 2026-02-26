import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Quantum Terminal",
  description: "Admin dashboard for strategies, market feeds, risk rules, and orders",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="page">
            <Nav />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
