import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './COMPONENT_NAME.css';

const COMPONENT_NAME = ({}) => (
  <div className={styles.container}>COMPONENT_NAME</div>
);

// class COMPONENT_NAME extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div className={styles.container}>COMPONENT_NAME</div>;
//   }
// }

COMPONENT_NAME.propTypes = {};

COMPONENT_NAME.defaultProps = {};

export default COMPONENT_NAME;
