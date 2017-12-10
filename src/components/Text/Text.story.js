import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import Text from './Text';

storiesOf('Text', module)
  .addDecorator(withSmartKnobs)
  .add('Text: Example', () =>
    <Text></ Text>
  )
