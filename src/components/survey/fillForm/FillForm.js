import './fillform.scss';
import useForm from './fillFormComponents/useForm';
import validate from './fillFormComponents/validateForm';
import PageOneContent from './fillFormComponents/pageOneContent';
import PageTwoContent from './fillFormComponents/pageTwoContent';

const FillForm = ({ submitForm }) => {
  const {
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
  } = useForm(submitForm, validate);

  const errorToast = () =>
    hasErrors && (
      <div className="text-center bg-white text-danger m-0 pt-3">
        <h2 className="m-0 fs-5 fst-italic">
          Please correct errors before proceeding!
        </h2>
      </div>
    );

  const showSubmitting = () =>
    submitting && (
      <div className="alert-info m-0 pt-3 pb-2">
        <h2 className="m-0 fs-5 text-center">
          Submitting survey. Please wait...
        </h2>
      </div>
    );

  const { errStatus, errData } = submitError;

  const showFailed = () =>
    submitFail && (
      <div className="alert-danger m-0 pt-3 pb-2">
        <h2 className="m-0 fs-5 fst-italic text-center">
          Oops! Something went wrong. Try again
        </h2>
        <p className="text-center mt-2">
          <b>Status:</b> {errStatus}, <b>Info:</b> {errData}
        </p>
      </div>
    );

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
        {errorToast()}
        {showSubmitting()}
        {showFailed()}
        <div className="content-tabs">
          <div
            className={`content bg-white p-4 d-none w-100 h-100 ${
              page === 'bioData' && 'active-content'
            }`}
          >
            <PageOneContent errors={errors} handleChange={handleChange} />

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
            <PageTwoContent errors={errors} handleChange={handleChange} />

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

export default FillForm;
