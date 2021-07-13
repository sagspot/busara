const pageTwoContent = ({ handleChange, errors }) => {
  return (
    <>
      <h2>Section 1: Education</h2>
      <hr />
      <label htmlFor="education" className="mb-3">
        What is your highest level of education?
      </label>

      <select
        name="education"
        column_match="education"
        className={`form-select mb-3 ${errors.education && 'is-invalid'}`}
        onChange={handleChange}
        disabled
      >
        <option className="text-muted">Choose...</option>
        <option value="1">University</option>
        <option value="2">College</option>
        <option value="3">Secondary</option>
        <option value="4">Primary</option>
        <option value="5">Other</option>
        <option value="6">Prefer not to say</option>
      </select>
      {errors.education && (
        <p className="text-danger mb-3">{errors.education}</p>
      )}
    </>
  );
};

export default pageTwoContent;
