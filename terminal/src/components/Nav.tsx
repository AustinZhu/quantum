import Link from "next/link";
import type { Route } from "next";

const links: Array<{ href: Route; label: string }> = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/orders", label: "Orders" },
  { href: "/rules", label: "Risk Rules" },
  { href: "/screening", label: "Screening" },
  { href: "/health", label: "Health" },
];

export function Nav() {
  return (
    <nav className="card" style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
      {links.map((item) => (
        <Link key={item.href} href={item.href} className="label">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
