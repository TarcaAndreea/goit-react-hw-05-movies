import React from 'react';
import '../Sidebar/sidebar-module.css';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__item">
          {' '}
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
}
