import React from "react";
import styles from "./MinimalistImages.module.css";
import Image from "next/image";
const MinimalistImages = () => {
  return (
    <div className={`${styles.MinimalistImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/montechevo-1.jpg" alt="main-image" fill={true} />
        </div>
        <div className={styles.Flex}>
          <div>
            <Image src="/montechevo-2.jpg" alt="main-image" fill={true} />
          </div>
          <div>
            <Image src="/montechevo-3.jpg" alt="main-image" fill={true} />
          </div>
        </div>
        <div className={styles.MainImageContainer}>
          <Image src="/montechevo-4.jpg" alt="main-image" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default MinimalistImages;
