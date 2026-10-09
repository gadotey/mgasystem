
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "+ Record Donation",
    href: "/donations/new",
    primary: true,
  },
  {
    label: "Donations",
    href: "/donations",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Receipts",
    href: "/receipts",
  },
  {
    label: "Reports",
    href: "/reports",
  },
  {
    label: "Administration",
    href: "/admin",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>MGAS</h1>
        <p>
          Memorial Giving &amp; Appreciation System
        </p>
      </div>

      <nav className="nav" aria-label="Main navigation">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={[
                "nav-item",
                item.primary ? "primary" : "",
                isActive ? "active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
