import { useState } from 'react';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Sidebar from '../../layout/Sidebar';

const Form = () => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <Sidebar nav={nav} toggleNav={handleToggle} />
      <div className="main-content">
        <Header toggleNav={handleToggle} />
        <main className="main">
          <div className="container">
            <h2>Single form screen</h2>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Form;
