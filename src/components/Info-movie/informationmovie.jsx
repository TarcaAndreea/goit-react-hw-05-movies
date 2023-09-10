import React, { useState, useEffect } from 'react';
import '../Info-movie/informationmovie.css';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/api';
import Buttonback from 'components/Button-back/Buttonback';
import Sidebar from 'components/Sidebar/Sidebar';
export default function Informationmovie() {
  const { movieId } = useParams();
  const [movie, setMovieDetails] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      setMovieDetails(response.data);
    });
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div>
      <Sidebar />
      <Buttonback />
      <div className="details">
        <img className="details__img" src={imageUrl} alt={movie.title} />
        <div className="details__info">
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
