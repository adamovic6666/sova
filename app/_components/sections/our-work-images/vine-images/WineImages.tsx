import React from "react";
import styles from "./WineImages.module.css";
import Image from "next/image";

const WineImages = () => {
  return (
    <div className={`${styles.WineImages} panel`}>
      <div className={styles.MainImageContainer}>
        <Image src="/wine-1.png" alt="laptop-image" fill />
      </div>
      <div className={styles.MainImageContainerMobile}>
        <Image src="/wine-1-crop.webp" alt="laptop-image" fill />
      </div>
      <div className="container">
        <div className={styles.ImagesContainerWrapper}>
          <div className={styles.ImagesContainerGrid}>
            <div>
              <Image src="/wine-2.jpg" alt="wine-image" fill />
            </div>
            <div className={styles.Wine}>
              <Image src="/wine-3.jpg" alt="wine-image" fill />
            </div>
            <div className={styles.Wine}>
              <Image src="/wine-4.jpg" alt="wine-image" fill />
            </div>
            <div>
              <Image src="/wine-5.jpg" alt="wine-image" fill />
            </div>
            <div>
              <Image src="/wine-6.jpg" alt="wine-image" fill />
            </div>
            <div className={styles.Wine}>
              <Image src="/wine-7.jpg" alt="wine-image" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineImages;
