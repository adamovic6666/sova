"use client";
import React, { useRef, useEffect, useState } from "react";
import Title from "../../title/Title";
import { OurWorkData } from "../../../_data";
import Image from "next/image";
import styles from "./OurWork.module.css";
import Button from "../../ui/button/Button";
import Wave from "../../wave/Wave";

const OurWork = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const checkInView = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if section is at least 85% visible in the viewport
      if (
        rect.top < viewportHeight * 0.1 &&
        rect.bottom > viewportHeight * 0.9
      ) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    interface ScrollEvent extends Event {
      deltaY: number;
      preventDefault: () => void;
    }

    const handleScroll = (event: ScrollEvent) => {
      if (!isInView || isEnd) return; // Allow vertical scrolling when end is reached

      const container = scrollRef.current;
      if (!container) return;

      event.preventDefault(); // Prevent default vertical scrolling

      // Horizontal scroll based on vertical movement
      container.scrollBy({ left: event.deltaY * 1.5, behavior: "smooth" });

      // Check if we reached the last item
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - 5) {
        setIsEnd(true); // Allow normal scrolling again
      }
    };

    // Check visibility on scroll
    window.addEventListener("scroll", checkInView);
    window.addEventListener("wheel", handleScroll, { passive: false });

    checkInView(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkInView);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isInView, isEnd]);

  return (
    <section ref={sectionRef} className={styles.OurWork} data-bg="white">
      <Wave bgColor="#f0f0f0" />
      <div className="container">
        <Title tag="h2" flex="column">
          <span>Our</span>
          <span>work</span>
        </Title>
      </div>

      {/* Horizontal Scrollable Container */}
      <div ref={scrollRef} className={`${styles.OurWorkGrid} container`}>
        {OurWorkData.map(({ image, alt, title, project }, index) => (
          <article key={index} className={styles.OurWorkItem}>
            <div>
              <Image src={image} alt={alt} fill={true} />
            </div>
            <Title tag="h3">{title}</Title>
            <p>{project}</p>
          </article>
        ))}
      </div>

      <Button href="/projects" type="link">
        View all projects
      </Button>
    </section>
  );
};

export default OurWork;
