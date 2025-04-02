"use client";
import React from "react";
import Title from "../../title/Title";
import styles from "./Contact.module.css";
import CompanyDetails from "../../company-details/CompanyDetails";
import Wave from "../../wave/Wave";
import ContactForm from "../../forms/contact-form/ContactForm";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Contact = () => {
  const pathName = usePathname();
  const isContactPage = pathName === "/contact-us";

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const showContacForm = (isContactPage && isMobile) || !isMobile;
  return (
    <section
      className={`panel ${styles.Contact} ${
        isContactPage ? styles.ContactExpanded : ""
      }`}
      data-bg="white"
    >
      <Wave bgColor="#fff" />
      <div className={`container ${styles.ContactGrid}`}>
        <div className="sticky">
          <Title tag="h2" flex="column">
            <span>Who?</span>
            <span>Whooo!</span>
          </Title>
        </div>

        <Title tag="h3">Let&apos;s talk</Title>
        <p>
          Got a vision? Reach out and we&apos;ll craft something unforgettable
          together!
        </p>
        <div className={styles.ContactContent}>
          {showContacForm && <ContactForm />}
          <CompanyDetails />
        </div>
        <div className={styles.FooterContent}>
          <p>© 2025 Sova Creative Studio</p>
          <span>|</span>
          <Link href="/privacy-notice">Privacy Notice</Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
