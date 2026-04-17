import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import CustomCursor from './components/CustomCursor';
import ThreeBackground from './components/ThreeBackground';
import IntroSplash from './components/IntroSplash';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Router>
      <div className="App">
        <IntroSplash />
        <CustomCursor />
        <ThreeBackground />
        <Navbar toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Hackathons />
        <Contact />
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
}

export default App;
