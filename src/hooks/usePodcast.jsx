import { itunesApi } from "../config/itunesApi";
import { useQuery } from "@tanstack/react-query";

const getPodcasts = async () => {
  const { data } = await itunesApi(
    "/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  return data.feed.entry;
};

export const useGetPodcasts = () => {
  return useQuery(["top100-podcasts"], getPodcasts, {});
};
