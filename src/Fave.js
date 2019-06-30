
import React from 'react';

const Faves = ({ onFavClick }) => {

  const handleClick = (e) => {
    e.stopPropagation();
    onFavClick();
  };

  return (
    <div className='film-row-fave add_to_queue' >
      <p className="material-icons" onClick={handleClick} > + </p>
    </div>
  );
};

export default Faves;