"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FoundersSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Majestic asymmetrical slide in for founders
    gsap.fromTo(".founder-1", 
      { opacity: 0, xPercent: -20, rotateY: 15, z: -100 }, 
      { opacity: 1, xPercent: 0, rotateY: 0, z: 0, ease: "power3.out", scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "center center",
          scrub: 1
      }}
    );

    gsap.fromTo(".founder-2", 
      { opacity: 0, xPercent: 20, rotateY: -15, z: -100 }, 
      { opacity: 1, xPercent: 0, rotateY: 0, z: 0, ease: "power3.out", scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          end: "center center",
          scrub: 1
      }}
    );

    // Text element cascade reveals
    gsap.fromTo(".founders-title", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, ease: "power2.out", scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "center center",
          scrub: 1
      }}
    );

    gsap.fromTo(".founders-text", 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, ease: "power2.out", scrollTrigger: {
          trigger: ".founder-2",
          start: "center 80%",
          end: "bottom 60%",
          scrub: 1
      }}
    );

  }, { scope: container });

  return (
    <section 
      style={{ 
        position: 'relative', 
        zIndex: 5, 
        // Generates a buttery smooth fade transition bridging from the StorySection's absolute pitch black
        // Directly into the glassy vintage orange lighting environment!
        background: 'linear-gradient(to bottom, #020202 0%, rgba(2,2,2,0.8) 20%, rgba(2,2,2,0.3) 50%, transparent 100%)',
        padding: '160px 20px',
        minHeight: '100vh',
        perspective: '1200px'
      }} 
      ref={container}
    >
      <div className="panel-content" style={{ margin: '0 auto', textAlign: 'center' }}>
        <h4 className="section-tag founders-title">The Visionaries</h4>
        <h2 className="section-title founders-title" style={{ marginBottom: '100px' }}>Meet Our Founders</h2>
        
        <div className="founders-grid">
          
          {/* Founder 1: Alex */}
          <div className="founder-1" style={{ transformStyle: 'preserve-3d' }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* 0-degree default forward variant */}
                <div className="flip-card-front">
                  <Image src="/assets/founder1.png" alt="Alex Front" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
                </div>
                {/* 180-backface variant */}
                <div className="flip-card-back">
                  <Image src="/assets/founder1.2.png" alt="Alex Back" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
            <h3 style={{ fontSize: '36px', marginTop: '32px', fontWeight: 300, color: '#fff' }}>Alex</h3>
          </div>
          
          {/* Founder 2: Lwazi */}
          <div className="founder-2 founder-2-wrapper" style={{ transformStyle: 'preserve-3d' }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src="/assets/founder2.png" alt="Lwazi Front" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
                </div>
                <div className="flip-card-back">
                  <Image src="/assets/founder2.1.png" alt="Lwazi Back" fill sizes="(max-width: 768px) 100vw, 600px" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
            <h3 style={{ fontSize: '36px', marginTop: '32px', fontWeight: 300, color: '#fff' }}>Lwazi</h3>
          </div>

        </div>

        <div className="founders-text" style={{ maxWidth: '900px', margin: '140px auto 0' }}>
          <p className="section-p" style={{ fontSize: '28px', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            &ldquo;Alex and Lwazi are passionately devoted to the craft of photography. With an innate edge for raw emotion and timeless elegance, they ensure that every memory captured becomes an unforgettable story.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
