import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { baseurl } from '../../../../config';
import { useRouteMatch } from 'react-router-dom';

const useForm = (callback, validate) => {
  const id = parseInt(useRouteMatch().params.id);
  useEffect(() => {
    getFormFields(id);
  }, []);

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
    surveyID: '',
  });

  const [formCondition, setFormCondition] = useState({
    hasErrors: false,
    submitting: false,
    submitFail: false,
    submitError: {},
    page: 'bioData',
    pageOne: [],
    pageTwo: [],
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
    surveyID,
    user,
  } = values;

  const dataSchema = [
    {
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
      survey_id: surveyID,
      end_time: endTime,
    },
  ];

  const getFormFields = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.get(
        `${baseurl}/api/v1/recruitment/forms/?node_type=Both`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const formArr = await response.data.forms.filter(
        (form) => form.id === id
      );
      const [details] = formArr;
      const [page1, page2] = details.pages;
      const [page1Qtns] = page1.sections;
      const [page2Qtns] = page2.sections;
      setValues({ ...values, surveyID: details.id });

      setFormCondition({
        ...formCondition,
        pageOne: page1Qtns.questions,
        pageTwo: page2Qtns.questions,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const startSurvey = (e) => {
    const startTimeDiv = e.currentTarget.nextElementSibling;
    const currentTime = moment().format('MMM DD, YYYY • HH:mm');
    startTimeDiv.innerText = `Start time ${currentTime}`;

    const profileID = JSON.parse(localStorage.getItem('user_profile')).id;

    setValues({
      ...values,
      surveyStarted: true,
      startTime: moment().format(),
      user: profileID,
    });

    const formContainer = e.currentTarget.parentElement.nextElementSibling;
    const formInputs = formContainer.querySelectorAll('input, select, button');
    formInputs.forEach((formInput) => formInput.removeAttribute('disabled'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const errorContainer = e.currentTarget
      .closest('.my-form-input')
      .querySelector('.error');
    if (!errorContainer.classList.contains('d-none'))
      errorContainer.classList.add('d-none');

    setFormCondition({ ...formCondition, hasErrors: false, submitFail: false });
    setValues({ ...values, [name]: value });
  };

  const nextClick = (e) => {
    e.preventDefault();
    if (!formCondition.hasErrors) {
      setFormCondition({ ...formCondition, page: 'education' });
    }
  };

  const previousClick = (e) => {
    e.preventDefault();
    setFormCondition({ ...formCondition, page: 'bioData' });
  };

  const handleBlur = (e) => {
    const emptyValue = !e.currentTarget.value;
    const errorContainer = e.currentTarget
      .closest('.my-form-input')
      .querySelector('.error');
    if (emptyValue) {
      errorContainer.classList.remove('d-none');
      setFormCondition({ ...formCondition, hasErrors: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues(() => {
      const formFields = {
        ...values,
        surveyEnded: true,
        endTime: moment().format(),
      };

      return formFields;
    });

    const formInputs = e.currentTarget.querySelectorAll('input, select');
    formInputs.forEach((formInput) => {
      const emptyInput = formInput.value.length === 0;
      if (emptyInput) setFormCondition({ ...formCondition, hasErrors: true });
    });

    setFormCondition(() => {
      const formErrors = {
        ...formCondition,
        submitFail: false,
      };

      if (!formCondition.hasErrors) {
        setFormCondition({ ...formCondition, submitting: true });
        const data = [{ ...dataSchema[0], end_time: moment().format() }];
        submitDat(data);
      }
      return formErrors;
    });
  };

  const submitDat = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));
      const response = await axios.post(
        `${baseurl}/api/v1/recruitment/answers/submit/`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            // HTTP_VERSIONCODE: 200,
            // VERSIONCODE: 200,
          },
        }
      );
      console.log(response);

      setFormCondition({
        ...formCondition,
        submitting: false,
      });
      callback();
    } catch (err) {
      const response = err.response;
      console.log(response.status, response.data.errors[0].errors[0]);

      let errData =
        response.status === 401
          ? response.data.detail
          : response.data.errors[0].errors[0];

      if (response.status === 400) {
        let firstErrStr = errData.split(', detail').shift();
        let lastErrStr = errData
          .split("string='")
          .pop()
          .split("', code")
          .shift();
        errData = firstErrStr + ', ' + lastErrStr;
      }

      const submitErr = {
        errData,
        errStatus: response.status,
      };
      setFormCondition({
        ...formCondition,
        submitting: false,
        submitFail: true,
        submitError: submitErr,
      });
    }
  };

  const {
    hasErrors,
    page,
    pageOne,
    pageTwo,
    submitting,
    submitFail,
    submitError,
  } = formCondition;

  return {
    startSurvey,
    handleChange,
    nextClick,
    previousClick,
    handleBlur,
    handleSubmit,
    hasErrors,
    page,
    pageOne,
    pageTwo,
    submitting,
    submitFail,
    submitError,
  };
};

export default useForm;
