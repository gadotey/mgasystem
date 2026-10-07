const donations = [
  {
    donor: "James Smith",
    method: "Zelle",
    amount: "$200.00",
    receipt: "MG-00047",
  },
  {
    donor: "Anonymous",
    method: "Cash",
    amount: "$100.00",
    receipt: "MG-00046",
  },
  {
    donor: "Mary Johnson",
    method: "Cash App",
    amount: "$250.00",
    receipt: "MG-00045",
  },
  {
    donor: "Daniel Williams",
    method: "Cash",
    amount: "$50.00",
    receipt: "MG-00044",
  },
];

export default function Home() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <h1>MGAS</h1>
          <p>Memorial Giving & Appreciation System</p>
        </div>

        <nav className="nav">
          <a className="nav-item active" href="#">
            Dashboard
          </a>

          <a className="nav-item primary" href="#">
            + Record Donation
          </a>

          <a className="nav-item" href="#">
            Donations
          </a>

          <a className="nav-item" href="#">
            Events
          </a>

          <a className="nav-item" href="#">
            Receipts
          </a>

          <a className="nav-item" href="#">
            Reports
          </a>

          <a className="nav-item" href="#">
            Administration
          </a>
        </nav>
      </aside>

      <div className="content">
        <header className="topbar">
          <div className="event-name">November 7 Memorial</div>
          <div className="user">Glenn · Super Admin</div>
        </header>

        <main className="main">
          <div className="heading-row">
            <div>
              <h2>Giving Dashboard</h2>
              <p>
                Monitor donations, gifts and receipts for the current event.
              </p>
            </div>

            <span className="demo-badge">TEST DATA</span>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-label">Total Giving</div>
              <div className="card-value">$4,850</div>
              <div className="card-note">47 monetary donations</div>
            </div>

            <div className="card">
              <div className="card-label">Cash Collected</div>
              <div className="card-value">$2,100</div>
              <div className="card-note">22 cash transactions</div>
            </div>

            <div className="card">
              <div className="card-label">Digital Giving</div>
              <div className="card-value">$2,750</div>
              <div className="card-note">25 digital transactions</div>
            </div>

            <div className="card">
              <div className="card-label">In-Kind Gifts</div>
              <div className="card-value">6</div>
              <div className="card-note">Food, drinks and other gifts</div>
            </div>
          </div>

          <section className="section">
            <div className="section-header">
              <h3>Recent Donations</h3>
              <a href="#">View all donations</a>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Donor</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Receipt</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.receipt}>
                    <td>{donation.donor}</td>
                    <td>{donation.method}</td>
                    <td className="amount">{donation.amount}</td>
                    <td>{donation.receipt}</td>
                    <td>
                      <span className="status">Confirmed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}