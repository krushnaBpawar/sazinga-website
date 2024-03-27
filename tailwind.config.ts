import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/section/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/wrappers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utility/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        "blue-50": "#EFF4FF",
        "blue-100": "#D1E0FF",
        "blue-200": "#B2CCFF",
        "blue-300": "#84ADFF",
        "blue-400": "#528BFF",
        "blue-500": "#2970FF",
        "blue-600": "#155EEF",
        "blue-700": "#0C84B8",
        "blue-800": "#0040C1",
        "blue-900": "#00359E",
        "blue-950": "#002266",
        // gray
        "gray-50": "#F8F9FC",
        "gray-100": "#EAECF5",
        "gray-200": "#D5D9EB",
        "gray-300": "#B3B8DB",
        "gray-400": "#717BBC",
        "gray-500": "#4E5BA6",
        "gray-600": "#3E4784",
        "gray-700": "#363F72",
        "gray-800": "#293056",
        "gray-900": "#101323",
        "gray-950": "#0D0F1C",
        // green
        "green-50": "#F5FBEE",
        "green-100": "#E6F4D7",
        "green-200": "#CEEAB0",
        "green-300": "#ACDC79",
        "green-400": "#86CB3C",
        "green-500": "#669F2A",
        "green-600": "#4F7A21",
        "green-700": "#3F621A",
        "green-800": "#335015",
        "green-900": "#2B4212",
        "green-950": "#1A280B",
        // status-green
        "status-green-100": "#A9EBCF",
        "status-green-200": "#85E3BB",
        "status-green-300": "#51D69D",
        "status-green-400": "#2DCE89",
        "status-green-500": "#1F9060",
        // status-red
        "status-red-100": "#FBADBC",
        "status-red-200": "#F98AA0",
        "status-red-300": "#F75878",
        "status-red-400": "#F5365C",
        "status-red-500": "#AC2640",
        // background
        primary: "#FFFFFF",
        secondary: "#0D0F1C",
        blue: "#D1E0FF",
        green: "#E6F4D7",
        black: "#171717",
        // buttonBg
        "btn-primary": "#0C84B8",
        "btn-primary-hover": "#0b729e",
        "btn-secondary": "#669F2A",
        "btn-secondary-hover": "#86CB3C",
        "btn-alt": "#D5D9EB",
        "btn-alt-hover": "#293056",
        // text
        "heading-primary": "#0D0F1C",
        "heading-secondary": "#101323",
        label: "#0C84B8",
        alt: "#EAECF5",
        // border
        "border-primary": "#EAECF5",
        "border-secondary": "#D5D9EB",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    fontSize: {
      p17: "18px",
      p15: "16px",
      btn: "15px",
      // h1
      h1Mobile: "32px",
      h1Tablet: "38px",
      h1Laptop: "48px",
      h1displayLaptop: "52px",
      h1displayTablet: "38px",
      h1displayMobile: "32px",
      // h2
      h2Mobile: "28px",
      h2Tablet: "32px",
      h2Laptop: "38px",
      // h3
      h3Mobile: "22px",
      h3Tablet: "24px",
      h3Laptop: "26px",
      // h4
      h4Mobile: "20px",
      h4Tablet: "20px",
      h4Laptop: "20px",
      // h5
      h5Mobile: "15px",
      h5Tablet: "16px",
      h5Laptop: "18px",
      // h6
      h6Mobile: "14px",
      h6Tablet: "15px",
      h6Laptop: "16px",
    },
  },
  plugins: [],
};
export default config;
