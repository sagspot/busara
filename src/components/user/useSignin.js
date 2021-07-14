import axios from 'axios';
import { useState } from 'react';
import { baseurl } from '../../config';
import { authenticate, signin } from '../auth';

const useSignin = () => {
  const [values, setValues] = useState({
    grant_type: 'password',
    client_id: 'zVs3J7FZupB3TLPskQOy1xHLwYTRkzUSf2rdTDCu',
    username: 'oliversagala1@gmail.com',
    password: '6tn$&47&ytw^K5',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    setError(false);
  };

  const { grant_type, client_id, username, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await signin({
        grant_type,
        client_id,
        username,
        password,
      });

      const access_token = response.data.access_token;
      authenticate(access_token, () => {
        saveProfile();
      });
    } catch (err) {
      const error =
        err.response.data.error === 'invalid_request' || 'invalid_grant'
          ? err.response.data.error_description
          : err.response.data.error;

      setLoading(false);
      setError(error);
    }
  };

  const saveProfile = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));

      const response = await axios.get(`${baseurl}/api/v1/users/current-user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem('user_profile', JSON.stringify(response.data));
      setLoading(false);
      setSuccess(true);
      setRedirectToReferrer(true);
      return;
    } catch (err) {
      console.log(err.data);
    }
  };

  return {
    handleChange,
    handleSubmit,
    error,
    loading,
    redirectToReferrer,
    success,
    values,
  };
};

export default useSignin;
