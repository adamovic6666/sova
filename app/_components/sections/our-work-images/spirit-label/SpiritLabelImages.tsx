import React from "react";
import styles from "./SpiritLabelImages.module.css";
import Image from "next/image";
const SpiritLabelImages = () => {
  return (
    <div className={`${styles.SpiritLabelImages} panel`}>
      <div className="container">
        <div className={`${styles.Flex} ${styles.Double}`}>
          <div>
            <Image src="/ravnica-1.jpg" alt="main-image" fill={true} />
          </div>
          <div>
            <Image src="/ravnica-2.jpg" alt="main-image" fill={true} />
          </div>
        </div>
        <div className={`${styles.Flex} ${styles.Triple}`}>
          <div>
            <Image src="/ravnica-3.jpg" alt="main-image" fill={true} />
          </div>
          <div>
            <Image src="/ravnica-4.jpg" alt="main-image" fill={true} />
          </div>
          <div>
            <Image src="/ravnica-5.jpg" alt="main-image" fill={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritLabelImages;
