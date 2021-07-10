import { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
const FAKE_URL = 'https://fakestoreapi.com';

const FormDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const response = await fetch(`${FAKE_URL}/products/${match.params.id}`);
    const item = await response.json();
    setItem(item);
    setLoading(false);
  };

  const showLoading = () => (
    <div className="alert alert-info text-center">
      <h2>Loading...</h2>
    </div>
  );

  const showItem = () => (
    <div className="">
      <div>
        <h3 className="mb-3">{item.title}</h3>
      </div>
    </div>
  );

  return <Layout>{loading ? showLoading() : showItem()}</Layout>;
};

export default FormDetail;
