import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constant/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        Josefin: 'var(--font-josefin-sans)'
      },
      screens: {
        // Desktop screens tall enough for the whole intro column to stay pinned.
        tall: { raw: "(min-width: 1024px) and (min-height: 860px)" },
      },
    },
  },
  plugins: [],
};
export default config;
