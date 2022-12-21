import React from 'react';
import { expertise } from '../constants';
import styles from '../style';
import {BsPatchCheckFill} from 'react-icons/bs';


const Skills = () => {
  return (
    <section id='skills' >
      <h5 className='text-center text-2xl text-dimWhite'>What I learned</h5>
      <h2 className='text-center text-6xl text-accent'> My experience</h2>
      <div className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY}`}>
        <div className={`${styles.flexStart}   grid grid-cols-1  auto-rows-auto gap-y-8 sm:grid-cols-3`}>
          {expertise.map((expertise, index) => (
            <div key={expertise.title} className={`flex flex-col sm:h-full m-4 ss:my-0 pb-8 items-start sm:items-center md:items-start 
              ${index === 2 ? "sm:border-r-2 border-accent sm:rounded-r-[2rem]" : ""}
              ${index === 1 ? "sm:border-x-2 border-accent sm:rounded-[2rem]" : ""}
              ${index === 0 ? "sm:border-l-2 border-accent sm:rounded-l-[2rem]" : ""}
              bg-secondary  rounded-[2rem]  md:pt-5 md:pb-20 hover:bg-transparent transition ease-in-out delay-100 hover:cursor-default mb:rounded-[0.5rem]`
            }>
              <h4 className={`${styles.padding} font-medium text-3xl zl:text-4xl leading-[25px] text-accent `}>{expertise.title}</h4>
              <ul className={`list-none grid grid-cols-1 lg:grid-cols-2 gap-3 items-start`}>
                {expertise.links.map((link) => (
                  <li key={link.Name} className={`${styles.marginX} item font-normal text-xl lg:text-xl leading-[24px]
                   text-dimWhite hover:underline decoration-accent flex gap-2 `}>
                    <BsPatchCheckFill style={{color: "#399ACE"}} className="min-h-[24px] min-w-[24px]"/>
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