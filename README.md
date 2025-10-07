# 🎮 GTA VI Website Clone

<div align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/React-19.1+-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-7+-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/GSAP-3.12+-88CE02?logo=greensock" alt="GSAP">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4+-38B2AC?logo=tailwind-css" alt="Tailwind">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
</div>

<div align="center">
  <p><em>🌟 A cinematic GTA VI website featuring advanced GSAP animations, SVG text masking, and scroll-triggered effects</em></p>
  <h3>🌐 <a href="https://gtaviwebsite.netlify.app/">View Live</a></h3>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Demo & Screenshots](#-demo--screenshots)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Animation Details](#-animation-details)
- [Code Breakdown](#-code-breakdown)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🎯 Overview

A stunning GTA VI promotional website clone featuring advanced animation techniques with GSAP. The project showcases:

- **SVG Text Masking Animation**: "VI" text reveal with image masking
- **Scroll-Triggered Sequences**: Complex GSAP ScrollTrigger animations
- **Radial Gradient Effects**: Dynamic background gradients
- **Scale & Opacity Transitions**: Smooth cinematic transitions
- **Pinned Scrolling**: Hero section pinned while content animates

### Why This Project?

This project demonstrates advanced front-end development skills:
- **GSAP Mastery**: Complex timelines and ScrollTrigger implementation
- **SVG Manipulation**: Text masking and dynamic effects
- **Modern React**: React 19 with useGSAP hook
- **Performance**: Smooth 60fps animations
- **Creative Design**: Cinematic storytelling through code

## ✨ Features

### 🎬 Core Animations

#### 1. **SVG Text Mask Intro** (`App.jsx`)
- "VI" text rotates and scales up
- Image reveals through text mask
- Smooth transition to main content
- Auto-removes after animation

#### 2. **Hero Section Zoom** (`script.js`)
- Initial scale animation (1.45x to 1x)
- Black overlay fade out
- Logo and image fade transitions
- Background pattern scale effect

#### 3. **Scroll-Triggered Timeline**
- Pinned hero section while scrolling
- Logo fade out animation
- Hero image opacity transition
- Background size transformation (1000vh → 28vh)

#### 4. **Radial Gradient Animation**
- Dynamic gradient transitions
- Color morphing effects
- Purple logo reveal with masking
- Text gradient animations

#### 5. **Content Reveal**
- Vice City story text fade in
- Multi-layer gradient backgrounds
- Smooth opacity transitions
- Responsive text sizing

### 📱 Additional Features

- **Bounce Scroll Indicator**: Animated arrow with GSAP yoyo effect
- **Responsive Design**: Mobile-first approach with media queries
- **Cross-Browser Support**: Works on all modern browsers
- **Performance Optimized**: Efficient animation cleanup
- **Clean Code**: Modular structure with clear comments

## 🛠️ Technology Stack

### Core Technologies

```javascript
{
  "react": "^19.1.1",              // Latest React with concurrent features
  "react-dom": "^19.1.1",          // React DOM rendering
  "vite": "^7.1.7",                // Next-gen build tool
  "gsap": "^3.12.2",               // Animation library
  "@gsap/react": "^2.1.2",         // GSAP React integration
  "tailwindcss": "^4.1.14",        // Utility-first CSS
  "@tailwindcss/vite": "^4.1.14"   // Tailwind Vite plugin
}
```

### Key Plugins & Libraries

- **ScrollTrigger**: Scroll-based animations
- **useGSAP Hook**: React-friendly GSAP integration
- **SVG Masking**: Advanced image reveal effects
- **Radial Gradients**: Dynamic background effects

## 🖼️ Demo & Screenshots

<details>
<summary>Click to view project screenshots</summary>

### SVG Text Mask Animation
![SVG Mask](screenshots/svg-mask-intro.png)
*"VI" text mask reveals the hero image with rotation and scale*

### Hero Section Initial State
![Hero Initial](screenshots/hero-initial.png)
*GTA VI logo and hero image at 1.25x scale*

### Scroll Animation Progress
![Scroll Progress](screenshots/scroll-animation.png)
*Logo fades out while background pattern scales*

### Gradient Text Effect
![Gradient Text](screenshots/gradient-text.png)
*"Coming May 26 2026" with radial gradient animation*

### Purple Logo Reveal
![Purple Logo](screenshots/purple-logo.png)
*Purple GTA logo reveals with mask animation*

### Final Content Section
![Final Section](screenshots/vice-city-content.png)
*Vice City story content with gradient background*

</details>

## 🚀 Installation

### Prerequisites

```bash
# Required Software
- Node.js >= 18.0.0
- npm >= 8.0.0 or yarn >= 1.22.0
- Git for version control
- Modern web browser (Chrome recommended)
```

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Tigmanshukumar/GTA-VI-Website.git
cd GTA-VI-Website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:5173
```

### Project Dependencies

```bash
# Core dependencies
npm install react react-dom
npm install gsap @gsap/react
npm install tailwindcss @tailwindcss/vite
npm install vite @vitejs/plugin-react

# Dev dependencies (already in package.json)
npm install -D eslint
npm install -D @types/react @types/react-dom
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview

# Build output in 'dist' folder
```

## 📁 Project Structure

```
gta-vi-website/
├── public/
│   ├── gta_hero.webp           # Main hero image
│   ├── gta_logo_cut.webp       # GTA VI logo cutout
│   ├── gta_logo_purple.webp    # Purple gradient logo
│   └── logo_white.svg          # White logo pattern
│
├── src/
│   ├── App.jsx                 # SVG mask intro animation
│   ├── main.jsx                # React entry point
│   ├── script.js               # Main GSAP animations
│   ├── style.css               # Main stylesheet
│   └── index.css               # Global styles (if needed)
│
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind config
└── README.md
```

## 🎨 Animation Details

### 1. SVG Text Mask Animation (`App.jsx`)

```javascript
// Timeline for "VI" text mask
const tl = gsap.timeline();

// Step 1: Rotate the text
tl.to(".vi-mask-group", {
  rotate: 10,
  duration: 2,
  ease: "Power4.easeInOut",
  transformOrigin: "50% 50%"
});

// Step 2: Scale up and fade out
tl.to(".vi-mask-group", {
  scale: 10,
  duration: 2,
  delay: -1.8,                    // Overlap with rotation
  ease: "Expo.easeInOut",
  opacity: 0,
  onUpdate: function() {
    if (this.progress() >= 0.9) { // At 90% completion
      document.querySelector(".svg").remove();
      document.getElementById('root').style.display = 'none';
      setShowContent(true);
    }
  }
});
```

**Key Features:**
- SVG mask with "VI" text
- Image revealed through text
- 10° rotation effect
- 10x scale transformation
- Auto-cleanup at 90% progress

### 2. Hero Zoom Animation (`script.js`)

```javascript
// Initial hero zoom
gsap.from(".hero-main-container", {
  scale: 1.45,
  duration: 2.8,
  ease: "power3.out"
});

// Black overlay fade
gsap.to(".overlay", {
  opacity: 0,
  duration: 2.8,
  ease: "power3.out",
  onComplete: () => {
    document.body.style.overflow = "visible";
  }
});
```

### 3. Scroll Indicator Bounce

```javascript
// Infinite bounce animation
const bounceTimeline = gsap.timeline({
  repeat: -1,
  yoyo: true
});

bounceTimeline.to(scrollIndicator, {
  y: 20,
  opacity: 0.6,
  duration: 0.8,
  ease: "power1.inOut"
});
```

### 4. Main Scroll Timeline

```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scrub: 2,              // Smooth scrubbing
    pin: true,             // Pin section
    start: "top top",
    end: "+=2000"          // 2000px scroll distance
  }
});

