import React from "react";
import Speaker from "./Speaker";
import { v4 as uuidv4 } from 'uuid';

const SpeakersList = ({data, disp}) => {
  return (
    <div className="container speakers-list">
     <div className='row'>
      {
        data.map((speaker) => <Speaker key={uuidv4()} speaker={speaker} disp={disp} />)
      }
    </div>
  </div>
  );
}

export default SpeakersList;