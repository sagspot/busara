export const Loading = ({ text }) => {
  return (
    <div className="alert alert-info text-center mt-3">
      <span className="fs-5">{text}</span>
    </div>
  );
};

Loading.defaultProps = {
  text: 'Loading. Please wait...',
};

export const Success = ({ text }) => {
  return (
    <div className="alert alert-success text-center mt-3">
      <span className="fs-5">{text}</span>
    </div>
  );
};

Success.defaultProps = {
  text: 'Success!',
};

export const Error = ({ text }) => {
  return (
    <div className="alert alert-danger text-center mt-3">
      <span className="fs-5">{text}</span>
    </div>
  );
};

Error.defaultProps = {
  text: 'Oops... Something went wrong',
};
