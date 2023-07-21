import React, { useState, useEffect } from "react";
import Speaker from "./Speaker";
import { v4 as uuidv4 } from 'uuid';
import { data } from '../../SpeakerData';
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";

const SpeakersList = ({disp}) => {
  const {
    data: speakerData, requestStatus, error, updateRecord
  } = useRequestDelay(2000, data);

  if(requestStatus === REQUEST_STATUS.FAILURE) return <div className="text-danger">ERROR: <b>loading speaker data failed {error}</b></div>

  return (
   <ReactPlaceholder
     cols={3}
     rows={20}
     type="media"
     className="speakerslist-placeholder"
     ready={requestStatus === REQUEST_STATUS.SUCCESS}
    >
    <div className="container speakers-list">
     <div className='row'>
      {
        speakerData.map((speaker) => <Speaker key={uuidv4()} speaker={speaker} disp={disp}
          onFavoriteToggle={(doneCallback) => { 
            updateRecord({...speaker, favorite: !speaker.favorite}, doneCallback);
        }} />)
      }
    </div>
  </div>
  </ReactPlaceholder>
  );
}

export default SpeakersList;