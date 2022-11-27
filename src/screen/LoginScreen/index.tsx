import React, {ReactElement} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logo from '../../assets/pngs/logo.png';
import ButtonContainer from './ButtonContainer';
import Divider from './Divider';

const LoginScreen = (): ReactElement => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Divider />
        <ButtonContainer style={styles.buttonContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 60,
  },
  container: {
    alignItems: 'center',
    height: 376,
    width: 274,
  },
  logo: {
    marginBottom: 119,
    width: 221,
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
