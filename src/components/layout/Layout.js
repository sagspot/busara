import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ style, children, title }) => {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <Sidebar nav={nav} toggleNav={handleToggle} />
      <div className="main-content">
        <Header toggleNav={handleToggle} title={title} />
        <main className="main">
          <div className="container" style={style}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
