import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode based on the state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* Your App Components */}
       <Router>
      <Routes />
    </Router>
    </ThemeContext.Provider>
  );
}
