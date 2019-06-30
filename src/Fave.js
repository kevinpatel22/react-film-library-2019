import React, { useState } from 'react';

const Fave = ({ onFaveToggle }) => {
  const handleClick = (e) => {
    onFaveToggle();
  };

  return (
    <div className="film-row-fave add_to_queue">
      <i className="material-icons" onClick={handleClick}>+</i>
    </div>
  );
};

export default Fave;