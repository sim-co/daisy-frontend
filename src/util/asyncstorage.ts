import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Token {
  accessToken: string | null;
  refreshToken: string | null;
}

export const storeToken = async (value: Token) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('token', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('token');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};
