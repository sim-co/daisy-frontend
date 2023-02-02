import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import Colors from '../../../constants/Color';
import Title from './Title';

const NameInput = () => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <Title text="닉네임" isRequired={true} />
      <TextInput
        style={styles.nameInput}
        placeholder="이름을 입력해주세요"
        onChangeText={setInput}
        value={input}
        maxLength={15}
      />
      <Text style={styles.counter}>{input.length}/15</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 72,
    position: 'relative',
  },
  counter: {
    bottom: 16,
    color: Colors.GREY_QUATERNARY,
    fontSize: 16,
    position: 'absolute',
    right: 0,
  },
  nameInput: {
    alignSelf: 'stretch',
    borderBottomColor: Colors.GREY_QUATERNARY,
    borderBottomWidth: 1,
    flex: 1,
    fontFamily: 'Pretendard',
    fontSize: 16,
  },
  title: {
    alignSelf: 'flex-start',
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
  },
});

export default NameInput;
