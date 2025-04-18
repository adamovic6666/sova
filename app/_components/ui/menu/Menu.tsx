"use client";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import styles from "./Menu.module.css";
import Link from "next/link";
import Linkedin from "../../svg/Linkedin";
import Instagram from "../../svg/Instagram";
import Facebook from "../../svg/Facebook";
import { usePathname } from "next/navigation";

const Menu = ({ 
  color, 
  isOpen, 
  setIsOpen 
}: { 
  color: "black" | "white",
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}) => {
  const [hovered, setHovered] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setIsOpen(false);
    }
  }, [pathname, setIsOpen]);

  const closeMenuAndEnableScroll = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div
        className={`${styles.MenuWrapper} ${
          isOpen ? `${styles.MenuOpen} menu-open` : ""
        }`}
      >
        <div className="container">
          <nav className={styles.Menu}>
            <span>We</span>

            <Link
              href="/"
              onClick={() => {
                setIsOpen(false);
              }}
              onMouseEnter={() => setHovered("/")}
              className={`${hovered === "/" ? styles.active : ""} ${
                !!hovered && hovered !== "/" ? styles.notActive : ""
              }`}
              onMouseLeave={() => setHovered("")}
            >
              Home
            </Link>
            <span>Make</span>

            <Link
              href="/#about-us"
              onMouseEnter={() => setHovered("/about-us")}
              onClick={closeMenuAndEnableScroll}
              className={`${hovered === "/about-us" ? styles.active : ""}
            ${!!hovered && hovered !== "/about-us" ? styles.notActive : ""}`}
              onMouseLeave={() => setHovered("")}
            >
              About us
            </Link>
            <span>Your</span>
            <Link
              href="/our-work"
              onClick={closeMenuAndEnableScroll}
              onMouseEnter={() => setHovered("/our-work")}
              className={`${hovered === "/our-work" ? styles.active : ""} ${
                !!hovered && hovered !== "/our-work" ? styles.notActive : ""
              }`}
              onMouseLeave={() => setHovered("")}
            >
              Our work
            </Link>
            <span>Brand</span>

            <Link
              href="/contact-us"
              onClick={closeMenuAndEnableScroll}
              onMouseEnter={() => setHovered("/contact-us")}
              className={`${hovered === "/contact-us" ? styles.active : ""} ${
                !!hovered && hovered !== "/contact-us" ? styles.notActive : ""
              }`}
              onMouseLeave={() => setHovered("")}
            >
              Contact us
            </Link>
            <span>Fly</span>
          </nav>

          <div className={styles.Socials}>
            <a
              href="https://www.linkedin.com/company/sova.creative/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/sova.creative/" target="_blank">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/sova.creative" target="_blank">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
          document.body.style.overflow = isOpen ? "auto" : "hidden";
          document.body.style.overflowX = "hidden";
        }}
        color={color}
      >
        {isOpen ? "Close" : "Menu"}
      </Button>
    </div>
  );
};

export default Menu;
