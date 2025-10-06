import React, { useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function App() {
  const [showContent, setShowContent] = useState(false);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initial loading animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  // Scroll animations
  useGSAP(() => {
    if (showContent) {
      // First step animations
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

      // Scroll Indicator animation
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

      // Main scroll animation timeline
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
        "<1.2" // starts 1.2 seconds before the previous animation
      );

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
      );
    }
  }, [showContent]);

  return (
    <>
      {/* Loading animation */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                  fontWeight={"bold"}
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./gta_hero.webp"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Main content */}
      {showContent && (
        <div className="container">
          <div className="overlay"></div>
          <div className="hero-1-container">
            <div className="hero-main-container">
              <img
                className="hero-main-logo"
                draggable="false"
                src="/gta_logo_cut.webp"
                alt="gta logo"
              />
              <img
                className="hero-main-image"
                draggable="false"
                src="/gta_hero.webp"
                alt="gta logo"
              />
            </div>
            <div className="hero-text-logo-container">
              <div className="hero-text-logo"></div>
              <div>
                <h3 className="hero-text">
                  Coming<br />
                  May 26<br />
                  2026
                </h3>
              </div>
            </div>
          </div>
          <div className="hero-2-container">
            <h3>Vice City, USA.</h3>
            <p >
              Jason and Lucia have always known the deck is stacked against them.
              But when an easy score goes wrong, they find themselves on the darkest
              side of the sunniest place in America, in the middle of a criminal
              conspiracy stretching across the state of Leonida â€” forced to rely on
              each other more than ever if they want to make it out alive.
            </p>
            <div className="name font-light text-sm italic text-right">
              
              Made by Tigmanshu
            
            </div>
            
          </div>
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <svg
              width="34"
              height="14"
              viewBox="0 0 34 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="_1smfa210"
              focusable="false"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.5609 1.54346C34.0381 2.5875 33.6881 3.87821 32.7791 4.42633L17.0387 13.9181L1.48663 4.42115C0.580153 3.86761 0.235986 2.57483 0.717909 1.53365C1.19983 0.492464 2.32535 0.097152 3.23182 0.650692L17.0497 9.08858L31.051 0.64551C31.96 0.0973872 33.0837 0.499411 33.5609 1.54346Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default App;