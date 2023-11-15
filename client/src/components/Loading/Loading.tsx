import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
