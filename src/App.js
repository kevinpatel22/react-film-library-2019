import React, { useState } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import axios from 'axios';


const App = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [faves, setFaves] = useState([]);

  const handleFaveToggle = (film) => {
    let faveIn = faves.indexOf(film);
    if (faves.includes(film)) {
      faves.splice(faveIn, 1);
      setFaves([...faves]);
    } else {
      setFaves([...faves, film]);
    };
  };

  const handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;;
    axios.get(url)
    .then((response) => {
      setCurrentFilm(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };


  return(
    <div className = "film-library">
      {/* <FaveContext.Provider value={{ faves: faves, toggleFave: handleFaveToggle, faves: faves }} /> */}
      <FilmListing onFaveToggle={handleFaveToggle} handleFilmDetails={handleDetailsClick} faves={faves} />
      <FilmDetails film={currentFilm} />
    </div>
  );
};

export default App;
