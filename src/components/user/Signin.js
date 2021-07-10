import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './signin.scss';
import { signin, authenticate } from '../auth';

const Signin = () => {
  const [values, setValues] = useState({
    grant_type: 'password',
    client_id: '',
    username: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });

  const {
    grant_type,
    client_id,
    username,
    password,
    error,
    loading,
    redirectToReferrer,
  } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      error: false,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      error: false,
      loading: true,
    });
    signin({ grant_type, client_id, username, password }).then((data) => {
      if (data.error)
        return setValues({
          ...values,
          error: data.error,
          loading: false,
        });
      authenticate(data, () => {
        setValues({ ...values, redirectToReferrer: true });
      });
    });
  };

  const showError = () =>
    error && <div className="alert alert-danger">{error}</div>;

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    return <Redirect to="/" />;
  };

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
              action="/"
              className="form rounded text-center text-white p-4"
              onSubmit={handleSubmit}
            >
              <div className="form-logo">
                <span className="fas fa-user-circle"></span>
              </div>
              <div className="form-title fs-3">SIGN IN</div>

              {showLoading()}
              {showError()}

              <div className="form-input form-floating mb-3">
                <input
                  type="text"
                  className="form-control text-white bg-transparent"
                  id="client_id"
                  name="client_id"
                  placeholder="zVs9v7FZupY3TLPskQOy1tHUSf2rdTDCu"
                  value={client_id}
                  onChange={handleChange('client_id')}
                />
                <label htmlFor="client_id">Client ID</label>
              </div>
              <div className="form-input form-floating mb-3">
                <input
                  type="email"
                  className="form-control text-white bg-transparent"
                  id="username"
                  name="username"
                  placeholder="name@example.com"
                  value={username}
                  onChange={handleChange('username')}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-input form-floating">
                <input
                  type="password"
                  className="form-control text-white bg-transparent"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange('password')}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="">
                <input
                  type="submit"
                  value="Login"
                  className="btn my-4 bg-white"
                />
              </div>
              <div className="form-link">
                <Link
                  to="/reset-password"
                  className="link-light text-decoration-underline"
                >
                  Forgot Password?
                </Link>
              </div>
              {/* {redirectUser()} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
