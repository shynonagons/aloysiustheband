import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        dvd: "moveX 2s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        moveX: {
          from: {
            left: "0",
          },
          to: {
            left: "94%",
          },
        },
        moveY: {
          from: {
            top: "0",
          },
          to: {
            top: "90%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
