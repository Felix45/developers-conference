import React from "react";
import { useState, createContext } from "react";
import Header from './Header';
import Speakers from "./Speakers";

export const ThemeContext = createContext();

const App = () => {
  const [disp, setDisp] = useState(true);
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
    <div className={`container-fluid ${theme}`}>
      <Header />
      <Speakers disp={disp} setDisp={setDisp} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;