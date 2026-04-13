import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef([]);
  const headerRef = useRef(null);
  const taglineRef = useRef(null);

  const icons = {
    htmlCss: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-stroke" d="M14 15h36l-4 32-14 7-14-7-4-32Z" />
        <path className="icon-stroke" d="M20 22h24" />
        <path className="icon-fill" d="M24 27h14l-.4 4H27l.2 3h10.7l-1.1 10.4-4.6 2.4-4.6-2.4-.3-4.4h4l.1 1.9 2 .9 2-.9.3-3h-8.4L24 27Z" />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect className="icon-stroke" x="13" y="13" width="38" height="38" rx="12" />
        <path className="icon-fill" d="M24 22h4.5v15.5c0 4.8-3 7.2-7.2 7.2-1.9 0-3.5-.4-4.9-1.2l1.4-3.9c.8.5 1.8.8 3 .8 2 0 3.4-1 3.4-3.4V22Zm9.5 16.7c1.3 2 2.9 3.4 5.8 3.4 2.4 0 3.9-1.2 3.9-2.9 0-2-1.6-2.7-4.3-3.8l-1.5-.6c-4.4-1.9-7.1-4.2-7.1-8.9 0-4.3 3.2-7.5 8.4-7.5 3.7 0 6.3 1.3 8.2 4.7l-3.5 2.3c-.7-1.4-1.7-2-2.9-2-1.4 0-2.2.9-2.2 1.9 0 1.4.8 2 3 2.9l1.5.6c4.9 2.1 7.6 4.2 7.6 9 0 5.1-4.1 8-9.4 8-5.2 0-8.5-2.5-10.2-5.8l3.7-2.5Z" />
      </svg>
    ),
    react: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle className="icon-stroke" cx="32" cy="32" r="8" />
        <ellipse className="icon-stroke" cx="32" cy="32" rx="23" ry="9.5" />
        <ellipse className="icon-stroke" cx="32" cy="32" rx="23" ry="9.5" transform="rotate(60 32 32)" />
        <ellipse className="icon-stroke" cx="32" cy="32" rx="23" ry="9.5" transform="rotate(120 32 32)" />
        <circle className="icon-fill" cx="32" cy="32" r="4.2" />
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle className="icon-stroke" cx="32" cy="32" r="21" />
        <path className="icon-fill" d="M25 42V22h3l13 16.7V22h3v20h-3L28 25.3V42h-3Z" />
        <path className="icon-stroke" d="M40 40l4 4" />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-stroke" d="M14 24c4-8 10-12 18-12 12 0 14 9 20 10 3.5.6 6.3-.6 8.5-3.6-4 8-10 12-18 12-12 0-14-9-20-10-3.5-.6-6.3.6-8.5 3.6Z" />
        <path className="icon-stroke" d="M14 39c4-8 10-12 18-12 12 0 14 9 20 10 3.5.6 6.3-.6 8.5-3.6-4 8-10 12-18 12-12 0-14-9-20-10-3.5-.6-6.3.6-8.5 3.6Z" />
        <circle className="icon-fill" cx="24" cy="28" r="2.2" />
        <circle className="icon-fill" cx="39" cy="33" r="2.2" />
      </svg>
    ),
    gitGithub: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-stroke" d="M18 34 29 23l6 6-11 11-6-6Z" />
        <path className="icon-stroke" d="M35 18l11 11-6 6-11-11 6-6Z" />
        <path className="icon-stroke" d="M22 43l6-6" />
        <path className="icon-fill" d="M45.5 36.2c0-5.1-4.1-9.2-9.2-9.2s-9.2 4.1-9.2 9.2c0 4 2.5 7.4 6 8.6.6.2.8-.2.8-.5v-2c-2.4.5-3-.8-3.1-1.6-.1-.4-.7-1.7-1.2-2-.4-.2-.9-.7 0-.8.8 0 1.3.7 1.5 1 .8 1.4 2.1 1.1 2.7.8.1-.6.3-1 .6-1.3-2.1-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .9-.3 2.8 1.1a9.7 9.7 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.7v2.6c0 .3.2.6.7.5 3.4-1.1 5.9-4.5 5.9-8.6Z" />
      </svg>
    ),
    uiux: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-stroke" d="M15 49l15-15 9 9-15 15H15v-9Z" />
        <path className="icon-stroke" d="M35 19l6-6 10 10-6 6-10-10Z" />
        <path className="icon-fill" d="M22.5 41.5 33 31l4 4-10.5 10.5h-4v-4Z" />
        <path className="icon-stroke" d="M28 36l4 4" />
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path className="icon-stroke" d="M32 11 49 20.8v22.4L32 53 15 43.2V20.8L32 11Z" />
        <path className="icon-stroke" d="M25 23h14l7 9-7 9H25l-7-9 7-9Z" />
        <circle className="icon-fill" cx="32" cy="32" r="4.4" />
      </svg>
    )
  };

  const skills = [
    { icon: icons.htmlCss, name: 'HTML & CSS', progress: 95, description: 'Building semantic, accessible markup' },
    { icon: icons.javascript, name: 'JavaScript', progress: 90, description: 'Modern ES6+ & async programming' },
    { icon: icons.react, name: 'React', progress: 88, description: 'Component-based UI development' },
    { icon: icons.nextjs, name: 'Next.js', progress: 85, description: 'Server-side rendering & SSG' },
    { icon: icons.tailwind, name: 'Tailwind CSS', progress: 92, description: 'Utility-first CSS framework' },
    { icon: icons.gitGithub, name: 'Git & GitHub', progress: 87, description: 'Version control & collaboration' },
    { icon: icons.uiux, name: 'UI/UX Design', progress: 83, description: 'User-centered design principles' },
    { icon: icons.nodejs, name: 'Node.js', progress: 86, description: 'Backend & API development' }
  ];

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

    [headerRef.current, taglineRef.current, ...skillsRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      skillsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="skills">
      <div className="skills-section-label">Skills Section</div>
      <div className="section-header reveal" ref={headerRef}>
        <h2 className="section-title">Tech Arsenal</h2>
        <p className="section-subtitle">Technologies I use to turn ideas into clean, responsive products.</p>
      </div>
      <div className="skills-tagline reveal" ref={taglineRef}>
        <span className="skills-kicker">Core Stack</span>
        <h3>Focused on frontend tools, smooth interfaces, and practical problem solving.</h3>
        <p>Building modern web experiences with performance, clarity, and good design at the center.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            ref={el => skillsRef.current[index] = el}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <p className="skill-description">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
