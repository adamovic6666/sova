import React from "react";
import styles from "./VideoProductionImages.module.css";
import Image from "next/image";

const VideoProductionImages = () => {
  return (
    <div className={`${styles.VideoProductionImages} panel`}>
      <div className="container">
        <div className={styles.MainImageContainer}>
          <Image
            src="/arcelor-mittal-2.webp"
            alt="video-production"
            fill={true}
            quality={100}
          />
        </div>
        <div className={styles.VideoEmbed}>
          <iframe
            src="https://www.youtube.com/embed/UchCmxiggTI?si=Otc6QbMwqLuB3s8S"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.BgImageFull}>
          <Image
            src="/arcelor-mittal-1.webp"
            alt="video-production"
            fill={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoProductionImages;
