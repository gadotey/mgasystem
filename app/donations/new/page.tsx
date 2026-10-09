
import Sidebar from "../../../components/Sidebar";
import DonationForm from "../../../components/DonationForm";
import { demoEvent } from "../../../lib/demo-data";

export default function NewDonationPage() {
  return (
    <div className="app">
      <Sidebar />

      <div className="content">
        <header className="topbar">
          <div className="event-name">
            {demoEvent.name}
          </div>

          <div className="user">
            Glenn · Super Admin
          </div>
        </header>

        <main className="main">
          <div className="heading-row">
            <div>
              <h2>Record Donation</h2>
              <p>
                Record monetary donations and in-kind
                contributions for the current memorial.
              </p>
            </div>

            <span className="demo-badge">
              PREVIEW MODE
            </span>
          </div>

          <DonationForm />
        </main>
      </div>
    </div>
  );
}
