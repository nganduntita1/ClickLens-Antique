"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ultra-Premium Cinematography Reveal for the massive media panels
    gsap.utils.toArray('.media-block').forEach((block: any) => {
      const imgContainer = block.querySelector('.srv-huge-img-container');
      const textWrapper = block.querySelector('.srv-text-wrapper');

      // 1. Image Container radically expands outward from a highly cropped "cinematic letterbox" state
      gsap.fromTo(imgContainer, 
        { clipPath: "inset(30% 20% 30% 20%)", opacity: 0, y: 80 },
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0, duration: 1.8, ease: "expo.out", scrollTrigger: {
            trigger: block,
            start: "top 75%",
        }}
      );

      // 2. Extremely deep Ken Burns scaling locked heavily to the physical scroll trajectory
      const img = imgContainer.querySelector('img');
      gsap.fromTo(img, 
        { scale: 1.4 },
        { scale: 1, ease: "none", scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }}
      );

      // 3. Staggered smooth translation of typography items floating up next to it
      gsap.fromTo(textWrapper.children, 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", scrollTrigger: {
            trigger: block,
            start: "top 65%"
        }}
      );
    });

  }, { scope: container });

  return (
    <section className="panel-section" style={{ minHeight: '100vh', padding: '160px 20px', zIndex: 5, position: 'relative', display: 'block' }} ref={container}>
      <div className="panel-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '140px' }}>
            <h4 className="section-tag">Our Services</h4>
            <h2 className="section-title">The Vintage Experience</h2>
        </div>
        
        <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '200px' }}>
          
          {/* Block 1: Image Left, Text Right using media.png */}
          <div className="media-block">
            <div className="srv-huge-img-container" style={{ position: 'relative', overflow: 'hidden', height: '800px', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
              <Image src="/assets/media.png" alt="Complete Vintage Setup" fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: 'cover', display: 'block' }} />
            </div>
            
            <div className="srv-text-wrapper" style={{ padding: '0 40px' }}>
               <h3 style={{ fontSize: '48px', fontWeight: 300, marginBottom: '24px', letterSpacing: '-1px' }}>Complete Vintage Setup</h3>
               <p style={{ fontSize: '20px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '48px' }}>
                 Enjoy a perfectly orchestrated vintage-themed photoshoot layered with authentic aesthetic props, classic clothing, deep accessories, and uniquely tailored styled scenes for an undeniably timeless look.
               </p>
               <button className="hero-button" style={{ background: 'transparent', border: '1px solid #ffb888', color: '#ffb888' }}>Explore More</button>
            </div>
          </div>
          
          {/* Block 2: Text Left, Image Right using media2.png */}
          <div className="media-block reverse">
            <div className="srv-text-wrapper" style={{ padding: '0 40px', order: 1 }}>
               <h3 style={{ fontSize: '48px', fontWeight: 300, marginBottom: '24px', letterSpacing: '-1px' }}>Family Photos</h3>
               <p style={{ fontSize: '20px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '48px' }}>
                 Capture deeply special moments safely locked into permanence alongside your closest loved ones in a remarkably unique way. Walk away together bearing a beautiful physical memory holding timeless charm.
               </p>
               <div className="price-tag" style={{ display: 'inline-block', padding: '16px 32px', background: 'rgba(255, 150, 80, 0.1)', color: '#ffb888', borderRadius: '40px', fontSize: '18px', letterSpacing: '1px', border: '1px solid rgba(255, 150, 80, 0.3)' }}>
                  Price: R250 for a family shoot
               </div>
            </div>
            
            <div className="srv-huge-img-container" style={{ position: 'relative', overflow: 'hidden', height: '800px', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
              <Image src="/assets/media2.png" alt="Full Location Journey" fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
