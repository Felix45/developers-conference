import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "../context/ThemeContext";

const Layout = ({startingTheme, children}) => {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>
        {children}
      </LayoutNoThemeProvider>
    </ThemeProvider>
  )
}

const LayoutNoThemeProvider = ({children}) => {
    
    const {theme} = useContext(ThemeContext);

    return (
      <div className={`container-fluid ${theme}`}>
        {children}
      </div>
    );
};

export default Layout;