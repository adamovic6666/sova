"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useGsapScroll() {
  const scrollTriggers = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    scrollTriggers.current.forEach((trigger) => {
      if (trigger) trigger.kill();
    });

    scrollTriggers.current = [];

    const initTimeout = setTimeout(() => {
      const panels = gsap.utils.toArray(".panel") as HTMLElement[];

      if (panels.length === 0) return;

      panels.forEach((panel) => {
        if (!panel) return;

        const trigger = ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight
              ? "top top"
              : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        scrollTriggers.current.push(trigger);
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(initTimeout);

      scrollTriggers.current.forEach((trigger) => {
        if (trigger) trigger.kill();
      });

      scrollTriggers.current = [];

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearMatchMedia();
    };
  }, []);
}
