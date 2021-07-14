import { useState } from 'react';
import Layout from '../../layout/Layout';
import FormSuccess from './newSurveyComponents/FormSuccess';
import FillSurvey from './newSurveyComponents/fillSurvey';

const NewSurvey = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => setIsSubmitted(true);

  return (
    <Layout style={{ maxWidth: '768px' }} title="New Survey Form">
      {!isSubmitted ? <FillSurvey submitForm={submitForm} /> : <FormSuccess />}
    </Layout>
  );
};

export default NewSurvey;
