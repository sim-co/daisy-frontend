import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {WebViewNavigation} from 'react-native-webview/lib/WebViewTypes';

import {AuthStackParamList} from '../../../App';
import {login} from '../../redux/AuthSlice';
import {useAppDispatch} from '../../redux/hooks';
import {storeToken} from '../../util/asyncstorage';

export type WebViewScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'WebView'
>;

const WebViewScreen = ({route}: WebViewScreenProps) => {
  const dispatch = useAppDispatch();
  const {oauthProvider} = route.params;
  const oauthUri = {
    naver: process.env.OAUTH_NAVER_URI,
    kakao: process.env.OAUTH_KAKAO_URI,
    google: process.env.OAUTH_GOOGLE_URI,
  }[oauthProvider];

  const handleNavigationStateChange = (naviagtionState: WebViewNavigation) => {
    const url = naviagtionState.url;
    if (!url.includes('access=')) {
      return;
    }
    const [accessToken, refreshToken] = url
      .split('access=')[1]
      .split('refresh=');
    storeToken({accessToken, refreshToken});
    dispatch(login({accessToken, refreshToken}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: `${oauthUri}`}}
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
