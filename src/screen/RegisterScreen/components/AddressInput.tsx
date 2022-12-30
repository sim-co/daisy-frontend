import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AddressPicker from './AddressPicker';

const AddressInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>거주지*</Text>
      <AddressPicker />
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

export default AddressInput;
