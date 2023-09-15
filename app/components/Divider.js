import styles from './Divider.module.css';

const Divider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cloud} style={{ left: '-40px' }}></div>
      <div className={styles.cloud} style={{ left: '150px' }}></div>
      <div className={styles.cloud} style={{ left: '300px' }}></div>
      <div className={styles.cloud} style={{ left: '450px' }}></div>
      <div className={styles.cloud} style={{ left: '600px' }}></div>
      <div className={styles.cloud} style={{ left: '750px' }}></div>
      <div className={styles.cloud} style={{ left: '900px' }}></div>
      <div className={styles.cloud} style={{ left: '1050px' }}></div>
      <div className={styles.cloud} style={{ left: '1200px' }}></div>
    </div>
  );
};

export default Divider;
