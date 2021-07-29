import './signin.scss';
import useSignin from './useSignin';
import { Link, Redirect } from 'react-router-dom';
import { Error, Loading } from '../layout/Alerts';

const Signin = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    error,
    loading,
    redirectToReferrer,
  } = useSignin();

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
              className="form rounded text-center text-white p-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-logo">
                <span className="fas fa-user-circle"></span>
              </div>

              <div className="form-title fs-3 pb-0">SIGN IN</div>
              {error && <Error text={error} />}
              {loading && <Loading />}

              <div className=" form-input form-floating mb-3">
                <input
                  type="text"
                  name="client_id"
                  className="form-control text-white bg-transparent"
                  id="client_id"
                  placeholder="Enter your Client ID"
                  value={values.client_id}
                  onChange={handleChange}
                />
                <label htmlFor="client_id">Client ID</label>
              </div>

              <div className=" form-input form-floating mb-3">
                <input
                  type="text"
                  name="username"
                  className="form-control text-white bg-transparent"
                  id="username"
                  placeholder="Enter your Username"
                  value={values.username}
                  onChange={handleChange}
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className=" form-input form-floating mb-3">
                <input
                  type="text"
                  name="password"
                  className="form-control text-white bg-transparent"
                  id="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <input
                type="submit"
                value="Sign in"
                className="btn my-4 bg-white"
              />
              <div className="form-link">
                <Link
                  to="/reset-password"
                  className="link-light text-decoration-underline"
                >
                  Forgot Password?
                  {redirectToReferrer && <Redirect to="/" />}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
