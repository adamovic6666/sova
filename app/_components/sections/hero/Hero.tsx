"use client";
import { useRef, useEffect, useState } from "react";
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

  // State to track if we should show animation
  const [shouldAnimate, setShouldAnimate] = useState(false);
  // State to track if we've determined animation state yet
  const [isInitialized, setIsInitialized] = useState(false);

  // Check if animation should run (on mount only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // If animation has already been seen, don't show it again
        const animationSeen =
          sessionStorage.getItem("animationDone") === "true";
        setShouldAnimate(!animationSeen);
      } catch (err) {
        console.error("Error accessing sessionStorage:", err);
        // On error, default to no animation for better experience
        setShouldAnimate(false);
      }
      // Mark as initialized after setting shouldAnimate
      setIsInitialized(true);
    }
  }, []);

  // Animation sequence
  useEffect(() => {
    // Skip all animation logic for returning visitors
    if (!shouldAnimate || typeof window === "undefined") return;

    // Prevent scrolling during animation
    document.body.style.overflowY = "hidden";

    // Set initial states for animation
    if (videoRef.current) {
      gsap.set(videoRef.current, { opacity: 0, scale: 0.5 });
    }

    if (titleRef.current && titleRef.current.children) {
      gsap.set(Array.from(titleRef.current.children), {
        opacity: 0,
        y: 30,
      });
    }

    // Create and run animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        // Enable scrolling
        document.body.style.overflowY = "auto";

        // Mark animation as complete for future visits
        try {
          sessionStorage.setItem("animationDone", "true");
        } catch (err) {
          console.error("Error writing to sessionStorage:", err);
        }
      },
    });

    if (logoRef.current && videoRef.current && titleRef.current) {
      // Logo animation
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
        .to(logoRef.current, {
          opacity: 0,
          duration: 0.75,
          ease: "power2.out",
        })

        // Video reveal
        .fromTo(
          videoRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=0.5"
        )

        // Make title container visible before animation
        .set(titleRef.current.parentElement, { visibility: "visible" })

        // Title text animation
        .fromTo(
          Array.from(titleRef.current.children),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
    }

    // Cleanup function
    return () => {
      if (tl) tl.kill();
      document.body.style.overflowY = "auto";
    };
  }, [shouldAnimate]);

  return (
    <section ref={heroRef} className={`${styles.Hero} panel`} data-bg="dark">
      {/* During initialization, show nothing or a placeholder */}
      {!isInitialized && (
        <div style={{ height: '100vh', background: '#000' }}></div>
      )}
      
      {/* Only render content after we've determined animation state */}
      {isInitialized && (
        <>
          {/* ANIMATION PATH: For first time visitors */}
          {shouldAnimate && (
            <>
              {/* Logo for animation (only shown during animation) */}
              <div ref={logoRef} className={styles.LogoContainer}>
                <LogoWhite logoColor="#fff" link={false} />
              </div>

              {/* Video with animation */}
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

              {/* Title with animation */}
              <div className="container" style={{ visibility: "hidden" }}>
                <Title tag="h1" flex="column" color="white" ref={titleRef}>
                  <span>We</span>
                  <span>Make</span>
                  <span>Your</span>
                  <span>Brand</span>
                  <span>Fly</span>
                </Title>
              </div>
            </>
          )}

          {/* NO ANIMATION PATH: For returning visitors */}
          {!shouldAnimate && (
            <>
              {/* Video immediately visible */}
              <video
                className={styles.video}
                autoPlay
                muted
                loop
                preload="none"
                style={{ opacity: 1, scale: 1 }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>

              {/* Title immediately visible */}
              <div className="container">
                <Title tag="h1" flex="column" color="white">
                  <span style={{ opacity: 1 }}>We</span>
                  <span style={{ opacity: 1 }}>Make</span>
                  <span style={{ opacity: 1 }}>Your</span>
                  <span style={{ opacity: 1 }}>Brand</span>
                  <span style={{ opacity: 1 }}>Fly</span>
                </Title>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Hero;
