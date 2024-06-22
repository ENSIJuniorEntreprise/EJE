import React, { useState } from 'react';
import logo from '/assets/logo.png';

function Footer() {
  const [showFinancialReports, setShowFinancialReports] = useState(false);

  const toggleFinancialReports = () => {
    setShowFinancialReports(!showFinancialReports);
  };

  return (
    <footer className="bg-[#1F2029]">
      <div className="mxs:px-[10%] sm:px-[2%] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="dmd:flex justify-start dlg:gap-5 xl:gap-[10%] lg:justify-center">
          <div className="mb-6 dmd:mb-0 dmd:text-center">
            <a href="#" className="dmd:flex dmd:flex-col dmd:items-center xl:ml-[15%]">
              <img src={logo} className="xxs:w-[50%] xxs:ml-[25%] xxs:mb-0  xxxs:w-[40%] xxxs:ml-[30%] mmxs:w-[30%] mmxs:ml-[35%] mxs:w-[30%] mxs:ml-[35%] sm:w-[25%] sm:ml-[37.5%] sm:px-[2%] md:w-[20%] md:ml-[40%]  dmd:w-[13vw]  dmd:mx-[0%] mb-4       ml-0 " alt="EJE" />
              <br />
              <p className="xxs:text-center font-photograph-signature text-[#F1EFE2] xxxs:text-3xl mxs:text-4xl font-brush text-2xl dmd:text-center dmd:text-3xl text-left sm:text-center whitespace-nowrap">#Always_Striving-For-Greatness</p>
            </a>
          </div>
          <div className="grid inset-x-0 grid-cols-1 gap-8 sm:gap-2 sm:grid-cols-3 text-left sm:text-center ">
            <div className='sm:pr-4'>
              <h2 className="mb-6 text-xl hover:text-[#2DA2DD] font-photograph text-[#2DA2DD] uppercase flex-start">Pages</h2>
              <ul className="text-gray-500 font-medium flex-start grid grid-cols-2 sm:grid-cols-1">
                <li>
                  <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph  text-xl hover:text-[#2DA2DD]">Home</a>
                </li>
                <li>
                  <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph  text-xl hover:text-[#2DA2DD]">About us</a>
                </li>
                <li>
                  <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">News</a>
                </li>
                <li>
                  <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Services</a>
                </li>
                <li>
                  <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Events</a>
                </li>
                <li>
                  <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Contact</a>
                </li>
              </ul>
            </div>
            <div className='sm:pr-10'>
              <h2 className="mb-6 hover:text-[#2DA2DD] font-photograph text-[#2DA2DD] uppercase text-xl" >Legally</h2>
              
                <ul className="text-gray-500 font-photograph grid grid-cols-2 sm:grid-cols-1">
                <li>
                    <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Legal Mention</a>
                  </li>
                  <li>
                    <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD]">Status</a>
                  </li>
                  <li>
                    <a href="#" className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD] ">Moral Report</a>
                  </li>
                  <li>
                    <a className="sm:text-base lg:text-xl hover:underline text-[#F1EFE2] font-photograph text-xl hover:text-[#2DA2DD] whitespace-nowrap" onClick={toggleFinancialReports}>Financial report</a>
                    {showFinancialReports && (<ul type="circle" className='text-[#F1EFE2]'>
                      <li className='sm:text-base text-[#F1EFE2] font-photograph text-xl lg:text-xl hover:text-[#2DA2DD]'> 2023-2024</li>
                      <li className='sm:text-base text-[#F1EFE2] font-photograph text-xl lg:text-xl hover:text-[#2DA2DD]'> 2022-2023</li>
                      <li className='sm:text-base text-[#F1EFE2] font-photograph text-xl lg:text-xl hover:text-[#2DA2DD]'> 2021-2022</li>
                    </ul>)}
                  </li>
                </ul>
              
            </div>
            <div className='sm:pr-12'>
              <h2 className="mb-6 text-xl hover:text-[#2DA2DD]  text-[#2DA2DD] uppercase font-photograph">Contact</h2>
              <ul className="text-gray-500  font-medium">
                <li>
                  <a href="#" className="hover:underline text-[#F1EFE2] font-photograph text-xl dlg:text-xl sm:text-base">contact.junior.ensi@gmail.tn</a>
                </li>
                <li>
                  <a href="#" className="sm:text-base hover:underline text-[#F1EFE2] lg:text-xl font-photograph text-xl ">+216 12 345 678</a>
                </li>
                <li className='mt-4'>
                  <div className="flex sm:justify-center justify-start gap-6 ">
                    <a className="text-[#1F2029] " aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 bg-[#2DA2DD] rounded">
                        <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                    <a className="text-[#1F2029] " aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-7 w-7 bg-[#2DA2DD] rounded">
                        <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                    <a className="text-[#1F2029] " aria-label="Visit TrendyMinds Instagram" href="" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-7 w-7 bg-[#2DA2DD] rounded">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="xxs:mt-6 xxs:mb-3 border-t-2 border-b-2 border-[#2DA2DD] w-full lg:my-9 lg:w-full" />

        {/* Centered Text */}
        <div className="sm:flex sm:items-center sm:justify-center dmd:ml-7">
          <span className="text-xl hover:text-[#2DA2DD] text-gray-500 sm:text-center text-[#F1EFE2]">
             © All Rights Reserved ENSI JE 2023
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
