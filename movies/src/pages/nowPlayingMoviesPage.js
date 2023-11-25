import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getNowPlaying } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const NowPlayingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('nowPlaying', 
getNowPlaying)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
}
export default NowPlayingMoviesPage;

