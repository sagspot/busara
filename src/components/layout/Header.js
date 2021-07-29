import './header.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signout } from '../auth';

const ProfileBar = ({ dropdownClass, handleUser, profileDetails }) => {
  const history = useHistory();
  const { name, approver_level } = profileDetails;

  return (
    <div
      className={`user d-flex align-items-center cursor-p position-relative ${dropdownClass}`}
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
          <span className="fas fa-power-off me-3"></span> <span>Sign out</span>
        </span>
      </div>
    </div>
  );
};

const Header = ({ history, toggleNav, title }) => {
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('user_profile'));
    setProfileDetails(profile);
  }, []);

  const [profileDetails, setProfileDetails] = useState({});
  const [dropdownClass, setDropdownClass] = useState('close');

  const handleUser = (e) => {
    e.stopPropagation();
    if (dropdownClass === 'close') setDropdownClass('open');
    else setDropdownClass('close');
  };

  window.addEventListener('click', () => {
    if (dropdownClass === 'open') setDropdownClass('close');
  });

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

      <ProfileBar
        dropdownClass={dropdownClass}
        handleUser={handleUser}
        profileDetails={profileDetails}
      />
    </header>
  );
};

export default Header;
