import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAnimationFrame from 'react-animation-frame';
import styled from 'styled-components';
import { color } from 'styles/variables';

const StyledProgressBar = styled.div`
  background: ${color.secondary};
  min-height: 10px;
  margin: 4px 0;
`;

const StyledText = styled.div`
  color: ${color.background};
  font-size: 8px;
  padding-left: 4px;
`;

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.props.endAnimation();
    this.state = {
      percentRemaining: 100,
    };
  }
  onAnimationFrame(time) {
    if (this.startTime === undefined) {
      this.startTime = time;
    }

    const progress = this.getProgress(time);
    const percentRemaining = Math.abs(progress - 100);

    if (percentRemaining !== this.state.percentRemaining) {
      this.bar.style.width = `${percentRemaining}%`;
      this.props.onTick(percentRemaining);
      this.setState({
        percentRemaining,
      });
    }
  }

  // TODO: Reduce side effects
  getProgress(time) {
    const { duration } = this.props;
    const delta = time - this.startTime;
    const progress = Math.round(delta / duration);

    if (progress >= 100) {
      this.props.endAnimation();
      return 100;
    }

    return progress;
  }

  handleRestart() {
    delete this.startTime;
    this.props.startAnimation();
    this.setState({
      percentRemaining: 100,
    });
  }

  render() {
    return (
      <div className="timer">
        <StyledProgressBar
          innerRef={(node) => {
            this.bar = node;
          }}
        >
          <StyledText format="caption">
            {this.state.percentRemaining}
          </StyledText>
        </StyledProgressBar>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  duration: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  startAnimation: PropTypes.func.isRequired,
  endAnimation: PropTypes.func.isRequired,
};

ProgressBar.defaultProps = {};

export default ReactAnimationFrame(ProgressBar);
