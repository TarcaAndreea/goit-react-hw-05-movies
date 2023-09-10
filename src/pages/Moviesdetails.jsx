import React from 'react';
import Informationmovie from 'components/Info-movie/informationmovie';
import Cast from 'components/Cast/Cast';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Reviews from 'components/Reviews/Reviews';

export default function Moviesdetails() {
  let { pathname } = useLocation();

  return (
    <div>
      <Informationmovie />
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to={`${pathname}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${pathname}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}
