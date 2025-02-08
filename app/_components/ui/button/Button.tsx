"use client";
import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

const Button = ({
  children,
  onClick,
  type = "button",
  href = "/",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "link";
  href?: string;
  className?: string;
}) => {
  const el =
    type === "link" ? (
      <Link className={styles.Button} href={href}>
        {children}
      </Link>
    ) : (
      <button className={`${className} ${styles.Button}`} onClick={onClick}>
        {children}
      </button>
    );

  return el;
};

export default Button;
