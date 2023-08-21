import React, { useState, useEffect, useContext } from "react";
import Speaker from "./Speaker";
import { v4 as uuidv4 } from 'uuid';
import { data } from '../../SpeakerData';
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";

const SpeakersList = () => {
  const {
    data: speakerData, requestStatus, error, updateRecord
  } = useRequestDelay(2000, data);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

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
        speakerData.filter((speaker) => {
          return (
            speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
            speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
          )
        }).filter((speaker) => {
          return speaker.sessions.find(
            (session) => session.eventYear === eventYear)
        }).map((speaker) => <Speaker key={uuidv4()} speaker={speaker}
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