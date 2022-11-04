import styles from './styles.module.scss';
import ArrowDown from '../../assets/arrow-down.png';
import Replay from '../../assets/replay.png';
import Undo from '../../assets/undo.png';
import Redo from '../../assets/redo.png';
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
        <div>
          <img src={ArrowDown} alt="Timeframe Selector"/>
        </div>
      </div>

      <div className={styles.seperator}/>

      <div className={styles.replayContainer}>
        <img src={Replay} alt="Replay"/>
        <p>Replay</p>
      </div>

      <div className={styles.seperator}/>

      <div className={styles.undoRedoContainer}>
        <div>
          <img src={Undo} alt="Undo"/>
        </div>
        <div>
          <img src={Redo} alt="Redo"/>
        </div>
      </div>

      <div className={styles.seperator}/>

    </div>
  )
}

export default TopBar;
