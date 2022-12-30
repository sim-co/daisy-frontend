import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../../constants/Color';
import Button from './Button';

const GenderInput = () => {
  const [gender, setGender] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>성별*</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={setGender} selectedValue={gender} text="남성" />
        <Button onPress={setGender} selectedValue={gender} text="여성" />
      </View>
    </View>
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
  buttonContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    marginTop: 8,
  },
  buttonText: {
    color: Colors.GREY_QUATERNARY,
    fontFamily: 'Pretendard',
    lineHeight: 38,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 72,
    position: 'relative',
  },
  title: {
    alignSelf: 'flex-start',
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
  },
});

export default GenderInput;
