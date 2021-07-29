import './profile.scss';
import Layout from '../layout/Layout';
import { useState, useEffect } from 'react';
import { Loading } from '../layout/Alerts';

const Profile = () => {
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('user_profile'));
    setLoading(false);
    setProfileDetails(profile);
  }, []);

  const [loading, setLoading] = useState(true);
  const [profileDetails, setProfileDetails] = useState({});

  const { name, email, phoneNumber, approverLevel } = profileDetails;

  const showProfile = () => (
    <section className="card mt-3">
      <div className="card-body ">
        <div className="profile-content mt-3">
          <div className="row align-items-center ">
            <h3 className="col-4 text-uppercase m-0 text-muted">Name</h3>
            <p className="col-8 fs-5 m-0">{name}</p>
          </div>

          <hr />

          <div className="row align-items-center ">
            <h3 className="col-4 text-uppercase m-0 text-muted">
              Phone Number
            </h3>

            <p className="col-8 fs-5 m-0">{phoneNumber}</p>
          </div>

          <hr />

          <div className="row align-items-center ">
            <h3 className="col-4 text-uppercase m-0 text-muted">Email</h3>
            <p className="col-8 fs-5 m-0">{email}</p>
          </div>

          <hr />

          <div className="row align-items-center ">
            <h3 className="col-4 text-uppercase m-0 text-muted">
              Approval Level
            </h3>
            <p className="col-8 fs-5 m-0">{approverLevel}</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <Layout title="Profile">
      <section className="bg-white py-1 px-3">
        <h1 className="pri-brand  fs-2">Personal Information</h1>
      </section>

      {loading ? <Loading /> : showProfile()}
    </Layout>
  );
};

export default Profile;
