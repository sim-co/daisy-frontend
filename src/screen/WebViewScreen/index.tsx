import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

import {RootStackParamList} from '../../../App';

export type WebViewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'WebView'
>;

const WebViewScreen = ({route}: WebViewScreenProps) => {
  const {oauthProvider} = route.params;
  const oauthUri = {
    naver: process.env.OAUTH_NAVER_URI,
    kakao: process.env.OAUTH_KAKAO_URI,
    google: process.env.OAUTH_GOOGLE_URI,
  }[oauthProvider];

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: `${oauthUri}`}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
