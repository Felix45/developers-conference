import React from "react";
import { useState } from "react";
import Header from './Header';
import Speakers from "./Speakers";


const App = () => {
  const [disp, setDisp] = useState(true);
  const [theme, setTheme] = useState('light');
  return (
    <div className={`container-fluid ${theme}`}>
      <Header theme={theme} />
      <Speakers disp={disp} setDisp={setDisp} theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;