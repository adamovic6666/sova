import React from "react";
import Title from "../../title/Title";
import styles from "./Contact.module.css";
// import ContactForm from "../../forms/contact-form/ContactForm";
import CompanyDetails from "../../company-details/CompanyDetails";
import Wave from "../../wave/Wave";

const Contact = () => {
  return (
    <section className={styles.Contact} data-bg="white">
      <Wave bgColor="#fff" />
      <div className={`container ${styles.ContactGrid}`}>
        <Title tag="h2" flex="column">
          <span>Who?</span>
          <span>Whooo!</span>
        </Title>
        <Title tag="h3">Let&apos;s talk</Title>
        <p>
          Got a vision? Reach out and we&apos;ll craft something unforgettable
          together!
        </p>
        <div className={styles.ContactContent}>
          {/* <ContactForm /> */}
          <CompanyDetails />
        </div>
      </div>
    </section>
  );
};

export default Contact;
