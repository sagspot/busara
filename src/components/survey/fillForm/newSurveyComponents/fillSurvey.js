import '../fillform.scss';
import useForm from './useForm';
import { errorToast, showFailed, showSubmitting } from './formHelpers';
import PageOne from './surveyPages/pageOne';
import PageTwo from './surveyPages/pageTwo';

const FillSurvey = ({ submitForm }) => {
  const {
    startSurvey,
    handleChange,
    nextClick,
    previousClick,
    handleBlur,
    handleSubmit,
    formCondition,
  } = useForm(submitForm);
  
  const {
    hasErrors,
    page,
    pageOne,
    pageTwo,
    submitting,
    submitFail,
    submitError,
  } = formCondition;

  const { errStatus, errData } = submitError;

  return (
    <>
      <div className="mb-3">
        <button className="btn btn-info text-white px-3" onClick={startSurvey}>
          Start
        </button>
        <span className="pri-brand ms-3"></span>
      </div>
      <form
        action=""
        method="post"
        className=""
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="bloc-tabs d-flex">
          <button
            className={`position-relative w-50 text-center tabs ${
              page === 'bioData' && 'active-tabs'
            }`}
            onClick={previousClick}
          >
            Bio Data
          </button>
          <button
            className={`position-relative w-50 text-center tabs ${
              page === 'education' && 'active-tabs'
            }`}
            onClick={nextClick}
          >
            Education
          </button>
        </div>
        {hasErrors && errorToast()}
        {submitting && showSubmitting()}
        {submitFail && showFailed(errStatus, errData)}
        <div className="content-tabs">
          <div
            className={`content bg-white p-4 d-none w-100 h-100 ${
              page === 'bioData' && 'active-content'
            }`}
          >
            <PageOne
              handleChange={handleChange}
              handleBlur={handleBlur}
              page1={pageOne}
            />

            <div className="d-flex mb-3">
              <button
                className="ms-auto btn text-white my-bg-pri"
                onClick={nextClick}
              >
                Next
                <span className="fas fa-angle-right ms-3"></span>
              </button>
            </div>
          </div>

          <div
            className={`content bg-white p-4 d-none w-100 h-100 ${
              page === 'education' && 'active-content'
            }`}
          >
            <PageTwo
              handleChange={handleChange}
              handleBlur={handleBlur}
              page2={pageTwo}
            />

            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn text-white my-bg-pri"
                onClick={previousClick}
              >
                <span className="fas fa-angle-left me-3"></span>
                Previous
              </button>
              <button type="submit" disabled className="btn btn-success">
                Finish survey
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FillSurvey;
