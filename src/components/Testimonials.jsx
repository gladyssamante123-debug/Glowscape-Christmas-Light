const REVIEWS = [
  {
    quote:
      "They mapped out every roofline before install day so there was zero guesswork. The color-changing lights on the patio have become the whole neighborhood's excuse to walk by after dinner.",
    name: "Melissa R.",
    location: "Fountain Valley, CA",
  },
  {
    quote:
      "We'd done our own lights for a decade and always had a strand fail by mid-December. Glowscape's crew came back within two days when one bulb flickered, no charge, no argument.",
    name: "David T.",
    location: "Huntington Beach, CA",
  },
  {
    quote:
      "The Christmas lighting was the best home upgrade we made this year. It's become a tradition to turn it on the day after Thanksgiving, and our whole street looks forward to it.",
    name: "Priya K.",
    location: "Costa Mesa, CA",
  },
  {
    quote:
      "Takedown and storage alone is worth it. I didn't touch a single bin in January and the lights showed up looking brand new the next November.",
    name: "James O.",
    location: "Irvine, CA",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad testimonials glow">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="tag">§ 05 — In Their Words</span>
          <h2>Homeowners across Orange County trust Glowscape.</h2>
        </div>

        <div className="testimonials__track">
          {REVIEWS.map((r) => (
            <figure className="testimonial-card" key={r.name}>
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                {"★★★★★"}
              </div>
              <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>{r.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
