import { socialMedia } from '../constants';
import styles from '../style';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.boxWidth}`}>
      <div className='w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[white]'>
        <p className='font-poppins font-normal text-center text-lg text-white'>
          2022 Designed by Dawid Komperda ©
        </p>
        <div className=' flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer