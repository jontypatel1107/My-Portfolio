import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

import memoryFlipImg from '../assets/memory-flip-card-game.png';
import ticTacToeImg from '../assets/tic-tac-toe-game.png';
import typingSpeedImg from '../assets/typing-speed-test-game.jpg';
import whackAMoleImg from '../assets/whac-a-mole-game.jpg';
import zohoMailImg from '../assets/Zoho Mail.jpg';
import swayamImg from '../assets/Swayam App.png';
import hammerImg from '../assets/Hammer Lifestyle.jpg';
import rarePlanetImg from '../assets/Rare Planet.jpg';
import shadowfaxImg from '../assets/ShadowFax.jpg';
import blackbuckImg from '../assets/blACKBUCK.png';
import sanjeevaniImg from '../assets/Sanjeevani.webp';
import pinExplorerImg from '../assets/PinCode Lookup.jpg';
import weatherApiImg from '../assets/Weather-API--670x375.png';

const Projects = () => {
  const containerRef = useRef(null);

  const projectSections = [
    {
      id: 'games',
      title: 'Games Created by Me',
      description: 'Interactive games and playful builds created from scratch.',
      projects: [
        {
          title: 'Memory Flip Card Game',
          description: 'An interactive card matching game where players flip cards to find matching pairs. Features smooth animations, move tracking, and a clean responsive design.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: memoryFlipImg,
          links: { demo: 'https://memory-flip-card-game.vercel.app', github: 'https://github.com/jontypatel1107/Games-By-Jonty/tree/main/Memory-Flip-Card-Game', video: '#' }
        },
        {
          title: 'Tic Tac Toe Game',
          description: 'A classic Tic Tac Toe game with a modern blue-themed UI. Play against a friend or challenge the AI with multiple difficulty levels.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: ticTacToeImg,
          links: { demo: 'https://tic-tac-toe-game-blue-one.vercel.app', github: 'https://github.com/jontypatel1107/Games-By-Jonty/tree/main/TIC-TAC-TOE', video: '#' }
        },
        {
          title: 'Typing Speed Test Game',
          description: 'A typing speed test application that measures your typing speed in WPM. Features real-time feedback, accuracy tracking, and multiple test modes.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: typingSpeedImg,
          links: { demo: 'https://typing-speed-test-game-eight.vercel.app', github: 'https://github.com/jontypatel1107/Games-By-Jonty/tree/main/Typing-Speed-Test-Game', video: '#' }
        },
        {
          title: 'Whack A Mole Game',
          description: 'A fun and engaging whack-a-mole game where you tap on moles as they pop up from holes. Features score tracking, timer, and increasing difficulty.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: whackAMoleImg,
          links: { demo: 'https://whack-a-mole-game-mu.vercel.app', github: 'https://github.com/jontypatel1107/Games-By-Jonty/tree/main/Whack-A-Mole-Game', video: '#' }
        }
      ]
    },
    {
      id: 'clones',
      title: 'Clone Projects',
      description: 'Website clones that demonstrate layout accuracy, UI reproduction, and frontend execution.',
      projects: [
        {
          title: 'Zoho Mail Clone',
          description: 'A comprehensive email client interface clone featuring inbox management, email composition, folder organization, and modern email dashboard design with responsive layout.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: zohoMailImg,
          links: { demo: 'https://diwali-assignment-3rd-website.netlify.app/diwali-assignment/', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/ZohoMail', video: '#' }
        },
        {
          title: 'Swayam Educational Platform Clone',
          description: 'A responsive clone of the Swayam educational platform, featuring course listings, learning modules, and educational content organization with clean UI design.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: swayamImg,
          links: { demo: 'https://diwali-assignment-3rd-website.netlify.app/diwali-assignment/swayam', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/SwayamApp', video: '#' }
        },
        {
          title: 'Hammer Lifestyle Clone',
          description: 'A pixel-perfect clone of Hammer Lifestyle website, showcasing fitness products, workout plans, and lifestyle content with modern e-commerce design elements.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: hammerImg,
          links: { demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/hammer-lifestyle/hammer', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/Hammer-Lifestyle', video: '#' }
        },
        {
          title: 'Rare Planet Clone',
          description: 'An adventurous website clone for Rare Planet, featuring travel destinations, expedition details, and outdoor adventure experiences with stunning visual layouts.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: rarePlanetImg,
          links: { demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/rare-planet/rare-planet', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/Rare-Planet', video: '#' }
        },
        {
          title: 'Shadowfax Delivery Clone',
          description: 'A hyperlocal delivery service website clone featuring order tracking, delivery services, and logistics information with intuitive user interface design.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: shadowfaxImg,
          links: { demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/shadowfax/shadowfax', github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/ShadowFax', video: '#' }
        },
        {
          title: 'BlackBuck Clone',
          description: 'A responsive clone of the BlackBuck logistics platform, focused on freight and transport services, strong service-driven visuals, and a clean business-oriented layout that highlights the brands delivery and load-matching experience.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          thumbnail: blackbuckImg,
          links: {
            demo: 'https://diwali-assignment-3rd-website.netlify.app/diwali-assignment/blackbuck1',
            github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/BlackBuck',
            video: 'https://www.youtube.com/watch?v=60INAI9SqpY'
          }
        }
      ]
    },
    {
      id: 'fullstack',
      title: 'Full Stack Applications',
      description: 'Applications that combine frontend experience with app-like flows and real-world utility.',
      projects: [
        {
          title: 'Sanjeevani Healthcare Platform',
          description: 'A comprehensive healthcare platform featuring medical services, appointment booking, patient management, and health information with modern, accessible design for better healthcare accessibility.',
          tech: ['React', 'Next.js', 'Vercel'],
          thumbnail: sanjeevaniImg,
          links: { demo: 'https://sanjeevani-ochre.vercel.app/', github: 'https://github.com/jontypatel1107/Sanjeevani_Su_Startup/tree/main', video: '#' }
        },
        {
          title: 'PinExplorer',
          description: 'A PIN code lookup web app that helps users quickly search Indian postal details, explore location information, and use a fast, clean interface for postal code discovery.',
          tech: ['React', 'JavaScript', 'CSS', 'API Integration'],
          thumbnail: pinExplorerImg,
          links: { demo: 'https://pinexplorer-1.onrender.com/', github: 'https://github.com/jontypatel1107/PinExplorer', video: '#' }
        }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Projects',
      description: 'Frontend-focused projects built around UI, API integration, responsiveness, and quick interaction.',
      projects: [
        {
          title: 'Weather API',
          description: 'A weather web app that delivers location-based weather information through a clean, responsive interface, with a strong focus on quick search and easy readability.',
          tech: ['JavaScript', 'API Integration', 'Responsive UI'],
          thumbnail: weatherApiImg,
          links: { demo: 'https://weather-apis.onrender.com/', github: 'https://github.com/jontypatel1107/Weather-API', video: '#' }
        }
      ]
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    const targets = containerRef.current.querySelectorAll('.reveal, .project-card');
    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" ref={containerRef}>
      <div className="projects-section-label">Projects Section</div>
      <div className="section-header reveal">
        <h2 className="section-title">Projects by Category</h2>
        <p className="section-subtitle">Organized to match the required portfolio categories: games, clones, full stack, and frontend projects.</p>
      </div>

      <div className="project-category-list">
        {projectSections.map((section) => (
          <div key={section.id} className="project-category-block reveal">
            <div className="project-category-header">
              <div>
                <span className="project-category-kicker">{section.id}</span>
                <h3 className="project-category-title">{section.title}</h3>
              </div>
              <p className="project-category-description">{section.description}</p>
            </div>

            {section.projects.length > 0 ? (
              <div className="projects-grid">
                {section.projects.map((project) => (
                  <article
                    key={`${section.id}-${project.title}`}
                    className="project-card"
                  >
                    <div className="project-image">
                      <img src={project.thumbnail} alt={project.title} />
                    </div>
                    <div className="project-content">
                      <h4 className="project-title">{project.title}</h4>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        {project.links.video && project.links.video !== '#' && (
                          <a href={project.links.video} className="project-link" target="_blank" rel="noopener noreferrer">Video</a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="project-empty-state">
                <div className="project-empty-card">
                  <span className="project-empty-badge">Coming Soon</span>
                  <h4>No projects yet</h4>
                  <p>This section is reserved for projects you create in the future.</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
