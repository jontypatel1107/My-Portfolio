import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <a href="#home" className="logo" onClick={(e) => handleScroll(e, '#home')} aria-label="Go to home section">
        <span className="logo-mark">JP</span>
        <span className="logo-text">
          <span className="logo-name">Jonty Patel</span>
          <span className="logo-tag">Portfolio</span>
        </span>
      </a>
      <button
        type="button"
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <li><a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a></li>
        <li><a href="#certificates" onClick={(e) => handleScroll(e, '#certificates')}>Certificates</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a></li>
        <li><a href="#hackathons" onClick={(e) => handleScroll(e, '#hackathons')}>Hackathons</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        🌓 Mode
      </button>
    </nav>
  );
};

export default Navbar;
