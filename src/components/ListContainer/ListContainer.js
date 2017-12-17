import React, { Component } from 'react';
import List from 'components/List';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar';
import data from 'data/data.json';
import keyIndex from 'utils/keyIndex';
import { easeOut } from 'utils/easing';

import { setTime, setSelection } from 'redux/selectah/actions';
import { connect } from 'react-redux';

const dataWithIds = keyIndex(data);

const MAX_TIME = 200;

const advanceSelection = (chance) => {
  const rnd = Math.random() * 100;
  return rnd < chance;
};

const easing = easeOut(2);

const convertTimeRemainingToFraction = time => Math.abs(100 - time) / 100;

const animatedSelection = (time, selection) => {
  const easedTime = easing(convertTimeRemainingToFraction(time));
  const easedSelection = easedTime * selection;
  return Math.round(easedSelection);
};

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      timer: 0,
    };
    this.handleResetTimer = this.handleResetTimer.bind(this);
    this.handleTick = this.handleTick.bind(this);
  }

  handleResetTimer() {
    this.progressBar.innerComponent.handleRestart();
    const { progress } = this.progressBar.innerComponent.state;
    const newSelection = Math.random() * 30 + 50;
    this.props.setSelection(newSelection);
    this.setState({ timer: MAX_TIME, progress });
  }

  handleTick(percentageRemaining) {
    this.props.setTime(percentageRemaining);
  }

  render() {
    const { selection, time } = this.props;
    return (
      <div>
        <ProgressBar
          duration={50}
          onTick={this.handleTick}
          ref={(node) => {
            this.progressBar = node;
          }}
        />
        <List
          items={dataWithIds}
          selected={animatedSelection(time, selection)}
        />
        <p>{this.state.timer}</p>
        <p>{this.state.progress}</p>
        <Button onClick={this.handleResetTimer}>Spin</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selection: state.selectah.selection,
  time: state.selectah.time,
});

const mapDispatchToProps = dispatch => ({
  setTime: time => dispatch(setTime(time)),
  setSelection: selection => dispatch(setSelection(selection)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
