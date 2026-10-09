
import Link from "next/link";

const navigation = [
  { label: "Dashboard", href: "/" },
  { label: "+ Record Donation", href: "/donations/new", primary: true },
  { label: "Donations", href: "/donations" },
  { label: "Events", href: "/events" },
  { label: "Receipts", href: "/receipts" },
  { label: "Reports", href: "/reports" },
  { label: "Administration", href: "/admin" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>MGAS</h1>
        <p>Memorial Giving &amp; Appreciation System</p>
      </div>

      <nav className="nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${
              item.href === "/" ? "active" : ""
            } ${item.primary ? "primary" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
