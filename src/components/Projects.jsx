import styles, { layout } from '../style';

const Projects = () => {
  return (
    <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      My projects
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        <img src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className={styles.card}/>
        <img src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className={styles.card}/>
        <img src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className={styles.card}/>
        <img src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className={styles.card}/>
        <img src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className={styles.card}/>
        <img src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className={styles.card}/>
      </div>
    </section>
  )
}

export default Projects