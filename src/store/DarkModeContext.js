import React, { createContext, useState, useContext } from "react";

// Create a Context for Dark Mode
const DarkModeContext = createContext();

// Create a custom hook to use the Dark Mode context
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// DarkModeProvider component to wrap around the application
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
