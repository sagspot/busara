import { useState } from 'react';
import { userDetails } from '../../config';
import { authenticate, signin } from '../auth';
import { axiosGet } from '../utils/axios';

const useSignin = () => {
  const [values, setValues] = useState({
    ...userDetails,
    username: 'oliversagala1@gmail.com',
    password: '6tn$&47&ytw^K5',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    setLoading(true);

    try {
      const response = await signin(values);

      const access_token = response.data.access_token;
      authenticate(access_token, saveProfile);
    } catch (err) {
      const error =
        err.response.data.error === 'invalid_request' ||
        err.response.data.error === 'invalid_grant'
          ? err.response.data.error_description
          : err.response.data.error;

      setLoading(false);
      setError(error);
    }
  };

  const saveProfile = async () => {
    const { response = null, success } = await axiosGet({
      endpoint: '/api/v1/users/current-user',
    });
    setLoading(false);
    if (!success) return setError(response?.detail);

    const {
      name,
      email,
      phone_number: phoneNumber,
      approver_level: approverLevel,
    } = response.data;
    localStorage.setItem(
      'user_profile',
      JSON.stringify({ name, email, phoneNumber, approverLevel })
    );
    setRedirectToReferrer(true);
    return;
  };

  return {
    handleChange,
    handleSubmit,
    error,
    loading,
    redirectToReferrer,
    values,
  };
};

export default useSignin;
