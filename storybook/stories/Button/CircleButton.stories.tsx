import {storiesOf} from '@storybook/react-native';
import React from 'react';

import CircleButton from '../../../src/components/ui/buttons/LoginButton';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('kakao', () => <CircleButton logo="kakao" />)
  .add('naver', () => <CircleButton logo="naver" />)
  .add('google', () => <CircleButton logo="google" />);
