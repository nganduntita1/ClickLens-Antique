"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray('.step');
    
    // Set initial states aggressively dim
    gsap.set(steps, { opacity: 0.1 });
    gsap.set('.step-num', { color: 'rgba(255, 150, 80, 0.05)', scale: 0.9, x: -40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 10%",
        end: "+=400%", // Long scrolling depth allows them to track fully through without rushing
        scrub: 1,
        pin: true
      }
    });

    steps.forEach((step: any, i) => {
      // Glow up heavily alongside massive horizontal structural shift
      tl.to(step, { opacity: 1, duration: 2, ease: "power2.out" })
        .to(step.querySelector('.step-num'), { color: 'rgba(255, 150, 80, 0.4)', scale: 1, x: 0, duration: 2 }, "<")
      
      // Hold firmly lit position
      tl.to(step, { opacity: 1, duration: 1.5 });

      // If not the last step, dim it out fully into the void when stepping downwards
      if (i !== steps.length - 1) {
        tl.to(step, { opacity: 0.2, duration: 2, ease: "power2.in" })
          .to(step.querySelector('.step-num'), { color: 'rgba(255, 150, 80, 0.05)', scale: 0.9, x: -20, duration: 2 }, "<");
      }
    });

  }, { scope: container });

  return (
    <section className="panel-section" style={{ minHeight: '100vh', padding: '160px 20px', display: 'block' }} ref={container}>
      <div className="panel-content" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '160px' }}>
          <h4 className="section-tag">How It Works</h4>
          <h2 className="section-title">Seamless & Nostalgic</h2>
        </div>

        <div className="steps-list" style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative' }}>
          
          <div className="step" style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="step-num" style={{ fontSize: '10rem', fontWeight: 100, lineHeight: 0.8, userSelect: 'none' }}>01</div>
            <div>
              <h3 style={{ fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>We Travel to You</h3>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '800px' }}>Our studio is fully mobile — we securely pack and bring absolutely everything needed across directly to your location, cleanly offering flawless convenience.</p>
            </div>
          </div>
          
          <div className="step" style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="step-num" style={{ fontSize: '10rem', fontWeight: 100, lineHeight: 0.8, userSelect: 'none' }}>02</div>
            <div>
              <h3 style={{ fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>Choose Your Style</h3>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '800px' }}>Pick effortlessly from our carefully curated vintage props and vast array of antique clothing to craft your perfect aesthetic look.</p>
            </div>
          </div>
          
          <div className="step" style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="step-num" style={{ fontSize: '10rem', fontWeight: 100, lineHeight: 0.8, userSelect: 'none' }}>03</div>
            <div>
              <h3 style={{ fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>Enjoy the Experience</h3>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '800px' }}>Have unparalleled fun acting out scenes while we effortlessly capture your raw moments in a heavily relaxed, profoundly nostalgic setting.</p>
            </div>
          </div>
          
          <div className="step" style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="step-num" style={{ fontSize: '10rem', fontWeight: 100, lineHeight: 0.8, userSelect: 'none' }}>04</div>
            <div>
              <h3 style={{ fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>Receive Your Photo</h3>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '800px' }}>Walk away proudly bearing a beautiful vintage-style memory accurately captured in permanence to last for an entire lifetime forward.</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
