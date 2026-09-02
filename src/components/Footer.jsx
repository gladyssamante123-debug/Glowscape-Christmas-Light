import siteConfig from "../siteConfig";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <img src={logo} alt={`${siteConfig.businessName} logo`} />
          <p>
            Custom holiday lighting design, installation, maintenance, and takedown for homes and
            businesses throughout Orange County, California.
          </p>
          <div className="site-footer__socials">
            <a href={siteConfig.social.instagram} aria-label="Glowscape on Instagram">
              <IconInstagram />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Glowscape on Facebook">
              <IconFacebook />
            </a>
          </div>
        </div>

        <nav className="site-footer__col site-footer__col--explore" aria-label="Site">
          <h4>Explore</h4>
          <a href="#why-us">Why Us</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="site-footer__col site-footer__col--areas">
          <h4>Service Areas</h4>
          <div className="site-footer__areas-grid">
            {siteConfig.serviceAreas.slice(0, 6).map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>

        <div className="site-footer__col site-footer__col--contact">
          <h4>Contact</h4>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <span>{siteConfig.address.line}</span>
          <span>{siteConfig.hours}</span>
          <a href="#quote" className="btn btn--outline-light site-footer__cta">
            Get a Free Quote
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
        </p>
        <p className="site-footer__fine">
          Placeholder business content for demonstration purposes. Replace with your licensing and
          business details before launch.
        </p>
      </div>
    </footer>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 8.5h2V5.3c-.35-.05-1.5-.15-2.85-.15-2.82 0-4.75 1.72-4.75 4.88V13H5.5v3.6h2.9V22h3.7v-5.4h2.8l.45-3.6h-3.25V10.3c0-1.04.3-1.8 1.9-1.8z"
        fill="currentColor"
      />
    </svg>
  );
}
