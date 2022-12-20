import styles from '../style';

const Projects = () => {
  return (
    <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <h1 className={`${styles.title} align-middle` }>My recent work</h1>
      <div className={`flex flex-wrap justify-center w-full`}>
        <img src = "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png" className={`${styles.card} ${styles.margin}`}/>
        <img src = "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png" className={`${styles.card} ${styles.margin}`}/>
        <img src = "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png" className={`${styles.card} ${styles.margin}`}/>
        <img src = "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png" className={`${styles.card} ${styles.margin}`}/>
        <img src = "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png" className={`${styles.card} ${styles.margin}`}/>
        <img src = "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png" className={`${styles.card} ${styles.margin}`}/>

      </div>
    </section>
  )
}

export default Projects