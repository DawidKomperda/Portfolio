import styles from '../style';

const Projects = () => {
  return (
    <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <h1 className='text-5xl'>My recent work</h1>
      <div className="flex flex-wrap justify-center w-full ">
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