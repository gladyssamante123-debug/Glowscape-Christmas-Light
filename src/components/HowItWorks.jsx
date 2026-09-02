const STEPS = [
  {
    n: "01",
    title: "Book a free consult",
    desc: "Tell us about your home and vision online or by phone. We schedule a free virtual design consultation to map out your lighting plan at no cost.",
  },
  {
    n: "02",
    title: "Get a custom design & quote",
    desc: "We map your rooflines and landscaping, propose a lighting plan, and give you a firm, itemized quote — no surprises.",
  },
  {
    n: "03",
    title: "We install, top to bottom",
    desc: "Our insured crew handles every ladder, clip, and cable, usually finishing in a single day for most homes.",
  },
  {
    n: "04",
    title: "Enjoy the season, worry-free",
    desc: "If a bulb goes out or a strand shifts in the wind, we come back and fix it — included in every package.",
  },
  {
    n: "05",
    title: "We take it all down",
    desc: "After the holidays, we return to remove everything and can store it at our facility until you're ready for next year.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad how-it-works glow">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="tag">§ 03 — How It Works</span>
          <h2>From first call to full glow, in five steps.</h2>
        </div>

        <ol className="steps">
          {STEPS.map((s) => (
            <li className="steps__item" key={s.n}>
              <span className="steps__num">{s.n}</span>
              <div className="steps__content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
