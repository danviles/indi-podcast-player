import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PodcastCardItem = ({podcast}) => {

  const navigate = useNavigate();

  return (
    <div 
      className="relative w-52 h-32 shadow-xl rounded-sm p-2 flex flex-col items-center justify-end pt-12 mb-12 bg-white hover:bg-slate-200 transition cursor-pointer" 
      title={`${podcast['im:name'].label}\n${podcast['im:artist'].label}`}
      onClick={() => navigate(`/podcast/${'id123456'}`)}
    >
      <img
        className="absolute top-0 transform -translate-y-1/2 rounded-full h-24 border"
        src={podcast['im:image'][2].label}
        alt="podcast"
      />
      <h1 className="font-bold text-md text-center mb-1 w-full uppercase truncate">
        {podcast['im:name'].label}
      </h1>
      <p className="text-sm text-center w-full overflow-hidden capitalize truncate">
        {podcast['im:artist'].label}
      </p>
    </div>
  );
};

PodcastCardItem.propTypes = {
  podcast: PropTypes.object,
};

export default PodcastCardItem;
