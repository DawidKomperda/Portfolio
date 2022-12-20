import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style'; 
import email from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import phoneImage from "../assets/phone-call.png";


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
    <section id='contact' className={`w-full ${styles.boxWidth}`}>
      <div className={`flex md:flex-row flex-col xl:max-w-[1280px] w-full ${styles.flexStart} `}>
      {/* Phone contact section */}
        <div className='flex flex-row p-5'>
          <div className={`${styles.smallImageBackground}`}>
            <img src={phoneImage} className={`${styles.smallImage} `}></img>
          </div>
            <div>
              <h3 className='pl-5 pb-2 text-4xl'>Call me</h3>
              <a href='tel:+00111222333' className='pl-5 pb-2 text-xl'>+00 111 222 333</a>
            </div>
        </div>
      {/* Mail contact section */}
        <div className='flex flex-row p-5'>
          <div className={`${styles.smallImageBackground}`}>
            <img src={email} className={`${styles.smallImage}`}></img>
          </div>
            <div>
              <h2 className='pl-5 pb-2 text-4xl'> Email me</h2>
              <a href='mailto:dawidkomperda2k@gmail.com?subject=portfolio' className='pl-5 pb-2 text-xl'>dawidkomperda2k@gmail.com</a>
            </div>
        </div>
      {/* Linkedin contact section */}
        <div className='flex flex-row p-5'>
          <div className={`${styles.smallImageBackground}`}>
            <img src={linkedin} className={`${styles.smallImage}`}></img>
          </div>
            <div>
              <h2 className='pl-5 pb-2 text-4xl'> Message me</h2>
              <a href='https://www.linkedin.com' className='pl-5 pb-2 text-xl'> Linkedin</a>
            </div>
        </div>

      </div>
      
      <div className={`${styles.flexStart}`}>
        <form ref={form} onSubmit={sendEmail}
        className={`[&>input]:text-black [&>input]:h-10 [&>input]:w-full [&>input]:rounded-lg p-5 [&>*]:text-xl
        xl:max-w-[1280px] w-8/12 grid grid-cols-2 gap-x-5 gap-y-5`}>
          <input required type="text" name="user_name" placeholder='Name'/>
          <input required type="email" name="user_email" placeholder='Email' />
          <textarea required name="message" placeholder='Message' className='resize overflow-auto text-black rounded-lg h-32 w-full col-span-2 ' />
          <input type="submit" value="Send" id='Contact-Button' className= 'bg-blue-500'/>
        </form>
      </div>
    </section>
  )
}

export default Contact