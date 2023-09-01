import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import PodcastCardItem from "../components/cards/PodcastCardItem";
import { useGetPodcasts, usePodcastContext } from "../hooks/usePodcast";
import autoAnimate from '@formkit/auto-animate'

const MainPage = () => {
  const [search, setSearch] = useState("");

  const { setActPodcast } = usePodcastContext();

  const getPodcastsQuery = useGetPodcasts();

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const filteredPodcasts =
    getPodcastsQuery?.data?.filter((podcast) => {
      const name = podcast["im:name"].label.toLowerCase();
      const artist = podcast["im:artist"].label.toLowerCase();
      return (
        name.includes(search.toLowerCase()) ||
        artist.includes(search.toLowerCase())
      );
    }) || [];

  const handleSelectPodcast = (podcast) => {
    setActPodcast(podcast);
  };

  return (
    <section className="flex flex-col items-center justify-cente">
      {/* Filter podcasts */}
      <div className="flex justify-end items-center w-full h-12 gap-2 mb-10">
        <h1 className="bg-blue-500 font-bold text-white px-1 rounded-lg">
          100
        </h1>
        <TextField
          label="Filter podcasts..."
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* List of podcasts  */}
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-around flex-wrap gap-4 pt-12" ref={parent}>
          {filteredPodcasts.map((podcast) => (
            <div key={podcast.id.attributes["im:id"]} onClick={() => handleSelectPodcast(podcast)}>
              <PodcastCardItem
                podcast={podcast}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
