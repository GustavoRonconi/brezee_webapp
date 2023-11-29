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
        "primary": "#cedcfc",
        "secondary": "#fefeff",
        "tertiary": "#9ebaf9",
        "quaternary": "#2a2a2a",	
      },
    },
  },
  plugins: [],
};
export default config;
