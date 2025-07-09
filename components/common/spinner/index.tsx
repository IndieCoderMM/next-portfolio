import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <svg
      viewBox="0 0 240 240"
      height="240"
      width="240"
      className={`${styles.loader}`}
    >
      <circle
        strokeLinecap="round"
        strokeDashoffset="-330"
        strokeDasharray="0 660"
        strokeWidth="20"
        stroke="#000"
        fill="none"
        r="105"
        cy="120"
        cx="120"
        className={`${styles.loaderRing} ${styles.loaderRingA}`}
      ></circle>
      <circle
        strokeLinecap="round"
        strokeDashoffset="-110"
        strokeDasharray="0 220"
        strokeWidth="20"
        stroke="#000"
        fill="none"
        r="35"
        cy="120"
        cx="120"
        className={`${styles.loaderRing} ${styles.loaderRingB}`}
      ></circle>
      <circle
        strokeLinecap="round"
        strokeDasharray="0 440"
        strokeWidth="20"
        stroke="#000"
        fill="none"
        r="70"
        cy="120"
        cx="85"
        className={`${styles.loaderRing} ${styles.loaderRingC}`}
      ></circle>
      <circle
        strokeLinecap="round"
        strokeDasharray="0 440"
        strokeWidth="20"
        stroke="#000"
        fill="none"
        r="70"
        cy="120"
        cx="155"
        className={`${styles.loaderRing} ${styles.loaderRingD}`}
      ></circle>
    </svg>
  );
};

export default Spinner;
