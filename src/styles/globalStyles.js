import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#f5f5f5",
  text: "#222",
  cardBg: "#fff",
  buttonBg: "#4CAF50",
  buttonText: "#fff",
};

export const darkTheme = {
  background: "#121212",
  text: "#f5f5f5",
  cardBg: "#1f1f1f",
  buttonBg: "#bb86fc",
  buttonText: "#121212",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;
