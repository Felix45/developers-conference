import React from "react";
import Session from "./Session";
import { useContext } from "react";
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";

const Sessions = ({sessions}) => {
  const {eventYear} = useContext(SpeakerFilterContext);

  return (
    <div className='sessionBox card h-250'>
      {
        sessions.filter((session) => session.eventYear === eventYear).map(
          (session) => (
            <div className="session w-100" key={session.id}>
              <Session session={session} />
            </div>
          ))
      }
    </div>
  );
}

export default Sessions;