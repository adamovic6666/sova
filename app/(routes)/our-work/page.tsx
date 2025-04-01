"use client";
import Contact from "@/app/_components/sections/contact/Contact";
import OurWork from "@/app/_components/sections/our-work/OurWork";
import useGsapScroll from "@/app/_hooks/useGsapScroll";

export default function OurWorkPage() {
  // Apply GSAP animations
  useGsapScroll();

  return (
    <main className="main-content">
      <OurWork />
      <Contact />
    </main>
  );
}
