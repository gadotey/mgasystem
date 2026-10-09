
"use client";

import { useState } from "react";

type DonationType = "MONEY" | "IN_KIND";

type PaymentMethod =
  | "CASH"
  | "ZELLE"
  | "CASH_APP"
  | "VENMO"
  | "MOBILE_MONEY"
  | "BANK_TRANSFER"
  | "CARD"
  | "OTHER"
  | "IN_KIND";

const paymentMethods: {
  value: PaymentMethod;
  label: string;
}[] = [
  { value: "CASH", label: "Cash" },
  { value: "ZELLE", label: "Zelle" },
  { value: "CASH_APP", label: "Cash App" },
  { value: "VENMO", label: "Venmo" },
  { value: "MOBILE_MONEY", label: "Mobile Money" },
  { value: "BANK_TRANSFER", label: "Bank Transfer" },
  { value: "CARD", label: "Card" },
  { value: "OTHER", label: "Other" },
];

export default function DonationForm() {
  const [anonymous, setAnonymous] = useState(false);
  const [donationType, setDonationType] =
    useState<DonationType>("MONEY");
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("CASH");
  const [currency, setCurrency] = useState("USD");

  return (
    <form
      className="donation-form"
      onSubmit={(event) => {
        event.preventDefault();
        alert(
          "Donation form preview only. Database saving is not enabled yet."
        );
      }}
    >
      <div className="form-section">
        <h3>Donor Information</h3>
        <p>Enter the donor's contact information.</p>

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(event) =>
              setAnonymous(event.target.checked)
            }
          />
          Record as anonymous donation
        </label>

        {!anonymous && (
          <div className="form-grid">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                placeholder="First name"
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                placeholder="Email address"
              />
            </label>
          </div>
        )}
      </div>

      <div className="form-section">
        <h3>Donation Details</h3>
        <p>Select the type of contribution.</p>

        <div className="form-grid">
          <label>
            Donation Type
            <select
              value={donationType}
              onChange={(event) => {
                const selected =
                  event.target.value as DonationType;

                setDonationType(selected);

                setPaymentMethod(
                  selected === "IN_KIND"
                    ? "IN_KIND"
                    : "CASH"
                );
              }}
            >
              <option value="MONEY">
                Monetary Donation
              </option>
              <option value="IN_KIND">
                In-Kind Gift
              </option>
            </select>
          </label>

          {donationType === "MONEY" && (
            <>
              <label>
                Currency
                <select
                  value={currency}
                  onChange={(event) =>
                    setCurrency(event.target.value)
                  }
                >
                  <option value="USD">USD</option>
                  <option value="GHS">GHS</option>
                </select>
              </label>

              <label>
                Amount
                <input
                  type="number"
                  name="amount"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                  required
                />
              </label>

              <label>
                Payment Method
                <select
                  value={paymentMethod}
                  onChange={(event) =>
                    setPaymentMethod(
                      event.target.value as PaymentMethod
                    )
                  }
                >
                  {paymentMethods.map((method) => (
                    <option
                      key={method.value}
                      value={method.value}
                    >
                      {method.label}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

          {donationType === "IN_KIND" && (
            <label className="full-width">
              Gift Description
              <textarea
                name="giftDescription"
                rows={4}
                placeholder="Describe the donated items, quantities, or services"
                required
              />
            </label>
          )}
        </div>
      </div>

      <div className="form-section">
        <h3>Verification</h3>
        <p>
          Online and digital payments must be independently
          verified before being marked as confirmed.
        </p>

        <div className="verification-notice">
          <strong>Initial status: Pending</strong>
          <span>
            Payment verification and database recording
            will be enabled in the next development stage.
          </span>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Preview Donation
        </button>
      </div>
    </form>
  );
}
