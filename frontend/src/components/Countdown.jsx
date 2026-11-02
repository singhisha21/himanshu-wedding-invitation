import { useEffect, useState } from "react";

/**
 * Countdown timer to a target date (default 29 Nov 2026, 8:00 PM IST).
 */
function calc(target) {
  const now = new Date().getTime();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hours, mins, secs, over: diff === 0 };
}

const TARGET = new Date("2026-11-29T19:30:00+05:30").getTime();

export default function Countdown() {
  const [t, setT] = useState(() => calc(TARGET));

  useEffect(() => {
    const id = setInterval(() => setT(calc(TARGET)), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.mins },
    { label: "Seconds", value: t.secs },
  ];

  return (
    <div
      data-testid="countdown-timer"
      className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto"
    >
      {items.map((i) => (
        <div
          key={i.label}
          className="ornate-card px-2 py-5 sm:py-7 text-center rounded-sm"
        >
          <div
            data-testid={`countdown-${i.label.toLowerCase()}`}
            className="font-serif-display text-4xl sm:text-6xl text-maroon leading-none"
          >
            {String(i.value).padStart(2, "0")}
          </div>
          <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.32em] text-ink-soft">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );
}
