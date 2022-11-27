import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';

import CircleButton from '../../../components/ui/buttons/CircleButton';

interface IButtonContainer {
  style?: StyleProp<TextStyle>;
}

const ButtonContainer = ({style}: IButtonContainer): ReactElement => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <CircleButton logo="kakao" />
      <CircleButton logo="naver" />
      <CircleButton logo="google" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ButtonContainer;
