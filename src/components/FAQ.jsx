import { useState } from "react";

const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "Most clients book between late September and early November. Booking early guarantees your preferred install date and lets us plan a design that isn't rushed — but we do accept last-minute requests when our schedule allows.",
  },
  {
    q: "Do I need to be home for the installation?",
    a: "No. As long as our crew has access to your exterior, roofline, and an outdoor outlet, we can complete the install without you present. We'll send photos when the job is finished.",
  },
  {
    q: "What happens if a bulb goes out during the season?",
    a: "Just give us a call. Bulb and strand repairs during the season are included in every installation package — we'll get a technician out to fix it, typically within a few days.",
  },
  {
    q: "Do you provide the lights, or do I need to buy my own?",
    a: "We supply all commercial-grade lighting, clips, timers, and extension cords as part of your package. If you already own lights you'd like reused, let us know during your consultation.",
  },
  {
    q: "When do you take the lights down?",
    a: "We begin scheduling takedowns in early January and typically complete all removals by the end of the month, weather permitting.",
  },
  {
    q: "Can you install lighting for a rental property or business?",
    a: "Yes. We work with landlords, HOAs, and commercial properties in addition to single-family homes. Ask about our commercial and multi-property pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-pad faq glow">
      <div className="container container--narrow">
        <div className="section-head section-head--center">
          <span className="tag">§ 07 — Good to Know</span>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq__item${open ? " is-open" : ""}`} key={item.q}>
                <button
                  className="faq__question"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {item.q}
                  <span className="faq__icon" aria-hidden="true">
                    {open ? "–" : "+"}
                  </span>
                </button>
                <div className="faq__answer" style={{ maxHeight: open ? "260px" : "0px" }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
