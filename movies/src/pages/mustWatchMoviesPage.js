import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromMustWatches from '../components/cardIcons/removeFromMustWatches.js'

const useMustWatchMovieQueries = (movieIds) => {
  return useQueries(
    movieIds.map((movieId) => ({
      queryKey: ["movie", { id: movieId }],
      queryFn: getMovie,
    }))
  );
};

const MustWatchMoviesPage = () => {
  const { mustWatches: movieIds } = useContext(MoviesContext);

  const movieQueries = useMustWatchMovieQueries(movieIds);

  if (movieQueries.some((query) => query.isLoading)) {
    return <Spinner />;
  }

  const movies = movieQueries.map((query) => {
    if (query.isError) {
      
      console.error(`Failed to fetch movie with id 
${query.queryKey[1].id}`);
      return null;
    }

    return {
      ...query.data,
      genre_ids: query.data.genres.map((genre) => genre.id),
    };
  }).filter(Boolean);

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => <RemoveFromMustWatches movie={movie} />}
    />
  );
};

export default MustWatchMoviesPage;
