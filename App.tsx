/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Config from 'react-native-config';

import Colors from './src/constants/Color';
import LoginScreen from './src/screen/LoginScreen';
import StorybookUI from './storybook';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: Colors.GREY_PRIMARY,
    flex: 1,
  },
});

export default Config.LOAD_STORYBOOK === 'false' ? StorybookUI : App;
