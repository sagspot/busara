const validateForm = (values) => {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = 'First name required';
  }
  if (!values.last_name) {
    errors.last_name = 'Last name required';
  }
  if (!values.contact) {
    errors.contact = 'Contact required';
  }
  if (!values.country) {
    errors.country = 'Country required';
  }
  if (!values.county) {
    errors.county = 'County required';
  }
  if (!values.constituency) {
    errors.constituency = 'Constituency required';
  }
  if (!values.ward) {
    errors.ward = 'Ward required';
  }
  if (!values.gender) {
    errors.gender = 'Gender required';
  }
  if (!values.education) {
    errors.education = 'Education required';
  }
  return errors;
};

export default validateForm;
