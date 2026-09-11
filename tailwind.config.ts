import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0C0C0D",
        surface: "#17161A",
        ink: "#F3F1EC",
        "ink-soft": "#A6A29C",
        "ink-faint": "#6E6A64",
        line: "#2A2724",
        navy: "#141110",
        "navy-soft": "#1E1712",
        accent: "#E4711F",
        "accent-strong": "#C2591A",
        "accent-soft": "#2E1B0E",
        "accent-bright": "#F3925A",
        "accent-deep": "#7A3B12",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tight2: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
