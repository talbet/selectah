import React, { Component } from 'react';
import styles from './ListContainer.css';
import data from '../../data/data.json';
import List from '../List';
import keyIndex from '../../utils/keyIndex';

const dataWithIds = keyIndex(data);

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <List items={dataWithIds} />
      </div>
    );
  }
}

export default ListContainer;
