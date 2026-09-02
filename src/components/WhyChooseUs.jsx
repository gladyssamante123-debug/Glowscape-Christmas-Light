import img from "../assets/gallery/gallery-04.jpg";

const REASONS = [
  {
    icon: <IconShield />,
    title: "Insured, background-checked crews",
    desc: "Every technician who steps on your roof is a trained employee, not a subcontractor — covered by full liability insurance.",
  },
  {
    icon: <IconSpark />,
    title: "Commercial-grade materials only",
    desc: "We install the same weatherproof, UL-listed LED lighting used on hotels and shopping centers, rated to handle wind, rain, and years of reuse.",
  },
  {
    icon: <IconCompass />,
    title: "Design-first, not one-size-fits-all",
    desc: "Every proposal is mapped to your home's actual rooflines and landscaping before a single clip goes up.",
  },
  {
    icon: <IconCalendar />,
    title: "We store it, so you don't have to",
    desc: "After the season, we take everything down and can hold your lights in our facility until next year's install.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad why-us glow">
      <div className="container why-us__grid">
        <div className="why-us__intro">
          <span className="tag">§ 02 — Why Glowscape</span>
          <h2>
            Because the ladder, the tangled bins, and the guesswork should be our problem, not
            yours.
          </h2>
          <div className="why-us__image">
            <img src={img} alt="Elegant twilight roofline lighting installed by Glowscape" loading="lazy" />
          </div>
        </div>

        <ul className="why-us__list">
          {REASONS.map((r) => (
            <li key={r.title}>
              <span className="why-us__icon">{r.icon}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l7 3v6c0 5-3.5 8.5-7 11-3.5-2.5-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function IconCompass() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M15 9l-2 5-5 2 2-5 5-2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
