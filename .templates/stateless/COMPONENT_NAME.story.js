import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import COMPONENT_NAME from './COMPONENT_NAME';

storiesOf('COMPONENT_NAME', module)
  .addDecorator(withSmartKnobs)
  .add('COMPONENT_NAME: Example', () =>
    <COMPONENT_NAME></ COMPONENT_NAME>
  )
