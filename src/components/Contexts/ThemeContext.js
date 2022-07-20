import React from "react";
import { useState, createContext} from "react";

export const ThemeSwitcher = createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState(false);

  const themeData = {
    theme,
    setTheme,
  };


  return (
    <ThemeSwitcher.Provider
      value={ themeData}>
      {props.children}
    </ThemeSwitcher.Provider>
  );
};

export default ThemeContext;
