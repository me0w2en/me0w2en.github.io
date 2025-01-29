import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 다크 모드 활성화
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#32FF7E",
          500: "#28E96A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
