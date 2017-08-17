import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Text.css';

const Text = (props) => {
  const { children, className, comment, info, ...restProps } = props;
  const classes = classNames(styles.text, className, {
    [styles.comment]: comment,
    [styles.info]: info,
  });

  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  comment: PropTypes.bool,
  info: PropTypes.bool,
  className: PropTypes.string,
};

Text.defaultProps = {
  children: '',
  comment: false,
  info: false,
  className: '',
};

export default Text;
