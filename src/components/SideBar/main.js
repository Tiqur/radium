import styles from './styles.module.scss';
import Cursor from '../../assets/cursor.png';
import Box from '../../assets/box.png';
import Draw from '../../assets/draw.png';
import HorizontalRay from '../../assets/horizontal-ray.png';
import LockDrawingTools from '../../assets/lock-dawing-tools.png';
import LockDrawings from '../../assets/lock-drawings.png';
import Magnet from '../../assets/magnet.png';
import Options from '../../assets/options.png';
import ExtendedLine from '../../assets/extended-line.png';
import Ray from '../../assets/ray.png';
import Replay from '../../assets/replay.png';
import Segment from '../../assets/segment.png';
import Trash from '../../assets/trash.png';
import Triangle from '../../assets/triangle.png';
import VerticalLine from '../../assets/vertical-line.png';
import Undo from '../../assets/undo.png';
import Redo from '../../assets/redo.png';
import Notes from '../../assets/notes.png';
import Measure from '../../assets/measure.png';
import Screenshot from '../../assets/screenshot.png';
import Text from '../../assets/text.png';
import { useState } from  'react';


function SideBar() {
  const [activeTool, setActiveTool] = useState(0);

  const tools = [
    {name: 'Cursor', icon: Cursor}, 
    {name: 'Box', icon: Box},
    {name: 'Draw', icon: Draw},
    {name: 'Horizontal Ray', icon: HorizontalRay},
    {name: 'Lock Drawing Tools', icon: LockDrawingTools},
    {name: 'Lock Drawings', icon: LockDrawings},
    {name: 'Magnet', icon: Magnet},
    {name: 'Options', icon: Options},
    {name: 'Extended Line', icon: ExtendedLine},
    {name: 'Ray', icon: Ray},
    {name: 'Replay', icon: Replay},
    {name: 'Segment', icon: Segment},
    {name: 'Trash', icon: Trash},
    {name: 'Triangle', icon: Triangle},
    {name: 'Vertical Line', icon: VerticalLine},
    {name: 'Undo', icon: Undo},
    {name: 'Redo', icon: Redo},
    {name: 'Notes', icon: Notes},
    {name: 'Measure', icon: Measure},
    {name: 'Screenshot', icon: Screenshot},
    {name: 'Text', icon: Text},
  ];

  function ToolButton(props) {
    function handleClick() {
      setActiveTool(props.index);
    }

    return (
      <div className={props.index === activeTool ? styles.activeButton : styles.button} onClick={handleClick}>
        <img src={props.image} alt={props.name}/>
      </div>
    )
  }

  return (
    <div className={styles.sideBar}>
      {tools.map((el, i)=>{
           return <ToolButton index={i} name={el.name} image={el.icon}/>
       })}
    </div>
  )
}

export default SideBar;
