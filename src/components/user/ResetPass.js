import { Link } from 'react-router-dom';

const ResetPass = () => {
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
              action="/login.html"
              className="form rounded text-center text-white p-4"
            >
              <div className="form-logo">
                <span className="fas fa-user-circle"></span>
              </div>
              <div className="form-title fs-6">
                Forgot Your Password? Let Us Help You.
              </div>
              <div className="form-input form-floating mb-3">
                <input
                  type="email"
                  className="form-control text-white bg-transparent"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">
                  Enter your registered email address
                </label>
              </div>

              <div className="">
                <input
                  type="submit"
                  value="Send"
                  className="btn my-4 bg-white"
                />
              </div>
              <div className="form-link">
                <Link
                  to="/signin"
                  className="link-light text-decoration-underline"
                >
                  Sign in?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
