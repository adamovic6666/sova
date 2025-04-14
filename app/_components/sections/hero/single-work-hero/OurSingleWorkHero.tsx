import React from "react";
import styles from "./OurSingleWorkHero.module.css";
import Title from "@/app/_components/title/Title";
const OurSingleWorkHero = ({
  pageTitle,
  sectionTitle,
  sectionText,
  project,
}: {
  pageTitle?: string[];
  sectionTitle?: string;
  sectionText?: string;
  project?: string;
}) => {
  return (
    <section className={styles.OurSingleWorkHero} data-bg="black">
      <div className="container">
        <Title tag="h1" flex="column" color="white">
          {pageTitle?.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </Title>
        <p>Client: {project}</p>
        <h3>{sectionTitle}</h3>
        <p dangerouslySetInnerHTML={{ __html: sectionText || "" }}></p>
      </div>
    </section>
  );
};

export default OurSingleWorkHero;
