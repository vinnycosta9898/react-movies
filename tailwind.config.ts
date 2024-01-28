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
      
      blue: '#1DA1F2',
      bronze: '#E29144',
      danger: '#FF4D4D', 
      
      gray: '#cccccc',
      gray_100: '#696969',
      gray_200: '#303030',
      gray_300: '#181818',
      gray_500: '#101010',
      
      green: '#2E8B57',
      white: '#FFF',
      yellow: '#DAA520'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'xlg': '1700px',
        'lg': '1440px',
        'md': '1150px',
        'sm': '800px',
        'xsm': '200px'
      }
    },
  },
  plugins: [],
};
export default config;
