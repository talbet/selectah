import React from 'react';
import PropTypes from 'prop-types';
import Svg from 'react-inlinesvg';
import styles from './Icon.css';

const getIconPath = (name) => {
  const lookup = {
    dot: 'static/icons/dot.svg',
    arrowRight: 'static/icons/arrow-right.svg',
    questionMark: 'static/icons/question.svg',
  };
  return lookup[name];
};

const Icon = ({ name }) =>
  (<div className={styles.container}>
    <Svg src={getIconPath(name)} />
  </div>);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {};

export default Icon;
