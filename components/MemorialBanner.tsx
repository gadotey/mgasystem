
import { demoEvent } from "../lib/demo-data";

export default function MemorialBanner() {
  return (
    <section className="memorial-banner">
      <div className="memorial-photo-placeholder" aria-hidden="true">
        <span className="memorial-placeholder-symbol">✦</span>
        <span>Memorial Photo</span>
      </div>

      <div className="memorial-details">
        <p className="memorial-eyebrow">IN LOVING MEMORY</p>
        <h2>{demoEvent.memorialName}</h2>
        <p className="memorial-tribute">{demoEvent.tribute}</p>
        <p className="memorial-event">
          {demoEvent.date} · {demoEvent.location}
        </p>
      </div>

      <span className="memorial-event-status">
        {demoEvent.status}
      </span>
    </section>
  );
}
