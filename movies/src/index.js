import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
import PeoplePage from './pages/peoplePage';
import PeopleDetailsPage from './pages/peopleDetailsPage'
import PeopleImagesPage from './pages/peopleImagesPage'
import { QueryClientProvider, QueryClient } from "react-query";
import MustWatchMoviesPage from './pages/mustWatchMoviesPage';
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />}/>
          <Route path="/movies/nowPlaying" element={<NowPlayingMoviesPage />} />
          <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
          <Route path="/people/:id/images" element={<PeopleImagesPage />} />
          <Route path="/people/:id" element={<PeopleDetailsPage />} />
          <Route path="/people/page/:page" element={<PeoplePage />} />
          <Route path="/movies/mustWatch" element={<MustWatchMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
