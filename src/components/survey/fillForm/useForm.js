import { useState, useEffect } from 'react';

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
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toggleState, setToggleState] = useState('bioData');

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const nextClick = (e) => {
    e.preventDefault();
    toggleTab('education');
  };

  const previousClick = (e) => {
    e.preventDefault();
    toggleTab('bioData');
  };

  useEffect(() => {
    if (Object.entries(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    nextClick,
    previousClick,
    toggleTab,
    values,
    errors,
    toggleState,
  };
};

export default useForm;
