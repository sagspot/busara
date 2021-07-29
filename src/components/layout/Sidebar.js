import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import busaraIcon from '../../assets/busara-icon.png';
import busaraLogo from '../../assets/busara-logo.png';

const Sidebar = ({ nav, toggleNav }) => {
  return (
    <div
      className={`sidebar position-fixed top-0 start-0 h-100 ${
        nav ? 'sidebar-sm' : ''
      }`}
    >
      <span
        className="
          nav-close
          fas
          fa-times
          position-absolute
          translate-middle
          fs-1
          cursor-p
        "
        onClick={toggleNav}
      ></span>
      <div className="sidebar-brand ps-4 py-3">
        <NavLink to="/" className="ps-3 d-flex align-items-center">
          <span>
            <img src={busaraIcon} alt="" className="pe-2 busara-icon" />
          </span>
          <span className="fs-3 text-nowrap">
            <img src={busaraLogo} alt="" className="busara-logo" />
          </span>
        </NavLink>
      </div>

      <div className="sidebar-menu mt-3 ps-4">
        <ul className="p-0">
          <li className="w-100 mb-4">
            <NavLink
              exact
              activeClassName="active"
              to="/"
              className="sidebar-menu-link text-white p-3 d-flex align-items-center  open"
            >
              <span className="fas fa-file-alt pe-3"></span>
              <span className="text-nowrap">Surveys</span>
            </NavLink>
          </li>

          <li className="w-100 mb-4">
            <NavLink
              exact
              activeClassName="active"
              to="/new-survey"
              className="sidebar-menu-link text-white p-3 d-flex align-items-center"
            >
              <span className="fas fa-edit pe-3"></span>
              <span className="text-nowrap">New Survey</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
