import { baseurl } from '../../config';

export const signin = (user) => {
  return fetch(`${baseurl}/api/v1/oauth/token/`, {
    method: 'POST',
    headers: {
      Accept: 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
    next();
  }
};
