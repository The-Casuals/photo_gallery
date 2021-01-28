import React from 'react';
import PropTypes from 'prop-types';

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

Item.propTypes = {
  picture: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Item;
