
import Sidebar from "../components/Sidebar";
import MemorialBanner from "../components/MemorialBanner";
import StatCard from "../components/StatCard";
import RecentDonations from "../components/RecentDonations";

import {
  demoEvent,
  demoStats,
} from "../lib/demo-data";

// Format monetary values
function formatCurrency(
  amount: number,
  currency: string = "USD"
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export default function Home() {
  return (
    <div className="app">

      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="content">

        {/* Top Header */}
        <header className="topbar">
          <div className="event-name">
            {demoEvent.name}
          </div>

          <div className="user">
            Glenn · Super Admin
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="main">

          {/* Dashboard Heading */}
          <div className="heading-row">
            <div>
              <h2>Giving Dashboard</h2>
              <p>
                Monitor donations, gifts and receipts
                for the current event.
              </p>
            </div>

            <span className="demo-badge">
              TEST DATA
            </span>
          </div>

          {/* Memorial Banner */}
          <MemorialBanner />

          {/* Financial Summary Cards */}
          <div className="cards">

            <StatCard
              label="Total Giving"
              value={formatCurrency(
                demoStats.totalGiving,
                demoStats.currency
              )}
              note={`${demoStats.monetaryDonations} monetary donations`}
            />

            <StatCard
              label="Cash Collected"
              value={formatCurrency(
                demoStats.cashGiving,
                demoStats.currency
              )}
              note="22 cash transactions"
            />

            <StatCard
              label="Digital Giving"
              value={formatCurrency(
                demoStats.digitalGiving,
                demoStats.currency
              )}
              note="25 digital transactions"
            />

            <StatCard
              label="In-Kind Gifts"
              value={demoStats.inKindGifts.toString()}
              note="Food, drinks and other gifts"
            />

          </div>

          {/* Recent Donations Table */}
          <RecentDonations />

        </main>
      </div>
    </div>
  );
}
