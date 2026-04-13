import React, { useEffect, useRef, useState } from 'react';
import './Certificates.css';
import pccoeCertificate from '../assets/PCCOE Certificate.jpeg';
import skillNationCertificate from '../assets/Skill-Nation Certificate.jpeg';
import codeKshetraCertificate from '../assets/CodeKshetra Certificate.png';
import gcetCertificate from '../assets/GCET Certificate.png';
import mosipCertificate from '../assets/MOSIP Certificate.png';
import appianCertificate from '../assets/APPIAN Certificate.png';
import electrosphereCertificate from '../assets/IMG_20260403_165618748.jpg';
import wceHackathonCertificate from '../assets/IMG_20260403_165710964.jpg';
import suHackathonCertificate from '../assets/SU Hackathon Certificate.jpg';

const Certificates = () => {
  const containerRef = useRef(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const certificates = [
    {
      provider: 'PCCOE MLSC',
      title: 'Certificate of Appreciation - BlueBit Hackathon 4.0 Round 1',
      year: '2025-26',
      category: 'Hackathon Participation',
      description: 'Awarded by Pimpri Chinchwad College of Engineering for participating in Round 1 of BlueBit Hackathon 4.0, recognizing enthusiasm, dedication, and commitment to learning and innovation.',
      skills: ['Hackathon', 'Innovation', 'Team Participation'],
      link: pccoeCertificate,
      image: pccoeCertificate
    },
    {
      provider: 'Skill Nation',
      title: 'Certificate of Completion - Generative AI Tools Workshop',
      year: '2025',
      category: 'Generative AI',
      description: 'Issued for successfully completing a live workshop on Generative AI Tools, building exposure to modern AI workflows, productivity tools, and practical use cases for creators and developers.',
      skills: ['Generative AI', 'AI Tools', 'Productivity'],
      link: skillNationCertificate,
      image: skillNationCertificate
    },
    {
      provider: 'Unstop x DKTE',
      title: 'Certificate of Participation - CodeKshetra',
      year: '2026',
      category: 'Hackathon Participation',
      description: 'Issued for participating in CodeKshetra as part of Team 4-Bits, representing Swaminarayan University, Gujarat in a competitive innovation environment organized by DKTES Textile and Engineering Institute, Ichalkaranji.',
      skills: ['Hackathon', 'Teamwork', 'Problem Solving'],
      link: codeKshetraCertificate,
      image: codeKshetraCertificate
    },
    {
      provider: 'Unstop x GCET',
      title: 'Certificate of Participation - GCET Hackathon 2026',
      year: '2026',
      category: 'Hackathon Participation',
      description: 'Awarded for participating in GCET Hackathon 2026 organized by G H Patel College of Engineering and Technology, highlighting active involvement in competitive problem solving and technical collaboration.',
      skills: ['Hackathon', 'Collaboration', 'Innovation'],
      link: gcetCertificate,
      image: gcetCertificate
    },
    {
      provider: 'Unstop x IIT Madras',
      title: 'Certificate of Participation - MOSIP Decode Hackathon',
      year: '2026',
      category: 'Digital Governance Hackathon',
      description: 'Issued for participation in the MOSIP Decode Hackathon at Digital Governance Summit 2026 of Shaastra 2026, organized by IIT Madras, reflecting interest in digital identity, governance, and large-scale public technology challenges.',
      skills: ['Digital Governance', 'Hackathon', 'Public Tech'],
      link: mosipCertificate,
      image: mosipCertificate
    },
    {
      provider: 'Unstop x IIT Madras',
      title: 'Certificate of Participation - Appian AI Application Challenge 2026',
      year: '2026',
      category: 'AI Challenge',
      description: 'Awarded for participating in the Appian AI Application Challenge 2026 at Shaastra 2026, demonstrating curiosity for AI-powered applications and practical problem solving in a national-level competition setting.',
      skills: ['AI Applications', 'Innovation', 'Competitive Learning'],
      link: appianCertificate,
      image: appianCertificate
    },
    {
      provider: 'TechXCV x Swaminarayan University',
      title: 'Certificate of Participation - Electrosphere 2K26 Software Edition',
      year: '2026',
      category: 'Coding Competition',
      description: 'Awarded for active and successful participation in Electrosphere 2K26, organized by the TechXCV Club under the Faculty of Engineering at Swaminarayan University, highlighting involvement in a software-focused competitive event.',
      skills: ['Coding Contest', 'Software Edition', 'Technical Participation'],
      link: electrosphereCertificate,
      image: electrosphereCertificate
    },
    {
      provider: 'WCE ACM Student Chapter',
      title: 'Finalist - WCE Hackathon 2026',
      year: '2026',
      category: '24-Hour Hackathon',
      description: 'Recognized as a finalist in WCE Hackathon 2026, a 24-hour coding and innovation marathon organized by the WCE ACM Student Chapter at Walchand College of Engineering, Sangli.',
      skills: ['Finalist', '24-Hour Hackathon', 'Innovation'],
      link: wceHackathonCertificate,
      image: wceHackathonCertificate
    },
    {
      provider: 'Sangam University x Sangam i-TBI',
      title: 'Certificate of Participation - SU Hackathon 2026',
      year: '2026',
      category: 'Innovation Hackathon',
      description: 'Awarded for successfully participating in SU Hackathon 2026, organized by the Department of Computer Science & Engineering at Sangam University, Bhilwara, focused on innovation and technological advancement in Textile City Bhilwara.',
      skills: ['Hackathon', 'Innovation', 'Team 4-Bits'],
      link: suHackathonCertificate,
      image: suHackathonCertificate
    }
  ];

  const summary = [
    { value: '9+', label: 'Certificates' },
    { value: '8', label: 'Providers' },
    { value: 'Ongoing', label: 'Learning Mode' }
  ];

  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 4);

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
  }, [displayedCertificates.length]);

  return (
    <section className="certificates-section" id="certificates" ref={containerRef}>
      <div className="certificates-content">
        <div className="certificates-section-label reveal">Certificates Section</div>

        <div className="section-header reveal">
          <h2 className="section-title">Certificates & Learning</h2>
          <p className="section-subtitle">Proof of continuous learning across web, tools, and cloud fundamentals</p>
        </div>

        <div className="certificates-overview reveal">
          <div className="certificates-copy">
            <span className="certificates-kicker">Verified Learning Path</span>
            <h3>Every certificate marks one more skill turned into real momentum.</h3>
            <p>
              These certificates reflect my continuous learning journey across hackathons, AI workshops, and technical
              challenges, showing how I keep expanding my skills through practical experience and competitive events.
            </p>
          </div>

          <div className="certificates-summary">
            {summary.map((item, index) => (
              <div key={index} className="certificate-summary-card reveal">
                <span className="certificate-summary-value">{item.value}</span>
                <span className="certificate-summary-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="certificates-grid">
          {displayedCertificates.map((certificate, index) => (
            <article key={index} className="certificate-card reveal">
              {certificate.image && (
                <div className={`certificate-image ${certificate.imageClassName || ''}`.trim()}>
                  <img src={certificate.image} alt={certificate.title} />
                </div>
              )}

              <div className="certificate-top">
                <span className="certificate-provider">{certificate.provider}</span>
                <span className="certificate-year">{certificate.year}</span>
              </div>

              <h3>{certificate.title}</h3>
              <p className="certificate-category">{certificate.category}</p>
              <p className="certificate-description">{certificate.description}</p>

              <div className="certificate-skills">
                {certificate.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="certificate-skill">{skill}</span>
                ))}
              </div>

              <a href={certificate.link} className="certificate-link">View Certificate</a>
            </article>
          ))}
        </div>

        {certificates.length > 4 && (
          <div className="certificates-actions">
            <button
              type="button"
              className="certificates-load-more"
              onClick={() => setShowAllCertificates((prev) => !prev)}
            >
              {showAllCertificates ? 'Show Less' : 'Load More Certificates'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
