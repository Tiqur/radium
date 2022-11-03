import styles from './styles.module.scss';

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.timeframesContainer}>
        <div>1m</div>
        <div>3m</div>
        <div>5m</div>
        <div>15m</div>
        <div>1h</div>
        <div>4h</div>
        <div>1D</div>
        <div>1W</div>
      </div>
    </div>
  )
}

export default TopBar;
