import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Token {
  accessToken: string | null;
  refreshToken: string | null;
}
export interface AuthState extends Token {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Token>) => {
      if (!action.payload.accessToken || !action.payload.refreshToken) {
        return state;
      }
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
