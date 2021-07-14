export const errorToast = () => (
  <div className="text-center bg-white text-danger m-0 pt-3">
    <h2 className="m-0 fs-5 fst-italic">
      Please correct errors before proceeding!
    </h2>
  </div>
);

export const showSubmitting = () => (
  <div className="alert-info m-0 pt-3 pb-2">
    <h2 className="m-0 fs-5 text-center">Submitting survey. Please wait...</h2>
  </div>
);

export const showFailed = (errStatus, errData) => (
  <div className="alert-danger m-0 pt-3 pb-2 px-2">
    <h2 className="m-0 fs-5 fst-italic text-center">
      Oops! Something went wrong.
    </h2>
    <p className="text-center mt-2">
      <b>Status:</b> {errStatus}, <b>Info:</b> {errData}
    </p>
  </div>
);
