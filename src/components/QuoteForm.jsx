import siteConfig from "../siteConfig";

export default function QuoteForm() {
  return (
    <section id="quote" className="section-pad quote glow">
      <div className="container quote__grid">
        <div className="quote__info">
          <span className="tag">§ 08 — Get Started</span>
          <h2>Let's design your display.</h2>
          <p className="quote__lede">
            Reach out and tell us a little about your home and what you're picturing. We'll follow
            up within one business day with next steps and a free quote.
          </p>

          <ul className="quote__contact">
            <li>
              <span>Call or text</span>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>
              <span>Hours</span>
              <p>{siteConfig.hours}</p>
            </li>
            <li>
              <span>Service Area</span>
              <p>{siteConfig.address.line} &amp; surrounding Orange County</p>
            </li>
          </ul>
        </div>

        <div className="quote__cta-card">
          <h3>Ready when you are.</h3>
          <p>
            No forms to fill out — just reach out and we'll take it from there with a free,
            no-obligation quote.
          </p>
          <a href={siteConfig.phoneHref} className="btn btn--gold btn--lg btn--full">
            Get Free Quote
          </a>
          <p className="quote__disclaimer">No obligation. We typically reply within one business day.</p>
        </div>
      </div>
    </section>
  );
}
