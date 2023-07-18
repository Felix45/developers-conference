import React from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = ({data, disp, setDisp, theme, setTheme}) => {
  return (
    <>
      <SpeakersToolbar
        disp={disp}
        setDisp={setDisp}
        theme={theme}
        setTheme={setTheme} 
      />
      <SpeakersList data={data} disp={disp} />
    </>
  );
}

export default Speakers;