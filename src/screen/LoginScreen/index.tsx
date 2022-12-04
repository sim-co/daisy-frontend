import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {ReactElement} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {RootStackParamList} from '../../../App';
import logo from '../../assets/pngs/logo.png';
import ButtonContainer from './ButtonContainer';
import Divider from './Divider';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const LoginScreen = ({}: LoginScreenProps): ReactElement => {
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
