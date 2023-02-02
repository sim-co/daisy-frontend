import React from 'react';
import {StyleSheet, View} from 'react-native';

import AddressPicker from './AddressPicker';
import Title from './Title';

const AddressInput = () => {
  return (
    <View style={styles.container}>
      <Title text="거주지" isRequired={true} />
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
