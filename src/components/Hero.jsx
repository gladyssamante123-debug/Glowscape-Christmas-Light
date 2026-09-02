import siteConfig from "../siteConfig";
import heroImg from "../assets/gallery/gallery-01.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <img src={heroImg} alt="Custom color-changing holiday lighting installed along a home's roofline and patio" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__twinkles" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => {
          const top = 8 + ((i * 37) % 65);
          const left = 4 + ((i * 53) % 92);
          const hues = ["twinkle--amber", "twinkle--frost", "twinkle--violet", "twinkle--rose"];
          const hue = hues[i % hues.length];
          return (
            <span
              key={i}
              className={`hero__twinkle ${hue}`}
              style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${i * 0.4}s` }}
            />
          );
        })}
      </div>

      <div className="container hero__content">
        <span className="tag">§ {siteConfig.address.line} — Holiday Lighting</span>
        <h1>
          Your home,
          <br />
          wired for glow.
        </h1>
        <p className="hero__lede">
          Glowscape designs, installs, maintains, and removes custom holiday lighting so your
          home glows all season — without you touching a ladder.
        </p>

        <div className="hero__ctas">
          <a href="#quote" className="btn btn--gold btn--lg">
            Get My Free Design Quote
          </a>
          <a href={siteConfig.phoneHref} className="btn btn--outline-dark btn--lg">
            Call {siteConfig.phone}
          </a>
        </div>

        <ul className="hero__trust">
          <li>
            <strong>{siteConfig.homesLit}</strong>
            <span>Homes lit</span>
          </li>
          <li>
            <strong>Licensed &amp; Insured</strong>
            <span>Since {siteConfig.yearFounded}</span>
          </li>
          <li>
            <strong>{siteConfig.googleRating} ★ Rating</strong>
            <span>{siteConfig.googleReviewCount} Google reviews</span>
          </li>
        </ul>
      </div>

      <a href="#why-us" className="hero__scroll-cue" aria-label="Scroll to learn more">
        <span />
      </a>
    </section>
  );
}
