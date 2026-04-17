# Jonty Patel Portfolio - React Version

A modern, animated portfolio website built with React, Three.js, and Vite.

## Features

- 🎨 Beautiful neon green/cyan theme with smooth animations
- 🌓 Dark/Light mode toggle
- 🖱️ Custom animated cursor with trail effects
- ✨ Three.js animated particle background
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Smooth scroll animations
- 🔄 Active section highlighting in navbar
- 🤖 AI Chat Assistant for visitors to learn about Jonty
- 💼 Projects showcase with horizontal scrolling carousel on mobile
- 🛠️ Skills section with progress bars
- 📜 Certificates showcase
- 🏆 Hackathons showcase with mobile app badge
- 📧 Contact section with social links
- 🚀 Intro splash screen animation

## Tech Stack

- React 18
- Three.js (r128)
- React Router DOM
- Vite
- CSS3 with custom animations
- EmailJS for contact form

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Certificates.jsx
│   │   ├── Projects.jsx
│   │   ├── Hackathons.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── AIAssistant.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ThreeBackground.jsx
│   │   ├── IntroSplash.jsx
│   │   ├── LeetCode.jsx
│   │   └── [corresponding .css files]
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Certificates**: `src/components/Certificates.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Hackathons**: `src/components/Hackathons.jsx`
- **Contact/Social Links**: `src/components/Contact.jsx`
- **AI Assistant**: `src/components/AIAssistant.jsx` (update knowledge base)

### Theme Colors

Update CSS variables in `src/App.css`:

```css
:root {
  --neon-green: #00ff41;
  --neon-cyan: #00ffff;
  --electric-blue: #0af;
  --dark-bg: #0a0a0a;
  --card-bg: #111;
  --text-primary: #e0e0e0;
  --text-secondary: #999;
  --border-color: #222;
}
```

### AI Assistant Configuration

The AI chatbot can be customized in `src/components/AIAssistant.jsx`:
- Update `suggestedPrompts` array for quick action buttons
- Modify `knowledgeBase` object for different responses
- Add new project/certificate/hackathon knowledge in respective arrays

### Contact Form

Configure EmailJS in `src/components/Contact.jsx`:
- Update `emailjs.init()` with your public key
- Update service ID and template ID in `emailjs.send()`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for images
- Optimized Three.js particle rendering
- Smooth 60fps animations
- Mobile-optimized (cursor disabled on mobile)
- Responsive project carousel with scroll snap

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Created by Jonty Patel
Converted to React with modern best practices
