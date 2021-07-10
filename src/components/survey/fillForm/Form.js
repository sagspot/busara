import { useState } from 'react';

import FillForm from './FillForm';
import FormSuccess from './FormSuccess';
import Layout from '../../layout/Layout';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => setIsSubmitted(true);

  return (
    <Layout style={{ maxWidth: '768px' }}>
      {!isSubmitted ? <FillForm submitForm={submitForm} /> : <FormSuccess />}
    </Layout>
  );
};

export default Form;
