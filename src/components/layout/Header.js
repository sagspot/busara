import './header.scss';
import { Link, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signout } from '../auth';
import axios from 'axios';
import { baseurl } from '../../config';

const Header = ({ history, toggleNav, title }) => {
  const handleUser = (e) => {
    e.currentTarget.classList.toggle('open');
  };

  window.addEventListener('click', (e) => {
    const user = document.querySelector('.user');
    if (!user.contains(e.target)) user.classList.remove('open');
  });

  const [profileDetails, setProfileDetails] = useState({});
  const { name, approver_level } = profileDetails;

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));

      const response = await axios.get(`${baseurl}/api/v1/users/current-user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfileDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header
      className="
          header
          d-flex
          justify-content-between
          py-2
          px-4
          position-fixed
          top-0
          bg-white
          shadow-sm
          align-items-center
        "
    >
      <h2>
        <span
          className="fas fa-bars pe-3 cursor-p nav-toggle pri-brand"
          onClick={toggleNav}
        ></span>
        <div className="d-inline-block pri-brand">{title}</div>
      </h2>

      <div
        className="user d-flex align-items-center cursor-p position-relative"
        onClick={handleUser}
      >
        <div className="img fas fa-user-circle me-3 pri-brand"></div>

        <div className="me-3 user-select-none">
          <h4 className="fs-6 pri-brand">{name}</h4>
          <small className="d-inline-block text-muted">{approver_level}</small>
        </div>

        <span className="fas fa-angle-down pri-brand"></span>
        <div className="user-dropdown position-absolute end-0 w-100 p-2">
          <span
            className="
                fas
                fa-caret-up
                position-absolute
                start-50
                mt-1
                translate-middle
                
              "
          ></span>

          <Link to="/profile" className="p-1 m-1 d-flex align-items-center">
            <span className="fas fa-user me-3"></span> <span>Profile</span>
          </Link>
          <span
            onClick={() => signout(() => history.push('/signin'))}
            className="p-1 m-1 d-flex align-items-center"
          >
            <span className="fas fa-power-off me-3"></span>{' '}
            <span>Sign out</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
