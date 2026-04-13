import React from 'react';
import './Hero.css';
import profileImage from '../assets/Gemini_Generated_Image_3tfa3f3tfa3f3tfa.png';

const Hero = () => {
  const stats = [
    { icon: '⚡', number: '6+', label: 'Projects Completed' },
    { icon: '</>', number: '8+', label: 'Technologies Mastered' }
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability-badge animate-in">
          Available for new projects
        </div>
        <h1 className="animate-in" style={{ animationDelay: '0.1s' }}>
          Hey, I'm Jonty Patel
        </h1>
        <div className="tech-subtitle animate-in" style={{ animationDelay: '0.2s' }}>
          Tech || Full Stack Developer
        </div>
        <p className="hero-description animate-in" style={{ animationDelay: '0.3s' }}>
          Crafting exceptional digital experiences with modern technologies. Specialized in React, Node.js, and creating scalable web applications that users love.
        </p>
        
        <div className="stats-grid animate-in" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="cta-buttons animate-in" style={{ animationDelay: '0.5s' }}>
          <a href="#projects" className="btn btn-primary" onClick={(e) => handleScroll(e, '#projects')}>
            View My Work →
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => handleScroll(e, '#contact')}>
            Let's Connect
          </a>
          <a href="/jontypatelresumefinal.pdf.pdf" className="btn btn-tertiary" target="_blank" rel="noopener noreferrer">
            📄 View Resume
          </a>
        </div>
      </div>

      <div className="hero-profile animate-in" style={{ animationDelay: '0.6s' }}>
        <div className="profile-wrapper">
          <img
            src={profileImage}
            alt="Jonty Patel"
            className="profile-pic"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      </div>

      <div className="hero-cards">
        <div className="hero-card animate-in float" style={{ animationDelay: '0.6s' }}>
          <div className="card-header">
            <div className="card-icon">🏆</div>
            <div>
              <div className="card-title">Certificates</div>
              <div className="card-subtitle">View my certifications and achievements</div>
            </div>
          </div>
          <div className="card-stats">
            <div className="card-stat">
              <div className="card-stat-value">8+</div>
              <div className="card-stat-label">Certificates</div>
            </div>
            <div className="card-stat">
              <div className="card-stat-value">7</div>
              <div className="card-stat-label">Providers</div>
            </div>
          </div>
          <div className="badge-container">
            <span className="badge">PCCOE MLSC</span>
            <span className="badge">Skill Nation</span>
            <span className="badge">Unstop</span>
            <span className="badge">IIT Madras</span>
            <span className="badge">TechXCV</span>
            <span className="badge">WCE ACM</span>
          </div>
        </div>

        <div className="hero-card animate-in float" style={{ animationDelay: '0.7s' }}>
          <div className="card-header">
            <div className="card-icon">�</div>
            <div>
              <div className="card-title">Experience</div>
              <div className="card-subtitle">My learning journey</div>
            </div>
          </div>
          <div className="card-stats" style={{ justifyContent: 'flex-start', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span>📅</span>
                <span>Freshman at CodingGita</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span>🎯</span>
                <span>Web Development Focused</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>💡</span>
                <span>Building Real-World Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
