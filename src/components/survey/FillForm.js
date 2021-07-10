import { useState } from 'react';
import './fillform.scss';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Sidebar from '../layout/Sidebar';

const FillForm = () => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  const [toggleState, setToggleState] = useState('bioData');

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    contact: '',
    gender: '',
    country: '',
    county: '',
    constituency: '',
    ward: '',
    education: '',
    error: '',
  });

  const {
    first_name,
    last_name,
    contact,
    gender,
    country,
    county,
    constituency,
    ward,
    education,
    error,
  } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const nextClick = (e) => {
    e.preventDefault();
    toggleTab('education');
  };

  const previousClick = (e) => {
    e.preventDefault();
    toggleTab('bioData');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    console.log('submitting data...');
  };

  return (
    <>
      <Sidebar nav={nav} toggleNav={handleToggle} />
      <div className="main-content">
        <Header toggleNav={handleToggle} />
        <main className="main">
          <div className="container" style={{ maxWidth: '768px' }}>
            <div className="bloc-tabs d-flex">
              <button
                className={`position-relative w-50 text-center tabs ${
                  toggleState === 'bioData' && 'active-tabs'
                }`}
                onClick={() => toggleTab('bioData')}
              >
                Bio Data
              </button>
              <button
                className={`position-relative w-50 text-center tabs ${
                  toggleState === 'education' && 'active-tabs'
                }`}
                onClick={() => toggleTab('education')}
              >
                Education
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={`content bg-white p-4 d-none w-100 h-100 ${
                  toggleState === 'bioData' && 'active-content'
                }`}
              >
                <h2>Section 1: Bio Data</h2>
                <hr />
                <form action="" method="post" className="">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      id="first_name"
                      placeholder="Enter your First Name"
                      autoFocus
                      onChange={handleChange('first_name')}
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      id="last_name"
                      placeholder="Enter your Last Name"
                      onChange={handleChange('last_name')}
                    />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      name="contact"
                      className="form-control"
                      id="contact"
                      placeholder="Enter your Phone Number"
                      onChange={handleChange('contact')}
                    />
                    <label htmlFor="contact">Phone Number</label>
                  </div>
                  <select
                    name="gender"
                    className="form-select mb-3"
                    onChange={handleChange('gender')}
                  >
                    <option className="text-muted">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">Prefer not to say</option>
                  </select>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="country"
                      className="form-control"
                      id="country"
                      placeholder="Enter your Country"
                      onChange={handleChange('country')}
                    />
                    <label htmlFor="country">Country</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="county"
                      className="form-control"
                      id="county"
                      placeholder="Enter your County"
                      onChange={handleChange('county')}
                    />
                    <label htmlFor="county">County</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="constituency"
                      className="form-control"
                      id="constituency"
                      placeholder="Enter your constituency"
                      onChange={handleChange('constituency')}
                    />
                    <label htmlFor="constituency">Constituency</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="ward"
                      className="form-control"
                      id="ward"
                      placeholder="Enter your ward"
                      onChange={handleChange('ward')}
                    />
                    <label htmlFor="ward">Ward</label>
                  </div>
                  <input
                    type="submit"
                    value="Next"
                    className="btn btn-primary"
                    onClick={nextClick}
                  />
                </form>
              </div>

              <div
                className={`content bg-white p-4 d-none w-100 h-100 ${
                  toggleState === 'education' && 'active-content'
                }`}
              >
                <h2>Section 1: Education</h2>
                <hr />
                <form action="" method="post">
                  <label htmlFor="education" className="mb-3">
                    What is your highest level of education?
                  </label>

                  <select
                    name="education"
                    className="form-select mb-3"
                    onChange={handleChange('education')}
                  >
                    <option className="text-muted">Choose...</option>
                    <option value="university">University</option>
                    <option value="college">College</option>
                    <option value="secondary">Secondary</option>
                    <option value="primary">Primary</option>
                    <option value="other">Other</option>
                    <option value="none">Prefer not to say</option>
                  </select>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary" onClick={previousClick}>
                      Previous
                    </button>
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-success"
                      onClick={handleSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FillForm;
