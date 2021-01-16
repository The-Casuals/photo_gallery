/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Item = ({ picture }) => {
  const { photoUrl, photoDescription, photoName } = picture;
  return (
    <div className="Item">
      <li>
        <img
          className="Picture"
          src={photoUrl}
          alt={photoDescription}
        />
        <div className="Picture-name">
          {photoName}
        </div>
        <div className="Picture-description">
          {photoDescription}
        </div>
      </li>
    </div>
  );
};

export default Item;
