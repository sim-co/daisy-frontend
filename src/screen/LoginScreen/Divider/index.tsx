import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../../constants/Color';

const Divider = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.divider} />
      <Text style={styles.text}>간편로그인</Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: Colors.GREY_SECONDARY,
    height: 1,
    width: 90,
  },
  text: {
    color: Colors.GREY_TERTIANARY,
    fontSize: 16,
  },
  wrapper: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Divider;
