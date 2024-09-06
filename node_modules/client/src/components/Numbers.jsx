import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function Number(props) {
  const { number, title } = props;
  const { ref, inView } = useInView({ triggerOnce: true }); 
  const [displayCount, setDisplayCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setDisplayCount(true);
      }, 100);
    }
  }, [inView]);

  return (
    <div className='flex flex-col gap-2 items-center justify-start z-50' ref={ref} style={{ alignSelf: 'baseline' }}>
      {displayCount ? (
        <div className='font-bold font-gilroy-extrabold text-beige xxs:text-5xl xs:text-7xl'>
          +<CountUp end={number} duration={5} />
        </div>
      ) : (
        <div className='font-bold font-gilroy-extrabold text-beige text-7xl'>+{number}</div>
      )}
      <div className='w-2/3 h-[3px] xxs:mt-0 xxs:mb-0 xs:mt-5 xs:mb-5 bg-beige'></div>
      <div className='text-light-blue font-proxima-nova-bold text-3xl max-w-[100%] text-center'>{title}</div>
    </div>
  );
}

function Numbers() {
  return (
    <section className='h-fit xxs:py-20 xs:p-20 bg-bd justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
      <Number number={18} title='Years of experience' />
      <Number number={80} title='Satisfied clients' />
      <Number number={48} title='Trainings and workshops' />
      <Number number={30} title='Collaborating companies' />
    </section>
  );
}

export default Numbers;
