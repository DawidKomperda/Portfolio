import React from 'react';
import { expertise } from '../constants';
import styles from '../style';

const Skills = () => {
  return (
    <section id='skills' className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY} w-full`}>
      <div>
        <div className={`${styles.flexStart} flex-col w-screen h-100% ss:h-[50vh] ss:flex-row`}>
          {expertise.map((expertise, index) => (
            <div key={expertise.title} className={`flex flex-col h-full my-4 p-2 ss:my-0 
            ${index === 2 ? "ss:border-r-2 border-accent rounded-lg":""}
            ${index === 1 ? "ss:border-x-2 border-accent rounded-lg":""}
            ${index === 0 ? "ss:border-l-2 border-accent rounded-lg":""}`
            }>
              <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-2xl p-3 text-white`}>{expertise.title}</h4>
              <ul className={`list-none mt-4 p-3 `}>
                {expertise.links.map((link) => (
                  <li key={link.Name}
                    className='font-poppins font-normal text-[16px] leading-[24px] text-lg text-dimWhite hover:underline decoration-accent'
                  >
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