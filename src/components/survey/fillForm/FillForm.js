import './fillform.scss';
import validate from './validateForm';
import useForm from './useForm';

const FillForm = ({ submitForm }) => {
  const {
    handleChange,
    handleSubmit,
    nextClick,
    previousClick,
    toggleTab,
    values,
    errors,
    toggleState,
  } = useForm(submitForm, validate);

  return (
    <>
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

      <form
        action=""
        method="post"
        className=""
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="content-tabs">
          <div
            className={`content bg-white p-4 d-none w-100 h-100 ${
              toggleState === 'bioData' && 'active-content'
            }`}
          >
            <h2>Section 1: Bio Data</h2>
            <hr />
            <div className="form-floating mb-3">
              <input
                type="text"
                name="first_name"
                className="form-control"
                id="first_name"
                placeholder="Enter your First Name"
                autoFocus
                values={values.first_name}
                onChange={handleChange}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            {errors.first_name && (
              <p className="text-danger mb-3">{errors.first_name}</p>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                name="last_name"
                className="form-control"
                id="last_name"
                placeholder="Enter your Last Name"
                onChange={handleChange}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
            {errors.last_name && (
              <p className="text-danger mb-3">{errors.last_name}</p>
            )}
            <div className="form-floating mb-3">
              <input
                type="tel"
                name="contact"
                className="form-control"
                id="contact"
                placeholder="Enter your Phone Number"
                onChange={handleChange}
              />
              <label htmlFor="contact">Phone Number</label>
            </div>
            {errors.contact && (
              <p className="text-danger mb-3">{errors.contact}</p>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                name="country"
                className="form-control"
                id="country"
                placeholder="Enter your Country"
                onChange={handleChange}
              />
              <label htmlFor="country">Country</label>
            </div>
            {errors.country && (
              <p className="text-danger mb-3">{errors.country}</p>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                name="county"
                className="form-control"
                id="county"
                placeholder="Enter your County"
                onChange={handleChange}
              />
              <label htmlFor="county">County</label>
            </div>
            {errors.county && (
              <p className="text-danger mb-3">{errors.county}</p>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                name="constituency"
                className="form-control"
                id="constituency"
                placeholder="Enter your constituency"
                onChange={handleChange}
              />
              <label htmlFor="constituency">Constituency</label>
            </div>
            {errors.constituency && (
              <p className="text-danger mb-3">{errors.constituency}</p>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                name="ward"
                className="form-control"
                id="ward"
                placeholder="Enter your ward"
                onChange={handleChange}
              />
              <label htmlFor="ward">Ward</label>
            </div>
            {errors.ward && <p className="text-danger mb-3">{errors.ward}</p>}
            <select
              name="gender"
              className="form-select mb-3"
              onChange={handleChange}
            >
              <option className="text-muted">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="none">Prefer not to say</option>
            </select>
            {errors.gender && (
              <p className="text-danger mb-3">{errors.gender}</p>
            )}

            <div className="d-flex mb-3">
              <button
                className="ms-auto btn text-white my-bg-pri"
                onClick={nextClick}
              >
                Next
                <span className="fas fa-angle-right ms-3"></span>
              </button>
            </div>
          </div>

          <div
            className={`content bg-white p-4 d-none w-100 h-100 ${
              toggleState === 'education' && 'active-content'
            }`}
          >
            <h2>Section 1: Education</h2>
            <hr />
            <label htmlFor="education" className="mb-3">
              What is your highest level of education?
            </label>

            <select
              name="education"
              className="form-select mb-3"
              onChange={handleChange}
            >
              <option className="text-muted">Choose...</option>
              <option value="university">University</option>
              <option value="college">College</option>
              <option value="secondary">Secondary</option>
              <option value="primary">Primary</option>
              <option value="other">Other</option>
              <option value="none">Prefer not to say</option>
            </select>
            {errors.education && (
              <p className="text-danger mb-3">{errors.education}</p>
            )}
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn text-white my-bg-pri"
                onClick={previousClick}
              >
                <span className="fas fa-angle-left me-3"></span>
                Previous
              </button>
              <input type="submit" value="Submit" className="btn btn-success" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FillForm;
