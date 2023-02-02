import {Token} from '../redux/AuthSlice';

const parseToken = (url: string): Token | null => {
  if (!url.includes('access=') || !url.includes('refresh=')) {
    return null;
  }
  const [accessToken, refreshToken] = url.split('access=')[1].split('refresh=');
  return {accessToken, refreshToken};
};

export default parseToken;
