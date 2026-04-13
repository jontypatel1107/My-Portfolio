# Portfolio Setup Guide

## Quick Start

### 1. Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### 2. Installation Steps

```bash
# Navigate to project directory
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:3000`

## Component Overview

### App.jsx
Main application component that:
- Manages theme state (dark/light mode)
- Renders all page sections
- Includes routing setup

### Navbar.jsx
Navigation bar with:
- Logo
- Navigation links (smooth scroll)
- Theme toggle button

### Hero.jsx
Landing section featuring:
- Animated introduction
- Stats grid (projects, technologies, clients)
- CTA buttons
- Certificate and experience cards

### Skills.jsx
Skills showcase with:
- Tech stack icons
- Animated progress bars
- Intersection observer for scroll animations

### Projects.jsx
Project gallery displaying:
- Project cards with hover effects
- Technology tags
- Links to demo, GitHub, and video

### Contact.jsx
Contact section with:
- Social media links
- SVG icons with hover animations
- GitHub, LinkedIn, YouTube, Email

### CustomCursor.jsx
Custom cursor implementation:
- Animated cursor follower
- Trail effects
- Click ripples
- Hover state changes
- Automatically disabled on mobile

### ThreeBackground.jsx
3D particle background:
- 1500 animated particles
- Mouse interaction
- Scroll parallax effect
- Green/cyan color scheme

## Customization Guide

### Personal Information

#### 1. Update Hero Section
File: `src/components/Hero.jsx`

```jsx
// Change name
<h1>Hey, I'm [Your Name]</h1>

// Update subtitle
<div className="tech-subtitle">[Your Title]</div>

// Modify description
<p className="hero-description">
  [Your custom description]
</p>

// Update stats
const stats = [
  { icon: '⚡', number: '[X]+', label: '[Your stat]' },
  // ...
];
```

#### 2. Update Skills
File: `src/components/Skills.jsx`

```jsx
const skills = [
  { 
    icon: '[emoji]', 
    name: '[Skill Name]', 
    progress: [1-100], 
    description: '[Description]' 
  },
  // Add or remove skills
];
```

#### 3. Update Projects
File: `src/components/Projects.jsx`

```jsx
const projects = [
  {
    icon: '[emoji]',
    title: '[Project Name]',
    description: '[Description]',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    links: { 
      demo: '[URL]', 
      github: '[URL]', 
      video: '[URL]' 
    }
  },
  // Add more projects
];
```

#### 4. Update Social Links
File: `src/components/Contact.jsx`

```jsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/[username]',
    icon: (/* SVG */)
  },
  // Update URLs
];
```

### Theme Customization

File: `src/App.css`

```css
:root {
  /* Primary colors */
  --neon-green: #00ff41;    /* Change accent color */
  --neon-cyan: #00ffff;     /* Change secondary accent */
  
  /* Background colors */
  --dark-bg: #0a0a0a;       /* Main background */
  --card-bg: #111;          /* Card background */
  
  /* Text colors */
  --text-primary: #e0e0e0;  /* Main text */
  --text-secondary: #999;   /* Secondary text */
}
```

### Animation Speeds

#### Cursor Animation
File: `src/components/CustomCursor.jsx`

```jsx
// Adjust cursor smoothness (0.1 = slow, 0.5 = fast)
cursorX += (mouseX - cursorX) * 0.3;  // Main cursor
followerX += (mouseX - followerX) * 0.1;  // Follower
```

#### Particle Speed
File: `src/components/ThreeBackground.jsx`

```jsx
// Adjust rotation speed
particlesMeshRef.current.rotation.y += 0.001;  // Slower = smaller number
particlesMeshRef.current.rotation.x += 0.0005;
```

## Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Build output will be in the `dist/` directory.

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build: `npm run build`
2. Publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Troubleshooting

### Issue: White screen after build
- Check console for errors
- Verify all imports use correct file extensions (.jsx)
- Ensure index.html points to correct main.jsx

### Issue: Three.js particles not showing
- Check if canvas is being created
- Verify Three.js import is correct
- Check browser console for WebGL errors

### Issue: Cursor not working
- Cursor is disabled on mobile (intentional)
- Check if CustomCursor component is rendered
- Verify CSS cursor styles are loaded

### Issue: Smooth scroll not working
- Ensure `scroll-behavior: smooth` in index.css
- Check if scroll handler is properly attached
- Verify React Router isn't interfering

## Email.js Setup (Contact Form)

The contact form is configured to send emails using [Email.js](https://www.emailjs.com/). Follow these steps to set it up:

### Step 1: Create an Email.js Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add an Email Service
1. In the Email.js dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail**: Select Gmail and authorize your Google account
   - **Other Email**: Select your email provider (Outlook, Yahoo, etc.)
4. Click **Create Service**
5. Copy your **Service ID** (e.g., `service_abc123xyz`)

### Step 3: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Name your template something like "contact_form"
5. Click **Save**
6. Copy your **Template ID** (e.g., `template_abc123xyz`)

### Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. You'll see your **Public Key** (e.g., `abc123xyz_public_key`)

### Step 5: Update Contact.jsx
File: `src/components/Contact.jsx`

Update these three lines with your Email.js credentials:

```jsx
// Line 6: Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 24: Replace with your Service ID
'YOUR_SERVICE_ID_HERE',

// Line 25: Replace with your Template ID
'YOUR_TEMPLATE_ID_HERE',

// Line 27: Replace with your email address (where you want to receive messages)
to_email: 'your.email@gmail.com',
```

Example:
```jsx
emailjs.init('a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5');

const response = await emailjs.send(
  'service_xyz123abc',
  'template_xyz123abc',
  {
    to_email: 'jonty@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

### Step 6: Test the Form
1. Start the development server: `npm run dev`
2. Navigate to the Contact section
3. Fill in the form and submit
4. Check your email to see if you received the message

### Troubleshooting Email.js

**Issue: Email not sending**
- Verify all three credentials (Public Key, Service ID, Template ID) are correct
- Check Email.js dashboard for usage limits (free plan has limits)
- Check browser console for error messages

**Issue: Error about invalid Service ID**
- Copy the Service ID again from Email.js dashboard
- Make sure you copied from the correct service you created
- Verify there are no extra spaces in the ID

**Issue: Email template not matching**
- Ensure template variables (`{{from_name}}`, etc.) match your template in Email.js
- Check that variable names are spelled correctly

**Issue: Free plan limitations**
- Email.js free plan allows 200 emails/month
- For higher volume, consider upgrading the plan
- You can monitor usage in the Email.js dashboard

### Email.js Security Note
- Never commit your credentials to version control
- For production, consider using environment variables:

```bash
# Create .env file
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Then update Contact.jsx:
```jsx
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// In handleSubmit:
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { /* ... */ }
);
```

## Performance Tips

1. **Reduce particle count** for slower devices:
   ```jsx
   const particlesCount = 1500; // Reduce to 800-1000
   ```

2. **Lazy load images** when you add them:
   ```jsx
   <img loading="lazy" src="..." alt="..." />
   ```

3. **Use production build** for deployment:
   ```bash
   npm run build
   ```

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

WebGL required for Three.js background.

## Additional Resources

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review component code comments
3. Check browser console for errors
4. Verify all dependencies are installed

## License

MIT License - Free to use and modify!
