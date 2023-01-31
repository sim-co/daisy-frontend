import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Config from 'react-native-config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useAppSelector} from './src/redux/hooks';
import LoginScreen from './src/screen/LoginScreen';
import MainScreen from './src/screen/MainScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import WebViewScreen from './src/screen/WebViewScreen';
import StorybookUI from './storybook';

export type AuthStackParamList = {
  Login: undefined;
  WebView: {oauthProvider: 'naver' | 'kakao' | 'google'};
  Register: undefined;
};

export type UserStackParamList = {
  Main: undefined;
};

const App = () => {
  const UserStack = createNativeStackNavigator<UserStackParamList>();
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();
  const {isAuthenticated} = useAppSelector(state => state.auth);

  console.log('isAuthenticated', isAuthenticated);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {isAuthenticated ? (
          <UserStack.Navigator initialRouteName="Main">
            <UserStack.Screen name="Main" component={MainScreen} />
          </UserStack.Navigator>
        ) : (
          <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="WebView" component={WebViewScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
          </AuthStack.Navigator>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Config.LOAD_STORYBOOK === 'false' ? StorybookUI : App;