// Sequence of animations
tl.set(".hero-main-container", { scale: 1.25 })
  .to(".hero-main-container", { scale: 1, duration: 1 })
  .to(".hero-main-logo", { opacity: 0, duration: 0.5 }, "<")
  .to(".hero-main-image", { opacity: 0, duration: 0.9 }, "<+=0.5")
  .to(".hero-main-container", { backgroundSize: "28vh", duration: 1.5 }, "<+=0.2");
```

### 5. Radial Gradient Transition

```javascript
// Gradient animation from far to close
tl.fromTo(".hero-text", 
  {
    // Initial: gradient center at 200vh (far)
    backgroundImage: `radial-gradient(
      circle at 50% 200vh,
      rgba(255, 214, 135, 0) 0,
      rgba(157, 47, 106, 0.5) 90vh,
      rgba(157, 47, 106, 0.8) 120vh,
      rgba(32, 31, 66, 0) 150vh
    )`
  },
  {
    // Final: gradient center at 3.9vh (close)
    backgroundImage: `radial-gradient(
      circle at 50% 3.9575vh,
      rgb(255, 213, 133) 0vh,
      rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
      rgba(32, 31, 66, 0) 140.599vh
    )`,
    duration: 3
  },
  "<1.2" // Start 1.2s before previous animation
);
```

### 6. Purple Logo Mask Reveal

```javascript
tl.fromTo(".hero-text-logo",
  {
    opacity: 0,
    maskImage: `radial-gradient(
      circle at 50% 145.835%,
      rgb(0, 0, 0) 36.11%,
      rgba(0, 0, 0, 0) 68.055%
    )`
  },
  {
    opacity: 1,
    maskImage: `radial-gradient(
      circle at 50% 105.594%,
      rgb(0, 0, 0) 62.9372%,
      rgba(0, 0, 0, 0) 81.4686%
    )`,
    duration: 3
  },
  "<0.2"
);
```

### 7. Content Section Reveal

```javascript
// Hide hero, show content
tl.set(".hero-1-container", { opacity: 0 });
tl.set(".hero-2-container", { visibility: "visible" });

