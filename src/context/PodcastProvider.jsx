import { createContext, useState } from 'react'
import PropTypes from "prop-types";

const PodcastContext = createContext();

const PodcastProvider = ({children}) => {

  const [actPodcast, setActPodcast] = useState(null)
  const [actEpisode, setActEpisode] = useState(null)

  return (
    <PodcastContext.Provider
    value={{
      actPodcast,
      actEpisode,
      setActPodcast,
      setActEpisode
    }}
    >

    {children}
  </PodcastContext.Provider>
  )
}

PodcastProvider.propTypes = {
  children: PropTypes.node,
};

export {PodcastProvider};

export default PodcastContext