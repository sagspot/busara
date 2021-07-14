const { Link } = require('react-router-dom');

const FormSuccess = () => {
  return (
    <div className="">
      <h1 className="mt-5 fs-2 text-center">
        Voilà!!! Form submitted successfully!
      </h1>
      <Link to="/" className="d-block mt-5 fs-2 text-center">
        Back to Surveys
      </Link>
    </div>
  );
};

export default FormSuccess;
