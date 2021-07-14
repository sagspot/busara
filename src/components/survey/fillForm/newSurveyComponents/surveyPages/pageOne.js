import parse from 'html-react-parser';

const PageOne = ({ page1, handleChange, handleBlur }) => (
  <>
    <h2>Section 1: Bio Data</h2>
    <hr />

    {page1.map((qtns) => {
      if (qtns.type === 'text' || qtns.type === 'tel')
        return (
          <div className="my-form-input" key={qtns.id}>
            <div className="form-floating mt-3">
              <input
                type={qtns.type}
                name={qtns.column_match}
                column_match={qtns.column_match}
                className="form-control"
                id={qtns.column_match}
                placeholder={parse(qtns.text)}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                disabled
              />
              <label htmlFor={qtns.column_match}>{parse(qtns.text)}</label>
            </div>
            <p className="text-danger mb-3 error d-none">{qtns.error_message}</p>
          </div>
        );
      return (
        <div className="my-form-input" key={qtns.id}>
          <select
            name={qtns.column_match}
            column_match={qtns.column_match}
            className="form-select my-3"
            onChange={handleChange}
            disabled
          >
            <option className="text-muted">Gender</option>
            {qtns.q_options.map((options) => (
              <option key={options.id} value={options.id}>
                {options.name}
              </option>
            ))}
          </select>
          <p className="text-danger mb-3 error d-none">{qtns.error_message}</p>
        </div>
      );
    })}
  </>
);

export default PageOne;
