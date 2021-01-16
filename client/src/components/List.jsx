import React from 'react';
import Item from './Item';

const List = ({ galleria }) => {
  const { gallery } = galleria;
  return (
    <div className="List">
      <ul>
        {gallery.map((picture) => <Item picture={picture} />)}
      </ul>
    </div>
  );
};

export default List;
