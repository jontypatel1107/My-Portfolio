import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    let trailTimeout = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });

      // Create cursor trail (throttled)
      if (!trailTimeout) {
        trailTimeout = setTimeout(() => {
          trailTimeout = null;
          createTrail(mouseX, mouseY);
        }, 40);
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      createRipple(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const createTrail = (x, y) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 600);
    };

    const createRipple = (x, y) => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = (x - 10) + 'px';
      ripple.style.top = (y - 10) + 'px';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 800);
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    // Add hover listeners
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card, .social-link, .stat-item, .badge');
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const animationId = requestAnimationFrame(animateCursor);

    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return;
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Don't render on mobile
  if (window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorRef}
        className={`cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div 
        ref={followerRef}
        className="cursor-follower"
        style={isHovering ? { width: '70px', height: '70px' } : {}}
      />
    </>
  );
};

export default CustomCursor;
