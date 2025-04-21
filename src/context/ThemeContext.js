import React, { createContext, useState, useEffect } from 'react';

// Create a context with a default value
export const ThemeContext = createContext({
  darkMode: true,
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Check local storage for saved theme preference or default to dark
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Toggle function to switch themes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Update local storage and document attributes when theme changes
  useEffect(() => {
    // Save preference to local storage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    // Add/remove the 'dark-theme' class from the document body
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // Provide the theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};