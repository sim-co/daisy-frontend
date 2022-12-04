import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Config from 'react-native-config';

import Colors from './src/constants/Color';
import LoginScreen from './src/screen/LoginScreen';
import WebViewScreen from './src/screen/WebViewScreen';
import StorybookUI from './storybook';

export type RootStackParamList = {
  Login: undefined;
  WebView: {oauthProvider: 'naver' | 'kakao' | 'google'};
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="WebView" component={WebViewScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
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
