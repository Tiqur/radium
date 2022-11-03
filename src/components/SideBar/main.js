import styles from './styles.module.scss';
import Cursor from '../../assets/cursor.png';
import LineSegment from '../../assets/Segment.png';
import Ray from '../../assets/Ray.png';
import Extended from '../../assets/Extended.png';
import Trash from '../../assets/trash.png';
import PriceTime from '../../assets/price_time.png';
import { useState } from  'react';


function SideBar() {
  const [activeTool, setActiveTool] = useState(0);

  const tools = [
    {name: 'Cursor', icon: Cursor}, 
    {name: 'LineSegment', icon: LineSegment},
    {name: 'Ray', icon: Ray},
    {name: 'Extended', icon: Extended},
    {name: 'Measure', icon: PriceTime},
    {name: 'Trash', icon: Trash}
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
