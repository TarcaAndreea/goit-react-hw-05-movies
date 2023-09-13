import React, { useEffect, useState } from 'react';
import '../Home/Home-module.css';
import Sidebar from 'components/Sidebar/Sidebar';
import { getTrendingMovies } from 'api/api';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
export default function HomeContent() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error ', error);
      });
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <h2 className="main__title">Trending today</h2>
      <ul className="main__list">
        {movies.map(movie => (
          <li className="main__item" key={movie.id}>
            <i className="fa fa-film"></i>{' '}
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
