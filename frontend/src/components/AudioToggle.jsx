import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

/**
 * Simple background music toggle.
 * Audio is paused on load and only plays when the user clicks the icon.
 */
export default function AudioToggle({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.5;
    a.loop = true;
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (a.paused) {
        a.muted = false;
        await a.play();
        setPlaying(true);
      } else {
        a.pause();
        setPlaying(false);
      }
    } catch (_) {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" loop playsInline />
      <button
        data-testid="audio-toggle-btn"
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold backdrop-blur-md transition-all hover:scale-105"
        style={{
          background: "rgba(253, 251, 247, 0.72)",
          boxShadow: "0 8px 24px -8px rgba(122,31,43,0.35)",
        }}
      >
        {playing ? (
          <Music2 className="h-5 w-5 text-maroon" strokeWidth={1.4} />
        ) : (
          <VolumeX className="h-5 w-5 text-maroon" strokeWidth={1.4} />
        )}
      </button>
    </>
  );
}
