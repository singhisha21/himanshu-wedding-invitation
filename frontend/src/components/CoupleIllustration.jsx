/**
 * Hand-illustrated SVG of the bride & groom.
 * - Groom: off-white / ivory sherwani with muted gold trim
 * - Bride: rani-pink lehenga with gold zari accents, dupatta over head
 * Subtle motion via CSS: gentle sway, dupatta drift, glow halo.
 */
export default function CoupleIllustration({ className = "" }) {
  return (
    <div className={`couple-illust ${className}`} aria-hidden="true">
      {/* soft halo / mandap arch behind couple */}
      <svg
        viewBox="0 0 420 520"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="halo" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#FFF3D6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#F6E0D8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sherwani" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBF3E4" />
            <stop offset="100%" stopColor="#EFE1C5" />
          </linearGradient>
          <linearGradient id="lehenga" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E63A7E" />
            <stop offset="55%" stopColor="#C42667" />
            <stop offset="100%" stopColor="#8E1747" />
          </linearGradient>
          <linearGradient id="dupatta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7B3CE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E63A7E" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4D77E" />
            <stop offset="100%" stopColor="#B8891A" />
          </linearGradient>
          <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0C9A6" />
            <stop offset="100%" stopColor="#D9A57B" />
          </linearGradient>
          <pattern
            id="lehenga-motif"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1.4" fill="#F4D77E" opacity="0.85" />
            <path
              d="M12 6 L14 12 L12 18 L10 12 Z"
              fill="#F4D77E"
              opacity="0.55"
            />
          </pattern>
          <pattern
            id="sherwani-motif"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M8 16 Q 16 8 24 16 Q 16 24 8 16 Z"
              fill="none"
              stroke="#C9A227"
              strokeWidth="0.6"
              opacity="0.55"
            />
          </pattern>
        </defs>

        {/* Halo glow */}
        <ellipse cx="210" cy="230" rx="200" ry="240" fill="url(#halo)" />

        {/* Ornamental floral sprigs behind */}
        <g className="illust-floral" opacity="0.9">
          {/* left sprig */}
          <path
            d="M 30 200 C 60 160, 90 150, 110 130"
            stroke="#C9A227"
            strokeWidth="1"
            fill="none"
          />
          <g fill="#8A9A5B" opacity="0.9">
            <ellipse cx="55" cy="180" rx="7" ry="3" transform="rotate(-25 55 180)" />
            <ellipse cx="80" cy="165" rx="8" ry="3" transform="rotate(-20 80 165)" />
            <ellipse cx="100" cy="145" rx="6" ry="3" transform="rotate(-15 100 145)" />
          </g>
          <circle cx="112" cy="128" r="4" fill="#E63A7E" opacity="0.75" />
          <circle cx="105" cy="140" r="3" fill="#F4D77E" opacity="0.85" />

          {/* right sprig */}
          <path
            d="M 390 200 C 360 160, 330 150, 310 130"
            stroke="#C9A227"
            strokeWidth="1"
            fill="none"
          />
          <g fill="#8A9A5B" opacity="0.9">
            <ellipse cx="365" cy="180" rx="7" ry="3" transform="rotate(25 365 180)" />
            <ellipse cx="340" cy="165" rx="8" ry="3" transform="rotate(20 340 165)" />
            <ellipse cx="320" cy="145" rx="6" ry="3" transform="rotate(15 320 145)" />
          </g>
          <circle cx="308" cy="128" r="4" fill="#E63A7E" opacity="0.75" />
          <circle cx="315" cy="140" r="3" fill="#F4D77E" opacity="0.85" />
        </g>

        {/* ============ GROOM (left) ============ */}
        <g className="illust-groom">
          {/* legs (churidar ivory) */}
          <path
            d="M 155 420 L 152 490 L 162 492 L 168 425 Z"
            fill="#F1E3C6"
          />
          <path
            d="M 173 420 L 180 492 L 192 490 L 188 420 Z"
            fill="#F1E3C6"
          />
          {/* shoes */}
          <ellipse cx="157" cy="493" rx="10" ry="4" fill="#4A2A18" />
          <ellipse cx="186" cy="493" rx="10" ry="4" fill="#4A2A18" />

          {/* sherwani body */}
          <path
            d="M 130 240 
               Q 130 220 155 218
               L 195 218
               Q 220 220 220 240
               L 224 425
               L 128 425 Z"
            fill="url(#sherwani)"
          />
          {/* sherwani embroidery overlay */}
          <path
            d="M 130 240 
               Q 130 220 155 218
               L 195 218
               Q 220 220 220 240
               L 224 425
               L 128 425 Z"
            fill="url(#sherwani-motif)"
            opacity="0.9"
          />
          {/* button line */}
          <line
            x1="176"
            y1="230"
            x2="176"
            y2="420"
            stroke="#C9A227"
            strokeWidth="1.5"
            strokeDasharray="1 6"
          />
          {/* collar */}
          <path
            d="M 160 218 L 176 240 L 192 218 Z"
            fill="#EAD9B8"
            stroke="#C9A227"
            strokeWidth="0.7"
          />
          {/* gold border hem */}
          <rect x="128" y="418" width="96" height="6" fill="url(#gold)" opacity="0.85" />
          {/* pocket square */}
          <rect x="200" y="255" width="10" height="14" fill="#FAF6F0" stroke="#C9A227" strokeWidth="0.5" />

          {/* arms */}
          <path
            d="M 130 245 Q 108 300 118 360 L 128 360 Q 128 300 148 250 Z"
            fill="url(#sherwani)"
          />
          <path
            d="M 220 245 Q 240 300 236 360 L 224 360 Q 226 300 210 250 Z"
            fill="url(#sherwani)"
          />
          {/* hand (holding bride's) */}
          <circle cx="240" cy="365" r="8" fill="url(#skin)" />

          {/* neck */}
          <path d="M 165 200 L 165 220 L 187 220 L 187 200 Z" fill="url(#skin)" />

          {/* head */}
          <ellipse cx="176" cy="180" rx="24" ry="27" fill="url(#skin)" />
          {/* hair */}
          <path
            d="M 152 175 Q 152 148 176 145 Q 200 148 200 175 Q 200 165 190 162 Q 176 160 162 165 Q 152 168 152 175 Z"
            fill="#2B1810"
          />
          {/* beard */}
          <path
            d="M 160 190 Q 176 210 192 190 Q 192 200 186 208 Q 176 214 166 208 Q 160 200 160 190 Z"
            fill="#2B1810"
            opacity="0.9"
          />
          {/* eyes */}
          <circle cx="168" cy="181" r="1.4" fill="#1A0E08" />
          <circle cx="184" cy="181" r="1.4" fill="#1A0E08" />
          {/* subtle smile */}
          <path
            d="M 168 197 Q 176 202 184 197"
            stroke="#1A0E08"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          {/* sehra dot (tilak) */}
          <circle cx="176" cy="160" r="1.6" fill="#7A1F2B" />
        </g>

        {/* ============ BRIDE (right) ============ */}
        <g className="illust-bride">
          {/* lehenga skirt (bell shape) */}
          <path
            d="M 235 300
               L 220 500
               L 355 500
               L 340 300
               Q 320 290 288 290 Q 255 290 235 300 Z"
            fill="url(#lehenga)"
          />
          {/* lehenga embroidery */}
          <path
            d="M 235 300
               L 220 500
               L 355 500
               L 340 300
               Q 320 290 288 290 Q 255 290 235 300 Z"
            fill="url(#lehenga-motif)"
            opacity="0.9"
          />
          {/* gold hem */}
          <path
            d="M 220 495 L 355 495 L 353 502 L 222 502 Z"
            fill="url(#gold)"
          />
          {/* choli (blouse) */}
          <path
            d="M 250 235 
               Q 250 220 275 218
               L 300 218
               Q 320 220 320 235
               L 322 290
               L 248 290 Z"
            fill="url(#lehenga)"
          />
          {/* choli gold trim */}
          <path
            d="M 250 288 L 322 288"
            stroke="#F4D77E"
            strokeWidth="2"
          />
          {/* midriff */}
          <rect x="260" y="288" width="52" height="14" fill="url(#skin)" opacity="0.85" />

          {/* dupatta drape (over head, flowing right) */}
          <path
            className="illust-dupatta"
            d="M 250 155 
               Q 285 130 320 155
               Q 340 175 355 220
               Q 370 280 360 340
               Q 350 400 340 440
               Q 335 460 342 470
               Q 358 460 372 420
               Q 385 350 380 280
               Q 372 210 355 170
               Q 335 130 285 125 Q 250 130 250 155 Z"
            fill="url(#dupatta)"
            opacity="0.85"
          />
          {/* dupatta gold border */}
          <path
            d="M 250 155 Q 285 130 320 155"
            stroke="#F4D77E"
            strokeWidth="2.5"
            fill="none"
          />

          {/* arms */}
          <path
            d="M 320 245 Q 340 290 330 355 L 320 355 Q 320 300 305 250 Z"
            fill="url(#skin)"
          />
          <path
            d="M 250 245 Q 232 290 240 355 L 250 355 Q 250 300 262 250 Z"
            fill="url(#skin)"
          />
          {/* hand (holding groom's) */}
          <circle cx="244" cy="365" r="8" fill="url(#skin)" />
          {/* mehendi hint */}
          <circle cx="244" cy="365" r="6" fill="#7A1F2B" opacity="0.25" />

          {/* neck */}
          <path d="M 273 200 L 273 220 L 297 220 L 297 200 Z" fill="url(#skin)" />

          {/* choker + necklace */}
          <path
            d="M 265 224 Q 285 232 305 224"
            stroke="#F4D77E"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M 273 232 Q 285 244 297 232"
            stroke="#F4D77E"
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="285" cy="242" r="2" fill="#7A1F2B" />

          {/* head */}
          <ellipse cx="285" cy="180" rx="24" ry="27" fill="url(#skin)" />
          {/* hair below dupatta hint */}
          <path
            d="M 262 205 Q 265 215 268 220 L 264 195 Z"
            fill="#1A0E08"
            opacity="0.75"
          />
          {/* maang tikka */}
          <line
            x1="285"
            y1="155"
            x2="285"
            y2="165"
            stroke="#F4D77E"
            strokeWidth="1.2"
          />
          <circle cx="285" cy="167" r="2.4" fill="#F4D77E" stroke="#7A1F2B" strokeWidth="0.5" />
          {/* eyes */}
          <circle cx="277" cy="181" r="1.4" fill="#1A0E08" />
          <circle cx="293" cy="181" r="1.4" fill="#1A0E08" />
          {/* bindi */}
          <circle cx="285" cy="173" r="1.6" fill="#7A1F2B" />
          {/* smile */}
          <path
            d="M 278 195 Q 285 200 292 195"
            stroke="#7A1F2B"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          {/* jhumka earrings */}
          <g>
            <circle cx="262" cy="188" r="2" fill="#F4D77E" />
            <path d="M 258 190 L 266 190 L 262 198 Z" fill="#F4D77E" />
          </g>
          <g>
            <circle cx="308" cy="188" r="2" fill="#F4D77E" />
            <path d="M 304 190 L 312 190 L 308 198 Z" fill="#F4D77E" />
          </g>
        </g>

        {/* subtle sparkle dots (animated) */}
        <g className="illust-sparkle" fill="#F4D77E">
          <circle cx="80" cy="90" r="1.8" />
          <circle cx="340" cy="85" r="2.2" />
          <circle cx="60" cy="330" r="1.6" />
          <circle cx="370" cy="310" r="2" />
          <circle cx="210" cy="70" r="1.4" />
        </g>
      </svg>
    </div>
  );
}
