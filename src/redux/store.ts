import {configureStore} from '@reduxjs/toolkit';

import {getToken} from '../util/storage';
import authReducer from './AuthSlice';

const token = getToken();
const preloadedAuth = {
  auth: {
    refreshToken: token.refreshToken,
    accessToken: token.accessToken,
    isAuthenticated: !!token.refreshToken && !!token.accessToken,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: preloadedAuth,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
