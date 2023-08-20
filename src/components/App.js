import React from "react";
import { useState } from "react";
import Header from './Header';
import Speakers from "./Speakers";
import Layout from "./Layout";

const App = () => {
  const [disp, setDisp] = useState(true);
  
  return (
    <Layout startingTheme="light">
      <Header />
      <Speakers disp={disp} setDisp={setDisp} />
    </Layout>
  );
}

export default App;