import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="country">Brasil</div>
      <div className="footer-links">
        <div className="footer-links-section">
          <Link to="/sobre"> Sobre </Link>
          <Link to="/projetos"> Projetos </Link>
          <Link to="/artigos"> Artigos</Link>
          <a href="mailto:vitormoreira6940@gmail.com"> Email </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
