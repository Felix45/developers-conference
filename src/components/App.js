import React from "react";
import { useState } from "react";
import Header from './Header';
import Speakers from "./Speakers";


const App = ({data}) => {
  const [disp, setDisp] = useState(true);
  const [theme, setTheme] = useState('light');
  return (
    <div className={`container-fluid ${theme}`}>
      <Header theme={theme} />
      <Speakers data={data} disp={disp} setDisp={setDisp} theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;