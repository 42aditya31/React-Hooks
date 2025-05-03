// ThemedComponent.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "10px",
      marginTop: "10px"
    }}>
      The current theme is: {theme}
    </div>
  );
}

export default ThemedComponent;
