"use client";
import React, { forwardRef } from "react";
import styles from "./Title.module.css";

const Title = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    tag: unknown;
    flex?: string;
    color?: string;
  }
>(({ children, tag = "div", flex = "", color = "black" }, ref) => {
  const Tag = tag as "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return (
    <Tag ref={ref} className={`${styles[flex]} ${styles[color]}`}>
      {children}
    </Tag>
  );
});

Title.displayName = "Title";

export default Title;
