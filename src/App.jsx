import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css"; // Optional: Add global styles

function App() {
  const { currentTheme } = useContext(ThemeContext); // Access currentTheme from ThemeContext

  return (
    <Router>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: currentTheme === "light" ? "#ffffff" : "#121212", // Example: Dynamically apply background color based on theme
          color: currentTheme === "light" ? "#000000" : "#ffffff", // Example: Dynamically apply text color based on theme
        }}
      >
        <Navbar />
        <Box component={"main"} style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Box>
        {/* Add footer or other components */}
      </Box>
    </Router>
  );
}

export default App;
