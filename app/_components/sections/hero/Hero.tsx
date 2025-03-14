import Title from "../../title/Title";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.Hero} data-bg="dark">
      <div className="container">
        <Title tag="h1" flex="column" color="white">
          <span>We</span>
          <span>Make</span>
          <span>Your</span>
          <span>Brand</span>
          <span>Fly</span>
        </Title>
      </div>
      <video width="100dvw" height="100dvh" autoPlay muted loop preload="none">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
