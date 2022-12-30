import React from 'react';
import {StyleSheet, View} from 'react-native';

import Colors from '../../../constants/Color';
import BirthPicker from './BirthPicker';
import Title from './Title';

const BirthInput = () => {
  return (
    <View style={styles.container}>
      <Title text="생년월일" isRequired={true} />
      <BirthPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 72,
  },
  required: {color: Colors.ORANGE_PRIMARY, fontSize: 20},
  text: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
  },
  title: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
});

export default BirthInput;
