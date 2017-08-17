import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Text from '../Text';
import styles from './ListItem.css';

const ListItem = ({ name }) =>
  (<li className={styles.listItem}>
    <Icon name="dot" />
    <Text info>{name}</Text>
  </li>);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

ListItem.defaultProps = {};

export default ListItem;
