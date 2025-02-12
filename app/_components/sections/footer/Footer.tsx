import Link from "next/link";
import Logo from "../../svg/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`container ${styles.Footer}`}>
      <Logo />
      <div className={styles.FooterContent}>
        <p>Sova Creative Studio | All rights reserved</p>
        <Link href="/privacy-notice">Privacy Notice</Link>
      </div>
    </footer>
  );
};

export default Footer;
