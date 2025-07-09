import styles from "./styles.module.css";

const BlackholeLoader = () => {
  return (
    <div className={`${styles.loader}`}>
      <div className={`${styles.blackhole}`}>
        <div className={`${styles.blackholeCircle}`}></div>
        <div className={`${styles.blackholeDisc}`}></div>
      </div>

      <div className={`${styles.curve}`}>
        <svg viewBox="0 0 500 500">
          <path
            id="loading"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          ></path>
          <text width="500">
            <textPath xlinkHref="#loading">loading...</textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default BlackholeLoader;
