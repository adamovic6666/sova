"use client";
import { useEffect } from "react";
import Contact from "./_components/sections/contact/Contact";
import Hero from "./_components/sections/hero/Hero";
import OurWork from "./_components/sections/our-work/OurWork";
import WhoWeAre from "./_components/sections/who-we-are/WhoWeAre";
import useGsapScroll from "./_hooks/useGsapScroll";

export default function Home() {
  // Apply GSAP animations
  useGsapScroll();
  
  // Reset scroll position and cleanup when navigating back to home
  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === "undefined") return;
    
    // Scroll to top when navigating back to home page
    window.scrollTo(0, 0);
    
    // Force document body to have proper overflow settings
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
    
    // Optional: Add a class to body for page-specific styling
    document.body.classList.add('home-page');
    
    return () => {
      // Clean up when navigating away
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <main>
      <Hero />
      <WhoWeAre />
      <OurWork />
      <Contact />
    </main>
  );
}
