"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const imagesData = [
  // LEFT SIDE
  { src: '/assets/hero_image3.png', x: -110, y: -290, rot: -11, w: 165, h: 205 },
  { src: '/assets/hero_image2.png', x: -300, y: -210, rot: -28, w: 160, h: 200 },
  { src: '/assets/hero_image1.png', x: -450, y: -80, rot: -46, w: 165, h: 205 },
  { src: '/assets/hero_image6.png', x: -560, y: 100, rot: -65, w: 165, h: 205 },
  { src: '/assets/hero_image8.png', x: -630, y: 300, rot: -82, w: 165, h: 205 },
  
  // RIGHT SIDE
  { src: '/assets/hero_image4.png', x: 110, y: -290, rot: 11, w: 160, h: 200 },
  { src: '/assets/hero_image5.png', x: 300, y: -210, rot: 28, w: 165, h: 205 },
  { src: '/assets/hero_image7.png', x: 450, y: -80, rot: 46, w: 165, h: 205 },
  { src: '/assets/hero_image10.png', x: 560, y: 100, rot: 65, w: 160, h: 200 },
  { src: '/assets/media.png', x: 630, y: 300, rot: 82, w: 165, h: 205 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.hero-image-card');
    
    // Pre-calculate organic explosion targets so they loop consistently
    const explodePositions = imagesData.map(() => {
      const angle = Math.random() * Math.PI * 2; // Full 360 degree 
      const radius = 350 + Math.random() * 450;  // Push them at least 350px outwards up to 800px
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius * 0.7, // Squashed vertically to stay better within the hero height
        rot: (Math.random() - 0.5) * 160,  // Crazy chaotic rotations
      };
    });

    const floatPositions = explodePositions.map((pos) => ({
      x: pos.x + (Math.random() - 0.5) * 150, // Float drifting slowly
      y: pos.y + (Math.random() - 0.5) * 150,
      rot: pos.rot + (Math.random() - 0.5) * 40,
    }));
    
    // Setup endless loop timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 2 });
    
    // 1. Explode!
    tl.to(cards, {
      transform: (i) => `translate(calc(-50% + ${explodePositions[i].x}px), calc(-50% + ${explodePositions[i].y}px)) rotate(${explodePositions[i].rot}deg)`,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.02,
    })
    // 2. Float and drift for a bit
    .to(cards, {
      transform: (i) => `translate(calc(-50% + ${floatPositions[i].x}px), calc(-50% + ${floatPositions[i].y}px)) rotate(${floatPositions[i].rot}deg)`,
      duration: 4,
      ease: "sine.inOut",
    })
    // Spreading majestically back to the original arch layout
    .to(cards, {
      transform: (i) => `translate(calc(-50% + ${imagesData[i].x}px), calc(-50% + ${imagesData[i].y}px)) rotate(${imagesData[i].rot}deg)`,
      duration: 1.5,
      ease: "back.out(1.2)",
      stagger: 0.04,
    });

    // Subtly pin the hero container so the upcoming dark section sweeps cleanly over it
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%", // stays pinned for one full viewport height!
      pin: true,
      pinSpacing: false // Allows the next section to overlap!
    });

  }, { scope: containerRef });

  return (
    <div className="hero-container" ref={containerRef}>
      {/* Navigation */}
      <header className="hero-header">
        <div className="hero-logo">ClickLens Antique</div>
      </header>

      {/* Image Cards */}
      <div className="hero-images">
        {imagesData.map((data, index) => (
          <div
            key={index}
            className="hero-image-card"
            style={{
              width: `${data.w}px`,
              height: `${data.h}px`,
              transform: `translate(calc(-50% + ${data.x}px), calc(-50% + ${data.y}px)) rotate(${data.rot}deg)`,
            }}
          >
            <img src={data.src} alt="" fetchPriority="high" decoding="async" />
          </div>
        ))}
      </div>

      {/* Center Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Vintage Classiq<br />Photography
        </h1>
        <p className="hero-subtitle">
          Studio on the Move.<br />Bringing Vintage Photography to You.
        </p>
        <a 
          href="https://wa.me/27672727343?text=Hi!%20I%20would%20like%20to%20book%20a%20vintage%20shoot."
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-button"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Book a Session
        </a>
      </div>

      {/* Bottom Features */}
      <div className="hero-features mobile-hidden">
        <div className="hero-feature">
          <h3>Vintage Style</h3>
          <p>Authentic props and<br />beautiful outfits</p>
        </div>
        <div className="hero-feature-divider"></div>
        <div className="hero-feature">
          <h3>Mobile Studio</h3>
          <p>We travel directly<br />to your location</p>
        </div>
        <div className="hero-feature-divider"></div>
        <div className="hero-feature">
          <h3>Timeless Charm</h3>
          <p>Create memories that<br />will last forever</p>
        </div>
      </div>
    </div>
  );
}
