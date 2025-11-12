import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyle, lightTheme, darkTheme } from "./styles/globalStyles";
import { Dashboard } from "./components/Dashboard";

export const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
};
