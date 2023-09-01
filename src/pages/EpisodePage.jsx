import DOMPurify from "dompurify";
import { usePodcastContext } from "../hooks/usePodcast";
import { Navigate } from "react-router-dom";

const EpisodePage = () => {
  const { actEpisode } = usePodcastContext();

  const rawHtml = actEpisode.content;
  const cleanHtml = DOMPurify.sanitize(rawHtml);

  if ( !actEpisode ) {
    <Navigate to="/" />
  }

  return (
    <section className="flex flex-col shadow-lg border rounded-sm p-5 bg-white">
      {/* Episode name */}
      <h1 className="capitalize text-xl font-bold mb-2">Episode title</h1>
      {/* Description  */}
      <div className="italic desc-links" dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      {/* Audio player  */}
      <audio
        className="w-full mt-10 rounded-md h-7"
        src={actEpisode.enclosure.url}
        controls
        autoPlay
      />
    </section>
  );
};

export default EpisodePage;
