const BADGES = [
  { label: "Licensed & Insured" },
  { label: "Commercial-Grade LED Lighting" },
  { label: "Free Design Consultation" },
  { label: "Full-Service Takedown & Storage" },
  { label: "Satisfaction Guaranteed" },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container trust-bar__row">
        {BADGES.map((b) => (
          <div className="trust-bar__item" key={b.label}>
            <span className="trust-bar__mark" aria-hidden="true">
              ✦
            </span>
            {b.label}
          </div>
        ))}
      </div>
    </div>
  );
}
