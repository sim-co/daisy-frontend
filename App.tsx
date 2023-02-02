import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Config from 'react-native-config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {login} from './src/redux/AuthSlice';
import {useAppDispatch, useAppSelector} from './src/redux/hooks';
import {store} from './src/redux/store';
import LoginScreen from './src/screen/LoginScreen';
import MainScreen from './src/screen/MainScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import WebViewScreen from './src/screen/WebViewScreen';
import {getToken, storeToken} from './src/util/storage';
import StorybookUI from './storybook';

export type AuthStackParamList = {
  Login: undefined;
  WebView: {oauthProvider: 'naver' | 'kakao' | 'google'};
  Register: undefined;
};

export type UserStackParamList = {
  Main: undefined;
};

store.subscribe(() => {
  const {
    auth: {accessToken, refreshToken},
  } = store.getState();

  if (accessToken && refreshToken) {
    storeToken({accessToken, refreshToken});
  }
});

const App = () => {
  const UserStack = createNativeStackNavigator<UserStackParamList>();
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();
  const {isAuthenticated} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (token) {
        dispatch(login(token));
      }
    })();
  }, [dispatch]);

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
