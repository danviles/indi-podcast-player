import PropTypes from 'prop-types';

const PodcastCardItem = ({imgsrc = 'https://picsum.photos/200', title, author}) => {
  return (
    <div className="relative w-52 h-32 shadow-xl rounded-sm p-2 flex flex-col items-center justify-end pt-12 mb-12 bg-white hover:bg-slate-200 transition cursor-pointer" title={`${title}\n${author}`}>
      <img
        className="absolute top-0 transform -translate-y-1/2 rounded-full h-24"
        src={imgsrc}
        alt="podcast"
      />
      <h1 className="font-bold text-xl text-center mb-1 w-full uppercase truncate">
        {title}
      </h1>
      <p className="text-sm text-center w-full overflow-hidden capitalize truncate">
        autor: {author}
      </p>
    </div>
  );
};

PodcastCardItem.propTypes = {
  imgsrc: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default PodcastCardItem;
