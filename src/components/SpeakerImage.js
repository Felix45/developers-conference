const SpeakerImage = ({id, first, last}) => {
  return (
    <div className='speaker-img d-flex flex-row justify-content-center align-items-center h-300'>
      <img 
        src={`/images/speaker-${id}.jpg`}
        alt={`${first} ${last}`}
        className='containt-fit' 
        width="300"
      />
    </div>
  );
}

export default SpeakerImage;