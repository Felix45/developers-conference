import React, { useContext } from "react";
import Sessions from './Sessions';
import SpeakerImage from './SpeakerImage';
import SpeakerDemographics from './SpeakerDemographics';
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";

const Speaker = ({speaker, onFavoriteToggle}) => {
    const {id, first, last, sessions} = speaker;

    const {showSessions: disp} = useContext(SpeakerFilterContext);
    

    return (
      <div
        className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
        <div className="card card-height p-4 mt-4">
          <SpeakerImage id={id} first={first} last={last} />
          <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle} />
        </div>
        { disp && <Sessions sessions={sessions} /> }
      </div>
    )
  }

  export default Speaker;