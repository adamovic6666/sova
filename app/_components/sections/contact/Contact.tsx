import React from "react";
import Title from "../../title/Title";
import styles from "./Contact.module.css";
// import ContactForm from "../../forms/contact-form/ContactForm";
import CompanyDetails from "../../company-details/CompanyDetails";
import Wave from "../../wave/Wave";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <section className={`panel ${styles.Contact}`} data-bg="white">
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
          {/* <ContactForm /> */}
          <CompanyDetails />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
