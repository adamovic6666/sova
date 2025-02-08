import React, { JSX } from "react";
import styles from "./Title.module.css";

const Title = ({
  children,
  tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  tag: string;
  className?: string;
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag className={styles[className]}>{children}</Tag>;
};

export default Title;
