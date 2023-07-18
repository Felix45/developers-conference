import React, { useState } from "react";
import Speaker from "./Speaker";
import { v4 as uuidv4 } from 'uuid';
import { data } from '../../SpeakerData';

const SpeakersList = ({disp}) => {

  const [speakerData, setSpeakerData] = useState(data);

  const onFavoriteToggle = (id) => {
    const speakerDataNew = speakerData.map((speaker) => {
      return speaker.id === id ? {...speaker, favorite: !speaker.favorite} : speaker;
    });
    setSpeakerData(speakerDataNew);
  }

  return (
    <div className="container speakers-list">
     <div className='row'>
      {
        speakerData.map((speaker) => <Speaker key={uuidv4()} speaker={speaker} disp={disp} onFavoriteToggle={() => onFavoriteToggle(speaker.id)}  />)
      }
    </div>
  </div>
  );
}

export default SpeakersList;