import { useState } from 'react';
import FillForm from './FillForm';
import Layout from '../../layout/Layout';
import FormSuccess from './fillFormComponents/FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => setIsSubmitted(true);

  return (
    <Layout style={{ maxWidth: '768px' }} title="New Survey">
      {!isSubmitted ? <FillForm submitForm={submitForm} /> : <FormSuccess />}
    </Layout>
  );
};

export default Form;
