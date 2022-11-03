import styles from './styles.module.scss';
import { useState } from 'react';

function TopBar() {
  const [activeTimeframe, setActiveTimeframe] = useState('1m');
  const timeframes = ['1m', '3m', '15m', '1h', '4h', '1D', '1W'];

  function TimeframeButton(props) {
    function handleClick() {
      setActiveTimeframe(props.timeframe);
    }
    return <div style={{color: props.timeframe === activeTimeframe ? '#c64be2' : 'default'}}onClick={handleClick}>{props.timeframe}</div>
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.timeframesContainer}>
        {timeframes.map((el, i) => <TimeframeButton timeframe={el}/>)}
      </div>
    </div>
  )
}

export default TopBar;
