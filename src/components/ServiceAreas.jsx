import siteConfig from "../siteConfig";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-pad service-areas glow">
      <div className="container service-areas__grid">
        <div>
          <span className="tag">§ 06 — Where We Work</span>
          <h2>Proudly lighting homes across Orange County.</h2>
          <p className="service-areas__copy">
            Based in {siteConfig.address.line}, our crews serve homeowners and businesses
            throughout the surrounding communities. Don't see your city listed? Call us — we're
            often still able to help.
          </p>
          <a href={siteConfig.phoneHref} className="btn btn--outline-light">
            Ask About Your Area — {siteConfig.phone}
          </a>
        </div>

        <ul className="service-areas__list">
          {siteConfig.serviceAreas.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
