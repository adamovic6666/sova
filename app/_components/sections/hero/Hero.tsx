"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../../title/Title";
import styles from "./Hero.module.css";
import LogoWhite from "../../svg/LogoWhite";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isAnimated = useRef(false);
  const isAnimatedDone = sessionStorage.getItem("animationDone") === "true";
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !isAnimated.current &&
      !isAnimatedDone
    ) {
      // Disable scrolling
      document.body.style.overflowY = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          // Enable scrolling after animation completes
          document.body.style.overflowY = "auto";
          isAnimated.current = true;
          sessionStorage.setItem("animationDone", "true");
        },
      });

      // LOGO ANIMATION (pulsing & optional SVG drawing)
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1.2, duration: 1.2, ease: "power2.out" }
      )
        .to(logoRef.current, {
          scale: 1,
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(logoRef.current, { opacity: 0, duration: 0.75, ease: "power2.out" })
        .fromTo(
          videoRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=0.5"
        ) // VIDEO SCALE ANIMATION

        // TITLE TEXT REVEAL (each span staggered after video animation)
        .fromTo(
          Array.from(titleRef?.current?.children || []),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
    }
  }, [isAnimatedDone]);

  return (
    <section ref={heroRef} className={`${styles.Hero} panel`} data-bg="dark">
      {/* Logo animation */}
      {!isAnimatedDone && (
        <div ref={logoRef} className={styles.LogoContainer}>
          <LogoWhite logoColor="#fff" />
        </div>
      )}

      {/* Background Video */}
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        preload="none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Animated Title */}
      <div className="container">
        <Title tag="h1" flex="column" color="white" ref={titleRef}>
          <span>We</span>
          <span>Make</span>
          <span>Your</span>
          <span>Brand</span>
          <span>Fly</span>
        </Title>
      </div>
    </section>
  );
};

export default Hero;
