import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AddressInput from './components/AddressInput';
import BirthInput from './components/BirthInput';
import GenderInput from './components/GenderInput';
import ProfileImage from './components/ProfileImage';
import SubmitButton from './components/SubmitButton';
import NameInput from './components/TextInput';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <ProfileImage />
        <NameInput />
        <GenderInput />
        <AddressInput />
        <BirthInput />
        <SubmitButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
});

export default RegisterScreen;
