import {MMKV} from 'react-native-mmkv';

import {Token} from '../redux/AuthSlice';

const storage = new MMKV();

export const storeToken = (value: Token) => {
  storage.set('token', JSON.stringify(value));
};

export const getToken = (): Token => {
  const jsonObject = storage.getString('token');
  if (!jsonObject) {
    return {
      accessToken: null,
      refreshToken: null,
    };
  }
  return JSON.parse(jsonObject);
};
