import React from "react";
import Wave from "../../wave/Wave";
import Title from "../../title/Title";
import styles from "./OtherProjects.module.css";
import Link from "next/link";
import Button from "../../ui/button/Button";
import { OurWork } from "@/app/_types";

const OtherProjects = ({ otherProjects }: { otherProjects: OurWork[] }) => {
  return (
    <section className={`panel ${styles.OtherProjects}`} data-bg="white">
      <Wave bgColor="#f0f0f0" />
      <div className={`${styles.OtherProjectsContainer} container`}>
        <Title tag="h2" flex="column">
          <span>Other</span>
          <span>Projects</span>
        </Title>
        {otherProjects.map(({ title, link, project }) => {
          return (
            <div key={title} className={styles.OtherProjectsItem}>
              <Link href={`/our-work/${link}`}>
                <span>{title}</span> <span>{project}</span>
              </Link>
            </div>
          );
        })}
        <Button href="/our-work" type="link">
          View all projects
        </Button>
      </div>
    </section>
  );
};

export default OtherProjects;
