// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieService';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={movie.Poster} alt={movie.Title} className="w-full" />
      <h1 className="text-3xl font-bold mt-4">{movie.Title}</h1>
      <p className="mt-2">{movie.Plot}</p>
      <p className="mt-2"><strong>Cast:</strong> {movie.Actors}</p>
      <p className="mt-2"><strong>Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
