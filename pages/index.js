import {data} from '../SpeakerData';
import Speakers from '../src/components/Speakers';

const IndexPage = () => {
  return (
   <Speakers data={data} />
  )
};

export default IndexPage;
