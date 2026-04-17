import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B3A5C",
          light: "#2A5580",
          dark: "#122840",
        },
        accent: {
          DEFAULT: "#8B1A1A",
          light: "#A52020",
          dark: "#6B1414",
        },
        charcoal: "#2C3E50",
        navy: "#1A1A2E",
        gray: {
          light: "#F8F9FA",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
