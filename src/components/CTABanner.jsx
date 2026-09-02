import siteConfig from "../siteConfig";

export default function CTABanner({
  heading = "Ready to see your home glow?",
  sub = "Free design consultations are booking now for the season.",
  primaryLabel = "Get My Free Quote",
  variant = "gold",
}) {
  return (
    <section className={`cta-banner cta-banner--${variant}`}>
      <div className="container cta-banner__row">
        <div>
          <h2>{heading}</h2>
          <p>{sub}</p>
        </div>
        <div className="cta-banner__actions">
          <a href="#quote" className="btn btn--gold btn--lg">
            {primaryLabel}
          </a>
          <a href={siteConfig.phoneHref} className="btn btn--outline-dark btn--lg">
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
