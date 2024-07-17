/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define your themes with transparency
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#005A9C", // Dodger Blue
      transparent: "rgba(0, 90, 156, 0.5)", // Light blue with transparency
    },
    secondary: {
      main: "#EF3E42", // Dodger Red
      transparent: "rgba(239, 62, 66, 0.5)", // Light red with transparency
    },
    text: {
      primary: "#000000", // Black
      secondary: "#ffffff", // White
    },
    background: {
      default: "#ffffff", // White
      paper: "#f5f5f5", // Light grey
    },
  },
  // Typography, spacing, breakpoints, etc.
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#005A9C", // Dodger Blue
      transparent: "rgba(0, 90, 156, 0.2)", // Light blue with transparency
    },
    secondary: {
      main: "#EF3E42", // Dodger Red
      transparent: "rgba(239, 62, 66, 0.2)", // Light red with transparency
    },
    text: {
      primary: "#ffffff", // White
      secondary: "#A5ACAF", // Silver
    },
    background: {
      default: "#121212", // Dark grey
      paper: "#1E1E1E", // Darker grey
    },
  },
  // Typography, spacing, breakpoints, etc.
});

// Create the ThemeContext
export const ThemeContext = createContext({
  currentTheme: "light", // Default theme is light
  toggleTheme: () => {},
});

// ThemeProvider component to provide the theme context
export const ThemeProviderComponent = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const selectedTheme = currentTheme === "light" ? theme : darkTheme;

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
