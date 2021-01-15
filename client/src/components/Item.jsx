import React from 'react';

const Item = (props) => {
  const { photoUrl, photoDescription, photoName } = props.picture;
  return (
    <div>
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
