import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledBy from 'styled-by';
import { color } from 'styles/variables';
import Icon from 'components/Icon';
import Text from 'components/Text';

const Item = styled.li`
  ${styledBy('active', `background: ${color.secondary};`)};
`;

const ListItem = ({ name, active }) => (
  <Item active={active}>
    <Icon name="arrowRight" />
    <Text>{name}</Text>
  </Item>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ListItem.defaultProps = {
  active: false,
};

export default ListItem;
