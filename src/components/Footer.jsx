import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer>
      <button type="button" className="back-to-top" onClick={handleBackToTop}>
        Back to Top
      </button>
      <p>&copy; 2026 Jonty Patel. Crafted with passion and lots of coffee ☕</p>
    </footer>
  );
};

export default Footer;
