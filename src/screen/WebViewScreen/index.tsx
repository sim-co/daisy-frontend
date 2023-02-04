import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {WebViewNavigation} from 'react-native-webview/lib/WebViewTypes';

import {AuthStackParamList} from '../../../App';
import {login} from '../../redux/AuthSlice';
import {useAppDispatch} from '../../redux/hooks';
import parseToken from '../../util/parseToken';

export type WebViewScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'WebView'
>;

const WebViewScreen = ({route, navigation}: WebViewScreenProps) => {
  const dispatch = useAppDispatch();
  const {oauthProvider} = route.params;
  const oauthUri = {
    naver: process.env.OAUTH_NAVER_URI,
    kakao: process.env.OAUTH_KAKAO_URI,
    google: process.env.OAUTH_GOOGLE_URI,
  }[oauthProvider];

  const handleNavigationStateChange = (naviagtionState: WebViewNavigation) => {
    if (naviagtionState.url.includes('access')) {
      const tokens = parseToken(naviagtionState.url);
      if (!tokens) {
        Alert.alert('로그인에 실패했습니다');
        navigation.navigate('Login');
        return;
      }
      dispatch(
        login({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: `${oauthUri}`}}
        cacheEnabled={false}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
