"use client";
import Link from "next/link";
import styles from "./Footer.module.css";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <footer className={`container ${styles.Footer}`}>
      <div className={styles.FooterContent}>
        <p>© 2025 Sova Creative Studio</p>
        <span>|</span>
        <Link href="/privacy-notice">Privacy Notice</Link>
      </div>
    </footer>
  );
};

export default Footer;
