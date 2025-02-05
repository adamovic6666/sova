import React from "react";
import styles from "./Wave.module.css";

const Wave = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className={styles.Wave}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 460.8 20.4"
      >
        <path
          d="M460.8,20.3H0C74.8,7,151.8,0.1,230.4,0.1S386,7,460.8,20.3"
          fill={bgColor}
        />
      </svg>
    </div>
  );
};

export default Wave;
