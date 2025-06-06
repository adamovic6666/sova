import Button from "../../ui/button/Button";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.NotFound} data-bg="dark">
      <div className="container">
        <h1>
          <span>Who</span>
          <span>ops!</span>
        </h1>
        <p>404-page not found! looks like you flew a little off course...</p>
        <Button href="/" type="link">
          Fly back home
        </Button>
      </div>

      <video className={styles.video} autoPlay muted loop preload="none">
        <source src="/404.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default NotFound;
