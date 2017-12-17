import React, { Component } from 'react';
import List from 'components/List';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar';
import data from 'data/data.json';
import keyIndex from 'utils/keyIndex';

const dataWithIds = keyIndex(data);

const MAX_TIME = 200;

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      timer: 0,
      selected: null,
    };
    this.handleResetTimer = this.handleResetTimer.bind(this);
  }

  handleResetTimer() {
    this.progressBar.innerComponent.handleRestart();
    const { progress } = this.progressBar.innerComponent.state;
    this.setState({ timer: MAX_TIME, progress });
  }

  render() {
    return (
      <div>
        <ProgressBar
          duration={50}
          onRender={x => console.log(x)}
          ref={(node) => {
            this.progressBar = node;
          }}
        />
        <List items={dataWithIds} selected={this.state.selected} />
        <p>{this.state.timer}</p>
        <p>{this.state.progress}</p>
        <Button onClick={this.handleResetTimer}>Spin</Button>
      </div>
    );
  }
}

export default ListContainer;
