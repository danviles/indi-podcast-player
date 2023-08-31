import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col shadow-lg border rounded-sm p-2 sticky top-0">
      <div className="flex justify-center mb-10">
        <Link to={`/podcast/${'podcastid'}`}>
          <img
            className="h-[200px] w-[200px]"
            src="https://picsum.photos/200"
            alt=""
          />
        </Link>
      </div>
      <div className="px-2 mb-10">
        <h1 className="text-xl font-bold capitalize truncate">Podcast title</h1>
        <p className="text-sm italic truncate">by author</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold capitalize">Description:</h1>
        <p className="text-sm italic ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
