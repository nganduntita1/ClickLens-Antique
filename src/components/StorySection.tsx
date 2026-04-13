"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StorySection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Set 3D initial states for cinematic movie sequence
    gsap.set(".cinematic-text-1", { opacity: 0, z: -800, scale: 0.5 });
    gsap.set(".cinematic-text-2", { opacity: 0, y: 50 });
    gsap.set(".cinematic-img-1", { opacity: 0, z: -1500, xPercent: -50, yPercent: -50 });
    gsap.set(".cinematic-img-2", { opacity: 0, z: -1000, xPercent: 50, yPercent: 40 });
    gsap.set(".cinematic-img-3", { opacity: 0, z: -2000, xPercent: 0, yPercent: 60 });
    gsap.set(".cinematic-overlay", { opacity: 1 }); // pure darkness to wipe over the incoming hero

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=500%", // 5 full viewport heights of scrolling to let the movie play out!
        scrub: 1.5, // buttery smooth staggering
        pin: true, 
      }
    });

    tl
      // 0. The curtain rises - fade out the absolute blackness to reveal our deep cinematic environment
      .to(".cinematic-overlay", { opacity: 0.4, duration: 1 })
      
      // 1. Movie title text flies up and fades in
      .to(".cinematic-text-1", { opacity: 1, z: 0, scale: 1, duration: 3, ease: "power2.out" })
      .to(".cinematic-text-1", { opacity: 0, z: 400, scale: 1.3, duration: 2, ease: "power2.in" }, "+=0.5") // Zoom past camera!
      
      // 2. 3D array of vintage images fly beautifully through Z-space past the camera
      .to(".cinematic-img-1", { opacity: 1, z: 300, duration: 2.5, ease: "none" }, "-=1.5")
      .to(".cinematic-img-2", { opacity: 1, z: 400, duration: 2.5, ease: "none" }, "-=2")
      .to(".cinematic-img-3", { opacity: 1, z: 200, duration: 3, ease: "none" }, "-=2")
      
      // Fly them out of bounds, fading into blur/transparent
      .to(".cinematic-img-1", { opacity: 0, z: 1200, duration: 1.5, ease: "none" }, "-=1")
      .to(".cinematic-img-2", { opacity: 0, z: 1200, duration: 1.5, ease: "none" }, "-=1.2")
      .to(".cinematic-img-3", { opacity: 0, z: 1200, duration: 1.5, ease: "none" }, "-=1.5")

      // 3. Final fade down into ambient lighting followed by our real story copy
      .to(".cinematic-overlay", { opacity: 0.8, duration: 1 }, "-=1")
      .to(".cinematic-text-2", { opacity: 1, y: 0, duration: 2, ease: "power3.out" })
      .to(".cinematic-text-2", { opacity: 1, duration: 2 }); // Hold

  }, { scope: container });

  return (
    <section style={{ position: 'relative', zIndex: 10, background: '#020202' }}>
      <div ref={container} style={{ height: '100vh', width: '100%', perspective: '1200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Background Overlay */}
        <div className="cinematic-overlay" style={{ position: 'absolute', inset: 0, background: '#000', zIndex: 1, pointerEvents: 'none' }}></div>
        
        {/* 3D Deep Space Wrapper */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', transformStyle: 'preserve-3d', pointerEvents: 'none', zIndex: 2 }}>
            <img src="/assets/hero_image2.png" className="cinematic-img-1" style={{ position: 'absolute', top: '30%', left: '30%', height: '45vh', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} alt="" />
            <img src="/assets/hero_image4.png" className="cinematic-img-2" style={{ position: 'absolute', top: '15%', right: '35%', height: '55vh', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} alt="" />
            <img src="/assets/hero_image7.png" className="cinematic-img-3" style={{ position: 'absolute', bottom: '10%', left: '45%', height: '40vh', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }} alt="" />
        </div>

        {/* Floating Titles */}
        <div className="cinematic-text-1" style={{ position: 'absolute', textAlign: 'center', width: '100%', zIndex: 3 }}>
            <h2 style={{ fontSize: '5rem', fontWeight: 300, color: '#fff', textShadow: '0 10px 40px rgba(0,0,0,1)' }}>Step back in time.</h2>
            <p style={{ fontSize: '2rem', fontStyle: 'italic', color: 'rgba(255,184,136,0.9)', marginTop: '20px', textShadow: '0 5px 20px rgba(0,0,0,1)' }}>Capture unforgettable moments...</p>
        </div>

        {/* Final Text Content */}
        <div className="cinematic-text-2" style={{ position: 'absolute', textAlign: 'center', maxWidth: '900px', padding: '0 40px', zIndex: 4 }}>
            <h3 style={{ fontSize: '32px', color: '#ffb888', marginBottom: '30px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase' }}>About Us</h3>
            <p style={{ fontSize: '22px', lineHeight: 1.8, color: 'rgba(255,255,255,0.95)', marginBottom: '24px' }}>
              At ClickLens Antique, we believe photography should feel magical and meaningful. We are a fully mobile vintage photography studio traveling across South Africa, offering a one-of-a-kind experience wherever you are.
            </p>
            <p style={{ fontSize: '22px', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
              From elegant props to classic clothing, we perfectly craft a unique experience that completely transforms your memories into beautiful, timeless vintage keepsakes.
            </p>
        </div>

      </div>
    </section>
  );
}
