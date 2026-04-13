import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Initialize email.js with your public key
// Replace 'YOUR_PUBLIC_KEY' with your actual Email.js public key
emailjs.init('ydQdiI5oKuHXvaNGE');

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    try {
      // Send email using email.js
      // Replace SERVICE_ID and TEMPLATE_ID with your actual Email.js credentials
      const response = await emailjs.send(
        'service_hrw6dgr',        // Replace with your Service ID
        'template_tp52i4a',       // Replace with your Template ID
        {
          to_email: 'jontypatel1107@gmail.com',  // Your email address where you want to receive messages
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setSubmitStatus('✅ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('❌ Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('❌ Error sending message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jontypatel1107',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jonty-patel-b40731394/',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@JontyPatel-1107',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      )
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/jontypatel1107/',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.5 5 8 12l7.5 7" />
          <path d="M19 12H9.5" />
          <path d="M12 3.5 6 9" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/JontyPatel1107',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.599-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.49h2.039L6.486 3.24H4.298L17.61 20.643Z" />
        </svg>
      )
    },
    {
      name: 'SoloLearn',
      url: 'https://www.sololearn.com/en/profile/35609832',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.218 6.75 3.75L12 11.718 5.25 7.968 12 4.218Zm-7 5.45 6 3.333v6.782L5 16.45V9.668Zm8 10.115v-6.782l6-3.333v6.782l-6 3.333Z" />
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:jontypatel1107@gmail.com',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>
      )
    }
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
    <section className="contact-section" id="contact" ref={containerRef}>
      <div className="contact-content">
        <div className="section-header reveal">
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle">Connect with me on social platforms or drop a message</p>
        </div>
        
        <div className="contact-container reveal">
          <div className="contact-left">
            <div className="contact-heading-col">
              <h3>Let's Connect</h3>
              <p className="heading-description">Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech!</p>
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.name}
                >
                  {link.icon}
                  <div className="social-link-text">
                    <span className="social-link-name">{link.name}</span>
                    <span className="social-link-url">{link.url.replace(/https?:\/\//, '')}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <h3>Send a Message</h3>
            <p className="form-description">Share your idea, question, or opportunity and I will get back to you as soon as possible.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="form-textarea"
              />
            </div>
            
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message →'}
            </button>
            {submitStatus && <p className="submit-status">{submitStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
