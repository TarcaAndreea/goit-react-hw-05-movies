import React from 'react';
import Movies from 'components/Movies/Movies';
import Sidebar from 'components/Sidebar/Sidebar';

function MoviesPage() {
  return (
    <div>
      <Sidebar />
      <Movies />
    </div>
  );
}

export default MoviesPage;
