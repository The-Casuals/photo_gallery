/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Header = ({ galleria }) => {
  const {
    title, reviews, rating, isSuperhost, location,
  } = galleria;
  const { city, state, country } = location;
  return (
    <div className="header">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <h2>
        <div className="rating">
          {parseFloat(rating).toFixed(2)}
          {`(${reviews})`}
        </div>
        ·
        <div className="superhost">
          {/* eslint-disable-next-line react/jsx-fragments */}
          {isSuperhost ? 'Superhost' : <></>}
        </div>
        ·
        <div className="location">
          {`${city}, ${state}, ${country}`}
        </div>
        Share    Save
      </h2>
    </div>
  );
};

export default Header;
