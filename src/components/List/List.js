import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';
import ListItem from '../ListItem';

const List = ({ items }) =>
  (<div className={styles.container}>
    <ul className={styles.list}>
      {items.map(item => <ListItem {...item} />)}
    </ul>
  </div>);

List.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

List.defaultProps = {};

export default List;
