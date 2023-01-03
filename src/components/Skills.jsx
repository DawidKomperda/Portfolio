import React from 'react';
import { expertise } from '../constants';
import styles from '../style';
import { BsPatchCheckFill } from 'react-icons/bs';


const Skills = () => {
  return (
    <section id='skills' className='md:w-10/12 md:mx-auto' >
      <h5 className='text-center text-xl xs:text-2xl text-slate-200'>What I learned</h5>
      <h2 className={`${styles.title} text-center text-accent`}> My experience</h2>
      <div className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.flexStart} grid grid-cols-1 grid-rows-none gap-y-2 xs:gap-y-4 sm:grid-cols-3 `}>
          {expertise.map((expertise, index) => (
            <div key={expertise.title} className={`flex flex-col sm:h-full m-2 sm::m-4 ss:my-0 pb-4 items-center justify-start
              ${index === 2 ? "sm:border-r-2 border-accent sm:rounded-r-[2rem]" : ""}
              ${index === 1 ? "sm:border-x-2 border-accent sm:rounded-[2rem]" : ""}
              ${index === 0 ? "sm:border-l-2 border-accent sm:rounded-l-[2rem]" : ""}
              bg-secondary rounded-[2rem] md:pb-12 sm:hover:bg-transparent sm:transition ease-in-out delay-100 hover:cursor-default`
            }>
              <h4 className={` p-8 font-medium place-self-center text-2xl md:text-4xl text-accent sm:min-h-[160px] md:min-h-[185px] lg:min-h-[145px] xl:min-h-min `}>{expertise.title}</h4>
              <ul className={`list-none grid grid-cols-1 lg:grid-cols-2 gap-2 md:mr-12`}>
                {expertise.links.map((link) => (
                  <li key={link.Name} className={`${styles.marginX} font-normal text-lg
                    hover:underline decoration-accent flex flex-row gap-2`}>
                    <BsPatchCheckFill style={{ color: "#399ACE" }} className="min-h-[24px] min-w-[24px]" />
                    {link.Name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>

  )
}

export default Skills;