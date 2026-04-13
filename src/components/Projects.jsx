import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

import zohoMailImg from '../assets/Zoho Mail.jpg';
import swayamImg from '../assets/Swayam App.png';
import hammerImg from '../assets/Hammer Lifestyle.jpg';
import rarePlanetImg from '../assets/Rare Planet.jpg';
import shadowfaxImg from '../assets/ShadowFax.jpg';
import sanjeevaniImg from '../assets/Sanjeevani.webp';
import pinExplorerImg from '../assets/PinCode Lookup.jpg';
import weatherApiImg from '../assets/Weather-API--670x375.png';

const Projects = () => {
  const projectsRef = useRef([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      icon: 'Mail',
      title: 'Zoho Mail Clone',
      description: 'A comprehensive email client interface clone featuring inbox management, email composition, folder organization, and modern email dashboard design with responsive layout.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      thumbnail: zohoMailImg,
      links: { demo: 'https://diwali-assignment-3rd-website.netlify.app/diwali-assignment/', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/ZohoMail', video: '#' }
    },
    {
      icon: 'Study',
      title: 'Swayam Educational Platform Clone',
      description: 'A responsive clone of the Swayam educational platform, featuring course listings, learning modules, and educational content organization with clean UI design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      thumbnail: swayamImg,
      links: { demo: 'https://diwali-assignment-3rd-website.netlify.app/diwali-assignment/swayam', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/SwayamApp', video: '#' }
    },
    {
      icon: 'Gym',
      title: 'Hammer Lifestyle Clone',
      description: 'A pixel-perfect clone of Hammer Lifestyle website, showcasing fitness products, workout plans, and lifestyle content with modern e-commerce design elements.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      thumbnail: hammerImg,
      links: { demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/hammer-lifestyle/hammer', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/Hammer-Lifestyle', video: '#' }
    },
    {
      icon: 'World',
      title: 'Rare Planet Clone',
      description: 'An adventurous website clone for Rare Planet, featuring travel destinations, expedition details, and outdoor adventure experiences with stunning visual layouts.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      thumbnail: rarePlanetImg,
      links: { demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/rare-planet/rare-planet', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/Rare-Planet', video: '#' }
    },
    {
      icon: 'Delivery',
      title: 'Shadowfax Delivery Clone',
      description: 'A hyperlocal delivery service website clone featuring order tracking, delivery services, and logistics information with intuitive user interface design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      thumbnail: shadowfaxImg,
      links: { demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/shadowfax/shadowfax', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/ShadowFax', video: '#' }
    },
    {
      icon: 'Health',
      title: 'Sanjeevani Healthcare Platform',
      description: 'A comprehensive healthcare platform featuring medical services, appointment booking, patient management, and health information with modern, accessible design for better healthcare accessibility.',
      tech: ['React', 'Next.js', 'Vercel'],
      thumbnail: sanjeevaniImg,
      links: { demo: 'https://sanjeevani-ochre.vercel.app/', github: 'https://github.com/jontypatel1107/Sanjeevani_Su_Startup/tree/main', video: '#' }
    },
    {
      icon: 'PIN',
      title: 'PinExplorer',
      description: 'A PIN code lookup web app that helps users quickly search Indian postal details, explore location information, and use a fast, clean interface for postal code discovery.',
      tech: ['React', 'JavaScript', 'CSS', 'API Integration'],
      thumbnail: pinExplorerImg,
      links: { demo: 'https://pinexplorer-1.onrender.com/', github: 'https://github.com/jontypatel1107/PinExplorer', video: '#' }
    },
    {
      icon: 'Weather',
      title: 'Weather API',
      description: 'A weather web app that delivers location-based weather information through a clean, responsive interface, with a strong focus on quick search and easy readability.',
      tech: ['JavaScript', 'API Integration', 'Responsive UI'],
      thumbnail: weatherApiImg,
      links: { demo: 'https://weather-apis.onrender.com/', github: 'https://github.com/jontypatel1107/Weather-API', video: '#' }
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, observerOptions);

    projectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      projectsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [displayedProjects.length]);

  return (
    <section id="projects">
      <div className="projects-section-label">Projects Section</div>
      <div className="section-header reveal">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work, frontend clones, and interactive web apps</p>
      </div>
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            ref={(el) => (projectsRef.current[index] = el)}
          >
            <div className="project-image">
              <img src={project.thumbnail} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.demo} className="project-link">Live Demo</a>
                <a href={project.links.github} className="project-link">GitHub</a>
                <a href={project.links.video} className="project-link">Video</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {projects.length > 3 && (
        <div className="projects-actions">
          <button
            type="button"
            className="projects-load-more"
            onClick={() => setShowAllProjects((prev) => !prev)}
          >
            {showAllProjects ? 'Show Less' : 'Load More Projects'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
