import siteConfig from "../siteConfig";

export default function StickyCallBar() {
  return (
    <div className="sticky-cta">
      <a href={siteConfig.phoneHref} className="sticky-cta__call">
        Call {siteConfig.phone}
      </a>
      <a href="#quote" className="sticky-cta__quote">
        Free Quote
      </a>
    </div>
  );
}
