import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BirthPicker from './BirthPicker';

const BirthInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>생년월일*</Text>
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
  title: {
    alignSelf: 'flex-start',
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
  },
});

export default BirthInput;
