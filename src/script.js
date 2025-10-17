gsap.registerPlugin(ScrollTrigger);

// First step
gsap.from(".hero-main-container", {
  scale: 1.45,
  duration: 2.8,
  ease: "power3.out",
});

gsap.to(".overlay", {
  opacity: 0,
  duration: 2.8,
  ease: "power3.out",
  onComplete: () => {
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
  },
});

// Scroll Indicator
const scrollIndicator = document.querySelector(".scroll-indicator");
const bounceTimeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
});

bounceTimeline.to(scrollIndicator, {
  y: 20,
  opacity: 0.6,
  duration: 0.8,
  ease: "power1.inOut",
});

// Create a timeline for better control
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "+=2000",
    ease: "none",
  },
});

// Need to ensure that the scale is like this otherwise some flicks happens
tl.set(".hero-main-container", {
  scale: 1.25,
});

tl.to(".hero-main-container", {
  scale: 1,
  duration: 1,
});

tl.to(
  ".hero-main-logo",
  {
    opacity: 0,
    duration: 0.5,
  },
  "<" // starts at the same time of previous animation
);

tl.to(
  ".hero-main-image",
  {
    opacity: 0,
    duration: 0.9,
  },
  "<+=0.5"
);

tl.to(
  ".hero-main-container",
  {
    backgroundSize: "28vh",
    duration: 1.5,
  },
  "<+=0.2"
);

tl.fromTo(
  ".hero-text",
  {
    backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
  },
  {
    backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,
    duration: 3,
  },
);

// Character Sections Animations
const characterSections = document.querySelectorAll('.character-section');
characterSections.forEach((section) => {
  const content = section.querySelector('.character-content');
  const info = section.querySelector('.character-info');
  const imageContainer = section.querySelector('.character-image-container');
  
  gsap.set([info, imageContainer], { opacity: 0, y: 50 });
  
  ScrollTrigger.create({
    trigger: section,
    start: 'top 70%',
    onEnter: () => {
      gsap.to(info, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
      });
      
      gsap.to(imageContainer, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });
    },
    once: true
  });
});

// Leonida Section Animation
const leonidaSection = document.querySelector('.leonida-section');
const sectionTitle = leonidaSection.querySelector('.section-title');
const sectionDesc = leonidaSection.querySelector('.section-description');
const characterCards = leonidaSection.querySelectorAll('.character-card');

gsap.set([sectionTitle, sectionDesc], { opacity: 0, y: 30 });
gsap.set(characterCards, { opacity: 0, y: 50 });

ScrollTrigger.create({
  trigger: leonidaSection,
  start: 'top 70%',
  onEnter: () => {
    gsap.to(sectionTitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
    
    gsap.to(sectionDesc, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out'
    });
    
    gsap.to(characterCards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.4,
      ease: 'power3.out'
    });
  },
  once: true
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const mainNav = document.querySelector('.main-nav');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  mobileMenuToggle.classList.toggle('active');
});

// Navigation link highlighting
const navLinksItems = document.querySelectorAll('.nav-link');
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinksItems.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    
    // Close mobile menu after clicking a link
    if (window.innerWidth < 768) {
      navLinks.style.display = 'none';
      mobileMenuToggle.classList.remove('active');
    }
  });
});

// Show/hide navigation on scroll
let lastScrollTop = 0;
const heroSection = document.querySelector('.hero-main-container');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroHeight = heroSection.offsetHeight;
  
  // Show nav when scrolled past hero section
  if (scrollTop > heroHeight * 0.7) {
    mainNav.classList.add('visible');
  } else {
    mainNav.classList.remove('visible');
  }
  
  lastScrollTop = scrollTop;
});

// Vice City Legends animations
const legendProfiles = document.querySelectorAll('.legend-profile');

// Create a staggered animation for each legend profile
legendProfiles.forEach((profile, index) => {
  gsap.to(profile, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: profile,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    delay: index * 0.2 // Stagger the animations
  });
  
  // Add a shine effect to the legend name
  const legendName = profile.querySelector('.legend-name');
  if (legendName) {
    gsap.to(legendName, {
      backgroundPosition: "200% center",
      duration: 2,
      repeat: -1,
      ease: "linear",
      scrollTrigger: {
        trigger: profile,
        start: "top 80%",
      }
    });
  }
  
  // Add a subtle hover animation for the image
  const legendImage = profile.querySelector('.legend-image');
  if (legendImage) {
    profile.addEventListener('mouseenter', () => {
      gsap.to(legendImage, {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out"
      });
    });
    
    profile.addEventListener('mouseleave', () => {
      gsap.to(legendImage, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  }
});

// logo purple
tl.fromTo(
  ".hero-text-logo",

  {
    opacity: 0,
    maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
  },
  {
    opacity: 1,
    maskImage: `radial-gradient(
    circle at 50% 105.594%,
    rgb(0, 0, 0) 62.9372%,
    rgba(0, 0, 0, 0) 81.4686%
  )`,
    duration: 3,
  },
  "<0.2"
);

tl.set(".hero-main-container", { opacity: 0 });

tl.to(".hero-1-container", { scale: 0.85, duration: 3 }, "<-=3");

tl.set(
  ".hero-1-container",
  {
    maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
  },
  "<+=2.1"
);

tl.to(
  ".hero-1-container",
  {
    maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
    duration: 2,
  },
  "<+=0.2" // Start 0.2 seconds after the mask is set
);

tl.to(
  ".hero-text-logo",
  {
    opacity: 0,
    duration: 2,
  },
  "<1.5"
);

tl.set(".hero-1-container", { opacity: 0 });
tl.set(".hero-2-container", { visibility: "visible" });

tl.to(".hero-2-container", { opacity: 1, duration: 3 }, "<+=0.2");

tl.fromTo(
  ".hero-2-container",
  {
    backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
  },
  {
    backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,
    duration: 3,
  },
  "<1.2" // starts 1.2 seconds before the previous animation
  // he times from the start of the previous animation and since we're using 1.5s for the prev duration it's like 70% of the previous animation
);
