import React, { useState } from 'react';
import '../Movies/movies-module.css';
import { searchMovies } from 'api/api';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await searchMovies(query);
    setMovies(results.data.results);
  };

  return (
    <div className="movies-page">
      <input
        className="movie-input"
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
