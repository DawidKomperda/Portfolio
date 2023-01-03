import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style';
import { linkedinPng, email, phoneCall } from "../assets";
import { layout } from '../style';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h11q7br', 'template_xb3c5v8', form.current, 'rQ_h66vMOLa5TJgks')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className={`${styles.boxWidth} ${styles.marginY} ${styles.paddingY} border-y-4 border-accent rounded-2xl 
    xs:gap-x-6 ss:items-end ss:justify-center ss:grid-cols-2 md:mx-auto md:w-10/12 md:items-stretch xs:grid lg:grid-cols-3 bg-secondary
     `}>
      <div className={`flex flex-col justify-evenly md:w-full col-span-1 lg:col-span-1 ${styles.boxWidth} ${styles.flexStart}`}>
        {/* Phone contact section */}
        <div className={`${styles.mediaCard}`}>
          <div className={`${styles.smallImageBackground}`}>
            <img src={phoneCall} className={`${styles.smallImage}`} />
          </div>
          <div>
            <h3 className={`${styles.mediaTittle}`}>Call me</h3>
            <a href='tel:+00111222333' className={`${styles.mediaText}`}>+48 607 322 085</a>
          </div>
        </div>

        {/* Mail contact section */}
        <div className={`${styles.mediaCard}`}>
          <div className={`${styles.smallImageBackground}`}>
            <img src={email} className={`${styles.smallImage}`} />
          </div>
          <div>
            <h2 className={`${styles.mediaTittle}`}> Email me</h2>
            <a href='mailto:dawidkomperda2k@gmail.com?subject=portfolio' className={`${styles.mediaText}`}>dawidkomperda2k@gmail.com</a>
          </div>
        </div>

        {/* Linkedin contact section */}
        <div className={`${styles.mediaCard}`}>
          <div className={`${styles.smallImageBackground}`}>
            <img src={linkedinPng} className={`${styles.smallImage}`} />
          </div>
          <div>
            <h2 className={`${styles.mediaTittle}`}> Message me</h2>
            <a href='https://www.linkedin.com' className={`${styles.mediaText}`}> Linkedin/profile</a>
          </div>
        </div>
      </div>
      <div className={`${styles.flexStart} col-span-1 lg:col-span-2`}>
        <form ref={form} onSubmit={sendEmail}
          className={` [&>input]:text-black [&>input]:h-10 [&>input]:rounded-lg p-4 [&>*]:text-xl w-full 
          grid grid-cols-1 gap-x-4 gap-y-4 md:w-10/12 xl:max-w-[1280px] sm:grid-cols-2 `}>
          <input required type="text" name="user_name" placeholder='Name' className=' col-span-2 md:col-span-1' />
          <input required type="email" name="user_email" placeholder='Email' className=' col-span-2 md:col-span-1' />
          <textarea required name="message" placeholder='Message' className='resize overflow-auto text-black rounded-lg h-32 ss:h-[360px] sm:h-40 lg:h-72 w-full col-span-2 ' />
          <input type="submit" value="Send" id='Contact-Button' className='bg-blue-500 col-span-2 w-full' />
        </form>
      </div>
    </section>
  )
}

export default Contact