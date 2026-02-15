
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        }
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
        display: "var(--font-display)",
        secondary: "var(--font-secondary)",
      },
      colors: {
        white: "var(--color-white)",

        green: {
          100: "var(--color-green-100)",
          200: "var(--color-green-200)",
          300: "var(--color-green-300)",
          400: "var(--color-green-400)",
          500: "var(--color-green-500)",
        },

        blue: {
          200: "var(--color-blue-200)",
          400: "var(--color-blue-400)",
          700: "var(--color-blue-700)",
        },

        purple: {
          50: "var(--color-purple-50)",
          200: "var(--color-purple-200)",
          300: "var(--color-purple-300)",
          600: "var(--color-purple-600)",
        },

        slate: {
          200: "var(--color-slate-200)",
        },

        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          850: "var(--color-gray-850)",
          900: "var(--color-gray-900)",
        },

        primary: {
          25: "var(--color-primary-25)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          DEFAULT: "var(--color-primary)",
        },

        error: {
          100: "var(--color-error-100)",
          400: "var(--color-error-400)",
        },

        orange: {
          builders: "var(--color-orange-builders)",
        },
      },
      spacing: {
        base: "var(--spacing)",
      },
      maxWidth: {
        "4xl": "var(--container-4xl)",
      },
      fontSize: {
        xs: ["var(--text-xs)", { lineHeight: "var(--text-xs--line-height)" }],
        sm: ["var(--text-sm)", { lineHeight: "var(--text-sm--line-height)" }],
        base: ["var(--text-base)", { lineHeight: "var(--text-base--line-height)" }],
        lg: ["var(--text-lg)", { lineHeight: "var(--text-lg--line-height)" }],
        xl: ["var(--text-xl)", { lineHeight: "var(--text-xl--line-height)" }],
        "2xl": ["var(--text-2xl)", { lineHeight: "var(--text-2xl--line-height)" }],
        "3xl": ["var(--text-3xl)", { lineHeight: "var(--text-3xl--line-height)" }],
        "display-xl": [
          "var(--text-display-xl)",
          { lineHeight: "var(--text-display-xl--line-height)" },
        ],
        "display-lg": ["var(--text-display-lg)"],
        "display-md": [
          "var(--text-display-md)",
          { lineHeight: "var(--text-display-md--line-height)" },
        ],
        "display-sm": [
          "var(--text-display-sm)",
          { lineHeight: "var(--text-display-sm--line-height)" },
        ],
        "display-xs": [
          "var(--text-display-xs)",
          { lineHeight: "var(--text-display-xs--line-height)" },
        ],
        "display-2xs": [
          "var(--text-display-2xs)",
          { lineHeight: "var(--text-display-2xs--line-height)" },
        ],
        "body-xl": [
          "var(--text-body-xl)",
          { lineHeight: "var(--text-body-xl--line-height)" },
        ],
        "body-lg": [
          "var(--text-body-lg)",
          { lineHeight: "var(--text-body-lg--line-height)" },
        ],
        "body-md": [
          "var(--text-body-md)",
          { lineHeight: "var(--text-body-md--line-height)" },
        ],
        "body-sm": [
          "var(--text-body-sm)",
          { lineHeight: "var(--text-body-sm--line-height)" },
        ],
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
      letterSpacing: {
        widest: "var(--tracking-widest)",
      },

      lineHeight: {
        tight: "var(--leading-tight)",
        relaxed: "var(--leading-relaxed)",
      },

      borderRadius: {
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
      },

      blur: {
        sm: "var(--blur-sm)",
        xl: "var(--blur-xl)",
      },

      borderWidth: {
        "1.5": "var(--border-width-1-5)",
      },

      transitionDuration: {
        DEFAULT: "var(--default-transition-duration)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--default-transition-timing-function)",
        "ease-in-out": "var(--ease-in-out)",
      },
    },
  },
  plugins: []
};