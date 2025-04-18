"use client";
import { useEffect, useRef, useState } from "react";
import LogoWhite from "../../svg/LogoWhite";
import Menu from "../../ui/menu/Menu";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isMainPage);
  const [logoColor, setLogoColor] = useState<"black" | "white">("white");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headerMounted = useRef(true);

  // Check if animation is already done when component mounts
  useEffect(() => {
    // Initialize header state based on animation status
    const checkAnimationStatus = () => {
      if (typeof window !== "undefined") {
        try {
          const animationDone =
            sessionStorage?.getItem("animationDone") === "true";
          if (animationDone) {
            setIsVisible(true);
          } else {
            // Animation not done yet, show header after animation duration
            timeoutRef.current = setTimeout(() => {
              if (headerMounted.current) {
                setIsVisible(true);
              }
            }, 5500);
          }
        } catch (err) {
          console.error("Error accessing sessionStorage:", err);
          // Default to showing header if storage access fails
          setIsVisible(true);
        }
      }
    };

    checkAnimationStatus();

    // Set up scroll handling - header visibility based on scroll direction
    const handleScroll = () => {
      if (typeof window === "undefined" || !headerMounted.current) return;

      // Show header when scrolling up, hide when scrolling down
      if (window.scrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (window.scrollY > 100) {
        // Add threshold to prevent hiding on small scrolls
        setIsVisible(false);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      lastScrollY.current = window.scrollY;
    };

    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup function
    return () => {
      headerMounted.current = false;

      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Set up observer to change logo color based on section background
  useEffect(() => {
    // if (typeof window === "undefined" || !headerMounted.current) return;

    const sections = document.querySelectorAll("section");
    if (sections.length === 0) return;

    // Create intersection observer for sections
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = entry.target.getAttribute("data-bg");
            setLogoColor(bgColor === "dark" ? "white" : "black");
          }
        });
      },
      { root: null, threshold: 0.1 } // Lower threshold to detect sections sooner
    );

    // Observe all sections
    sections.forEach((section) => observerRef.current?.observe(section));

    // Cleanup function
    return () => {
      if (observerRef.current) {
        sections.forEach((section) => {
          observerRef.current?.unobserve(section);
        });
        observerRef.current.disconnect();
      }
    };
  }, [pathname]);

  return (
    <header
      className={`${styles.Header} ${
        logoColor === "black" ? styles.White : ""
      } ${isVisible ? styles.visible : ""}`}
    >
      <div className="container">
        <LogoWhite
          logoColor={logoColor}
          onHeaderHide={() => {
            if (menuOpen) {
              setMenuOpen(false);
              document.body.style.overflow = "auto";
            } else {
              setIsVisible(false);
            }
          }}
        />
        <Menu color={logoColor} isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
