const pageOneContent = ({ errors, handleChange }) => {
  return (
    <>
      <h2>Section 1: Bio Data</h2>
      <hr />
      <div className="form-floating mb-3">
        <input
          type="text"
          name="first_name"
          column_match="first_name"
          className={`form-control ${errors.first_name && 'is-invalid'}`}
          id="first_name"
          placeholder="Enter your First Name"
          onChange={handleChange}
          autoFocus
          disabled
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
          column_match="last_name"
          className={`form-control ${errors.last_name && 'is-invalid'}`}
          id="last_name"
          placeholder="Enter your Last Name"
          onChange={handleChange}
          disabled
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
          column_match="contact"
          className={`form-control ${errors.contact && 'is-invalid'}`}
          id="contact"
          placeholder="Enter your Phone Number"
          onChange={handleChange}
          disabled
        />
        <label htmlFor="contact">Phone Number</label>
      </div>
      {errors.contact && <p className="text-danger mb-3">{errors.contact}</p>}
      <div className="form-floating mb-3">
        <input
          type="text"
          name="country"
          column_match="country"
          className={`form-control ${errors.country && 'is-invalid'}`}
          id="country"
          placeholder="Enter your Country"
          onChange={handleChange}
          disabled
        />
        <label htmlFor="country">Country</label>
      </div>
      {errors.country && <p className="text-danger mb-3">{errors.country}</p>}
      <div className="form-floating mb-3">
        <input
          type="text"
          name="county"
          column_match="county"
          className={`form-control ${errors.county && 'is-invalid'}`}
          id="county"
          placeholder="Enter your County"
          onChange={handleChange}
          disabled
        />
        <label htmlFor="county">County</label>
      </div>
      {errors.county && <p className="text-danger mb-3">{errors.county}</p>}
      <div className="form-floating mb-3">
        <input
          type="text"
          name="constituency"
          column_match="first_name"
          className={`form-control ${errors.constituency && 'is-invalid'}`}
          id="constituency"
          placeholder="Enter your constituency"
          onChange={handleChange}
          disabled
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
          column_match="ward"
          className={`form-control ${errors.ward && 'is-invalid'}`}
          id="ward"
          placeholder="Enter your ward"
          onChange={handleChange}
          disabled
        />
        <label htmlFor="ward">Ward</label>
      </div>
      {errors.ward && <p className="text-danger mb-3">{errors.ward}</p>}
      <select
        name="gender"
        column_match="gender"
        className={`form-select mb-3 ${errors.gender && 'is-invalid'}`}
        onChange={handleChange}
        disabled
      >
        <option className="text-muted">Gender</option>
        <option value="7">Male</option>
        <option value="8">Female</option>
        <option value="9">Prefer not to say</option>
      </select>
      {errors.gender && <p className="text-danger mb-3">{errors.gender}</p>}
    </>
  );
};

export default pageOneContent;
