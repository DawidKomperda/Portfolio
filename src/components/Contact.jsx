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
    <section id='contact' className={`${styles.boxWidth} ${styles.marginY} ${styles.paddingY} flex flex-col ss:flex-row md:flex-col ss:justify-center ss:items-end md:items-stretch  border-4 border-accent rounded-3xl `}>
      <div className={`flex flex-col items-start md:flex-row md:w-full  xl:max-w-[1280px]  ${styles.flexStart}`}>
        {/* Phone contact section */}
        <div className='flex flex-col items-start xs:items-center p-5 xs:flex-row '>
          <div className={`${styles.smallImageBackground}`}>
            <img src={phoneCall} className={`${styles.smallImage} ml-3`} />
          </div>
          <div>
            <h3 className='pl-5 pb-2 text-4xl'>Call me</h3>
            <a href='tel:+00111222333' className='pl-5 pb-2 text-base ss:text-xl'>+00 111 222 333</a>
          </div>
        </div>

        {/* Mail contact section */}
        <div className='flex flex-col items-start xs:items-center p-5 xs:flex-row'>
          <div className={`${styles.smallImageBackground}`}>
            <img src={email} className={`${styles.smallImage} ml-3`} />
          </div>
          <div>
            <h2 className='pl-5 pb-2 text-4xl'> Email me</h2>
            <a href='mailto:dawidkomperda2k@gmail.com?subject=portfolio' className='pl-5 pb-2 text-base ss:text-xl'>dawidkomperda2k@gmail.com</a>
          </div>
        </div>

        {/* Linkedin contact section */}
        <div className='flex flex-col items-start xs:items-center p-5 xs:flex-row'>
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
          className={` [&>input]:text-black [&>input]:h-10 w-full    [&>input]:rounded-lg p-5 [&>*]:text-xl
         grid grid-cols-2 gap-x-5 gap-y-5 md:[&>input]:w-full md:w-8/12 xl:max-w-[1280px]`}>
          <input required type="text" name="user_name" placeholder='Name' />
          <input required type="email" name="user_email" placeholder='Email' />
          <textarea required name="message" placeholder='Message' className='resize overflow-auto text-black rounded-lg h-32 w-full col-span-2 ' />
          <input type="submit" value="Send" id='Contact-Button' className='bg-blue-500 col-span-2 w-full' />

        </form>
      </div>
    </section>
  )
}

export default Contact