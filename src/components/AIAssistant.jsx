import React, { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';

const AIAssistant = () => {
  const suggestedPrompts = [
    'Tell me about Jonty',
    'Show Jonty\'s best projects',
    'What skills does Jonty have?',
    'What certificates does Jonty have?',
    'Tell me about SU Hackathon 2026'
  ];

  const aboutResponses = [
    {
      keywords: ['about', 'about me', 'tell me about jonty', 'who is jonty', 'who are you', 'introduce'],
      content: 'Jonty Patel is a passionate first-year student at CodingGita focused on web development. He enjoys building beautiful, functional web applications and is driven by curiosity, continuous learning, and creating meaningful digital experiences.',
      actions: [
        { label: 'Open About Me', type: 'navigate', target: '#about' },
        { label: 'See Skills', type: 'navigate', target: '#skills' }
      ]
    },
    {
      keywords: ['background', 'journey', 'education', 'student', 'studying', 'college', 'codinggita'],
      content: 'Jonty is a first-year student at CodingGita. His web development journey started with curiosity about how websites work, and he has been steadily improving his React, JavaScript, and frontend skills by building real projects.',
      actions: [
        { label: 'Open About Me', type: 'navigate', target: '#about' },
        { label: 'View Projects', type: 'navigate', target: '#projects' }
      ]
    },
    {
      keywords: ['goal', 'goals', 'aspiration', 'future plan', 'career plan', 'vision', 'dream'],
      content: 'Jonty\'s short-term goals include mastering advanced React patterns, building more full-featured projects, contributing to open source, and securing his first internship. Long term, he wants to become a skilled full-stack developer, work at top-tier tech companies, build products that impact millions, and mentor aspiring developers.',
      actions: [
        { label: 'Open About Me', type: 'navigate', target: '#about' },
        { label: 'Contact Jonty', type: 'navigate', target: '#contact' }
      ]
    },
    {
      keywords: ['passion', 'passionate', 'interested in', 'what do you like', 'focus area'],
      content: 'Jonty is especially passionate about frontend development, modern web technologies, UI/UX design, problem solving, continuous learning, and collaboration. He enjoys creating responsive interfaces that feel clean and intuitive.',
      actions: [
        { label: 'See Skills', type: 'navigate', target: '#skills' },
        { label: 'Open About Me', type: 'navigate', target: '#about' }
      ]
    },
    {
      keywords: ['hobby', 'hobbies', 'interests', 'fun', 'outside coding', 'free time'],
      content: 'Outside coding, Jonty enjoys playing cricket, playing chess, and listening to music. Those hobbies help him stay active, think strategically, and keep his creativity and focus strong.',
      actions: [
        { label: 'Open About Me', type: 'navigate', target: '#about' },
        { label: 'Ask About Skills', type: 'prompt', target: 'What skills does Jonty have?' }
      ]
    },
    {
      keywords: ['value', 'values', 'philosophy', 'mindset', 'work ethic'],
      content: 'Jonty values quality over quantity, a user-first mindset, community-driven growth, and continuous improvement. He believes in writing clean, maintainable code and treating every challenge as a chance to learn.',
      actions: [
        { label: 'Open About Me', type: 'navigate', target: '#about' },
        { label: 'View Projects', type: 'navigate', target: '#projects' }
      ]
    },

  ];

  const projectKnowledge = [
    {
      id: 'zoho-mail-clone',
      title: 'Zoho Mail Clone',
      keywords: ['zoho', 'zoho mail', 'mail clone'],
      description: 'A comprehensive email client interface clone featuring inbox management, email composition, folder organization, and a modern responsive dashboard.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlight: 'This project highlights clean UI structuring and dashboard-style frontend execution.',
      links: {
        demo: 'https://diwali-assignment-3rd-website.netlify.app/diwali-assignment/',
        github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/ZohoMail'
      }
    },
    {
      id: 'swayam-educational-platform-clone',
      title: 'Swayam Educational Platform Clone',
      keywords: ['swayam', 'education platform', 'course platform'],
      description: 'A responsive educational platform clone with course listings, structured learning modules, and clean content organization.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlight: 'It shows how Jonty handles content-heavy layouts while keeping the interface easy to browse.',
      links: {
        demo: 'https://diwali-assignment-3rd-website.netlify.app/diwali-assignment/swayam',
        github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/SwayamApp'
      }
    },
    {
      id: 'hammer-lifestyle-clone',
      title: 'Hammer Lifestyle Clone',
      keywords: ['hammer', 'hammer lifestyle', 'fitness products'],
      description: 'A pixel-perfect clone of the Hammer Lifestyle website featuring fitness products, workout-focused visuals, and modern e-commerce styling.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlight: 'This one is strong on visual polish, spacing, and landing-page presentation.',
      links: {
        demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/hammer-lifestyle/hammer',
        github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/Hammer-Lifestyle'
      }
    },
    {
      id: 'rare-planet-clone',
      title: 'Rare Planet Clone',
      keywords: ['rare planet', 'travel', 'adventure'],
      description: 'An adventurous travel-style website clone with destination storytelling, expedition details, and high-impact visual sections.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlight: 'It demonstrates strong layout design and visually engaging section composition.',
      links: {
        demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/rare-planet/rare-planet',
        github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/Rare-Planet'
      }
    },
    {
      id: 'shadowfax-delivery-clone',
      title: 'Shadowfax Delivery Clone',
      keywords: ['shadowfax', 'delivery', 'logistics'],
      description: 'A delivery service website clone focused on logistics, order-tracking style UI, and service explanation sections.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      highlight: 'This project shows Jonty\'s ability to present service workflows in a user-friendly way.',
      links: {
        demo: 'https://cloning-using-html-css.netlify.app/diwali-assignment/shadowfax/shadowfax',
        github: 'https://github.com/jontypatel1107/Diwali-Assignments/tree/main/Diwali-Assignment/ShadowFax'
      }
    },
    {
      id: 'sanjeevani-healthcare-platform',
      title: 'Sanjeevani Healthcare Platform',
      keywords: ['sanjeevani', 'healthcare', 'medical platform'],
      description: 'A healthcare platform with medical services, appointment booking, patient-focused flows, and accessible modern design.',
      tech: ['React', 'Next.js', 'Vercel'],
      highlight: 'This is one of Jonty\'s strongest projects for showing product thinking and modern framework usage.',
      links: {
        demo: 'https://sanjeevani-ochre.vercel.app/',
        github: 'https://github.com/jontypatel1107/Sanjeevani_Su_Startup/tree/main'
      }
    },
    {
      id: 'pinexplorer',
      title: 'PinExplorer',
      keywords: ['pinexplorer', 'pin explorer', 'pincode', 'pin code', 'postal lookup', 'postal code'],
      description: 'A PIN code lookup web app for exploring Indian postal details, checking location information, and making postal searches quick and simple.',
      tech: ['React', 'JavaScript', 'CSS', 'API Integration'],
      highlight: 'It shows Jonty\'s ability to build a practical utility app with a clean search-focused experience.',
      links: {
        demo: 'https://pinexplorer-1.onrender.com/',
        github: 'https://github.com/jontypatel1107/PinExplorer'
      }
    },
    {
      id: 'weather-api',
      title: 'Weather API',
      keywords: ['weather api', 'weather app', 'weather'],
      description: 'A weather web app that provides location-based weather information through a clean, responsive interface.',
      tech: ['JavaScript', 'API Integration', 'Responsive UI'],
      highlight: 'It adds a practical API-driven project to the portfolio and shows strong focus on useful, user-friendly search flows.',
      links: {
        demo: 'https://weather-apis.onrender.com/',
        github: 'https://github.com/jontypatel1107/Weather-API'
      }
    }
  ];

  const certificateKnowledge = [
    {
      title: 'BlueBit Hackathon 4.0 Round 1',
      provider: 'PCCOE MLSC',
      year: '2025-26',
      keywords: ['bluebit', 'pccoe', 'pccoe mlsc'],
      description: 'A certificate of appreciation from Pimpri Chinchwad College of Engineering for participating in Round 1 of BlueBit Hackathon 4.0.',
      highlight: 'It reflects enthusiasm, dedication, and active participation in a competitive innovation environment.'
    },
    {
      title: 'Generative AI Tools Workshop',
      provider: 'Skill Nation',
      year: '2025',
      keywords: ['skill nation', 'generative ai', 'ai tools workshop'],
      description: 'A certificate of completion for a live workshop on Generative AI Tools.',
      highlight: 'It shows hands-on exposure to modern AI workflows, productivity tools, and practical creator and developer use cases.'
    },
    {
      title: 'CodeKshetra',
      provider: 'Unstop x DKTE',
      year: '2026',
      keywords: ['codekshetra', 'dkte'],
      description: 'A certificate of participation for CodeKshetra as part of Team 4-Bits representing Swaminarayan University, Gujarat.',
      highlight: 'It highlights teamwork, competitive problem solving, and participation in an innovation-focused event.'
    },
    {
      title: 'GCET Hackathon 2026',
      provider: 'Unstop x GCET',
      year: '2026',
      keywords: ['gcet', 'gcet hackathon'],
      description: 'A certificate of participation for GCET Hackathon 2026 organized by G H Patel College of Engineering and Technology.',
      highlight: 'It reflects active involvement in technical collaboration and competitive problem solving.'
    },
    {
      title: 'MOSIP Decode Hackathon',
      provider: 'Unstop x IIT Madras',
      year: '2026',
      keywords: ['mosip', 'decode hackathon', 'digital governance'],
      description: 'A certificate for participating in the MOSIP Decode Hackathon at Digital Governance Summit 2026 during Shaastra 2026.',
      highlight: 'It shows interest in digital identity, governance, and public technology challenges.'
    },
    {
      title: 'Appian AI Application Challenge 2026',
      provider: 'Unstop x IIT Madras',
      year: '2026',
      keywords: ['appian', 'ai application challenge'],
      description: 'A certificate of participation for the Appian AI Application Challenge 2026 at Shaastra 2026.',
      highlight: 'It demonstrates curiosity for AI-powered applications and practical problem solving in a national-level competition.'
    },
    {
      title: 'Electrosphere 2K26 Software Edition',
      provider: 'TechXCV x Swaminarayan University',
      year: '2026',
      keywords: ['electrosphere', 'techxcv', 'software edition'],
      description: 'A certificate of participation for Electrosphere 2K26 organized by the TechXCV Club under the Faculty of Engineering at Swaminarayan University.',
      highlight: 'It highlights involvement in a software-focused competitive event.'
    },
    {
      title: 'WCE Hackathon 2026',
      provider: 'WCE ACM Student Chapter',
      year: '2026',
      keywords: ['wce', 'walchand'],
      description: 'A finalist certificate from WCE Hackathon 2026, a 24-hour coding and innovation marathon at Walchand College of Engineering, Sangli.',
      highlight: 'It stands out as one of Jonty\'s strongest hackathon achievements because he reached the finalist stage.'
    },
    {
      title: 'SU Hackathon 2026',
      provider: 'Sangam University x Sangam i-TBI',
      year: '2026',
      keywords: ['su hackathon', 'sangam university', 'sangam i-tbi', 'bhilwara'],
      description: 'A certificate of participation for SU Hackathon 2026 organized by the Department of Computer Science & Engineering at Sangam University, Bhilwara.',
      highlight: 'It reflects participation in an innovation event focused on technological advancement in Textile City Bhilwara.'
    }
  ];

  const hackathonKnowledge = [
    {
      title: 'WCE Hackathon 2026',
      keywords: ['wce hackathon', 'wce', 'walchand'],
      organizer: 'WCE ACM Student Chapter',
      outcome: 'Finalist',
      description: 'WCE Hackathon 2026 was a 24-hour coding and innovation marathon organized at Walchand College of Engineering, Sangli.',
      highlight: 'Jonty was recognized as a finalist, which makes it a standout achievement in his hackathon journey.',
      links: {
        demo: 'https://sanjeevani-ochre.vercel.app/',
        github: 'https://github.com/jontypatel1107/Sanjeevani_Su_Startup'
      }
    },
    {
      title: 'Electrosphere 2K26 Software Edition',
      keywords: ['electrosphere', 'techxcv', 'software edition'],
      organizer: 'TechXCV x Swaminarayan University',
      outcome: 'Participant',
      description: 'Electrosphere 2K26 was a software-focused competition organized by the TechXCV Club under the Faculty of Engineering at Swaminarayan University.',
      highlight: 'It reflects active participation in a technical team environment.',
      links: {
        demo: '#',
        github: 'https://github.com/jontypatel1107/Air-Talks'
      }
    },
    {
      title: 'SU Hackathon 2026',
      keywords: ['su hackathon', 'sangam university', 'sangam i-tbi', 'bhilwara'],
      organizer: 'Sangam University x Sangam i-TBI',
      outcome: 'Participant',
      description: 'SU Hackathon 2026 was held on March 14-15, 2026 at Sangam University, Bhilwara and focused on innovation and technological advancement.',
      highlight: 'Jonty participated as part of Team 4-Bits representing Swaminarayan University in a fast-paced collaborative environment.',
      links: {
        demo: 'https://sanjeevani-ochre.vercel.app/',
        github: 'https://github.com/jontypatel1107/Sanjeevani_Su_Startup'
      }
    }
  ];

  const createBotMessage = (content, actions = []) => ({
    type: 'bot',
    content,
    actions,
    timestamp: new Date()
  });

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    createBotMessage(
      "Hi! I'm Jonty's personal AI assistant. I can answer questions about his background, skills, projects, certificates, hackathons, goals, hobbies, and contact details.",
      [
        { label: 'View Projects', type: 'navigate', target: '#projects' },
        { label: 'See Skills', type: 'navigate', target: '#skills' },
        { label: 'See Certificates', type: 'navigate', target: '#certificates' }
      ]
    )
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    skills: {
      keywords: ['skill', 'skills', 'technology', 'tech', 'programming', 'language', 'framework'],
      response: "Jonty works with HTML & CSS, JavaScript, React, Next.js, Tailwind CSS, Git & GitHub, UI/UX Design, and Node.js. He is especially focused on frontend development, responsive interfaces, and modern web application building."
    },
    projects: {
      keywords: ['project', 'projects', 'work', 'portfolio', 'featured work', 'zoho', 'swayam', 'hammer', 'rare planet', 'shadowfax', 'sanjeevani', 'pinexplorer', 'pincode', 'pin code'],
      response: "Jonty has built several standout projects including Zoho Mail Clone, Swayam Educational Platform Clone, Hammer Lifestyle Clone, Rare Planet Clone, Shadowfax Delivery Clone, the Sanjeevani Healthcare Platform, PinExplorer, and Weather API."
    },
    certificates: {
      keywords: ['certificate', 'certificates', 'certification', 'certified', 'qualification', 'diploma'],
      response: "Jonty has 9 certificates across hackathons, AI workshops, and technical competitions from PCCOE MLSC, Skill Nation, Unstop collaborations, IIT Madras events, TechXCV, WCE ACM, and Sangam University."
    },
    hackathons: {
      keywords: ['hackathon', 'hackathons', 'competition', 'competitions', 'wce', 'electrosphere', 'su hackathon'],
      response: "Jonty currently showcases three hackathons in his portfolio: WCE Hackathon 2026 where he was a finalist, Electrosphere 2K26 Software Edition, and SU Hackathon 2026. These reflect teamwork, innovation, and rapid problem solving."
    },
    contact: {
      keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github', 'social'],
      response: "You can contact Jonty by email at jontypatel1107@gmail.com, or connect through GitHub, LinkedIn, YouTube, LeetCode, Twitter, and SoloLearn. There is also a contact form on the portfolio."
    },
    leetcode: {
      keywords: ['leetcode', 'problem solving', 'algorithms', 'coding problems', 'competitive programming'],
      response: "Jonty is actively solving problems on LeetCode to sharpen his algorithmic skills. He regularly practices data structures, dynamic programming, and other computer science fundamentals."
    },
    experience: {
      keywords: ['experience', 'background', 'education', 'learning', 'journey'],
      response: "Jonty is a first-year student at CodingGita focused on web development. He is building real-world projects, strengthening his frontend and full-stack foundations, and learning through hackathons, certificates, and continuous practice."
    },
    goals: {
      keywords: ['goal', 'goals', 'aspiration', 'future', 'future plan', 'career', 'vision', 'dream'],
      response: "Jonty's short-term goals are to master React hooks and advanced patterns, build 5+ full-featured projects, contribute to open source, and secure his first internship. Long term, he wants to become a skilled full-stack developer, work at top-tier tech companies, build products that impact millions, and mentor aspiring developers."
    },
    hobbies: {
      keywords: ['hobby', 'hobbies', 'interests', 'cricket', 'chess', 'music', 'free time'],
      response: "Outside coding, Jonty enjoys playing cricket, playing chess, and listening to music. These hobbies help him stay active, think strategically, and stay creative."
    },
    values: {
      keywords: ['values', 'philosophy', 'mindset', 'work ethic', 'quality', 'user-first', 'community'],
      response: "Jonty values quality over quantity, a user-first mindset, community-driven growth, and continuous learning. He believes in building clean, maintainable solutions and improving with every challenge."
    },
    resume: {
      keywords: ['resume', 'cv'],
      response: "Jonty's resume can be downloaded directly from the hero section of the portfolio."
    }
  };

  const normalizeInput = (value) => value.toLowerCase().replace(/[^\w\s.&-]/g, ' ');

  const findProject = (input) =>
    projectKnowledge.find((project) =>
      project.keywords.some((keyword) => input.includes(keyword))
    );

  const findCertificate = (input) =>
    certificateKnowledge.find((certificate) =>
      certificate.keywords.some((keyword) => input.includes(keyword))
    );

  const findHackathon = (input) =>
    hackathonKnowledge.find((hackathon) =>
      hackathon.keywords.some((keyword) => input.includes(keyword))
    );

  const findAboutResponse = (input) =>
    aboutResponses.find((entry) =>
      entry.keywords.some((keyword) => input.includes(keyword))
    );

  const createProjectResponse = (project) => createBotMessage(
    `${project.title} uses ${project.tech.join(', ')}. ${project.description} ${project.highlight}`,
    [
      { label: 'Open Live Demo', type: 'link', target: project.links.demo },
      { label: 'Open GitHub', type: 'link', target: project.links.github },
      { label: 'More Projects', type: 'navigate', target: '#projects' }
    ]
  );

  const createCertificateResponse = (certificate) => createBotMessage(
    `${certificate.title} was issued by ${certificate.provider} in ${certificate.year}. ${certificate.description} ${certificate.highlight}`,
    [
      { label: 'View Certificates', type: 'navigate', target: '#certificates' },
      { label: 'Ask About Hackathons', type: 'prompt', target: 'Tell me about Jonty\'s hackathons' }
    ]
  );

  const createHackathonResponse = (hackathon) => createBotMessage(
    `${hackathon.title} was organized by ${hackathon.organizer}. Outcome: ${hackathon.outcome}. ${hackathon.description} ${hackathon.highlight}`,
    [
      { label: 'Open Hackathons', type: 'navigate', target: '#hackathons' },
      { label: 'Open Demo', type: 'link', target: hackathon.links.demo },
      { label: 'Open GitHub', type: 'link', target: hackathon.links.github }
    ]
  );

  const navigateToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAction = (action) => {
    if (action.type === 'navigate') {
      navigateToSection(action.target);
      return;
    }

    if (action.type === 'link') {
      window.open(action.target, '_blank', 'noopener,noreferrer');
      return;
    }

    if (action.type === 'prompt') {
      handleSendMessage(action.target);
    }
  };

  const getResponse = (userInput) => {
    const input = normalizeInput(userInput);
    const matchedProject = findProject(input);
    const matchedCertificate = findCertificate(input);
    const matchedHackathon = findHackathon(input);
    const matchedAboutResponse = findAboutResponse(input);

    if (matchedProject) {
      return createProjectResponse(matchedProject);
    }

    if (matchedCertificate) {
      return createCertificateResponse(matchedCertificate);
    }

    if (matchedHackathon) {
      return createHackathonResponse(matchedHackathon);
    }

    if (matchedAboutResponse) {
      return createBotMessage(matchedAboutResponse.content, matchedAboutResponse.actions);
    }

    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        if (category === 'skills') {
          return createBotMessage(data.response, [
            { label: 'Go To Skills', type: 'navigate', target: '#skills' },
            { label: 'See Projects', type: 'navigate', target: '#projects' }
          ]);
        }

        if (category === 'projects') {
          return createBotMessage(data.response, [
            { label: 'Go To Projects', type: 'navigate', target: '#projects' },
            { label: 'Ask About Weather API', type: 'prompt', target: 'Tell me about Weather API' }
          ]);
        }

        if (category === 'contact') {
          return createBotMessage(data.response, [
            { label: 'Open Contact Section', type: 'navigate', target: '#contact' },
            { label: 'Email Jonty', type: 'link', target: 'mailto:jontypatel1107@gmail.com' },
            { label: 'View GitHub', type: 'link', target: 'https://github.com/jontypatel1107' }
          ]);
        }

        if (category === 'experience') {
          return createBotMessage(data.response, [
            { label: 'Open About Me', type: 'navigate', target: '#about' },
            { label: 'See Skills', type: 'navigate', target: '#skills' }
          ]);
        }

        if (category === 'certificates') {
          return createBotMessage(data.response, [
            { label: 'Open Certificates', type: 'navigate', target: '#certificates' },
            { label: 'Ask About SU Hackathon', type: 'prompt', target: 'Tell me about SU Hackathon 2026' }
          ]);
        }

        if (category === 'hackathons') {
          return createBotMessage(data.response, [
            { label: 'Open Hackathons', type: 'navigate', target: '#hackathons' },
            { label: 'Ask About WCE', type: 'prompt', target: 'Tell me about WCE Hackathon 2026' }
          ]);
        }

        if (category === 'resume') {
          return createBotMessage(data.response, [
            { label: 'Go To Home', type: 'navigate', target: '#home' },
            { label: 'Contact Jonty', type: 'navigate', target: '#contact' }
          ]);
        }

        return createBotMessage(data.response);
      }
    }

    // Default responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return createBotMessage(
        "Hello! I can help you explore Jonty's background, skills, projects, certificates, hackathons, and contact details. You can ask about any section or a specific project, certificate, or event by name.",
        [
          { label: 'About Jonty', type: 'prompt', target: 'Tell me about Jonty' },
          { label: 'Best Projects', type: 'prompt', target: 'Show Jonty\'s best projects' },
          { label: 'Certificates', type: 'prompt', target: 'What certificates does Jonty have?' }
        ]
      );
    }

    if (input.includes('thank') || input.includes('thanks')) {
      return createBotMessage("You're welcome! Feel free to ask about any project, Jonty's skills, or how to get in touch.");
    }

    return createBotMessage(
      "I can help with Jonty's background, goals, hobbies, skills, projects, certificates, hackathons, and contact details. Try asking about Sanjeevani, WCE Hackathon 2026, SU Hackathon 2026, or Jonty's certificates.",
      [
        { label: 'About Jonty', type: 'navigate', target: '#about' },
        { label: 'Show Projects', type: 'navigate', target: '#projects' },
        { label: 'See Certificates', type: 'navigate', target: '#certificates' },
        { label: 'Open Hackathons', type: 'navigate', target: '#hackathons' }
      ]
    );
  };

  const handleSendMessage = async (messageOverride) => {
    const messageToSend = (messageOverride ?? inputValue).trim();
    if (!messageToSend) return;

    const userMessage = {
      type: 'user',
      content: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getResponse(messageToSend);

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="ai-assistant-button" onClick={toggleChat}>
        <div className="ai-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="ai-pulse"></div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-assistant-chat">
          <div className="chat-header">
            <div className="chat-avatar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                {/* Chat bubble body */}
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9.95 21.63 11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.28-3.97-.77l-.28-.14-2.9.44.44-2.9-.14-.28C4.28 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                {/* Dots indicator */}
                <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div className="chat-info">
              <h3>Jonty's AI Assistant</h3>
              <span>Online</span>
            </div>
            <button className="chat-close" onClick={toggleChat}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-content">
                  {message.content}
                </div>
                {message.actions?.length > 0 && (
                  <div className="message-actions">
                    {message.actions.map((action, actionIndex) => (
                      <button
                        key={`${action.label}-${actionIndex}`}
                        type="button"
                        className="message-action"
                        onClick={() => handleAction(action)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot typing">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="suggested-prompts">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="prompt-chip"
                onClick={() => handleSendMessage(prompt)}
                disabled={isTyping}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about Jonty's background, projects, or skills..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="send-button"
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;

