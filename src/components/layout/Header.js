import './header.scss';
import { Link, withRouter } from 'react-router-dom';
import { signout } from '../auth';

const Header = ({ history, toggleNav }) => {
  const handleUser = (e) => {
    e.currentTarget.classList.toggle('open');
  };

  window.addEventListener('click', (e) => {
    const user = document.querySelector('.user');
    if (!user.contains(e.target)) user.classList.remove('open');
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
          className="fas fa-bars pe-3 cursor-p nav-toggle"
          onClick={toggleNav}
        ></span>
        <div className="d-inline-block">Dashboard</div>
      </h2>

      <div
        className="user d-flex align-items-center cursor-p position-relative"
        onClick={handleUser}
      >
        <div className="img fas fa-user-circle me-3"></div>

        <div className="me-3 user-select-none">
          <h4 className="fs-6">Jane Doe Jane</h4>
          <small className="d-inline-block">Super Admin</small>
        </div>

        <span className="fas fa-angle-down"></span>
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
          <Link to="/signin" className="p-1 m-1 d-flex align-items-center">
            <span className="fas fa-lock me-3"></span> <span>Lock</span>
          </Link>
          <Link to="/signin" className="p-1 m-1 d-flex align-items-center">
            <span className="fas fa-power-off me-3"></span> <span>Logout</span>
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
