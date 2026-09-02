// A quiet, ambient snowfall that drifts over the whole page. Kept small,
// soft, and low-opacity so it reads as atmosphere, not decoration —
// consistent with the site's frost/night-sky palette rather than a
// literal cartoon snowflake glyph.
const FLAKE_COUNT = 26;

export default function Snowfall() {
  const flakes = Array.from({ length: FLAKE_COUNT }).map((_, i) => {
    const left = (i * 37) % 100;
    const size = 2 + ((i * 7) % 4);
    const duration = 14 + ((i * 5) % 14);
    const delay = -((i * 3) % duration);
    const drift = 12 + ((i * 11) % 40);
    const opacity = 0.25 + ((i % 5) * 0.09);

    return { id: i, left, size, duration, delay, drift, opacity };
  });

  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowfall__flake"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            "--drift": `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
