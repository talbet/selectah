import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

const List = ({ items, selected }) => (
  <div>
    <p>{selected}</p>
    <ul>
      {items.map((item, i) => (
        <ListItem
          key={item.id}
          active={i === selected}
          {...item}
        />
      ))}
    </ul>
  </div>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
  selected: PropTypes.number,
};

List.defaultProps = {
  selected: null,
};

export default List;
