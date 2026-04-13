"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExploreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Zoom in the container softly out of the darkness
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
        start: "top bottom", // start animating as soon as section hits the bottom
        end: "top top", // finish expanding exactly when it assumes the screen viewport
        scrub: 1,
      }
    });

    // Fade the content in majestically ONLY after it scales up
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
        start: "top 5%", // wait until we're totally loaded near the top!
        toggleActions: "play none none reverse"
      }
    });

  }, { scope: sectionRef });

  return (
    <section className="explore-section" ref={sectionRef}>
      <div className="explore-container" ref={containerRef}>
        <div className="explore-content" ref={contentRef}>
          <h2>A World of Deep Hues</h2>
          <p>
            Experience our premium visual storytelling and discover moments capturing unparalleled depth and dynamic color.
          </p>
          <div className="explore-gallery">
            <div className="explore-card">
              <img src="/assets/hero_image2.png" alt="Photography" />
            </div>
            <div className="explore-card">
              <img src="/assets/hero_image4.png" alt="Photography" />
            </div>
            <div className="explore-card">
              <img src="/assets/hero_image7.png" alt="Photography" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
