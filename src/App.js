import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import DefaultTheme from "./themes/default-theme";

import './App.css';

function App() {
  return (
      <ThemeProvider theme={DefaultTheme}>
      </ThemeProvider>
  );
}

export default App;
