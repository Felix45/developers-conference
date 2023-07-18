import React from "react";

const SpeakerFavorite = ({favorite, onFavoriteToggle}) => {

  return (
   <div className="action padB1">
     <span
      onClick={onFavoriteToggle}
     >
        <i className={
            favorite ? "fa fa-star orange" : "fa fa-star-o orange"
           }
        /> Favourite {" "}
     </span>
   </div>
  );
}

export default SpeakerFavorite;
