"use client";
import Contact from "./_components/sections/contact/Contact";
import Hero from "./_components/sections/hero/Hero";
import OurWork from "./_components/sections/our-work/OurWork";
import WhoWeAre from "./_components/sections/who-we-are/WhoWeAre";
import useGsapScroll from "./_hooks/useGsapScroll";

export default function Home() {
  useGsapScroll(); // Apply GSAP animations

  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurWork />
      <Contact />
    </>
  );
}
