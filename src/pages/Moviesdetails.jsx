import React from 'react';
import Informationmovie from 'components/Info-movie/informationmovie';
import Cast from 'components/Cast/Cast';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Reviews from 'components/Reviews/Reviews';
import '../components/AditionalInfo/AditionalInfo-module.css';

export default function Moviesdetails() {
  let { pathname } = useLocation();

  return (
    <div className="aditional-info">
      <Informationmovie />
      <h3 className="aditional-info__title">Additional information</h3>
      <ul>
        <li className="aditional-item">
          <NavLink to={`${pathname}/cast`}>Cast</NavLink>
        </li>
        <li className="aditional-item">
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
