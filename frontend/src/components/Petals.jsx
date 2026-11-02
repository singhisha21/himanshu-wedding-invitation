import { useEffect, useState } from "react";

const PETAL_COUNT = 10;

/**
 * Falling petal decoration — subtle Pinterest romantic effect.
 * Uses a deterministic set of positions so it doesn't feel chaotic.
 */
export default function Petals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: PETAL_COUNT }).map((_, i) => ({
      id: i,
      left: `${(i * 97) % 100}%`,
      delay: `${(i * 1.7) % 12}s`,
      duration: `${14 + (i % 5) * 3}s`,
      size: 8 + ((i * 3) % 8),
    }));
    setPetals(arr);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
}
