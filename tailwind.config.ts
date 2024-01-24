import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      black: '#000',
      bronze: '#E29144',
      danger: '#FF4D4D', 
      gray_100: '#696969',
      gray_300: '#181818',
      gray_500: '#101010',
      green: '#2E8B57',
      white: '#FFF'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
};
export default config;
