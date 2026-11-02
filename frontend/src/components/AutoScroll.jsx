import { useCallback, useEffect, useRef, useState } from "react";
import { CirclePlay, CirclePause } from "lucide-react";

/**
 * Gentle auto-scroll for the wedding invitation.
 * - Starts on the FIRST user gesture (click/tap/keydown).
 * - Scrolls smoothly ~60 px/sec.
 * - Pauses if the user manually scrolls up or wheel-scrolls with intent.
 * - Stops at page bottom.
 * - Floating toggle to enable/disable at any time.
 */
export default function AutoScroll() {
  const [playing, setPlaying] = useState(false);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const startedOnceRef = useRef(false);

  const SPEED = 60; // pixels per second

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setPlaying(false);
  }, []);

  const start = useCallback(() => {
    if (rafRef.current) return;
    lastTimeRef.current = 0;

    const step = (t) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = (t - lastTimeRef.current) / 1000;
      lastTimeRef.current = t;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 2) {
        stop();
        return;
      }

      window.scrollBy({ top: SPEED * dt, behavior: "instant" });
      rafRef.current = requestAnimationFrame(step);
    };

    setPlaying(true);
    rafRef.current = requestAnimationFrame(step);
  }, [stop]);

  // Detect manual user scroll (wheel/touch) → pause
  useEffect(() => {
    const onWheel = () => {
      if (rafRef.current) stop();
    };
    const onTouchMove = () => {
      if (rafRef.current) stop();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [stop]);

  // Start on first user gesture (click / tap / keydown) — matches audio unlock
  useEffect(() => {
    const startOnce = () => {
      if (startedOnceRef.current) return;
      startedOnceRef.current = true;
      start();
    };
    const events = ["pointerdown", "touchstart", "click", "keydown"];
    events.forEach((ev) =>
      window.addEventListener(ev, startOnce, { once: true, passive: true })
    );
    return () => {
      events.forEach((ev) => window.removeEventListener(ev, startOnce));
    };
  }, [start]);

  // Cleanup on unmount
  useEffect(() => () => stop(), [stop]);

  const toggle = () => {
    if (playing) {
      stop();
    } else {
      start();
    }
  };

  return (
    <button
      data-testid="autoscroll-toggle-btn"
      onClick={toggle}
      aria-label={playing ? "Pause auto scroll" : "Play auto scroll"}
      className="fixed bottom-6 left-24 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold backdrop-blur-md transition-all hover:scale-105"
      style={{
        background: "rgba(253, 251, 247, 0.72)",
        boxShadow: "0 8px 24px -8px rgba(122,31,43,0.35)",
      }}
    >
      {playing ? (
        <CirclePause className="h-5 w-5 text-maroon" strokeWidth={1.4} />
      ) : (
        <CirclePlay className="h-5 w-5 text-maroon" strokeWidth={1.4} />
      )}
    </button>
  );
}
