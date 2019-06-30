import React, { useState, useRef } from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({ films, onFaveToggle }) => {
  const [filter, setFilter] = useState('all');
  const allFilrRef = useRef();
  const favesFilRef = useRef();

  const handleFilterClick = (e, selectFilter) => {
    e.stopPropagation();
    setFilter(selectFilter);
  };

  const filmRows = films.map((film, i) =>
    <FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} handleDetailsClick={handleDetailsClick} />
  );

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
  };


  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
        <div ref={allFilrRef} className={`film-list-filter${(filter === 'all') ? ' is-active' : ''}`} onClick={(e) => handleFilterClick(e, 'all')}>
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div ref={favesFilRef} className={`film-list-filter${(filter === 'faves') ? ' is-active' : ''}`} onClick={(e) => handleFilterClick(e, 'faves')}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      {filmRows}
    </div>
  );
};

export default FilmListing;
