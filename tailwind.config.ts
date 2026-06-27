import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#c8c5ca",
        "on-primary-fixed": "#261900",
        "on-tertiary-container": "#414144",
        "error-container": "#93000a",
        "on-tertiary-fixed": "#1b1b1e",
        "on-tertiary": "#303033",
        "surface-variant": "#33343c",
        "on-background": "#e2e1eb",
        "surface-bright": "#383940",
        "tertiary-fixed-dim": "#c8c6c9",
        background: "#0A0A0A",
        "inverse-surface": "#e2e1eb",
        tertiary: "#cac8cc",
        "inverse-on-surface": "#2f3037",
        "on-secondary-fixed-variant": "#47464a",
        "on-error": "#690005",
        "surface-dim": "#12131a",
        "surface-container-low": "#1a1b22",
        "surface-tint": "#e4c285",
        "on-surface-variant": "#d0c5b5",
        "on-secondary-fixed": "#1b1b1e",
        outline: "#998f81",
        "tertiary-fixed": "#e4e1e5",
        "secondary-fixed": "#e4e1e6",
        "secondary-container": "#47464a",
        "on-primary-fixed-variant": "#5a4312",
        error: "#ffb4ab",
        "tertiary-container": "#afadb0",
        "inverse-primary": "#745a27",
        "surface-container-highest": "#33343c",
        "primary-fixed-dim": "#e4c285",
        "on-tertiary-fixed-variant": "#47464a",
        "on-secondary": "#303033",
        "primary-container": "#c9a96e",
        "on-primary": "#412d00",
        "outline-variant": "#4d463a",
        secondary: "#c8c5ca",
        "primary-fixed": "#ffdea4",
        "surface-container-lowest": "#0c0e14",
        "on-error-container": "#ffdad6",
        "on-secondary-container": "#b6b4b8",
        "surface-container": "#1e1f26",
        "on-primary-container": "#543d0c",
        surface: "#12131a",
        primary: "#e6c487",
        "surface-container-high": "#282a31",
        "on-surface": "#e2e1eb",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "margin-desktop": "64px",
        unit: "8px",
        "container-max": "1280px",
        "margin-mobile": "20px",
        gutter: "24px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "48px",
          {
            lineHeight: "1.1",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
        "display-lg-mobile": [
          "32px",
          {
            lineHeight: "1.2",
            letterSpacing: "0.03em",
            fontWeight: "600",
          },
        ],
        "headline-md": [
          "24px",
          {
            lineHeight: "1.3",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "1.6",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "1.5",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "label-caps": [
          "12px",
          {
            lineHeight: "1",
            letterSpacing: "0.15em",
            fontWeight: "700",
          },
        ],
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
