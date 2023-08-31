import React from "react";
import { Link } from "react-router-dom";
import { usePodcastContext } from "../../hooks/usePodcast";

const Sidebar = () => {

  const { actPodcast } = usePodcastContext()

  return (
    <div className="flex flex-col shadow-lg border rounded-sm p-2 bg-white">
      <div className="flex justify-center mb-10">
        <Link to={`/podcast/${"podcastid"}`}>
          <img
            className="h-[200px] w-[200px]"
            src={actPodcast['im:image'][2].label}
            alt=""
          />
        </Link>
      </div>
      <div className="px-2 mb-10">
        <Link to={`/podcast/${"podcastid"}`}>
          <h1 className="text-xl font-bold capitalize truncate">
          {actPodcast['im:name'].label}

          </h1>
          <p className="text-sm italic truncate">{actPodcast['im:artist'].label}</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold capitalize">Description:</h1>
        <p className="text-sm italic ">
          {actPodcast.summary.label}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
