import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

storiesOf('Test', module)
  .add('with test', () => (

    <Text>{text('Button text', 'Hello Button')}</Text>

  ))
  .add('with some emoji test', () => (

    <Text>😀 😎 👍 💯</Text>

  ));
