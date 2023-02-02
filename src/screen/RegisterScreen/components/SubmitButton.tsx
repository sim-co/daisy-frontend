import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Colors from '../../../constants/Color';

const SubmitButton = () => {
  const handlePress = () => {};

  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={handlePress}>
      <Text style={styles.text}>데이지 시작하기</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.GREY_QUATERNARY,
    borderRadius: 30,
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    width: 242,
  },
  pressed: {
    backgroundColor: Colors.GREY_SECONDARY,
  },
  text: {
    color: Colors.GREY_QUATERNARY,
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
  },
});

export default SubmitButton;
