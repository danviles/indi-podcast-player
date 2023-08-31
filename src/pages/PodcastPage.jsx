import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useGetEpisodes, usePodcastContext } from "../hooks/usePodcast";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Skeleton, Typography } from "@mui/material";

const PodcastPage = () => {
  const { actPodcast } = usePodcastContext();
  const podcastID = actPodcast?.id.attributes["im:id"];
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const thisQuery = queryClient.getQueryState(["episodes", podcastID]);

  const getEpisodesQuery = useGetEpisodes(podcastID);

  const handleSetEpisode = (episode) => {
    navigate(`./episode/${"episodeid"}`);
  };

  return (
    <section className="flex flex-col">
      {thisQuery.status === "loading" ? (
        <Typography component="div" variant="h3" className="flex flex-col">
          <Skeleton />
          <Typography variant="h4" className="flex flex-col">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Typography>
        </Typography>
      ) : (
        <>
          <div className="shadow-lg border rounded-sm mb-5 p-2 bg-white">
            <h1 className="text-xl font-bold capitalize">
              Episodes: {getEpisodesQuery.data.length}
            </h1>
          </div>
          {/* Episodes table */}
          <div className="shadow-lg border rounded-sm p-2 bg-white">
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Title </TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getEpisodesQuery?.data?.map((episode, index) => (
                    <TableRow
                      key={episode.guid}
                      className={`cursor-pointer hover:bg-gray-300 ${
                        index % 2 === 0 ? "bg-slate-100" : ""
                      }`}
                      onClick={() => handleSetEpisode(episode)}
                    >
                      <TableCell component="th" scope="row" className="">
                        {episode.title}
                      </TableCell>
                      <TableCell align="right">{episode.pubDate}</TableCell>
                      <TableCell align="right">
                        {episode.itunes.duration}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
      {/* Episodes count */}
    </section>
  );
};

export default PodcastPage;
