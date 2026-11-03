import { ChevronDown, MapPin, Utensils, MoonStar, Send, Heart, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import Petals from "@/components/Petals";
import AudioToggle from "@/components/AudioToggle";
import AutoScroll from "@/components/AutoScroll";
import Countdown from "@/components/Countdown";
import { Button } from "@/components/ui/button";

const HERO_BG = "/couple/hero-arch.jpg";

const GALLERY = [
  {
    src: "/couple/photo3.jpg",
    ratio: "aspect-[3/4]",
    offset: "sm:mt-10",
  },
  {
    src: "/couple/photo2.jpg",
    ratio: "aspect-[3/4]",
    offset: "",
  },
  {
    src: "/couple/photo1.jpg",
    ratio: "aspect-[3/4]",
    offset: "sm:mt-10",
  },
   {
    src: "/couple/photo4.jpg",
    ratio: "aspect-[3/4]",
    offset: "sm:mt-10",
  },
  {
    src: "/couple/photo5.jpg",
    ratio: "aspect-[3/4]",
    offset: "",
  },
  {
    src: "/couple/photo6.jpg",
    ratio: "aspect-[3/4]",
    offset: "sm:mt-10",
  },

];

const AUDIO_SRC = "/audio/ambient.mp3";

const MAPS_LINK = "https://maps.app.goo.gl/BhgxLKMEX8a4J7Fs6?g_st=ac";

/* Small ornament SVG (leaf spray) */
const LeafSpray = ({ className = "", flip = false }) => (
  <svg
    viewBox="0 0 120 40"
    className={className}
    aria-hidden="true"
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
  >
    <path
      d="M2 20 C 25 6, 55 6, 82 20 S 118 34, 118 20"
      stroke="#C9A227"
      strokeWidth="1"
      fill="none"
    />
    <g fill="#8A9A5B">
      <ellipse cx="25" cy="16" rx="4" ry="2" transform="rotate(-25 25 16)" />
      <ellipse cx="45" cy="12" rx="5" ry="2" transform="rotate(-15 45 12)" />
      <ellipse cx="65" cy="12" rx="5" ry="2" transform="rotate(10 65 12)" />
      <ellipse cx="85" cy="18" rx="4" ry="2" transform="rotate(25 85 18)" />
    </g>
    <circle cx="60" cy="20" r="2" fill="#7A1F2B" opacity="0.7" />
  </svg>
);

const Diya = ({ className = "" }) => (
  <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
    <ellipse cx="30" cy="42" rx="20" ry="6" fill="#7A1F2B" opacity="0.85" />
    <path d="M12 42 Q 30 56 48 42 Z" fill="#C9A227" />
    <g className="flicker">
      <path
        d="M30 12 C 34 18, 34 26, 30 32 C 26 26, 26 18, 30 12 Z"
        fill="url(#flame)"
      />
    </g>
    <defs>
      <radialGradient id="flame" cx="50%" cy="70%" r="60%">
        <stop offset="0%" stopColor="#fff3c0" />
        <stop offset="60%" stopColor="#C9A227" />
        <stop offset="100%" stopColor="#7A1F2B" />
      </radialGradient>
    </defs>
  </svg>
);

const Shehnai = ({ className = "", strokeWidth = 1.3 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 12 L15 12" />
    <path d="M15 8 L21 12 L15 16 Z" />
    <path d="M6 9 L6 15" />
    <path d="M10 9 L10 15" />
  </svg>
);

export default function WeddingInvitation() {
  const rootRef = useReveal();

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "You're invited! Please join us for the wedding celebration of Isha & Himanshu on Sunday, 29th November 2026, at Raj Lakshmi Marriage Lawn, Varanasi. " +
        window.location.href
    );
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={rootRef} className="bg-ivory text-ink relative overflow-x-hidden">
      <Petals />
      <AudioToggle src={AUDIO_SRC} />
      <AutoScroll />

      {/* Floating share button */}
      <button
        data-testid="share-invitation-btn"
        onClick={shareOnWhatsApp}
        aria-label="Share invitation on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-gold px-5 py-3 backdrop-blur-md transition-all hover:scale-[1.03]"
        style={{
          background: "rgba(122, 31, 43, 0.94)",
          color: "#FAF6F0",
          boxShadow: "0 12px 28px -12px rgba(122,31,43,0.6)",
        }}
      >
        <Send className="h-4 w-4" strokeWidth={1.6} />
        <span className="text-xs uppercase tracking-[0.28em]">Share</span>
      </button>

      {/* SECTION 1 — Invocation */}
      <section
        data-testid="section-invocation"
        className="relative flex min-h-[100svh] flex-col items-center px-6 pt-16 pb-24 text-center grain overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(250,246,240,0.94) 0%, rgba(250,246,240,0.88) 40%, rgba(250,246,240,0.75) 70%, rgba(250,246,240,0.5) 100%), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="reveal max-w-2xl relative z-10 mt-2">
          <div className="flex justify-center mb-6">
            <Diya className="h-14 w-14 float-soft" />
          </div>

          <div className="divider-ornament mb-6">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.4} />
          </div>

          <p className="font-devanagari text-2xl sm:text-3xl text-maroon mb-6">
            ॥ श्री गणेशाय नमः ।।
          </p>
          <p className="font-devanagari text-base sm:text-xl text-ink leading-relaxed">
            विघ्नं हरण मंगल करण, श्री गणपति महाराज ।
            <br />
            प्रथम निमन्त्रण आपको, पूरण करियो काज ।।
          </p>

          {/* Couple names — merged from former hero section */}
          <div className="mt-10 sm:mt-12">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold mb-6">
              Together with our families
            </p>
            <h1 className="font-serif-display font-light text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-ink">
              <span data-testid="groom-name">Himanshu</span>
              <span className="block my-3 text-maroon italic text-3xl sm:text-4xl font-normal">
                <span aria-hidden="true">&amp;</span>
              </span>
              <span data-testid="bride-name">Isha</span>
            </h1>

            <div className="divider-ornament mt-8 mb-4">
              <Heart className="h-3.5 w-3.5 text-maroon fill-current" strokeWidth={0} />
            </div>

            <p className="font-serif-display italic text-lg sm:text-2xl text-ink-soft">
              Two souls, one journey.
            </p>
            <p className="mt-5 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-ink font-semibold">
              29 · 11 · 2026 &nbsp; · &nbsp; Varanasi
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <ChevronDown
            className="h-6 w-6 text-maroon bounce-soft"
            strokeWidth={1.2}
          />
        </div>
      </section>

      {/* SECTION 3 & 4 — Family cards */}
      <section
        data-testid="section-families"
        className="relative px-6 py-14 sm:py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
              With blessings from
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl text-ink mt-3">
              Our Families
            </h2>
            <LeafSpray className="mx-auto mt-6 h-8 w-40 opacity-80" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Groom card */}
            <article
              data-testid="groom-family-card"
              className="reveal ornate-card p-8 sm:p-12 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-gold">
                The Groom
              </p>
              <h3 className="font-serif-display text-4xl sm:text-5xl mt-4 text-maroon">
                Himanshu Singh
              </h3>
              <LeafSpray className="mx-auto mt-4 h-6 w-32" flip />

              <div className="mt-8 space-y-5 font-body text-[15px] leading-relaxed text-ink-soft">
                <p>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ink block mb-1">
                    Grand Son of
                  </span>
                  Late Smt. Reeta Singh
                  <br />
                  &amp; Late Dr. Ranjeet Singh
                </p>

                <p>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ink block mb-1">
                    Son of
                  </span>
                  Mrs. Sindhu Singh
                  <br />
                  &amp; Mr. Balkrishna Singh
                </p>

                <p className="text-xs italic pt-2 text-ink">
                  Vill. &amp; Post — Media, Chunar,
                  <br />
                  Mirzapur, Uttar Pradesh
                </p>
              </div>
            </article>
            
            {/* Bride card */}
            <article
              data-testid="bride-family-card"
              className="reveal ornate-card p-8 sm:p-12 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-gold">
                The Bride
              </p>
              <h3 className="font-serif-display text-4xl sm:text-5xl mt-4 text-maroon">
                Isha Singh
              </h3>
              <LeafSpray className="mx-auto mt-4 h-6 w-32" />

              <div className="mt-8 space-y-5 font-body text-[15px] leading-relaxed text-ink-soft">
                <p>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ink block mb-1">
                    Grand Daughter of
                  </span>
                  Smt. Shail Kumari Singh
                  <br />
                  &amp; Shri Harihar Singh
                </p>

                <p>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ink block mb-1">
                    Daughter of
                  </span>
                  Mrs. Sangeeta Singh
                  <br />
                  &amp; Mr. Ajay Kumar Singh
                </p>

                <p className="text-xs italic pt-2 text-ink">
                  Vill. &amp; Post — Kolana, Chunar,
                  <br />
                  Mirzapur, Uttar Pradesh
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Timeline */}
      <section
        data-testid="section-timeline"
        className="relative px-6 py-14 sm:py-20 bg-paper"
      >
        <div className="max-w-3xl mx-auto">
          <div className="reveal text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
              The Celebration
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl mt-3 text-ink">
              Sunday · 29 November 2026
            </h2>
            <div className="divider-ornament mt-8">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.4} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-2 bottom-2 w-px timeline-line" />

            {[
              {
                icon: Shehnai,
                title: "Baraat",
                time: "7:30 PM",
                note: "Welcome & festivities",
                testId: "event-baraat",
              },
              {
                icon: Utensils,
                title: "Dinner",
                time: "9:00 PM",
                note: "A feast to remember",
                testId: "event-dinner",
              },
              {
                icon: MoonStar,
                title: "Vidai",
                time: "Taaron ki Chhaon Mein",
                note: "Under a canopy of stars",
                testId: "event-doli",
              },
            ].map((e, i) => (
              <div
                key={e.testId}
                data-testid={e.testId}
                className={`reveal relative mb-10 sm:mb-12 last:mb-0 flex ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Icon node */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-paper">
                  <e.icon
                    className="h-5 w-5 text-maroon"
                    strokeWidth={1.3}
                  />
                </div>

                <div
                  className={`ml-20 sm:ml-0 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gold">
                    {e.time}
                  </p>
                  <h3 className="font-serif-display text-3xl mt-2 text-maroon">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft italic">{e.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Venue block (merged from former Section 6) */}
          <div
            data-testid="section-venue"
            className="reveal mt-14 sm:mt-16 max-w-2xl mx-auto text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
              The Venue
            </p>
            <h3 className="font-serif-display text-3xl sm:text-4xl mt-3 text-ink">
              Raj Lakshmi
              <br />
              <span className="italic text-maroon">Marriage Lawn</span>
            </h3>
            <LeafSpray className="mx-auto mt-6 h-6 w-40 opacity-80" />

            <p className="mt-6 font-body text-base text-ink-soft leading-relaxed">
              Akhari Bypass Chauraha,
              <br />
              Varanasi, Uttar Pradesh
            </p>

            <a
              data-testid="get-directions-btn"
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-maroon px-6 py-3 text-xs uppercase tracking-[0.35em] text-maroon transition-all hover:bg-maroon hover:text-[color:var(--ivory)]"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.4} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6.5 — Land of Kashi */}
      <section
        data-testid="section-kashi"
        className="relative px-6 py-14 sm:py-20 bg-paper overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
              A land of legends
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl mt-3 text-ink">
              Where the <span className="italic text-maroon">Ganga</span> flows
            </h2>
            <LeafSpray className="mx-auto mt-6 h-8 w-40 opacity-80" />
          </div>

          {/* Sanskrit blessing */}
          <div className="reveal max-w-3xl mx-auto text-center mb-10">
            <p className="font-devanagari text-xl sm:text-2xl text-maroon leading-relaxed">
              काशी तु सर्वतीर्थेषु
              <br />
              भुक्ति-मुक्ति प्रदायिनी ।
            </p>
            <p className="mt-4 font-serif-display italic text-base sm:text-lg text-ink-soft">
              "Among all sacred lands, Kashi bestows both worldly joy and&nbsp;
              <br className="hidden sm:block" />
              eternal liberation."
            </p>
          </div>

          {/* Two-photo editorial split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Kashi */}
            <article
              data-testid="place-kashi"
              className="reveal group"
            >
              <div className="ornate-card overflow-hidden rounded-sm md:mt-8">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/places/kashi.jpg"
                    alt="Kashi — the ghats of Varanasi on the banks of the Ganga"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-6 px-2">
                <p className="text-[10px] uppercase tracking-[0.45em] text-gold">
                  Kashi &nbsp;·&nbsp; Varanasi
                </p>
                <h3 className="font-serif-display text-2xl sm:text-3xl mt-3 text-maroon">
                  The oldest living city
                </h3>
                <p className="mt-3 font-serif-display italic text-ink-soft text-[15px] leading-relaxed">
                  "Older than history, older than tradition, older even than
                  legend."
                  <br />
                  <span className="not-italic text-[11px] uppercase tracking-[0.3em] text-ink block mt-3">
                    — Mark Twain
                  </span>
                </p>
              </div>
            </article>

            {/* Chunar Fort */}
            <article
              data-testid="place-chunar"
              className="reveal group"
            >
              <div className="ornate-card overflow-hidden rounded-sm">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/places/chunar.jpg"
                    alt="Chunar Fort — the ancient sandstone citadel on the Ganga"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-6 px-2">
                <p className="text-[10px] uppercase tracking-[0.45em] text-gold">
                  Chunar &nbsp;·&nbsp; Mirzapur
                </p>
                <h3 className="font-serif-display text-2xl sm:text-3xl mt-3 text-maroon">
                  A fort of a thousand suns
                </h3>
                <p className="mt-3 font-serif-display italic text-ink-soft text-[15px] leading-relaxed">
                  "Where sandstone walls hold whispers of Vikramaditya, Sher
                  Shah and the Ganga herself — our home, our root."
                </p>
              </div>
            </article>
          </div>

          <div className="reveal mt-16 max-w-2xl mx-auto text-center">
            <div className="divider-ornament mb-6">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.4} />
            </div>
            <p className="font-devanagari text-lg sm:text-xl text-ink leading-relaxed">
              गंगा तट पर, काशी की गोद में —
              <br />
              हमारा प्रेम, हमारा उत्सव।
            </p>
            <p className="mt-3 font-serif-display italic text-sm sm:text-base text-ink-soft">
              On the banks of the Ganga, in the lap of Kashi —
              our love, our celebration.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Countdown */}
      <section
        data-testid="section-countdown"
        className="relative px-6 py-14 sm:py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
              Counting the moments
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl mt-3 text-ink">
              Until we say <span className="italic text-maroon">forever</span>
            </h2>
            <LeafSpray className="mx-auto mt-6 h-6 w-40 opacity-80" />
          </div>

          <div className="reveal mt-14">
            <Countdown />
          </div>
        </div>
      </section>

      {/* SECTION 8 — Gallery */}
      <section
        data-testid="section-gallery"
        className="relative px-6 py-14 sm:py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
              Moments
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl mt-3 text-ink">
              A love in frames
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {GALLERY.map((g, idx) => (
              <div
                key={idx}
                data-testid={`gallery-photo-${idx}`}
                className={`relative overflow-hidden rounded-sm ornate-card ${g.offset}`}
              >
                <div className={`${g.ratio} w-full overflow-hidden`}>
                  <img
                    src={g.src}
                    alt="Isha and Himanshu"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Engagement Highlight video */}
          <div className="reveal mt-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
                Engagement Highlight
              </p>
              <h3 className="font-serif-display text-3xl sm:text-4xl mt-3 text-ink">
                Where our <span className="italic text-maroon">forever</span> began
              </h3>
              <LeafSpray className="mx-auto mt-5 h-6 w-36 opacity-80" />
            </div>

            <div className="text-center">
              <a
                data-testid="engagement-video-link"
                href="https://drive.google.com/file/d/1fyg3MGoEcSYf5daAoDDMiZVd6_W3rLPG/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-maroon px-6 py-3 text-xs uppercase tracking-[0.35em] text-maroon transition-all hover:bg-maroon hover:text-[color:var(--ivory)]"
              >
                <Send className="h-4 w-4" strokeWidth={1.4} />
                Watch Engagement Highlights
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Closing */}
      <section
        data-testid="section-closing"
        className="relative px-6 py-16 sm:py-24 text-center grain"
        style={{
          backgroundImage: `linear-gradient(rgba(250,246,240,0.88), rgba(250,246,240,0.94)), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="reveal max-w-2xl mx-auto relative z-10">
          <Diya className="mx-auto h-14 w-14 float-soft mb-6" />
          <LeafSpray className="mx-auto h-8 w-48" />
          <h2 className="font-serif-display italic text-3xl sm:text-4xl mt-8 text-maroon leading-snug">
            &ldquo;With love and blessings,
            <br />
            we invite you to celebrate
            <br />
            this beautiful union.&rdquo;
          </h2>
          <LeafSpray className="mx-auto mt-8 h-8 w-48" flip />
          <p className="mt-10 text-[11px] uppercase tracking-[0.5em] text-ink-soft">
            Himanshu &nbsp; &amp; &nbsp; Isha
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.5em] text-gold">
            29 November 2026
          </p>

          {/* Special invitation from family */}
          <div
            data-testid="special-invitation-block"
            className="mt-10 ornate-card px-6 sm:px-10 py-8 text-left sm:text-center max-w-xl mx-auto"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-gold">
              Special invitation from
            </p>
            <LeafSpray className="mx-auto mt-4 h-5 w-28 opacity-80" />

            <div className="mt-6 space-y-2 font-body text-[15px] leading-relaxed text-ink">
              <p>Mr. Pradeep Kumar Singh</p>
              <p>Mr. Girish Kumar Singh</p>
              <p>Mr. Mukesh Kumar Singh</p>
              <p>Dr. Rajeev Ranjan Sinha</p>
              <p>Mr. Naveen Singh</p>
              <p>Mr. Manoj Kumar Singh</p>
              <p>Mr. Jaikrishna Singh</p>
            </div>

            <div className="my-6 divider-ornament">
              <Sparkles className="h-3 w-3" strokeWidth={1.4} />
            </div>

            <p className="font-serif-display italic text-[15px] sm:text-base text-ink-soft leading-relaxed">
              Nikhil &nbsp;·&nbsp; Priyanka &nbsp;·&nbsp; Nitesh
              <br />
              Nishant &nbsp;·&nbsp; Prasant &nbsp;·&nbsp; Piyush &nbsp;·&nbsp; Pragya
              <br />
              Shashank &nbsp;·&nbsp; Mayank &nbsp;·&nbsp; Ayush
              
            </p>

            <div className="my-6 divider-ornament">
              <Sparkles className="h-3 w-3" strokeWidth={1.4} />
            </div>
            <p className="font-serif-display italic text-[15px] sm:text-base text-ink-soft leading-relaxed">
              Trisha &nbsp;·&nbsp; Mishkha &nbsp;·&nbsp; Rivaan
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.4em] text-maroon">
              &amp; Singh family
            </p>

            <div className="my-6 divider-ornament">
              <Sparkles className="h-3 w-3" strokeWidth={1.4} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.45em] text-gold">
                For any queries
              </p>
              <p className="mt-3 font-serif-display text-lg sm:text-xl text-ink">
                Himanshu Singh
              </p>
              <a
                data-testid="contact-phone"
                href="tel:+919839859980"
                className="mt-2 inline-block font-body text-sm text-maroon hover:underline"
              >
                +91 9891023011
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-[10px] uppercase tracking-[0.4em] text-ink-soft">
        Made with <Heart className="inline h-3 w-3 text-maroon fill-current" strokeWidth={0} /> for Himanshu &amp; Isha
      </footer>
    </div>
  );
}
