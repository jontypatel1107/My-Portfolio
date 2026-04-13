import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeBackground.css';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesMeshRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 50;
      posArray[i + 1] = (Math.random() - 0.5) * 50;
      posArray[i + 2] = (Math.random() - 0.5) * 50;
      
      // Green to cyan color gradient
      const colorChoice = Math.random();
      if (colorChoice > 0.5) {
        colors[i] = 0;     // R
        colors[i + 1] = 1; // G (green)
        colors[i + 2] = 0.25;   // B
      } else {
        colors[i] = 0;     // R
        colors[i + 1] = 1; // G (cyan)
        colors[i + 2] = 1;   // B
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMeshRef.current = particlesMesh;
    scene.add(particlesMesh);

    // Function to update colors/material for light or dark theme
    const setLightMode = (isLight) => {
      const geom = particlesMeshRef.current.geometry;
      const colorsAttr = geom.getAttribute('color');
      const arr = colorsAttr.array;

      for (let i = 0; i < arr.length; i += 3) {
        const choice = Math.random();
        if (isLight) {
          if (choice > 0.5) {
            arr[i] = 0.05; // R
            arr[i + 1] = 0.55; // G (teal)
            arr[i + 2] = 0.45; // B
          } else {
            arr[i] = 0.18;
            arr[i + 1] = 0.75;
            arr[i + 2] = 0.75;
          }
        } else {
          if (choice > 0.5) {
            arr[i] = 0; arr[i + 1] = 1; arr[i + 2] = 0.25;
          } else {
            arr[i] = 0; arr[i + 1] = 1; arr[i + 2] = 1;
          }
        }
      }

      colorsAttr.needsUpdate = true;

      const mat = particlesMeshRef.current.material;
      if (isLight) {
        mat.blending = THREE.NormalBlending;
        mat.opacity = 0.9;
        mat.size = 0.18;
      } else {
        mat.blending = THREE.AdditiveBlending;
        mat.opacity = 0.8;
        mat.size = 0.15;
      }
    };

    // Initialize based on current body class
    setLightMode(document.body.classList.contains('light-mode'));

    // Watch for theme changes on body and update particles
    const bodyObserver = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === 'class') {
          const isLight = document.body.classList.contains('light-mode');
          setLightMode(isLight);
        }
      });
    });
    bodyObserver.observe(document.body, { attributes: true });

    // Mouse movement handler
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll handler for parallax
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.y = scrolled * 0.0005;
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesMeshRef.current) {
        // Rotate particles
        particlesMeshRef.current.rotation.y += 0.001;
        particlesMeshRef.current.rotation.x += 0.0005;

        // Mouse interaction
        particlesMeshRef.current.rotation.y += mouseRef.current.x * 0.0005;
        particlesMeshRef.current.rotation.x += mouseRef.current.y * 0.0005;

        // Pulsing effect
        particlesMeshRef.current.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.05;
        particlesMeshRef.current.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.05;
      }

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      bodyObserver.disconnect();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} id="three-canvas" />;
};

export default ThreeBackground;
