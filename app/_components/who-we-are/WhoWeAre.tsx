import React from "react";
import styles from "./WhoWeAre.module.css";
import Title from "../title/Title";

const WhoWeAre = () => {
  return (
    <section className={styles.WhoWeAre}>
      <Title tag="h2">
        <span>Whooooo</span>
        <span>We are</span>
      </Title>
    </section>
  );
};

export default WhoWeAre;
