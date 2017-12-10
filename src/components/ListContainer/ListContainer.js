import React, { Component } from 'react';
import List from 'components/List';
import data from 'data/data.json';
import keyIndex from 'utils/keyIndex';

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
      <div>
        <List items={dataWithIds} />
      </div>
    );
  }
}

export default ListContainer;
