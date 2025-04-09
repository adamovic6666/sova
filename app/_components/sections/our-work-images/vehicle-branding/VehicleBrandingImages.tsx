import React from "react";
import styles from "./VehicleBrandingImages.module.css";
import Image from "next/image";
const VehicleBrandingImages = () => {
  return (
    <div className={`${styles.VehicleBrandingImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/vitex-car-1.jpg" alt="laptop-image" fill={true} />
        </div>
      </div>
      <div className={styles.FullWidthImage}>
        <Image src="/vitex-car-2.jpg" alt="vitex-image" fill={true} />
      </div>
      <div className="container">
        <div className={styles.ImagesContainerGrid}>
          <div>
            <Image src="/vitex-car-3.jpg" alt="vitex-image" fill={true} />
          </div>
          <div>
            <Image src="/vitex-car-4.jpg" alt="vitex-image" fill={true} />
          </div>
          <div>
            <Image src="/vitex-car-5.jpg" alt="vitex-image" fill={true} />
          </div>
          <div>
            <Image src="/vitex-car-6.jpg" alt="vitex-image" fill={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBrandingImages;
