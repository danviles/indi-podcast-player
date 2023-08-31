import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import HorizontalLayout from "./components/layouts/HorizontalLayout";

import MainPage from "./pages/MainPage";
import PodcastPage from "./pages/PodcastPage";
import EpisodePage from "./pages/EpisodePage";

import { PodcastProvider } from "./context/PodcastProvider";

function App() {
  return (
    <BrowserRouter>
      <PodcastProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/podcast/:podcastId" element={<HorizontalLayout />}>
              <Route index element={<PodcastPage />} />
              <Route path="episode/:episodeId" element={<EpisodePage />} />
            </Route>
          </Route>
        </Routes>
      </PodcastProvider>
    </BrowserRouter>
  );
}

export default App;
