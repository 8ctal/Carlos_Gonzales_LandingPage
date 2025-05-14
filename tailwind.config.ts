import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      boxShadow: {
        'input-shadow': '0 63px 59px rgba(26,33,188,.1)',
        'course-shadow': '0 40px 20px rgba(0,0,0,.15)',
        'testimonial-shadow1': '0 5.54348px 11.087px rgba(89,104,118,.05)',
        'testimonial-shadow2': '5.54348px 38.8043px 110.87px rgba(89,104,118,.15)',
      },
      colors: {
        primary: "#497ff1",
        secondary: "#3a54f6",
        grey: "#57595f",
        slateGray: "#f6faff",
        deepSlate: "#d5effa",
        success: "#43c639",
        midnight_text: "#222c44",
      },
      spacing: {
        '75%': '75%',
      },
      backgroundImage: {
        'newsletter-bg': "url('/images/newsletter/bgFile.png')",
      },
    },
  },
  plugins: [],
};
export default config;