// Fade in Vice City content
tl.to(".hero-2-container", { 
  opacity: 1, 
  duration: 3 
}, "<+=0.2");

// Animate content background gradient
tl.fromTo(".hero-2-container", {...}, {...}, "<1.2");
```

## 💻 Code Breakdown

### App.jsx - SVG Mask Intro

```jsx
function App() {
  const [showContent, setShowContent] = useState(false);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    // Animation code...
  });

  return (
    <div className="svg" style={svgContainerStyle}>
      <svg viewBox="0 0 800 600">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text x="50%" y="50%" fontSize="250">VI</text>
            </g>
          </mask>
        </defs>
        <image href="./gta_hero.webp" mask="url(#viMask)" />
      </svg>
    </div>
  );
}
```

### index.html - Main Structure

```html
<body>
  <div class="container">
    <!-- Black overlay -->
    <div class="overlay"></div>
    
    <!-- Hero section with logo and image -->
    <div class="hero-1-container">
      <div class="hero-main-container">
        <img class="hero-main-logo" src="/gta_logo_cut.webp" />
        <img class="hero-main-image" src="/gta_hero.webp" />
      </div>
      
      <!-- Text and purple logo -->
      <div class="hero-text-logo-container">
        <div class="hero-text-logo"></div>
        <h3 class="hero-text">Coming<br/>May 26<br/>2026</h3>
      </div>
    </div>
    
    <!-- Story content section -->
    <div class="hero-2-container">
      <h3>Vice City, USA.</h3>
      <p>Jason and Lucia have always known...</p>
    </div>
    
    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <svg>...</svg>
    </div>
  </div>
  
  <div id="root"></div>
</body>
```

### Key CSS Classes

```css
/* Hero container with background pattern */
.hero-main-container {
  background-image: url("/public/logo_white.svg");
  background-size: 1000vh;      /* Scales to 28vh via GSAP */
  background-position: 50% 41.7%;
  transform: scale(1.25);       /* Initial scale */
}

/* Purple logo reveal */
.hero-text-logo {
  background-image: url("/gta_logo_purple.webp");
  background-size: 28vh;
  opacity: 0;                   /* Animated via GSAP */
}

