"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FooterSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // A majestic slow scaling revealing of the entire footer block directly upwards
    gsap.fromTo(container.current, 
      { yPercent: -15, scale: 0.95, opacity: 0 },
      { yPercent: 0, scale: 1, opacity: 1, ease: "none", scrollTrigger: {
          trigger: ".footer-wrapper-anchor",
          start: "top 95%", 
          end: "bottom bottom",
          scrub: true
      }}
    );
  }, { scope: container });

  return (
    <section className="footer-wrapper-anchor" style={{ minHeight: '100vh', padding: '120px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <div ref={container} className="panel-content" style={{ margin: '0 auto', width: '100%', maxWidth: '1200px', background: 'rgba(6, 4, 3, 0.85)', borderRadius: '40px', padding: '80px 60px', border: '1px solid rgba(255,150,80,0.15)', backdropFilter: 'blur(20px)', boxShadow: '0 -20px 80px rgba(0,0,0,0.8)' }}>
        
         {/* Top Massive CTA */}
         <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
            <h2 className="section-title" style={{ fontSize: '42px', marginBottom: '20px', letterSpacing: '-0.5px', lineHeight: '1.2' }}>Ready to create timeless memories?</h2>
            <p className="section-p" style={{ fontSize: '16px', margin: '0 auto 40px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
               Get in touch to book your vintage session, or drop us a line to discover when our mobile studio is near your area.
            </p>
            <a 
              href="https://wa.me/27672727343?text=Hi!%20I%20would%20like%20to%20book%20a%20vintage%20shoot." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-button" 
              style={{ display: 'inline-block', textDecoration: 'none', fontSize: '16px', padding: '16px 40px', boxShadow: '0 15px 40px rgba(255, 150, 80, 0.25)', fontWeight: 400 }}
            >
               WhatsApp Us
            </a>
         </div>
            
         {/* Bottom Data Array */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '60px' }}>
            
            <div className="info-group">
              <h4 style={{ color: '#ffb888', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '16px', fontWeight: 600 }}>Where We Operate</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.7 }}>We travel across South Africa, bringing our vintage photography sets to your cities, towns, and local events.</p>
            </div>
            
            <div className="info-group">
              <h4 style={{ color: '#ffb888', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '16px', fontWeight: 600 }}>Contact</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.7, cursor: 'pointer' }}>Phone: 067 272 7343</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.7, cursor: 'pointer' }}>Email: hello@clicklensantique.co.za</p>
            </div>
            
            <div className="info-group">
              <h4 style={{ color: '#ffb888', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '16px', fontWeight: 600 }}>Follow Us</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '14px', transition: 'color 0.2s', width: 'fit-content' }}>Instagram</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '14px', transition: 'color 0.2s', width: 'fit-content' }}>Facebook</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '14px', transition: 'color 0.2s', width: 'fit-content' }}>Behance</span>
              </div>
            </div>

         </div>
         
      </div>
    </section>
  );
}
