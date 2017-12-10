import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

const List = ({ items }) => (
  <div>
    <ul>
      {items.map(item => <ListItem key={item.id} {...item} />)}
    </ul>
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
};

List.defaultProps = {};

export default List;
