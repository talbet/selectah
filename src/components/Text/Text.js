import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledBy from 'styled-by';
import includes from 'lodash/includes';
import { color } from 'styles/variables';

const BaseText = styled.span`
  ${styledBy({
    format: {
      display4: `
        font-size: 112px;;
        line-height: 128px;
        font-weight: 100;
        color: ${color.secondary};
      `,
      display3: `
        font-size: 56px;
        line-height: 64px;
        font-weight: 400;
        color: ${color.secondary};
      `,
      display2: `
        font-size: 45px;
        line-height: 52px;
        font-weight: 400;
        color: ${color.secondary};
      `,
      display1: `
        font-size: 34px;
        line-height: 40px;
        font-weight: 400;
        color: ${color.secondary};
      `,
      headline: `
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
        color: ${color.primary};
      `,
      title: `
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: ${color.primary};
      `,
      subheading: `
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: ${color.primary};
      `,
      body2: `
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: ${color.primary};
      `,
      body1: `
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: ${color.primary};
      `,
      caption: `
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        color: ${color.secondary};
      `,
      button: `
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        color: ${color.primary};
      `,
    },
  })};
`;

const validTags = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Text = ({ children, format, tag }) => {
  const validTag = includes(validTags, tag) ? tag : 'span';
  const TaggedText = BaseText.withComponent(validTag);
  return <TaggedText format={format}>{children}</TaggedText>;
};

Text.propTypes = {
  children: PropTypes.node,
  format: PropTypes.string,
  tag: PropTypes.string,
};

Text.defaultProps = {
  children: null,
  format: 'body1',
  tag: 'span',
};

export default Text;
