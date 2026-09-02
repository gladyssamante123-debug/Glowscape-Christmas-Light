import { useState } from "react";
import CircuitTrace from "./CircuitTrace";
import img1 from "../assets/gallery/gallery-01.jpg";
import img2 from "../assets/gallery/gallery-02.jpg";
import img3 from "../assets/gallery/gallery-03.jpg";
import img4 from "../assets/gallery/gallery-04.jpg";
import img5 from "../assets/gallery/gallery-05.jpg";

const PHOTOS = [
  { src: img1, alt: "Multicolor RGB rooflines and patio lighting around a backyard pool", tag: "Backyard & Pool" },
  { src: img2, alt: "Two-story home outlined in deep blue holiday lighting", tag: "Roofline Lighting" },
  { src: img3, alt: "Craftsman home lit with a full-color holiday display and lit window projection", tag: "Full Color Display" },
  { src: img4, alt: "Single-story home with warm white roofline lighting and landscape accents", tag: "Warm White Classic" },
  { src: img5, alt: "Brick home entry lit with warm roofline lighting and sconces", tag: "Entry & Accent Lighting" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="section-pad gallery glow">
      <div className="container">
        <div className="section-head">
          <span className="tag">§ 04 — Recent Installs</span>
          <h2>A few homes we've had the pleasure of lighting.</h2>
          <p>Every project starts as a blank roofline and ends as the brightest house on the block.</p>
        </div>
      </div>

      <div className="gallery__grid container">
        {PHOTOS.map((p, i) => (
          <button
            key={p.src}
            className={`gallery__item gallery__item--${i}`}
            onClick={() => setActive(i)}
            aria-label={`View larger photo: ${p.tag}`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
            <span className="gallery__tag">{p.tag}</span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close photo" onClick={() => setActive(null)}>
            ✕
          </button>
          <img src={PHOTOS[active].src} alt={PHOTOS[active].alt} onClick={(e) => e.stopPropagation()} />
          <p onClick={(e) => e.stopPropagation()}>{PHOTOS[active].tag}</p>
        </div>
      )}

      <CircuitTrace flip />
    </section>
  );
}
