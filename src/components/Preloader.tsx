"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This systematically enforces the DOM to natively halt rendering bounds until all heavy .png assets are downloaded into RAM!
    const fadeOut = () => {
      gsap.to(".preloader-wrapper", {
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.1,
        duration: 1.2,
        ease: "power3.inOut",
        onComplete: () => setIsLoading(false)
      });
    };

    if (document.readyState === "complete") {
      setTimeout(fadeOut, 300); // Buffer protection
    } else {
      window.addEventListener("load", fadeOut);
    }

    return () => window.removeEventListener("load", fadeOut);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader-wrapper" style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999, // Guarantees highest stacking hierarchy possible
      background: '#020202',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffb888'
    }}>
      <div style={{ fontSize: '20px', letterSpacing: '12px', textTransform: 'uppercase', marginBottom: '40px', fontWeight: 300, marginLeft: '12px' }}>ClickLens</div>
      <div style={{ width: '240px', height: '1px', background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
         <div className="preloader-bar"></div>
      </div>
    </div>
  );
}
