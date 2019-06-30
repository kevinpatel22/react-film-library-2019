<<<<<<< HEAD
=======

>>>>>>> 01-setup
import React from 'react';

const Faves = ({ onFavClick }) => {

  const handleClick = (e) => {
    e.stopPropagation();
    onFavClick();
  };
<<<<<<< HEAD
=======

>>>>>>> 01-setup
  return (
    <div className='film-row-fave add_to_queue' >
      <p className="material-icons" onClick={handleClick} > + </p>
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 01-setup
export default Faves;