import { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      // ─── COLORS ─────────────────────────────────────────────────────
     
      // bg-primary, border-primary etc.
      colors: {
        // Base backgrounds
        base: {
          DEFAULT: "#060A16",   // main page background
          soft:    "#0D1221",   // slightly lighter bg (cards, sidebar)
          muted:   "#111827",   // even lighter (nested cards)
        },

        // Primary — Electric Green (main brand color)
        primary: {
          DEFAULT: "#34D399",   // emerald-400 — buttons, links, accents
          dark:    "#059669",   // emerald-600 — gradient end, hover
          light:   "#6EE7B7",   // emerald-300 — subtle highlights
          glow:    "rgba(52, 211, 153, 0.15)",  // glow effects
          muted:   "rgba(52, 211, 153, 0.1)",   // badge backgrounds
          border:  "rgba(52, 211, 153, 0.25)",  // badge/card borders
        },

        // Accent — Amber (secondary brand color)
        accent: {
          DEFAULT: "#F59E0B",   // amber-400 — secondary highlights
          dark:    "#D97706",   // amber-600 — hover
          light:   "#FCD34D",   // amber-300
          glow:    "rgba(245, 158, 11, 0.12)",
          muted:   "rgba(245, 158, 11, 0.1)",
          border:  "rgba(245, 158, 11, 0.25)",
        },

        // Purple — used for FAQ, chatbot, some feature cards
        purple: {
          DEFAULT: "#818CF8",   // indigo-400
          dark:    "#6366F1",   // indigo-500
          glow:    "rgba(129, 140, 248, 0.12)",
          muted:   "rgba(129, 140, 248, 0.1)",
          border:  "rgba(129, 140, 248, 0.25)",
        },

        // Danger — for error states, reject status in tracker
        danger: {
          DEFAULT: "#F43F5E",   // rose-500
          muted:   "rgba(244, 63, 94, 0.1)",
          border:  "rgba(244, 63, 94, 0.25)",
        },

        // Info — for tracker status, badges
        info: {
          DEFAULT: "#06B6D4",   // cyan-500
          muted:   "rgba(6, 182, 212, 0.1)",
          border:  "rgba(6, 182, 212, 0.25)",
        },

        // Text hierarchy — use these instead of arbitrary gray values
        text: {
          primary:   "#F1F5F9",   // slate-100 — headings, important text
          secondary: "#94A3B8",   // slate-400 — body text, descriptions
          muted:     "#64748B",   // slate-500 — placeholder, helper text
          faint:     "#475569",   // slate-600 — very subtle text
          ghost:     "#334155",   // slate-700 — barely visible (footer bottom)
        },

        // Borders — use these for consistent border opacity
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.07)",   // standard card border
          soft:    "rgba(255, 255, 255, 0.1)",    // slightly more visible
          medium:  "rgba(255, 255, 255, 0.15)",   // hover state borders
          strong:  "rgba(255, 255, 255, 0.25)",   // active/focused borders
        },

        // Surface — glass/card backgrounds
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",   // standard card bg
          soft:    "rgba(255, 255, 255, 0.05)",   // slightly brighter card
          hover:   "rgba(255, 255, 255, 0.06)",   // card hover state
        },
      },

      // ─── TYPOGRAPHY ─────────────────────────────────────────────────
      fontFamily: {
        display: ["Syne", "sans-serif"],      // headings, logo, big numbers
        body:    ["DM Sans", "sans-serif"],   // all body text, UI elements
        mono:    ["JetBrains Mono", "monospace"], // code, merit numbers
      },

      fontSize: {
        // Custom sizes beyond Tailwind defaults
        "2xs": ["0.625rem", { lineHeight: "1rem" }],      // 10px
        "xs":  ["0.75rem",  { lineHeight: "1rem" }],      // 12px
        "sm":  ["0.875rem", { lineHeight: "1.25rem" }],   // 14px
        "base":["1rem",     { lineHeight: "1.5rem" }],    // 16px
        "lg":  ["1.125rem", { lineHeight: "1.75rem" }],   // 18px
        "xl":  ["1.25rem",  { lineHeight: "1.75rem" }],   // 20px
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],      // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],   // 30px
        "4xl": ["2.25rem",  { lineHeight: "2.5rem" }],    // 36px
        "5xl": ["3rem",     { lineHeight: "1.1" }],       // 48px
        "6xl": ["3.75rem",  { lineHeight: "1.05" }],      // 60px
        "7xl": ["4.5rem",   { lineHeight: "1" }],         // 72px
        "hero":["clamp(3rem, 7.5vw, 5.75rem)", { lineHeight: "1.04" }],
      },

      fontWeight: {
        light:    "300",
        normal:   "400",
        medium:   "500",
        semibold: "600",
        bold:     "700",
        extrabold:"800",
        black:    "900",
      },

      letterSpacing: {
        tighter: "-0.03em",
        tight:   "-0.02em",
        snug:    "-0.01em",
        normal:  "0em",
        wide:    "0.03em",
        wider:   "0.05em",
        widest:  "0.08em",
      },

      lineHeight: {
        none:    "1",
        tight:   "1.05",
        snug:    "1.1",
        normal:  "1.5",
        relaxed: "1.7",
        loose:   "1.75",
      },

      // ─── SPACING ────────────────────────────────────────────────────
      // Tailwind's default spacing is good. These are additions only.
      spacing: {
        "4.5":  "1.125rem",   // between sm and base gap
        "13":   "3.25rem",
        "15":   "3.75rem",
        "18":   "4.5rem",
        "22":   "5.5rem",
        "26":   "6.5rem",
        "30":   "7.5rem",
        "nav":  "68px",       // navbar height — use for padding-top on pages
      },

      // ─── BORDER RADIUS ──────────────────────────────────────────────
      borderRadius: {
        none:  "0",
        sm:    "4px",
        DEFAULT:"6px",
        md:    "8px",
        lg:    "12px",
        xl:    "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
        full:  "9999px",
        // Named semantic radii
        badge: "20px",        // pill badges
        card:  "24px",        // feature/stat cards
        modal: "24px",        // modals and drawers
        btn:   "10px",        // buttons
      },

      // ─── BOX SHADOW ─────────────────────────────────────────────────
      boxShadow: {
        // Glow effects using brand colors
        "glow-primary": "0 0 40px rgba(52, 211, 153, 0.15)",
        "glow-primary-lg": "0 0 80px rgba(52, 211, 153, 0.2)",
        "glow-accent": "0 0 40px rgba(245, 158, 11, 0.12)",
        "glow-purple": "0 0 40px rgba(129, 140, 248, 0.12)",

        // Card shadows
        "card": "0 4px 24px rgba(0, 0, 0, 0.25)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.35)",

        // CTA button shadow
        "btn-primary": "0 8px 30px rgba(52, 211, 153, 0.28)",

        // Inset for pressed states
        "inner-soft": "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      },

      // ─── BACKDROP BLUR ──────────────────────────────────────────────
      backdropBlur: {
        nav: "20px",    // navbar glass effect
        card: "10px",   // glass cards
        modal: "24px",  // modal backdrops
      },

      // ─── ANIMATIONS ─────────────────────────────────────────────────
      animation: {
        "float":        "float 8s ease-in-out infinite",
        "float-slow":   "float 12s ease-in-out infinite",
        "float-fast":   "float 5s ease-in-out infinite",
        "bounce-soft":  "bounceSoft 2.2s ease-in-out infinite",
        "fade-up":      "fadeUp 0.6s ease both",
        "fade-in":      "fadeIn 0.4s ease both",
        "pulse-soft":   "pulseSoft 3s ease-in-out infinite",
        "spin-slow":    "spin 8s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-16px)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(6px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.6" },
        },
      },

      // ─── TRANSITIONS ────────────────────────────────────────────────
      transitionDuration: {
        fast:   "150ms",
        base:   "200ms",
        slow:   "300ms",
        slower: "500ms",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        sharp:  "cubic-bezier(0.4, 0, 1, 1)",
      },

      // ─── MAX WIDTH ──────────────────────────────────────────────────
      maxWidth: {
        "content": "1100px",   // standard content width
        "text":    "680px",    // readable text column
        "narrow":  "480px",    // narrow text (subtitles, descriptions)
        "search":  "620px",    // search bar max width
      },

      // ─── Z-INDEX ────────────────────────────────────────────────────
      zIndex: {
        "behind":  "-1",
        "base":    "0",
        "raised":  "10",
        "dropdown":"50",
        "sticky":  "80",
        "nav":     "100",
        "modal":   "200",
        "toast":   "300",
      },
    },
  },
  plugins: [],
};

export default config;