import React from "react";
import styles from "./WhoWeAre.module.css";
import Title from "../../title/Title";
import Wave from "../../wave/Wave";

const WhoWeAre = () => {
  return (
    <section className={styles.WhoWeAre} data-bg="white">
      <Wave bgColor="#131313" />
      <div className={`container`}>
        <Title tag="h2" flex="column">
          <span>Whooo</span>
          <span>We are?</span>
        </Title>
        <p>
          We are Sova Creative Studio, a dynamic and innovative full-service
          creative team based in Serbia, specializing in delivering
          cost-effective solutions across all aspects of visual communications.
          Our experience spans collaborations with some of the world&apos;s
          largest corporations as well as local entrepreneurial start-ups.
          Regardless of scale, we pride ourselves on providing the same
          exceptional level of service, ensuring reliable delivery - on time and
          within budget.
        </p>
        <p>Our expertise? We make your brand fly!</p>
      </div>
    </section>
  );
};

export default WhoWeAre;
