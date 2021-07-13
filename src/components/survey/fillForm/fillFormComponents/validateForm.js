const validate = (values) => {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = 'First name required';
  }
  if (!values.last_name) {
    errors.last_name = 'Last name required';
  }
  const contactFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!values.contact) {
    errors.contact = 'Contact required';
  } else if (!values.contact.match(contactFormat)) {
    errors.contact =
      'Please enter a valid phone number. Start with <07...> or <01...> with no spaces';
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

export default validate;
