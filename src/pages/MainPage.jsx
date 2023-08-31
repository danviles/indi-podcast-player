import TextField from "@mui/material/TextField";
import PodcastCardItem from "../components/cards/PodcastCardItem";
import { Button } from "@mui/material";

const MainPage = () => {
  return (
    <section className="flex flex-col items-center justify-cente">
      {/* Filter podcasts */}
      <div className="flex justify-end items-center w-full h-12 gap-2 mb-10">
        <h1 className="bg-blue-500 font-bold text-white px-1 rounded-lg">
          100
        </h1>
        <TextField
          id="outlined-basic"
          label="Filter podcasts..."
          variant="outlined"
          size="small"
        />
      </div>
      {/* List of podcasts  */}
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between flex-wrap gap-4 pt-12">
          <PodcastCardItem imgsrc="https://picsum.photos/200" title="Podcast tittle" author="Elvis Nogueiras" />
          <PodcastCardItem imgsrc="https://picsum.photos/200" title="Podcast tittle" author="Elvis Nogueiras" />
          <PodcastCardItem imgsrc="https://picsum.photos/200" title="Podcast tittle" author="Elvis Nogueiras" />
          <PodcastCardItem imgsrc="https://picsum.photos/200" title="Podcast tittle" author="Elvis Nogueiras" />
          <PodcastCardItem imgsrc="https://picsum.photos/200" title="Podcast tittle" author="Elvis Nogueiras" />
          <PodcastCardItem imgsrc="https://picsum.photos/200" title="Podcast tittle" author="Elvis Nogueiras" />
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center w-full h-12">
        <Button disabled={true}>Load more</Button>
      </div>
    </section>
  );
};

export default MainPage;
