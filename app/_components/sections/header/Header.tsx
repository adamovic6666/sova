"use client";
import { useEffect, useState } from "react";
import LogoWhite from "../../svg/LogoWhite";
import Menu from "../../ui/menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoColor, setLogoColor] = useState<"black" | "white">("white");
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry, "entry");
          if (entry.isIntersecting) {
            const bgColor = entry.target.getAttribute("data-bg");
            console.log(bgColor, "bgColor");
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
    <header className={`${styles.Header} ${isVisible ? styles.visible : ""}`}>
      <div className="container">
        <LogoWhite logoColor={logoColor} />
        <Menu color={logoColor} />
      </div>
    </header>
  );
};

export default Header;
