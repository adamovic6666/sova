"use client";
import { useEffect, useState } from "react";
import LogoWhite from "../../svg/LogoWhite";
import Menu from "../../ui/menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
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

  return (
    <header className={`${styles.Header} ${isVisible ? styles.visible : ""}`}>
      <div className="container">
        <LogoWhite />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
