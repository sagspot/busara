import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      className="
        container container-login
        d-flex
        justify-content-center
        align-items-center
        min-vh-100
      "
    >
      <div className="login-wrapper w-100">
        <div className="card my-bg-pri">
          <div className="card-body">
            <form
              action="/index.html"
              className="form rounded text-center text-white p-4"
            >
              <div className="form-logo">
                <span className="fas fa-user-circle"></span>
              </div>
              <div className="form-title fs-1">Error 404</div>
              <span className="error-msg">
                The page you are looking for does't exist or an other error
                occurred.
              </span>

              <div className="backtohome">
                <Link to="/" className="d-inline-block btn my-4 bg-white">
                  Go to home page
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
