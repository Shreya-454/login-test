import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       inter:["Inter", "sans-serif"]
      },
      
      colors: {
        blue: "#0031E2",
        "light-blue": "#2E2F37",
        "light-grey": "#656566",
        "light-black": "#14191C",
        "off-white": "#FAFAFF",
        "off-grey": "#D0D5DD",
        "off-grey-100": "#475467",
        "off-blue":"#007BFF",
      },
      lineHeight: {
      
        125: "125%",
        171:"171%",
        194: "194%",
        214:"214%",
      },
      letterSpacing: {
        sm:"1.22px"
      },
      boxShadow: {
        inputBlack: "0px 1px 2px 0px #1018280D;"
      }
    },
  },
  plugins: [],
} satisfies Config;