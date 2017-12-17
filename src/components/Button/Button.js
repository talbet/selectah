import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from 'styles/variables';

const StyledButton = styled.button`
  border: 2px solid ${color.primary};
  background: none;
  color: inherit;
  color: ${color.primary};
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0.3rem 1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  &:active {
    background: ${color.primary};
    color: ${color.background};
  }
`;

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;
