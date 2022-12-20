import React from 'react';
import { expertise } from '../constants';
import styles from '../style';

const Skills = () => {
  return (
    <section id='skills' className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY} w-full`}>
      <div className={`${styles.flexStart} flex-col ss:flex-row`}>
        {expertise.map((expertise) => (
          <div key={expertise.title} className='flex flex-col ss:my-0 my-4 min-w-[150px] p-2'>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-2xl text-white">{expertise.title}</h4>

            <ul className='list-none mt-4'>
              {expertise.links.map((link) => (
                <li key={link.Name}
                  className='font-poppins font-normal text-[16px] leading-[24px] text-lg text-dimWhite hover:underline decoration-cyan-500'
                >
                  {link.Name}
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;