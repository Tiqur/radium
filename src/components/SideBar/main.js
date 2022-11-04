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
import Segment from '../../assets/segment.png';
import Trash from '../../assets/trash.png';
import Triangle from '../../assets/triangle.png';
import VerticalLine from '../../assets/vertical-line.png';
import Notes from '../../assets/notes.png';
import Measure from '../../assets/measure.png';
import Screenshot from '../../assets/screenshot.png';
import Text from '../../assets/text.png';
import { useState } from  'react';


function SideBar() {
  const [activeTool, setActiveTool] = useState(0);

  const drawingTools = [
    {name: 'Cursor', icon: Cursor}, 
    {name: 'Ray', icon: Ray},
    {name: 'Horizontal Ray', icon: HorizontalRay},
    {name: 'Segment', icon: Segment},
    {name: 'Extended Line', icon: ExtendedLine},
    {name: 'Vertical Line', icon: VerticalLine},
    {name: 'Text', icon: Text},
    {name: 'Box', icon: Box},
    {name: 'Triangle', icon: Triangle},
    {name: 'Draw', icon: Draw},
  ];

  const moreTools = [
    {name: 'Options', icon: Options},
    {name: 'Magnet', icon: Magnet},
    {name: 'Measure', icon: Measure},
    {name: 'Notes', icon: Notes},
    {name: 'Lock Drawing Tools', icon: LockDrawingTools},
    {name: 'Lock Drawings', icon: LockDrawings},
    {name: 'Screenshot', icon: Screenshot},
    {name: 'Trash', icon: Trash},
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
      {drawingTools.map((el, i)=>{
           return <ToolButton index={i} name={el.name} image={el.icon}/>
      })}

      <div className={styles.seperator}/>

      {moreTools.map((el, i)=>{
           return <ToolButton index={i+drawingTools.length} name={el.name} image={el.icon}/>
      })}
    </div>
  )
}

export default SideBar;
