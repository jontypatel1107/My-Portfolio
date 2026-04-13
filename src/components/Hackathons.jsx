import React, { useEffect, useRef } from 'react';
import './Hackathons.css';

const Hackathons = () => {
  const containerRef = useRef(null);

  const hackathons = [
    {
      badge: 'Featured Build',
      title: 'WCE Hackathon 2026',
      date: '2026',
      organizer: 'WCE ACM Student Chapter',
      outcome: 'Finalist',
      description:
        'Recognized as a finalist in WCE Hackathon 2026, a 24-hour coding and innovation marathon organized at Walchand College of Engineering, Sangli.',
      stack: ['Hackathon', 'Innovation', '24-Hour Sprint'],
      highlights: ['Finalist recognition', '24-hour coding event', 'Organized by WCE ACM Student Chapter'],
      links: {
        demo: 'https://sanjeevani-ochre.vercel.app/',
        github: 'https://github.com/jontypatel1107/Sanjeevani_Su_Startup'
      }
    },
    {
      badge: 'Team Sprint',
      title: 'Electrosphere 2K26 Software Edition',
      date: '2026',
      organizer: 'TechXCV x Swaminarayan University',
      outcome: 'Participant',
      description:
        'Awarded for active and successful participation in Electrosphere 2K26, organized by the TechXCV Club under the Faculty of Engineering at Swaminarayan University, highlighting involvement in a software-focused competitive event.',
      stack: ['Coding Contest', 'Software Edition', 'Technical Participation'],
      highlights: ['Active participation', 'Software-focused competition', 'Organized by TechXCV Club'],
      links: {
        demo: '#',
        github: 'https://github.com/jontypatel1107/Air-Talks'
      }
    },
    {
      badge: 'Innovation Challenge',
      title: 'SU Hackathon 2026',
      date: 'March 14-15, 2026',
      organizer: 'Sangam University x Sangam i-TBI',
      outcome: 'Participant',
      description:
        'Successfully participated in SU Hackathon 2026 at Sangam University, Bhilwara, a multi-day innovation event centered on technological advancement and real-world problem solving in Textile City Bhilwara.',
      stack: ['Hackathon', 'Innovation', 'Team 4-Bits'],
      highlights: ['Participated on March 14-15, 2026', 'Represented Swaminarayan University with Team 4-Bits', 'Worked in a fast-paced collaborative problem-solving environment'],
      links: {
        demo: 'https://sanjeevani-ochre.vercel.app/',
        github: 'https://github.com/jontypatel1107/Sanjeevani_Su_Startup'
      }
    }
  ];

  const strengths = [
    { value: '24-48h', label: 'Rapid prototyping mindset' },
    { value: 'Teamwork', label: 'Collaboration under pressure' },
    { value: 'Pitching', label: 'Problem-first storytelling' }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const reveals = containerRef.current.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      reveals.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="hackathons-section" id="hackathons" ref={containerRef}>
      <div className="hackathons-content">
        <div className="hackathons-section-label reveal">Hackathon Section</div>

        <div className="section-header reveal">
          <h2 className="section-title">Hackathon Journey</h2>
          <p className="section-subtitle">Fast builds, teamwork, and competition-ready problem solving across real events</p>
        </div>

        <div className="hackathons-hero reveal">
          <div className="hackathons-hero-copy">
            <span className="hackathons-kicker">Build Fast. Learn Faster.</span>
            <h3>Hackathons are where I turn pressure into product momentum.</h3>
            <p>
              These hackathons reflect how I work under pressure, collaborate with teams, and turn ideas into working
              solutions in high-energy competitive environments.
            </p>
          </div>

          <div className="hackathons-strengths">
            {strengths.map((strength, index) => (
              <div key={index} className="hackathon-strength-card reveal">
                <span className="strength-value">{strength.value}</span>
                <span className="strength-label">{strength.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hackathons-grid">
          {hackathons.map((hackathon, index) => (
            <article key={index} className="hackathon-card reveal">
              <div className="hackathon-card-top">
                <span className="hackathon-badge">{hackathon.badge}</span>
                <span className="hackathon-outcome">{hackathon.outcome}</span>
              </div>

              <h3>{hackathon.title}</h3>

              <div className="hackathon-meta">
                <span>{hackathon.date}</span>
                <span>{hackathon.organizer}</span>
              </div>

              <p className="hackathon-description">{hackathon.description}</p>

              <div className="hackathon-stack">
                {hackathon.stack.map((tech, techIndex) => (
                  <span key={techIndex} className="hackathon-tag">{tech}</span>
                ))}
              </div>

              <div className="hackathon-highlights">
                {hackathon.highlights.map((point, pointIndex) => (
                  <div key={pointIndex} className="hackathon-highlight">{point}</div>
                ))}
              </div>

              <div className="hackathon-links">
                <a href={hackathon.links.demo} className="hackathon-link">Demo</a>
                <a href={hackathon.links.github} className="hackathon-link">GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
