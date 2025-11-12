import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const ToggleButton = styled.button`
  background: transparent;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <ToggleButton onClick={() => dispatch(toggleTheme())}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </ToggleButton>
  );
};
