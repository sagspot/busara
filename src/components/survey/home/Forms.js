import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout/Layout';
const FAKE_URL = 'https://fakestoreapi.com';

const Forms = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(`${FAKE_URL}/products`);
    const items = await response.json();
    setItems(items);
    setLoading(false);
  };

  const showLoading = () => (
    <div className="alert alert-info text-center">
      <h2>Loading...</h2>
    </div>
  );

  const showItems = () => (
    <div className="">
      {items.map((item) => (
        <div key={item.id}>
          <Link to={`/${item.id}`}>
            <h3 className="mb-3">{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );

  return <Layout>{loading ? showLoading() : showItems()}</Layout>;
};

export default Forms;
