# PRD — Isha & Himanshu Wedding Invitation

## Problem Statement
Single-page, mobile-first, Pinterest-aesthetic digital wedding invitation for Isha & Himanshu (29 November 2026, Varanasi). Soft-luxury Indian-traditional editorial feel — ivory/marigold/blush palette, elegant serif + Devanagari typography, scroll-based storytelling. Static site (no backend), shareable via WhatsApp.

## User Persona
Wedding guests receiving invitation via WhatsApp link. Mobile-first viewing on iOS/Android browsers.

## Architecture
- Static React SPA (CRA + Tailwind + shadcn/ui).
- No backend or database (static-only per user choice).
- Google Fonts: Cormorant Garamond, Noto Serif Devanagari, Marcellus, Playfair Display.
- Icons: lucide-react + custom SVGs (Diya, LeafSpray, Shehnai).
- Audio: local `/audio/ambient.mp3` served from `/app/frontend/public/audio/`.

## Implemented (Iteration 1 — Jul 2026)
- Section 1: Sanskrit Ganesh invocation with animated diya + scroll indicator.
- Section 2: Couple hero (Isha & Himanshu) with "Two souls, one journey" tagline.
- Section 3 & 4: Bride and Groom family cards with ornate corners.
- Section 5: Vertical event timeline (Baraat 8PM, Dinner 9PM, Doli).
- Section 6: Venue card with Google Maps iframe + Get Directions button.
- Section 7: Live countdown timer to 29 Nov 2026 20:00 IST.
- Section 8: Photo gallery placeholder (4 Pinterest-style masonry photos).
- Section 9: Closing blessing + Share Invitation CTA.
- Floating: WhatsApp share button + background audio toggle.
- Falling petals + reveal-on-scroll animations.

## Files
- Page: `/app/frontend/src/pages/WeddingInvitation.jsx`
- Components: `AudioToggle.jsx`, `Countdown.jsx`, `Petals.jsx`
- Hook: `useReveal.js`
- Styles: `index.css`, `App.css`

## Test Results
Frontend testing agent iteration 1: ~98% pass. All sections, content, countdown, gallery, share, get-directions verified. Audio URL 403 (Pixabay) — fixed by hosting audio locally.

## Backlog / Next Actions
- **P1**: Swap placeholder audio (`SoundHelix-Song-1.mp3`) with an actual shehnai/flute royalty-free track.
- **P2**: Replace gallery placeholders with real couple photos when provided.
- **P2**: Optional guest RSVP form (deferred — user chose static).
- **P3**: Support guest personalization via `?to=<name>` URL param (deferred).
- **P3**: Add "Add to Calendar" (.ics) download button.
