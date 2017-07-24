import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.css';

const ListItem = ({ name }) =>
  (<li className={styles.listItem}>
    {name}
  </li>);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

ListItem.defaultProps = {};

export default ListItem;
