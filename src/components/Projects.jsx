import styles from '../style';
import {web} from '../assets';
const Projects = () => {
  return (
    <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative  `}>
      <h1 className={`${styles.title} align-middle` }>My recent work</h1>
      <div className={`flex flex-wrap justify-center w-ful`}>
        <a href='http://dawidkomperdaproject1.online'>
        <img src = {web} className={`${styles.card} ${styles.margin}`}/>
        </a>
        <a href='http://dawidkomperdaproject1.online'>
        <img src = {web} className={`${styles.card} ${styles.margin}`}/>
        </a>
        <a href='http://dawidkomperdaproject1.online'>
        <img src = {web} className={`${styles.card} ${styles.margin}`}/>
        </a>
        <a href='http://dawidkomperdaproject1.online'>
        <img src = {web} className={`${styles.card} ${styles.margin}`}/>
        </a>
        <a href='http://dawidkomperdaproject1.online'>
        <img src = {web} className={`${styles.card} ${styles.margin} xs:block hidden`}/>
        </a>
        <a href='http://dawidkomperdaproject1.online'>
        <img src = {web} className={`${styles.card} ${styles.margin} xs:block hidden`}/>
        </a>
      </div>
    </section>
  )
}

export default Projects