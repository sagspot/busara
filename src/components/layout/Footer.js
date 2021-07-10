const Footer = () => {
  return (
    <footer className="footer bg-white p-3">
      <div className="container d-flex justify-content-end">
        <p className="m-0">
          Copyright © {new Date().getFullYear()} • Busara Foundation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
