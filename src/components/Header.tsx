import styles from './Header.module.css'
import rocketIcon from '../assets/rocket.svg'

export function Header() {
  return (
    <div className={styles.header}>

      <div className={styles.headerContent}>

        <img src={rocketIcon} className={styles.headerIcon} alt='rocket icon' />
        <h1>
          <span className={styles.headerTitleColor1}>to</span>
          <span className={styles.headerTitleColor2}>do</span>
        </h1>

      </div>
    </div>
  )
}