import axios from 'axios';
import qs from 'qs';

import { baseurl } from '../../config';

export const signin = async (user) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(user),
    url: `${baseurl}/api/v1/oauth/token/`,
  };
  const response = await axios(options);
  return response;
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') return false;

  if (localStorage.getItem('access_token'))
    return JSON.parse(localStorage.getItem('access_token'));

  return false;
};
