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
- 💼 Projects showcase
- 🛠️ Skills section with progress bars
- 📧 Contact section with social links

## Tech Stack

- React 18
- Three.js (r128)
- React Router DOM
- Vite
- CSS3 with custom animations

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
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ThreeBackground.jsx
│   │   └── [corresponding .css files]
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
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Social Links**: `src/components/Contact.jsx`

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

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Created by Jonty Patel
Converted to React with modern best practices
