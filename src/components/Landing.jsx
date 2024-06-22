import React from 'react';
import Button from "../components/Button";

export default function Landing() {
  return (
    <div className='font-Montserrat w-screen h-screen bg-no-repeat bg-cover bg-bottom flex flex-col items-center justify-center p-16 md:items-start lg:p-28'>
      <div className='font-bold text-beige text-[4em] text-center leading-tight md:text-left md:text-8xl lg:text-[7em] xl:text-[8em] xl:w-4/6 '><span className='text-light-blue'>ENSI</span> Junior Entreprise</div>
      <div className=' flex gap-4 mt-10 flex-col md:flex-row'>
        <Button bc='border-none'tc='text-dark-blue' bgc='bg-beige' className='group-hover:text-beige group-hover:border-beige group-hover:bg-transparent group-hover:cursor-pointer hover:ease-in'>Submit a request for proposal</Button>
        <Button bc='border-black' tc='text-white' bgc='bg-blue-400' className='group-hover:bg-beige group-hover:text-dark-blue '>Download our brochure </Button>
      </div>
    </div>

  )
}
