import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Config from 'react-native-config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import WebViewScreen from './src/screen/WebViewScreen';
import StorybookUI from './storybook';

export type RootStackParamList = {
  Login: undefined;
  WebView: {oauthProvider: 'naver' | 'kakao' | 'google'};
  Register: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="WebView" component={WebViewScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Config.LOAD_STORYBOOK === 'false' ? StorybookUI : App;
