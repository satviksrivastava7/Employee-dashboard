import React, { useState } from "react";

import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard/dashboard";
import "./App.css";

function App() {
  // gets the system default theme and applies it
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    });

  return (
    <div className="App" data-theme={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="content-wrapper">
        <div className="content">
          <Dashboard theme={theme} />
        </div>
        <div className="creator">
          <h4>
            made by{" "}
            <a
              href="https://bento.me/satviksrivastava7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Satvik Srivastava
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
