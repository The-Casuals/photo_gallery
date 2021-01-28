import React from 'react';
import PropTypes from 'prop-types';
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

List.propTypes = {
  galleria: PropTypes.objectOf(PropTypes.array).isRequired,
};
export default List;
