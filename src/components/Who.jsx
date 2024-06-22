import React, { useEffect, useState } from 'react';
import Button from "../components/Button";
import pic from "/assets/EJE.jpg";
import { Link } from 'react-router-dom';
import "./Animation.css";

const Who = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whoSection = document.getElementById('who-section');
      const whoPosition = whoSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (whoPosition < windowHeight * 0.75) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="who-section" className='xxs:pt-20 xxs:pb-10 xsm:pb-16 xsm:px-32 md:px-0 md:py-10 md:pb-12 md:gap-24 h-fit w-full xl:px-12 py-30 grid grid-cols-1 justify-center items-center md:grid-cols-2 ddmd:gap-5 xl:p-32 xl:py-24'>
      <div className={`h-full relative md:pt-3  ${animate ? 'who-animation-left' : ''}`}>
        <div className="xxs:h-[70vw] xxs:w-[70vw] xxs:left-[10vw] xxs:top-[18vw] xs:w-[60vw] xs:h-[60vw] xs:left-[10vw] xs:top-[18vw] xsm:h-[45vw] xsm:w-[45vw] xsm:top-[10vw] xsm:left-[7vw] md:w-[40vw] md:h-[40vw] md:left-[3vw] md:top-[15vw] bg-[#2DA2DD] absolute inset-0 ddmd:w-[30vw] ddmd:h-[30vw] ddmd:top-[18vw] dlg:h-[25vw] dlg:w-[25vw] dlg:left-[3vw] dlg:top-[8.5vw]"></div>
        <img src={pic} className='xxs:w-[70vw] xs:w-[60vw] xsm:h-[45vw] xsm:w-[45vw] md:w-[40vw] md:mt-16 md:ml-[12%]  w-[55%] ml-[20%] mt-[10%] ddmd:w-[30vw] object-contain z-10 relative dlg:h-[25vw] dlg:w-[25vw]' alt='EJE' />
      </div>

      <div className={`xxs:p-5 xxs:mt-[30px] xs:p-10 xsm:p-0 xsm:pt-10 flex flex-col gap-7 xl:p-8  ${animate ? 'who-animation-right' : ''}`}>
        <h1 className='text-beige xxs:text-4xl  xs:text-5xl font-proxima-nova-bold font-bold xl:text-7xl'><span className='text-light-blue font-proxima-nova-bold'>Who</span> are we ?</h1>
        <div className='w-[100px] h-[3px] bg-light-blue'></div>
        <p className='w-full text-beige opacity-80 text-md md:text-md font-extralight font-proxima-nova-regular mb-2 mt-2 xl:w-3/4 xl:text-xl'>
          ENSI Junior Enterprise, affiliated with the National School of Computer Science (ENSI), is a student association dedicated to preparing its members for the professional world. <br></br>

          Established in 2006, ENSI Junior Enterprise has become a hub of expertise and innovation. Through a range of educational programs, technical projects, and engaging events, the association has consistently fostered skill development and facilitated growth.</p>
        <Link to="/About">
          <Button bc="border-beige" tc="text-beige" className="font-proxima-nova-bold hover:bg-beige hover:text-dark-blue">Learn more</Button>
        </Link>

      </div>
    </section>
  );
};

export default Who;
