import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const containerRef = useRef(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
    <section className="about-section" id="about" ref={containerRef}>
      <div className="about-content">
        <div className="section-header reveal">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        {/* Motivational Quote */}
        <div className="quote-banner reveal">
          <div className="quote-content">
            <p className="quote-text">"Code is the language of innovation; every line I write is a step towards creating a better digital future."</p>
            <p className="quote-author">— Jonty Patel</p>
          </div>
        </div>

        <div className="about-container reveal">
          <div className="about-text">
            <p className="about-paragraph">
              Hi! I'm Jonty Patel, a passionate first-year student at <strong>CodingGita</strong> pursuing my dreams in web development. 
              I'm driven by a deep curiosity for technology and a commitment to building beautiful, functional web applications.
            </p>

            <p className="about-paragraph">
              My journey into web development started with a fascination for how websites work. Since then, I've been constantly learning 
              and improving my skills in modern web technologies like <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>.
            </p>

            <p className="about-paragraph">
              As a first-year student, I'm focused on mastering the fundamentals of web development while working on real-world projects. 
              I believe in continuous learning and pushing myself to build better, more efficient solutions. My goal is to become a skilled 
              full-stack developer who can create meaningful digital experiences.
            </p>

            <p className="about-paragraph">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal 
              projects that challenge my problem-solving skills. I'm always eager to collaborate, learn from others, and take on new challenges.
            </p>
          </div>

          <div className="about-highlights reveal">
            <h3 className="highlights-title">What I'm Passionate About</h3>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Frontend Development</h4>
                  <p>Creating interactive and responsive user interfaces</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">💻</div>
                <div className="highlight-content">
                  <h4>Web Technologies</h4>
                  <p>Learning and mastering modern web frameworks</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🎨</div>
                <div className="highlight-content">
                  <h4>UI/UX Design</h4>
                  <p>Designing beautiful and intuitive user experiences</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🔧</div>
                <div className="highlight-content">
                  <h4>Problem Solving</h4>
                  <p>Tackling challenges with creative solutions</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">📚</div>
                <div className="highlight-content">
                  <h4>Continuous Learning</h4>
                  <p>Always exploring new technologies and methodologies</p>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">🤝</div>
                <div className="highlight-content">
                  <h4>Collaboration</h4>
                  <p>Working effectively with teams and communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="quick-facts reveal">
          <h3 className="section-segment-title">Quick Facts About Me</h3>
          <div className="facts-grid">
            <div className="fact-card">
              <div className="fact-icon">🎓</div>
              <h4>First Year Student</h4>
              <p>Pursuing web development at CodingGita</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">⏱️</div>
              <h4>Passionate Learner</h4>
              <p>Coding 40+ hours per week</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🌍</div>
              <h4>Tech Enthusiast</h4>
              <p>Excited about innovation & creativity</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🚀</div>
              <h4>Project Builder</h4>
              <p>Turning ideas into reality through code</p>
            </div>
          </div>
        </div>

        {/* Goals & Aspirations */}
        <div className="goals-section reveal">
          <h3 className="section-segment-title">My Goals & Aspirations</h3>
          <div className="goals-container">
            <div className="goals-column">
              <h4 className="goals-subtitle">📅 Short-term (This Year)</h4>
              <ul className="goals-list">
                <li>Master React hooks and advanced patterns</li>
                <li>Build 5+ full-featured projects</li>
                <li>Contribute to open-source projects</li>
                <li>Secure my first internship</li>
              </ul>
            </div>
            <div className="goals-column">
              <h4 className="goals-subtitle">🎯 Long-term Vision</h4>
              <ul className="goals-list">
                <li>Become a skilled full-stack developer</li>
                <li>Work at top-tier tech companies</li>
                <li>Build products that impact millions</li>
                <li>Mentor aspiring developers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personal Values & Learning Philosophy */}
        <div className="values-section reveal">
          <h3 className="section-segment-title">My Philosophy & Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-emoji">💡</span>
              <h4>Quality Over Quantity</h4>
              <p>I believe in writing clean, maintainable code rather than rushing through projects</p>
            </div>
            <div className="value-card">
              <span className="value-emoji">👥</span>
              <h4>User-First Mindset</h4>
              <p>Every feature I build is designed with the end-user in mind</p>
            </div>
            <div className="value-card">
              <span className="value-emoji">🤗</span>
              <h4>Community Driven</h4>
              <p>I'm passionate about helping others and growing together as a community</p>
            </div>
            <div className="value-card">
              <span className="value-emoji">♻️</span>
              <h4>Continuous Growth</h4>
              <p>Learning never stops – every challenge is an opportunity to improve</p>
            </div>
          </div>
        </div>

        {/* Fun Hobbies */}
        <div className="hobbies-section reveal">
          <h3 className="section-segment-title">🎉 Fun Hobbies & Interests</h3>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <div className="hobby-icon">🏏</div>
              <div className="hobby-info">
                <h4>Playing Cricket</h4>
                <p>Nothing beats the thrill of outdoor cricket. It keeps me active, builds teamwork, and helps me unwind after coding sessions.</p>
              </div>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">♟️</div>
              <div className="hobby-info">
                <h4>Chess Lover</h4>
                <p>Chess sharpens my strategic thinking skills. I enjoy the complexity and mental challenge it provides – it complements my coding mindset.</p>
              </div>
            </div>
            <div className="hobby-card">
              <div className="hobby-icon">🎵</div>
              <div className="hobby-info">
                <h4>Music Enthusiast</h4>
                <p>Music is my creative outlet and stress reliever. I listen to various genres while coding – it enhances my focus and creativity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="contact-cta reveal">
          <h3 className="section-segment-title">Ready to Connect?</h3>
          <p className="cta-text">I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to chat about web development, feel free to reach out.</p>
          <button className="cta-button" onClick={(e) => handleScroll(e, '#contact')}>
            Get In Touch →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
