import React from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = ({disp, setDisp, theme, setTheme}) => {
  return (
    <>
      <SpeakersToolbar
        disp={disp}
        setDisp={setDisp}
        theme={theme}
        setTheme={setTheme} 
      />
      <SpeakersList disp={disp} />
    </>
  );
}

export default Speakers;