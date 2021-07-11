import './profile.scss';
import Layout from '../layout/Layout';
import axios from 'axios';
import { baseurl } from '../../config';
import { useState, useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    getProfile();
  }, []);

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('access_token'));

      const response = await axios.get(`${baseurl}/api/v1/users/current-user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false);
      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const showLoading = () => (
    <div className="alert alert-info text-center mt-3">
      <h2>Loading...</h2>
    </div>
  );

  const showProfile = () => (
    <section className="card mt-3">
      <div className="card-body ">
        <h2 className="fs-3">Personal Information</h2>
        <div className="profile-content mt-3">
          <div className="row align-items-center ">
            <h3 className="col-4 text-uppercase m-0 text-muted">Name</h3>
            <p className="col-8 fs-5 m-0">{profile.name}</p>
          </div>

          <hr />

          <div className="row align-items-center ">
            <h3 className="col-4 text-uppercase m-0 text-muted">
              Phone Number
            </h3>

            <p className="col-8 fs-5 m-0">{profile.phone_number}</p>
          </div>

          <hr />

          <div className="row align-items-center ">
            <h3 className="col-4 text-uppercase m-0 text-muted">Email</h3>
            <p className="col-8 fs-5 m-0">{profile.email}</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      <section className="bg-white py-1 px-3">
        <h1 className="pri-brand  fs-2">Profile</h1>
      </section>

      {loading ? showLoading() : showProfile()}
    </Layout>
  );
};

export default Profile;
