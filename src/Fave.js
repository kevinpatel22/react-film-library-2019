import React, { useState } from 'react';

const Faves = ({ onFavClick }) => {

  const handleClick = (e) => {
    e.stopPropagation();
    onFavClick();
  };

  const [isFave, setIsFave] = useState(false);
  const faveClass = isFave ? 'remove_from_queue' : 'add_to_queue';

  return (
    <button className={`film-row-fave ${faveClass}`} onClick={handleClick}>
      <i className="material-icons">+</i>
    </button>
  );
};

export default Faves;