import { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import axios from 'axios';
import { baseurl } from '../../../config';
import Loading from '../../layout/Loading';

const FormDetail = ({ match }) => {
  useEffect(() => {
    getFormDetails();
  }, []);

  const [loading, setLoading] = useState(true);
  const [formDetails, setFormDetails] = useState({});
  const [displaySection, setDisplaySection] = useState(1);

  const getFormDetails = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));

      const response = await axios.get(
        `${baseurl}/api/v1/recruitment/forms/?node_type=Both`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const id = parseInt(match.params.id);

      const formArr = await response.data.forms.filter(
        (form) => form.id === id
      );
      const [formDetails] = formArr;

      setLoading(false);
      setFormDetails(formDetails);
    } catch (err) {
      const res = err.response;
      console.log(res);
    }
  };

  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  const showLoading = () => <Loading />;

  const { name, description, created, valid_from, valid_to } = formDetails;

  const nextPage = () => {
    setDisplaySection(displaySection + 1);
  };

  const previousPage = () => {
    setDisplaySection(displaySection - 1);
  };

  const pageOne = () => (
    <section className="card mt-3">
      <div className="card-body ">
        <h2 className="fs-3">Section 1: Bio Data</h2>
        <hr />
        <div className="profile-content mt-3">
          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">Name</h3>
            <p className="col-8 fs-5 m-0">Oliver Sagala</p>
          </div>

          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">
              Phone Number
            </h3>

            <p className="col-8 fs-5 m-0">0703215696</p>
          </div>

          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">Country</h3>
            <p className="col-8 fs-5 m-0">Kenya</p>
          </div>

          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">County</h3>
            <p className="col-8 fs-5 m-0">Nairobi</p>
          </div>

          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">
              Constituency
            </h3>
            <p className="col-8 fs-5 m-0">Embakasi West</p>
          </div>

          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">Ward</h3>
            <p className="col-8 fs-5 m-0">Umoja II</p>
          </div>

          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">Gender</h3>
            <p className="col-8 fs-5 m-0">Male</p>
          </div>
          <div className="d-flex mb-3">
            <button
              className="ms-auto btn text-white my-bg-pri"
              onClick={nextPage}
            >
              Next
              <span className="fas fa-angle-right ms-3"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const pageTwo = () => (
    <section className="card mt-3">
      <div className="card-body ">
        <h2 className="fs-3">Section 1: Education</h2>
        <hr />
        <div className="profile-content mt-3">
          <div className="row align-items-center mb-3">
            <h3 className="col-4 text-uppercase m-0 text-muted">Education</h3>
            <p className="col-8 fs-5 m-0">University</p>
          </div>
          <div className="d-flex mb-3">
            <button
              className="mp-auto btn text-white my-bg-pri"
              onClick={previousPage}
            >
              <span className="fas fa-angle-left me-3"></span>
              Previous
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const displayFunc = (id) => {
    if (id === 1) return pageOne();
    if (id === 2) return pageTwo();
  };

  const showItem = () => (
    <div className="">
      <div>
        <h2 className="pri-brand text-center">{name}</h2>
        <p className="mt-3">{description}</p>

        {displayFunc(displaySection)}

        <hr />

        <h4 className="fs-4">Metadata</h4>
        <p className="text-muted mb-2 my-fs-7">
          Created on {formatDate(created)}
          <br />
          Valid {formatDate(valid_from)} to {formatDate(valid_to)}
        </p>
      </div>
    </div>
  );

  return <Layout>{loading ? showLoading() : showItem()}</Layout>;
};

export default FormDetail;
