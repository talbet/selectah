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
    this.state = {
      progress: 0,
    };
    this.props.endAnimation();
  }
  onAnimationFrame(time) {
    if (this.startTime === undefined) {
      this.startTime = time;
    }
    const delta = time - this.startTime;
    const { duration } = this.props;
    let progress = Math.round(delta / duration);
    this.bar.style.width = `${progress}%`;

    if (progress >= 100) {
      this.props.endAnimation();
      progress = 100;
    }

    this.setState({
      progress,
    });
  }

  handleRestart() {
    delete this.startTime;
    this.props.startAnimation();
  }

  render() {
    this.props.onRender(this.state.progress);
    return (
      <div className="timer">
        <StyledProgressBar
          innerRef={(node) => {
            this.bar = node;
          }}
        >
          <StyledText format="caption">{this.state.progress}</StyledText>
        </StyledProgressBar>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  duration: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {};

export default ReactAnimationFrame(ProgressBar);
