import styles, {layout} from '../style';
import { projectsData } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className={`${styles.marginX}`} >
        <h4 className={`${styles.title} text-center text-accent` }>Portfolio</h4>
      <div className={`${styles.paddingY} ${styles.flexCenter} flex-col`} >
        <div className={`grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-3`}>
          {projectsData.map(({id,image,title,github,demo}) => {
            return (
              <div key={id} className={`${layout.cardHolder}`}>
                <div>
                  <a href={demo}>
                    <img src={image} alt={title} target="_blank" className={`${styles.card}`}/>
                  </a>
                </div>
                <h3 className="font-semibold text-white md:text-4xl text-2xl text-center p-3">{title}</h3>
                <div className='flex flex-row justify-between'>
                  <a href={github} target="_blank" className='text-2xl p-2 bg-accent rounded-[15px] text-secondary' >Github</a>
                  <a href={demo} target="_blank" className='text-2xl p-2 bg-secondary border border-accent rounded-[15px] text-accent'> Live Demo</a>
                </div>
              </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Projects