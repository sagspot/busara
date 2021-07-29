import axios from 'axios';
import { baseurl } from '../../config';

const token = JSON.parse(localStorage.getItem('access_token'));

export const axiosGet = async ({ endpoint }) => {
  let responseObj;
  try {
    const response = await axios.get(baseurl + endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    responseObj = { response, success: true };
  } catch (err) {
    console.error(err.response);
    const error = err.response.data;
    responseObj = { response: error, success: false };
  } finally {
    return responseObj;
  }
};
