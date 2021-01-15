import React from 'react';
import Item from './Item.jsx';

const List = (props) => {
  const { gallery } = props.gallerixa;
  return (
    <div>
      <ul>
        {gallery.map((picture) => <Item picture={picture} />)}
      </ul>
    </div>
  );
};

export default List;
