import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';

import LoginButton from '../../../components/ui/buttons/LoginButton';

interface IButtonContainer {
  style?: StyleProp<TextStyle>;
}

const ButtonContainer = ({style}: IButtonContainer): ReactElement => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <LoginButton logo="kakao" />
      <LoginButton logo="naver" />
      <LoginButton logo="google" />
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
