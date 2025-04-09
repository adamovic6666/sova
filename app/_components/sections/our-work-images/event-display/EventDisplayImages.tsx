import Image from "next/image";
import React from "react";
import styles from "./EventDisplayImages.module.css";
const EventDisplayImages = () => {
  return (
    <div className={`${styles.EventDisplayImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/ergomed-1.jpg" alt="main-image" fill={true} />
        </div>
        <div className={styles.Flex}>
          <div>
            <Image src="/ergomed-2.jpg" alt="main-image" fill={true} />
          </div>
          <div>
            <Image src="/ergomed-3.jpg" alt="main-image" fill={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDisplayImages;
