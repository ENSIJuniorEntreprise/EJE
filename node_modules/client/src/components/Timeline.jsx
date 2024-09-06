import React, { useEffect, useState } from 'react';
import logoJET from "/assets/LOGO JE Tunisia.png";
import logoJET1 from "/assets/Copy of LOGO JE Tunisia Mini White.png";
import logo from "/assets/logo.png";
import award from "/assets/Vector.png";
import './Timeline.css';

const Timeline = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline-section');
      const timelinePosition = timelineSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (timelinePosition < windowHeight * 0.75) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="timeline-section" className='xxs:rounded-tr-[80px] md:flex-row flex flex-col h-fit bg-beige md:rounded-tr-[150px] xl:rounded-tr-[250px] pb-9 md:pb-0'>
      <div className={`mxxs:px-5 mmxs:px-10 mxms:px-16 xxs:pr-2 xxs:pl-2 xxs:pb-5 xxs:w-[100%] xxs:rounded-tr-[80px] xxs:bg-beige md:rounded-tr-[0px] md:bg-light-blue flex flex-col gap-8 md:pr-5 md:pl-5 md:w-[50%] xl:pr-20 xl:pl-20 xl:w-[40%]`}>
        <h1 className='xxs:mt-12 xxs:text-[2.5rem] text-dark-blue  flex flex-col gap-2 xxxs:text-5xl md:text-4xl xl:text-6xl  font-proxima-nova-bold font-bold md:mt-40 xl:mt-45' style={{ lineHeight: '1' }}>
          <span className='xxs:text-light-blue md:text-beige  font-proxima-nova-bold'>Our </span>Achievements
        </h1>
        <div className='w-[130px] h-[3px] bg-dark-blue'></div>
        <p className='xxs:text-dark-blue md:text-white w-full text-2xl font-medium font-proxima-nova opacity-100 font-proxima-nova-regular leading-normal xl:text-3xl'>
        In its pursuit of excellence, ENSI Junior Enterprise has achieved remarkable milestones over the years!
        </p>
      </div>

      <div className='xxs:p-1 mxms:pr-9 mxms:pl-9 sm:px-24 md:px-5 md:py-12 h-full w-full flex flex-col gap-2 justify-center items-center font-proxima-nova  xl:p-20'>
        
      <div className={`xxs:p-5 xxs:rounded-tr-[50px] md:rounded-tr-[150px] rounded-tr-full bg-dark-blue h-fit w-[90%] flex items-center gap-4 md:p-10 align-items-center ${animate ? 'slide-in-left' : ''}`}>
          <div className='xxs:w-[200px] w-[20%] flex justify-center'> 
            <img src={award} className='xxs:w-[100%]  md:w-[100%]' alt="Award"/>
          </div>
          <div className='w-[5px] h-[120px] bg-light-blue'></div>
          <div className='xxs:gap-0 xxs:w-[80%] flex flex-col xl:gap-3'> 
            <h1 className='text-light-blue font-bold text-3xl'>
              2020
            </h1>
            <p className='xxs:text-xl text-beige font-proxima-nova-regular xl:text-3xl'>Winning the award of excellence</p>
          </div>
        </div>

       

        <div className={`xxs:p-5 bg-dark-blue h-fit w-[90%] flex items-center gap-4 md:p-10 align-items-center ${animate ? 'slide-in-left1' : ''}`}>
          <div className='xxs:w-[200px] w-[20%] flex justify-center'>
            <img src={logo} className='xxs:w-[70%] md:w-[60%]' alt="Logo"/>
          </div>
          <div className='w-[5px] h-[120px] bg-light-blue'></div>

          <div className='xxs:gap-0 flex flex-col xl:gap-3 w-[80%]'> 
            <h1 className='text-light-blue font-bold text-3xl'>
              2012
            </h1>
            <p className='xxs:text-xl text-beige font-proxima-nova-regular xl:text-3xl'>Ascend to the status of an association</p>
          </div>
        </div>

        <div className={`xxs:p-5  bg-dark-blue h-fit w-[90%] flex items-center gap-5 md:p-10 align-items-center ${animate ? 'slide-in-left2' : ''}`}>
          <div className='xxs:w-[200px] w-[20%] flex justify-center'>
            <img src={logoJET1} className='xxs:w-[70%] md:w-[70%]' alt="Logo JET"/>
          </div>
          <div className='w-[5px] h-[120px] bg-light-blue'></div>

          <div className='xxs:gap-0 flex flex-col xl:gap-3 w-[80%]'> 
            <h1 className='text-light-blue font-bold text-3xl'>
              2011
            </h1>
            <p className='xxs:text-xl text-beige font-proxima-nova-regular xl:text-3xl'>Cofounding JET</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