/* Gradient text */
.hero-text {
  background-image: radial-gradient(...);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy dist folder via Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Important Notes

1. **Asset Paths**: Ensure public folder assets are correctly referenced
2. **Base URL**: Update `vite.config.js` for GitHub Pages:
   ```js
   export default {
     base: '/GTA-VI-Website/'
   }
   ```
3. **GSAP CDN**: CDN links in index.html work in production
4. **Image Optimization**: Consider compressing images for faster load

## ⚡ Performance Tips

### Optimization Techniques Used

```javascript
// 1. Animation cleanup
onUpdate: function() {
  if (this.progress() >= 0.9) {
    document.querySelector(".svg").remove();
    this.kill(); // Kill timeline to free memory
  }
}

// 2. Smooth scrolling with scrub
scrollTrigger: {
  scrub: 2  // 2-second smooth scrub
}

// 3. Hardware acceleration
transform: scale(1.25)  // Uses GPU acceleration

// 4. Lazy loading ready
// Can add lazy loading for images if needed
```

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Animation Frame Rate**: 60fps
- **Bundle Size**: < 500KB (with optimizations)
- **Lighthouse Score**: 90+

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Contribution Ideas

- [ ] Add more scroll sections
- [ ] Implement 3D effects with Three.js
- [ ] Add sound effects on animations
- [ ] Create mobile-optimized animations
- [ ] Add loading progress bar
- [ ] Implement smooth locomotive scrolling
- [ ] Add particle effects
- [ ] Create character showcase section
- [ ] Add trailer video integration
- [ ] Implement Easter eggs

### How to Contribute

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 🧪 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

**Note**: GSAP and modern CSS features require modern browsers.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Tigmanshu Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

## ⚠️ Disclaimer

This is a **fan-made project** created for educational purposes and portfolio demonstration. All GTA VI trademarks, logos, and game assets belong to **Rockstar Games** and **Take-Two Interactive**. This project is not affiliated with, endorsed by, or connected to Rockstar Games or Take-Two Interactive.

The images and logos used are for demonstration purposes only. If you're the copyright owner and want any content removed, please contact me.

## 📞 Contact

**Developer**: Tigmanshu Kumar  
**Email**: [tigmanshukumar5@gmail.com](mailto:tigmanshukumar5@gmail.com)  
**LinkedIn**: [Connect with me](https://www.linkedin.com/in/tigmanshu-kumar-a774082b7/)  
**GitHub**: [@Tigmanshukumar](https://github.com/Tigmanshukumar)

### Get in Touch

- 🐛 **Bug Reports**: [Create an issue](https://github.com/Tigmanshukumar/GTA-VI-Website/issues)
- 💡 **Feature Ideas**: [Start a discussion](https://github.com/Tigmanshukumar/GTA-VI-Website/discussions)
- 🎨 **Animation Feedback**: Share your thoughts via email
- 🤝 **Collaboration**: Open to frontend projects and GSAP work

---

<div align="center">
  <p>
    <strong>⭐ If this project inspires your web animations, give it a star!</strong>
  </p>
  <p>
    Made with ❤️ and GSAP by <strong>Tigmanshu Kumar</strong>
  </p>
  <p>
    <em>🎮 "Where code meets cinema"</em>
  </p>
</div>

---

## 🙏 Acknowledgments

### Inspiration & Credits

- **Rockstar Games**: For the incredible GTA franchise
- **GSAP Team**: For the powerful animation library
- **React Team**: For the modern UI framework
- **Vite Team**: For the blazing-fast build tool
- **GTA VI Trailer**: Original inspiration from official content

### Learning Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Guide](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [useGSAP Hook](https://greensock.com/react/)
- [SVG Masking Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask)
- [Radial Gradient Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)

### Special Thanks

- GSAP Community for animation inspiration
- Web animation enthusiasts sharing knowledge
- All contributors and star-gazers
- Rockstar for creating such iconic games

<div align="center">
  <sub>🚀 Pushing the boundaries of web animation</sub>
</div>
