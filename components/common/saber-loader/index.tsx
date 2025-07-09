import styles from "./style.module.css";

const SaberLoader = () => {
  return (
    <div className={`${styles.loader}`}>
      <div className={`${styles.lsParts} ${styles.lsPart1}`}></div>
      <div className={`${styles.lsParts} ${styles.lsPart2}`}></div>
      <div className={`${styles.lsParts} ${styles.lsPart3}`}></div>
      <div className={`${styles.lsParts} ${styles.lsPart4}`}></div>
      <div className={`${styles.lsParts} ${styles.lsPart5}`}></div>
      <div
        className={`${styles.lightsaber} ${styles.lsLeft} ${styles.lsGreen}`}
      ></div>
      <div
        className={`${styles.lightsaber} ${styles.lsRight} ${styles.lsRed}`}
      ></div>
    </div>
  );
};

export default SaberLoader;
