/* eslint-disable react-native/no-color-literals */
import React, {Dispatch, SetStateAction} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Colors from '../../../constants/Color';

interface Props {
  text: string;
  selectedValue: string;
  onPress: Dispatch<SetStateAction<string>>;
}

const Button = ({text, selectedValue, onPress}: Props) => {
  const handlePress = () => {
    onPress(text);
  };
  return (
    <Pressable
      style={[styles.button, text === selectedValue && styles.selectedButton]}
      onPress={handlePress}>
      <Text
        style={[
          styles.buttonText,
          text === selectedValue && styles.selectedText,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.GREY_QUATERNARY,
    borderRadius: 24,
    borderWidth: 1,
    height: 40,
    marginRight: 12,
    width: 80,
  },
  buttonText: {
    color: Colors.GREY_QUATERNARY,
    fontFamily: 'Pretendard',
    lineHeight: 38,
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.GREY_SECONDARY,
  },
  selectedText: {
    color: 'white',
  },
});

export default Button;
