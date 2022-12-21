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
    <section id='contact' className={`${styles.boxWidth} ${styles.marginY} ${styles.paddingY} border-y-4 border-accent rounded-3xl 
    md:flex md:flex-col md:items-stretch ss:flex-row ss:justify-center ss:items-end xs:grid ss:grid-cols-2 xs:gap-x-6
     `}>
      <div className={`flex flex-col justify-evenly md:flex-row md:w-full ${styles.boxWidth} ${styles.flexStart}`}>
        {/* Phone contact section */}
        <div className='flex flex-col items-start sm:items-center p-5 sm:flex-row '>
          <div className={`${styles.smallImageBackground}`}>
            <img src={phoneCall} className={`${styles.smallImage} ml-3`} />
          </div>
          <div>
            <h3 className='pl-5 pb-2 text-4xl'>Call me</h3>
            <a href='tel:+00111222333' className='pl-5 pb-2 text-base ss:text-xl'>+00 111 222 333</a>
          </div>
        </div>

        {/* Mail contact section */}
        <div className='flex flex-col items-start sm:items-center p-5 sm:flex-row'>
          <div className={`${styles.smallImageBackground}`}>
            <img src={email} className={`${styles.smallImage} ml-3`} />
          </div>
          <div>
            <h2 className='pl-5 pb-2 text-4xl'> Email me</h2>
            <a href='mailto:dawidkomperda2k@gmail.com?subject=portfolio' className='pl-5 pb-2 text-base ss:text-xl'>dawidkomperda2k@gmail.com</a>
          </div>
        </div>

        {/* Linkedin contact section */}
        <div className='flex flex-col items-start sm:items-center p-5 sm:flex-row'>
          <div className={`${styles.smallImageBackground}`}>
            <img src={linkedinPng} className={`${styles.smallImage} ml-3`} />
          </div>
          <div>
            <h2 className='pl-5 pb-2 text-4xl'> Message me</h2>
            <a href='https://www.linkedin.com' className='pl-5 pb-2 text-base ss:text-xl'> Linkedin/profile</a>
          </div>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <form ref={form} onSubmit={sendEmail}
          className={` [&>input]:text-black [&>input]:h-10 [&>input]:rounded-lg p-5 [&>*]:text-xl w-full 
          grid grid-cols-1 gap-x-5 gap-y-5 md:w-10/12 xl:max-w-[1280px] sm:grid-cols-2 `}>
          <input required type="text" name="user_name" placeholder='Name' className=' col-span-2 md:col-span-1' />
          <input required type="email" name="user_email" placeholder='Email' className=' col-span-2 md:col-span-1' />
          <textarea required name="message" placeholder='Message' className='resize overflow-auto text-black rounded-lg h-96 sm:h-32 w-full col-span-2 ' />
          <input type="submit" value="Send" id='Contact-Button' className='bg-blue-500 col-span-2 w-full' />

        </form>
      </div>
    </section>
  )
}

export default Contact