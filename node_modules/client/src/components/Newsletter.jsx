import React from 'react';
import equipe from '/assets/team.png';

function Newsletter() {
  return (
    <div className="relative">
      <img src={equipe} alt="Background" className="xxs:h-60 mmmxs:h-70 md:h-75 w-full lg:h-[250px] dxl:h-[300px] object-cover" />
      <div className="xxs:p-3 xxs:pt-9 xxxs:pt-[60px] xs:px-5 dxl:pt-[90px] absolute inset-0 bg-[#1f2029] bg-opacity-[0.7] p-20">
        <h1 className="  text-beige font-bold tracking-wider text-3xl md:text-4xl sm:text-3xl dxl:text-4xl text-center">Subscribe to our Newsletter!</h1>
        <div className="mmxs:px-10  mxs:px-20  sm:px-30 lg:px-40 xl:px-[250px] dxl:px-[300px]  mb-2 mt-8 inset-0 flex xxs:flex xxs:justify-center xxs:items-center">
          <input
            type="search"
            className="xxs:h-11 xs:h-10 mmmxs:h-12 p-2 text-sm h-16 bg-[#F1EFE2] rounded-l border border-solid flex items-center justify-center w-4/6 md:w-3/6"
            aria-describedby="button-addon3"
            placeholder='Enter your Email address...'
            style={{ opacity: 0.8 }} 
          />
          <button
            className="xxs:h-11 xs:h-10 mmmxs:h-12  rounded-tr-[25px] h-16 bg-[#1F2029] text-beige px-6 py-2 xxs:text-md md:text-xl font-semibold  md:w-1/6 w-2/6"
            type="button"
            id="button-addon3"
            style={{ opacity: 0.95 }} 
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
