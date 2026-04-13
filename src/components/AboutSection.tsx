"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Zoom in the container
    gsap.fromTo(containerRef.current, {
      scale: 0.5,
      borderRadius: "60px",
      y: 200,
      opacity: 0,
    }, {
      scale: 1,
      borderRadius: "0px",
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      }
    });

    // Content fade in
    gsap.fromTo(contentRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.95,
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "power3.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 5%",
        toggleActions: "play none none reverse"
      }
    });

  }, { scope: sectionRef });

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container" ref={containerRef}>
        <div className="about-content" ref={contentRef}>
          <div className="about-flex">
            <div className="about-image">
               <img src="/assets/hero_image1.png" alt="Alice R" />
            </div>
            <div className="about-text">
               <h2>The Artist Behind the Lens</h2>
               <p>Hi, I'm Alice. My passion lies in capturing the fleeting, raw emotion of human connection. Every session is an opportunity to immortalize what words cannot express, crafted beautifully with organic tones and natural light.</p>
               <button className="hero-button">Read My Story</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
