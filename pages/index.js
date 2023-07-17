import { data } from '../SpeakerData';
import { v4 as uuidv4 } from 'uuid';

const IndexPage = () => {

  
  return (
    <div className="container speakers-list">
      <div className='row'>
        {
          data.map((speaker) => {
        const {id, bio, first, last, favorite, twitterHandle, company, sessions} = speaker
        return (
        <div
          key = {uuidv4()}
          className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
          <div className="card card-height p-4 mt-4">
            <div className='speaker-img d-flex flex-row justify-content-center align-items-center h-300'>
              <img 
                src={`/images/speaker-${id}.jpg`}
                alt={`${first} ${last}`}
                className='containt-fit' 
                width="300"
                />
            </div>
            <div className='speaker-info'>
              <div className='d-flex justify-content-between mb-3'>
                <h3>{first} {last}</h3>
              </div>
              <div>
                <p>{bio} {company} {twitterHandle} {favorite}</p>
              </div>
            </div>
            <Session sessions={sessions[0]} />
          </div>
        </div>)
        })
      }
      </div>
    </div>
  )
};


const Session = (sessions) => {
  const {sessions: sess} = sessions;
  return (
    <div className='sessionBox card h-250'>
      <span className='session w-100'>
        {sess.title} <strong>Room: {sess.room.name}</strong>
      </span>
    </div>
  );
};

export default IndexPage;
