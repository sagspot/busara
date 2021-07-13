import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { baseurl } from '../../../../config';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    contact: '',
    country: '',
    county: '',
    constituency: '',
    ward: '',
    gender: '',
    education: '',
    surveyStarted: false,
    startTime: '',
    surveyEnded: false,
    endTime: '',
    user: '',
  });

  const [formCondition, setFormCondition] = useState({
    hasErrors: false,
    errors: {},
    submitting: false,
    submitSuccess: false,
    submitFail: false,
    submitError: {},
    page: 'bioData',
  });

  const {
    first_name,
    last_name,
    contact,
    country,
    county,
    constituency,
    ward,
    gender,
    education,
    startTime,
    endTime,
    user,
  } = values;

  const submittedData = {
    local_id: 8,
    start_time: startTime,
    location: {
      lon: 0.0,
      accuracy: 0.0,
      lat: 0.0,
    },
    ans: [
      {
        q_id: '1',
        q_ans: first_name,
        column_match: 'first_name',
      },
      {
        q_id: '2',
        q_ans: last_name,
        column_match: 'last_name',
      },
      {
        q_id: '3',
        q_ans: contact,
        column_match: 'contact',
      },
      {
        q_id: '4',
        q_ans: country,
        column_match: 'country',
      },
      {
        q_id: '5',
        q_ans: county,
        column_match: 'county',
      },
      {
        q_id: '6',
        q_ans: constituency,
        column_match: 'constituency',
      },
      {
        q_id: '7',
        q_ans: ward,
        column_match: 'ward',
      },
      {
        q_id: '11',
        q_ans: gender,
        column_match: 'gender',
      },
      {
        q_id: '10',
        q_ans: education,
        column_match: 'education',
      },
    ],
    user: user,
    survey_id: '<survey ID>',
    end_time: endTime,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormCondition({ ...formCondition, errors: {}, hasErrors: false });
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getProfile();

    setValues(() => {
      const formFields = {
        ...values,
        surveyEnded: true,
        endTime: moment().format(),
      };

      return formFields;
    });

    setFormCondition(() => {
      const formErrors = { ...formCondition, errors: validate(values) };
      if (Object.keys(formErrors.errors).length === 0) {
        setFormCondition({ ...formCondition, submitting: true });
        submitData(submittedData);
      } else {
        setFormCondition({
          ...formCondition,
          hasErrors: true,
          errors: formErrors.errors,
        });
      }
      return formErrors;
    });
  };

  const submitData = async (submittedData) => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));

      const response = await axios.post(
        `${baseurl}/api/v1/recruitment/answers/submit/`,
        {
          Headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            HTTP_VERSIONCODE: 200,
            VERSIONCODE: 200,
          },
          submittedData,
        }
      );
      console.log(response);

      setFormCondition({
        ...formCondition,
        submitting: false,
        submitSuccess: true,
      });
    } catch (err) {
      const submitErr = {
        errData: err.response.data.detail,
        errStatus: err.response.status,
      };
      setFormCondition({
        ...formCondition,
        submitting: false,
        submitFail: true,
        submitError: submitErr,
      });
    }
  };

  const getProfile = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));

      const response = await axios.get(`${baseurl}/api/v1/users/current-user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setValues({ ...values, user: response.data.id });
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };

  const nextClick = (e) => {
    e.preventDefault();
    setFormCondition({ ...formCondition, page: 'education' });
  };

  const previousClick = (e) => {
    e.preventDefault();
    setFormCondition({ ...formCondition, page: 'bioData' });
  };

  const startSurvey = (e) => {
    const startTimeDiv = e.currentTarget.nextElementSibling;
    const currentTime = moment().format('MMM DD, YYYY • HH:mm');
    startTimeDiv.innerText = `Start time ${currentTime}`;
    setValues({
      ...values,
      surveyStarted: true,
      startTime: moment().format(),
    });
    const formContainer = e.currentTarget.parentElement.nextElementSibling;
    const formInputs = formContainer.querySelectorAll('input, select, button');
    formInputs.forEach((formInput) => formInput.removeAttribute('disabled'));
  };

  const { submitSuccess } = formCondition;

  useEffect(() => {
    if (submitSuccess) callback();
  }, [submitSuccess]);

  const { hasErrors, errors, page, submitting, submitFail, submitError } =
    formCondition;

  return {
    handleChange,
    handleSubmit,
    nextClick,
    previousClick,
    hasErrors,
    errors,
    page,
    startSurvey,
    submitting,
    submitFail,
    submitError,
    values,
  };
};

export default useForm;
