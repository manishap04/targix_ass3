import { createGlobalStyle } from "styled-components";

// Modern, clean themes with static gradients (no animations)
export const lightTheme = {
  background:
    "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)", // subtle light gradient
  text: "#0f172a",
  cardBg: "#ffffff",
  buttonBg: "#2563eb",
  buttonText: "#ffffff",
  surface: "#f8fafc",
  border: "rgba(15,23,42,0.06)",
};

export const darkTheme = {
  background: "linear-gradient(180deg, #0f1724 0%, #081022 100%)",
  text: "#e6eef8",
  cardBg: "#0f1a2b",
  buttonBg: "#7c3aed",
  buttonText: "#ffffff",
  surface: "#0b1220",
  border: "rgba(255,255,255,0.04)",
};

export const GlobalStyle = createGlobalStyle`
  /* Import a clean UI font */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  *,*::before,*::after{box-sizing:border-box}

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    /* Expose theme values to plain CSS via variables */
    --bg: ${(props) => props.theme.background};
    --text: ${(props) => props.theme.text};
    --card-bg: ${(props) => props.theme.cardBg};
    --button-bg: ${(props) => props.theme.buttonBg};
    --button-text: ${(props) => props.theme.buttonText};
    --border: ${(props) => props.theme.border};
    --surface: ${(props) => props.theme.surface};
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  /* sensible defaults for headings and content */
  h1,h2,h3,h4{margin:0}
  p{margin:0}
`;
