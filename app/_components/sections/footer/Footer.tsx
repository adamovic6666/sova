import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
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
