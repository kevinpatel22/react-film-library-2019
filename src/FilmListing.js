import React, { useState, useRef } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';

const FilmListing = ({ faves, onFaveToggle, handleFilmDetails }) => {
  const [filter, setFilter] = useState('all');
  const allFilRef = useRef();
  const favesFilRef = useRef();

  const handleFilterToggle = (selectFilter) => {
    setFilter(selectFilter);
  };

  const allFilms = TMDB.films;
  const films = filter === 'faves' ? faves : allFilms;
  const filmRows = films.map((film) => 
    <FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} faves={faves} handleFilmDetails={handleFilmDetails} />
  );

  const filmRows = films.map((film, i) =>
    <FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} handleDetailsClick={handleDetailsClick} />);


  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <nav className="film-list-filters">
        <button ref={allFilRef} className="film-list-filter" onClick={() => { handleFilterToggle('all') }}>
          ALL
          <span className="section-count">{allFilms.length}</span>
        </button>
        <button ref={favesFilRef} className="film-list-filter" onClick={() => { handleFilterToggle('faves') }}>
          FAVES
          <span className="section-count">{faves.length}</span>
        </button>
      </nav>
      {filmRows}
    </div>
  );
};

export default FilmListing;
