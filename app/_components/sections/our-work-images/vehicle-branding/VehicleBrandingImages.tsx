import React from "react";
import styles from "./VehicleBrandingImages.module.css";
import Image from "next/image";
const VehicleBrandingImages = () => {
  return (
    <div className={`${styles.VehicleBrandingImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image
            src="/vitex-car-1.webp"
            alt="brendiranje-bozila"
            fill
            quality={100}
          />
        </div>
      </div>
      <div className={styles.FullWidthImage}>
        <Image
          src="/vitex-car-2.webp"
          alt="brendiranje-bozila"
          fill
          quality={100}
        />
      </div>
      <div className="container">
        <div className={styles.ImagesContainerGrid}>
          <div>
            <Image
              src="/vitex-car-3.webp"
              alt="brendiranje-bozila"
              fill
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/vitex-car-4.webp"
              alt="brendiranje-bozila"
              fill
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/vitex-car-5.webp"
              alt="brendiranje-bozila"
              fill
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/vitex-car-6.webp"
              alt="brendiranje-bozila"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBrandingImages;
