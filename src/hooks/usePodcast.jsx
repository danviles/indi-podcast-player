import { useContext } from "react";
import { itunesApi } from "../config/itunesApi";
import { useQuery } from "@tanstack/react-query";
import PodcastContext from "../context/PodcastProvider";
import Parser from "rss-parser/dist/rss-parser.min.js";
import axios from "axios";

const parser = new Parser();

const getPodcasts = async () => {
  const { data } = await itunesApi(
    "/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  return data.feed.entry;
};

const getPodcastEpisodes = async (podcastId) => {
  const proxiUrl = import.meta.env.VITE_PROXI_API;
  const itunesUrl = import.meta.env.VITE_ITUNES_API;
  const { data } = await axios(`${proxiUrl}${itunesUrl}/lookup?id=${podcastId}`)
  const rssFile = await axios(`${proxiUrl}${data.results[0].feedUrl}`)
  const feed = await parser.parseString(rssFile.data);
  return feed.items;
}

export const useGetPodcasts = () => {
  return useQuery(["top100-podcasts"], getPodcasts, {});
};

export const useGetEpisodes = (podcastId) => {
  return useQuery(["episodes", podcastId], () => getPodcastEpisodes(podcastId), {});
};

export const usePodcastContext = () => {
  return useContext(PodcastContext);
}
