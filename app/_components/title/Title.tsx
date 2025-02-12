import React, { JSX } from "react";
import styles from "./Title.module.css";

const Title = ({
  children,
  tag = "div",
  flex = "",
  color = "black",
}: {
  children: React.ReactNode;
  tag: string;
  flex?: string;
  color?: string;
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag className={`${styles[flex]} ${styles[color]}`}>{children}</Tag>;
};

export default Title;
