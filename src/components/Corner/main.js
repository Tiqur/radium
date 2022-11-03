import styles from './styles.module.scss';
import UserDefault from '../../assets/user-default.jpeg';

function Corner() {
  return (
    <div className={styles.container}>
      <div className={styles.profilePicture}>
        <img className={styles.profilePicture} height={35} src={UserDefault} alt='User Default'/>
      </div>
    </div>
  )
}

export default Corner;
