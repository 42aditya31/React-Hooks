// App.js
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>Theme Switcher App</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
