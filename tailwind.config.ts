import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "background-tertiary": "var(--background-tertiary)",
        foreground: "var(--foreground)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-color": "var(--border-color)",
        "accent-blue": "var(--accent-blue)",
      },
      maxWidth: {
        container: "1024px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            fontSize: "0.9375rem",
            lineHeight: "1.75",
            color: "var(--foreground)",
            p: {
              marginTop: "1em",
              marginBottom: "1em",
            },
            a: {
              color: "var(--accent-blue)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h1: {
              fontSize: "1.75rem",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              color: "var(--foreground)",
              fontWeight: "700",
            },
            h2: {
              fontSize: "1.375rem",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              color: "var(--foreground)",
              fontWeight: "700",
            },
            h3: {
              fontSize: "1.125rem",
              marginTop: "1.25em",
              marginBottom: "0.5em",
              color: "var(--foreground)",
              fontWeight: "600",
            },
            h4: {
              fontSize: "1rem",
              marginTop: "1.25em",
              marginBottom: "0.5em",
              color: "var(--foreground)",
              fontWeight: "600",
            },
            code: {
              color: "var(--foreground)",
              backgroundColor: "var(--background-secondary)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
              fontSize: "0.85em",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
              borderRadius: "0.5rem",
              padding: "1rem",
              overflowX: "auto",
              fontSize: "0.85rem",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: "inherit",
            },
            blockquote: {
              borderLeftColor: "var(--accent-blue)",
              color: "var(--text-secondary)",
              fontStyle: "normal",
              fontSize: "0.9375rem",
            },
            hr: {
              borderColor: "var(--border-color)",
            },
            strong: {
              color: "var(--foreground)",
            },
            ul: {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            ol: {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            li: {
              marginTop: "0.25em",
              marginBottom: "0.25em",
            },
            thead: {
              borderBottomColor: "var(--border-color)",
            },
            "tbody tr": {
              borderBottomColor: "var(--border-color)",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
