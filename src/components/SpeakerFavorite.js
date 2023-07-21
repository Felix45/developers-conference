import React, {useState} from "react";

const SpeakerFavorite = ({favorite, onFavoriteToggle}) => {
  const [inTransition, setInTransition] = useState(false);
  const doneCallback = () => {
    setInTransition(false);
  }

  return (
   <div className="action padB1">
     <span
      onClick={() => {
        setInTransition(true);
        return onFavoriteToggle(doneCallback) 
      }}
     >
        <i className={
            favorite ? "fa fa-star orange" : "fa fa-star-o orange"
           }
        /> Favourite {" "}
        { inTransition && <span className="fas fa-circle-notch fa-spin"></span> }
     </span>
   </div>
  );
}

export default SpeakerFavorite;
