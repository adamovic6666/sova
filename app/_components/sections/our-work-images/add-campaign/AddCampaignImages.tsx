import React from "react";
import styles from "./AddCampaignImages.module.css";
import Image from "next/image";

const AddCampaignImages = () => {
  return (
    <div className={`${styles.AddCampaignImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image src="/arcelor-mital-main.jpg" alt="laptop-image" fill={true} />
        </div>
        <div className={styles.ImagesContainerGrid}>
          <div>
            <Image src="/arcelor-mital-1.jpg" alt="arcelor-image" fill={true} />
          </div>
          <div>
            <Image src="/arcelor-mital-2.jpg" alt="arcelor-image" fill={true} />
          </div>
          <div>
            <Image src="/arcelor-mital-3.jpg" alt="arcelor-image" fill={true} />
          </div>
          <div>
            <Image src="/arcelor-mital-4.jpg" alt="arcelor-image" fill={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCampaignImages;
