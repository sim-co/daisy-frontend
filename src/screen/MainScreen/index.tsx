/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {logout} from '../../redux/AuthSlice';
import {useAppDispatch} from '../../redux/hooks';

const MainScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>메인스크린</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(logout());
        }}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    height: 30,
    width: 80,
  },
});
export default MainScreen;
