import React, { useState } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {
  const initialFilms = TMDB.films;
  const [films, setFilms] = useState(initialFilms);
  const [faves, setFaves] = useState([]);

  const onFaveToggle = (film) => {
    let favesCp = faves.slice();
    let faveIn = faves.indexOf(film);

    if (faves.includes(film)) {
      favesCp.splice(faveIn, 1);
      setFaves(favesCp);
    } else {
      setFaves([...favesCp, film]);
    }
  }

  return(
    <div className = "film-library" >
      <FilmListing films={films} onFaveToggle={onFaveToggle} />
      <FilmDetails films={films} />
    </div>
  );
}

export default App;
