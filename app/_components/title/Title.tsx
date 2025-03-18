"use client";
import React, { forwardRef } from "react";
import styles from "./Title.module.css";

const Title = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    tag: string;
    flex?: string;
    color?: string;
  }
>(({ children, tag = "div", flex = "", color = "black" }, ref) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag ref={ref} className={`${styles[flex]} ${styles[color]}`}>
      {children}
    </Tag>
  );
});

export default Title;
