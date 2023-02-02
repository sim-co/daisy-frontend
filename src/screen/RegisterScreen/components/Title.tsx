import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../../constants/Color';

interface Props {
  text: string;
  isRequired: boolean;
}

const Title = ({text, isRequired}: Props) => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{text}</Text>
      {isRequired && <Text style={styles.required}>*</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Title;
