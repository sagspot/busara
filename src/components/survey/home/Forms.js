import './form.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout/Layout';
import axios from 'axios';
import { baseurl } from '../../../config';

const Forms = () => {
  useEffect(() => {
    getForms();
  }, []);

  const [loading, setLoading] = useState(true);
  const [forms, setForms] = useState([]);

  const getForms = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));

      const response = await axios.get(
        `${baseurl}/api/v1/recruitment/forms/?node_type=Both`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLoading(false);
      setForms(response.data.forms);
      console.log(response.data.forms);
    } catch (err) {
      console.log(err);
    }
  };

  const showLoading = () => (
    <div className="alert alert-info text-center">
      <h2>Loading...</h2>
    </div>
  );

  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  const showForms = () => (
    <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {forms.map((form) => (
        <article className="col" key={form.id}>
          <Link to={`/${form.id}`} className="card shadow-sm">
            <div className="card-body">
              <h2 className="fs-5 mt-4 text-center pri-brand">{form.name}</h2>
              <p className="mt-3 text-muted">{form.description}</p>
              <hr className="my-3" />
              <div className="">
                <p className="text-muted mb-2 my-fs-7">
                  Created on <span>{formatDate(form.created)}</span>
                </p>
                <p className="text-muted mb-2 my-fs-7">
                  Last modified : <span>{formatDate(form.modified)}</span>
                </p>
                <p className="text-muted mb-2 my-fs-7">
                  Valid{' '}
                  <span className="fst-italic">
                    {formatDate(form.valid_from)}
                  </span>{' '}
                  to{' '}
                  <span className="fst-italic">
                    {formatDate(form.valid_to)}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );

  return <Layout>{loading ? showLoading() : showForms()}</Layout>;
};

export default Forms;
