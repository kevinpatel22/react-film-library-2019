<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> master

const Faves = ({ onFavClick }) => {

  const handleClick = (e) => {
    e.stopPropagation();
    onFavClick();
    if (isFave === false) {
      setIsFave(true);
      e.target.classList.add('remove_from_queue');
      e.target.classList.remove('add_to_queue');
      e.target.innerText = 'remove_from_queue';
    } else if (isFave === true) {
      setIsFave(false);
      e.target.classList.add('add_to_queue');
      e.target.classList.remove('remove_from_queue');
      e.target.innerText = 'add_to_queue';
    };
  };

  const [isFave, setIsFave] = useState(false);
  const faveClass = isFave ? 'remove_from_queue' : 'add_to_queue';


  return (
    <button className={`film-row-fave ${faveClass}`} >
      <i className="material-icons" onClick={handleClick}>add_to_queue </i>
    </button>
  );
};

export default Faves;