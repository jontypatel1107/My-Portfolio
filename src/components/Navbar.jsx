import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav>
      <a href="#home" className="logo" onClick={(e) => handleScroll(e, '#home')} aria-label="Go to home section">
        <span className="logo-mark">JP</span>
        <span className="logo-name">Jonty Patel</span>
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
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, `#${item.id}`)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        🌓 Mode
      </button>
    </nav>
  );
};

export default Navbar;
