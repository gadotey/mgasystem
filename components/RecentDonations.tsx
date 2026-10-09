
import Link from "next/link";
import { demoDonations } from "../lib/demo-data";


function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export default function RecentDonations() {
  return (
    <section className="section">
      <div className="section-header">
        <h3>Recent Donations</h3>
        <span className="card-note">
          Latest recorded gifts
        </span>
      </div>

      <div className="table-wrapper">
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
            {demoDonations.map((donation) => (
              <tr key={donation.receipt}>
                <td>{donation.donor}</td>
                <td>{donation.method}</td>

                <td className="amount">
                  {formatCurrency(
                    donation.amount,
                    donation.currency
                  )}
                </td>

                <td>{donation.receipt}</td>

                <td>
                  <span className="status">
                    {donation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
