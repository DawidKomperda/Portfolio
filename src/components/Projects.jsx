import styles, {layout} from '../style';
import { projectsData } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className={`${styles.paddingY} md:w-10/12 md:mx-auto`} >
        <h4 className={`${styles.title} text-center text-accent` }>Portfolio</h4>
      <div className={`sm:pt-16 pt-6 ${styles.flexCenter} flex-col`} >
        <div className={`grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-3`}>
          {projectsData.slice(0,6).map((data) => {
            return (
              <div key={data.id} className={`${layout.cardHolder} grid grid-cols-2`}>
                <h2 className=' col-span-2 text-center text-base xs:text-xl w-full font-semibold text-secondary bg-accent rounded-t-2xl'>{data.technology}</h2>
                <a href={data.demo} className="col-span-2 "> <img src={data.image} alt={data.title} target="_blank" className={`${styles.card} object-fit`}/> </a>
                <h3 className="font-semibold text-white text-xs ml:text-base ss:text-xl xs:text-2xl md:text-4xl text-center p-2 col-span-2">{data.title}</h3>
                <div className='flex justify-between col-span-2'>
                  <a href={data.github} target="_blank" className='text-[10px] ml:text-lg ss:text-2xl px-2 bg-accent rounded-xl text-secondary'>Github</a>
                  <a href={data.demo} target="_blank" className=' text-[10px] ml:text-lg ss:text-2xl px-2 bg-secondary border border-accent rounded-xl text-accent'> Live Demo</a>
                </div>
              </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Projects
