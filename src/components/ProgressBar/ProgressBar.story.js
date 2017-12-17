import React from 'react';
import { storiesOf } from '@storybook/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import ProgressBar from './ProgressBar';

storiesOf('ProgressBar', module)
  .addDecorator(withSmartKnobs)
  .add('ProgressBar: Example', () =>
    <ProgressBar></ ProgressBar>
  )
