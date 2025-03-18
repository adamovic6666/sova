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
  const Tag = tag as unknown as React.ElementType;
  return (
    <Tag
      {...(tag === "div" ? { ref } : {})}
      className={`${styles[flex]} ${styles[color]}`}
    >
      {children}
    </Tag>
  );
});

Title.displayName = "Title";

export default Title;
