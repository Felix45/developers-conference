import React from "react";
import Sessions from './Sessions';
import SpeakerImage from './SpeakerImage';
import SpeakerDemographics from './SpeakerDemographics';

const Speaker = ({key, speaker, disp}) => {
    const {id, first, last, sessions} = speaker;
    
    return (
      <div
        key = {key}
        className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
        <div className="card card-height p-4 mt-4">
          <SpeakerImage id={id} first={first} last={last} />
          <SpeakerDemographics {...speaker} />
        </div>
        { disp && <Sessions sessions={sessions} /> }
      </div>
    )
  }

  export default Speaker;