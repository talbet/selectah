import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledBy from 'styled-by';
import { color as colors } from 'styles/variables';
import Dot from './icons/dot.svg';
import ArrowRight from './icons/arrow-right.svg';
import Question from './icons/question.svg';

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;

  & > svg {
    ${styledBy('color', props => `fill: ${colors[props.color]}`)};
    height: 10px;
    width: auto;
  }
`;

const icons = {
  dot: Dot,
  arrowRight: ArrowRight,
  questionMark: Question,
};

const Icon = ({ name, color }) => {
  const SelectedIcon = icons[name] || Question;
  return (
    <Container color={color}>
      <SelectedIcon />
    </Container>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Icon.defaultProps = {
  color: 'primary',
};

export default Icon;
