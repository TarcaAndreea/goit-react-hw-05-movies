import React from 'react';
import '../Sidebar/sidebar-module.css';
export default function Sidebar() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__item">Home</li>
        <li className="header__item">Movies</li>
      </ul>
    </div>
  );
}
