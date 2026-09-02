// Signature structural motif, replacing a literal bulb-string graphic:
// a right-angle trace line, like a wire run on a lighting plan or a
// PCB trace, with a single pulse of light traveling along it.
export default function CircuitTrace({ flip = false }) {
  const path = "M0 20 H180 V4 H420 V36 H700 V20 H960";
  const nodes = [
    [0, 20], [180, 20], [180, 4], [420, 4], [420, 36], [700, 36], [700, 20], [960, 20],
  ];

  return (
    <div className={`circuit-trace${flip ? " circuit-trace--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 960 40" preserveAspectRatio="none" width="100%" height="28">
        <defs>
          <linearGradient id="trace-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--amber-400)" />
            <stop offset="40%" stopColor="var(--rose-400)" />
            <stop offset="70%" stopColor="var(--violet-400)" />
            <stop offset="100%" stopColor="var(--frost-400)" />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke="var(--hairline)" strokeWidth="1.5" />
        <path className="circuit-trace__pulse" d={path} fill="none" stroke="url(#trace-gradient)" strokeWidth="1.5" />
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.6" fill="var(--accent)" />
        ))}
      </svg>
    </div>
  );
}
