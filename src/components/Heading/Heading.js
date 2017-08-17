import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.css';

const Heading = ({}) => (
  <div className={styles.container}>Heading</div>
);

// class Heading extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div className={styles.container}>Heading</div>;
//   }
// }

Heading.propTypes = {};

Heading.defaultProps = {};

export default Heading;
