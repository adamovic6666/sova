"use client";
import React from "react";
import styles from "./ContentCreationImages.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const ContentCreationImages = () => {
  return (
    <div className={`${styles.ContentCreationImages} panel`}>
      <div className="container">
        <div className={styles.ContentCreationGridTop}>
          <div className={styles.VideoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/R6I0pg2wavI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} ${styles.CustomBullet}"></span>`;
                },
              }}
            >
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/sc-swiper-2.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/sc-swiper-3.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/sc-swiper-4.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/sc-swiper-1.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Image src={"/sc-3.jpg"} alt="drustvene-mreze" fill />
          </div>
          <div>
            <Image src={"/sc-4.jpg"} alt="drustvene-mreze" fill />
          </div>
        </div>
        <div className={styles.ContentCreationGridBottom}>
          <div>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{
                clickable: true,
                renderBullet: (_, className) => {
                  return `<span class="${className} ${styles.CustomBullet}"></span>`;
                },
              }}
            >
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/swiper-sc-6.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/swiper-sc-7.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/swiper-sc-8.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
              <SwiperSlide className={styles.SliderImage}>
                <Image src={"/swiper-sc-5.jpg"} alt="drustvene-mreze" fill />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Image src={"/sc-6.jpg"} alt="drustvene-mreze" fill />
          </div>
          <div>
            <Image src={"/sc-7.jpg"} alt="drustvene-mreze" fill />
          </div>
          <div>
            <Image src={"/sc-8.jpg"} alt="drustvene-mreze" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreationImages;
