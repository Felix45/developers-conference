import React from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = ({disp, setDisp}) => {
  return (
    <>
      <SpeakersToolbar
        disp={disp}
        setDisp={setDisp}
      />
      <SpeakersList disp={disp} />
    </>
  );
}

export default Speakers;