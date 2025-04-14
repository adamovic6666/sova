import React from "react";
import styles from "./AddCampaignImages.module.css";
import Image from "next/image";

const AddCampaignImages = () => {
  return (
    <div className={`${styles.AddCampaignImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image
            src="/arcelor-mital-main.jpg"
            alt="reklame-dizajn"
            fill
            quality={100}
          />
        </div>
        <div className={styles.ImagesContainerGrid}>
          <div>
            <Image
              src="/arcelor-mital-1.jpg"
              alt="reklame-dizajn"
              fill
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/arcelor-mital-2.jpg"
              alt="reklame-dizajn"
              fill
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/arcelor-mital-3.jpg"
              alt="reklame-dizajn"
              fill
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/arcelor-mital-4.jpg"
              alt="reklame-dizajn"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCampaignImages;
