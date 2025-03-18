"use client";
import { useEffect, useRef, useState } from "react";
import LogoWhite from "../../svg/LogoWhite";
import Menu from "../../ui/menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [logoColor, setLogoColor] = useState<"black" | "white">("white");
  const lastScrollY = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatedDone =
    typeof window !== "undefined" &&
    sessionStorage.getItem("animationDone") === "true";

  useEffect(() => {
    if (isAnimatedDone) {
      setIsVisible(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 5500);
    }

    const handleScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      lastScrollY.current = window.scrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isAnimatedDone]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = entry.target.getAttribute("data-bg");
            setLogoColor(bgColor === "dark" ? "white" : "black");
          }
        });
      },
      { root: null, threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`${styles.Header} ${
        logoColor === "black" ? styles.White : ""
      } ${isVisible ? styles.visible : ""}`}
    >
      <div className="container">
        <LogoWhite logoColor={logoColor} />
        <Menu color={logoColor} />
      </div>
    </header>
  );
};

export default Header;
