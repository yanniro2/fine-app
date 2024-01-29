import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#eab308",
        secound: "#1f2937",
        dark: "#1A1A1A",
        textC: "#707070",
        darkMin: "#1E1E1E",
        borderC: "#363636",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
