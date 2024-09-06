import React, { useState } from 'react';
import axios from 'axios';
import Rectangle from '/assets/entreprise.png';
import { BaseUrlContact } from './../../api/axios'; 


const Contact = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    Subject: '',
    Service: '',
    Message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BaseUrl}/send-email`,
        formData
      );
      console.log('Form submission successful:', response.data);
      // Add any success handling logic here (e.g., show success message)
    } catch (error) {
      console.error('Form submission error:', error);
      // Add error handling logic (e.g., show error message)
    }
  };
  return (
    <div>
      <section className="flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Rectangle})` }}>
        <div
          className="w-[100%] h-[100%]  pt-44 md:pb-24 xxs:pb-12 flex flex-col  items-center justify-center"
          style={{ backgroundColor: "rgba(31, 32, 41, 0.7)" }}
        >
          <div
            className="border p-[1%] pl-4 pr-4 dlg:pr-[3%] dlg:pl-[3%] md:w-[600px] xxs:w-[90vw] mmmxs:w-[80vw] h-28 flex flex-col items-center justify-center"
            style={{
              backgroundColor: "rgba(31, 32, 41, 0.8)",
              borderColor: "#2DA2DD",
              borderWidth: "4px",
              zIndex: 1,
              whiteSpace: "pre-line",
            }}
          >
            <span
              className="md:text-[55px] font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl text-center"
              style={{ color: "#E0DED2" }}
            >
              Get in touch {' '}
            <span
              className="md:text-[55px] font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl text-center"
              style={{ color: "#2DA2DD" }}
            >
              with us&nbsp;!
            </span>
            </span>

          </div>
           
          <div className='flex md:mt-24 xxs:mt-16 xxs:flex-col-reverse md:flex-row items-center justify-center md:gap-[3%] xxs:gap-16 mmxs:w-[90%] mxs:w-[80%] md:w-full'>
            {/* left */}
            <div className='md:w-[43%] xxs:w-[100%] xxs:p-5 md:p-0'>
              <div className=' flex flex-col items-start md:w-[78%] xxs:w-[100%] gap-3 '>
                <h1 className='font-proxima-nova font-semibold md:text-5xl xxs:text-3xl text-beige tracking-wide	'>Contact Us</h1>
                <div className='md:w-[250px] xxs:w-[160px] bg-light-blue h-1'></div>
                <p className='font-proxima-nova md:text-2xl xxs:text-xl text-beige text-start '>We are happy to answer your questions. Fill out the form
                  and we will be in touch as soon as possible.</p>
              </div>

              <div className='md:mt-28 xxs:mt-16 flex flex-col items-start md:w-[80%] xxs:w-[100%]  gap-3'>
                <h1 className='font-proxima-nova font-semibold md:text-5xl xxs:text-3xl text-beige tracking-wide	'>Stay Social!</h1>
                <div className='md:w-[250px] xxs:w-[160px] bg-light-blue h-1'></div>
                <p className='font-proxima-nova md:text-2xl xxs:text-xl text-beige text-start '>Follow us on social media and keep updated about the global Network</p>
                <div className="flex justify-start md:gap-12 xxs:gap-3 items-center mt-3">
                  <a className="text-[#1F2029] " aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="md:h-12 md:w-12 xxs:h-10 xxs:w-10 bg-beige rounded-lg p-1">
                      <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                  <a className="text-[#1F2029] " aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="md:h-12 md:w-12 xxs:h-10 xxs:w-10 bg-beige rounded-lg p-[0.4rem]">
                      <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </a>
                  <a className="text-[#1F2029] " aria-label="Visit TrendyMinds Instagram" href="" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="md:h-12 md:w-12 xxs:h-10 xxs:w-10 bg-beige rounded-lg ">
                      <path className="text-4xl" fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* right */}
            <div className=' lg:w-[35%] xxs:w-[88%] md:w-[45%]'>
            <form className="space-y-7 w-full md:p-10 xxs:px-4 xxs:py-5 bg-beige  opacity-90" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Full name</label>
        <input type="text" id="name" name="FullName"  onChange={handleChange} className="mt-1 w-full shadow-sm sm:text-md border-light-blue border-solid border-[2px] h-9 font-proxima-nova-regular focus:border-light-blue pl-1 text-dark-blue" placeholder='Enter your full name'/>
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Email address</label>
        <input type="email" id="email" name="Email"  onChange={handleChange} className="mt-1 w-full shadow-sm sm:text-md border-light-blue border-solid border-[2px] font-proxima-nova-regular h-9 focus:border-light-blue pl-1 text-dark-blue" placeholder='Enter your email address'></input>
      </div>
      <div>
        <label htmlFor="subject" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Subject</label>
        <input type="subject" id="subject" name="Subject"  onChange={handleChange} className="mt-1 w-full shadow-sm sm:text-md border-light-blue border-solid border-[2px] font-proxima-nova-regular h-9 focus:border-light-blue pl-1 text-dark-blue" placeholder='Subject'></input>
      </div>
      <div>
        <label htmlFor="service" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular"> Select a service (Optional) </label>
        <select id="service" name="Service"  onChange={handleChange} className="mt-1 w-full shadow-sm sm:text-md border-light-blue border-solid border-[2px] h-9 font-proxima-nova-regular  focus:border-light-blue pl-1 text-dark-blue">
          <option value="">Select a service</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Application">Mobile Application</option>
          <option value="Destop Application">Destop Application</option>
          <option value="Chatbot Agent">Chatbot Agent</option>
          <option value="Collaboration">Collaboration</option>

        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Your message</label>
        <textarea id="message" name="Message" rows="4"  onChange={handleChange} className="mt-1 w-full shadow-sm sm:text-md border-light-blue border-solid border-[2px] focus:border-light-blue font-proxima-nova-regular pl-1 pt-1 text-dark-blue" placeholder='Enter your message here...'></textarea>
      </div>
      <button type="submit" className="mt-1 shadow-sm sm:text-xl py-3 font-proxima-nova-bold text-light-blue w-full border-light-blue border-solid border-[2.5px] hover:text-beige hover:bg-light-blue focus:border-light-blue">
        Contact Us
      </button>
    </form>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}

export default Contact;

{/* <div className="xxs:h-[700px] xxs:w-[70vw] xxs:left-[10vw] xxs:top-[18vw] xs:w-[60vw] xs:h-[60vw] xs:left-[10vw] xs:top-[18vw] xsm:h-[45vw] xsm:w-[45vw] xsm:top-[10vw] xsm:left-[7vw] md:w-[40vw] md:h-[40vw] md:left-[3vw] md:top-[15vw] bg-[#2DA2DD]  inset-0 ddmd:w-[30vw] ddmd:h-[30vw] ddmd:top-[18vw] dlg:h-[700px] dlg:w-[600px]  dlg:mt-[100px]"></div> */ }

{/* <div className='flex w-[90%] ml-[3%] m h-[870px] items-center gap-[7%] mt-[380px]'>

<div className='w-[60%] flex flex-col items-center justify-center mt-[380px]'>
  <div className=' flex flex-col items-center w-[60%] ml-[10%]'>
    <h1 className='font-proxima-nova-bold text-6xl text-beige'>Contact Us</h1>
    <p className='font-proxima-nova text-2xl text-beige text-center'>We are happy to answer your questions. Fill out the form
      and we will be in touch as soon as possible.</p>
  </div>
  <div className="  bg-[#2DA2DD]  inset-0  h-[700px] w-[600px]  mt-[100px]"></div>
  <div className=" bg-beige z-50 h-[700px] w-[600px] relative left-[5%] top-[-740px] p-10">
    <form className="space-y-7 w-[90%] ml-[5%]">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Name</label>
        <input type="text" id="name" name="name" className="mt-1 w-full shadow-sm sm:text-xl border-light-blue border-solid border-[2px] h-9 focus:border-light-blue"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Email address</label>
        <input type="email" id="email" name="email" className="mt-1 w-full shadow-sm sm:text-xl border-light-blue border-solid border-[2px] h-9 focus:border-light-blue"></input>
      </div>
      <div>
        <label htmlFor="subject" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Subject</label>
        <input type="subject" id="subject" name="subject" className="mt-1 w-full shadow-sm sm:text-xl border-light-blue border-solid border-[2px] h-9 focus:border-light-blue"></input>
      </div>
      <div>
        <label htmlFor="service" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular"> Select a service (optional) </label>
        <select id="service" name="service" className="mt-1 w-full shadow-sm sm:text-lg border-light-blue border-solid border-[2px] h-9 font-proxima-nova-regular  focus:border-light-blue p-1">
          <option value="option1"></option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-medium text-dark-blue font-proxima-nova-regular">Your message</label>
        <textarea id="message" name="message" rows="4" className="mt-1 w-full shadow-sm sm:text-xl border-light-blue border-solid border-[2px] focus:border-light-blue"></textarea>
      </div>
      <button type="submit" className="mt-1 shadow-sm sm:text-xl py-3 font-proxima-nova-bold text-light-blue w-full border-light-blue border-solid border-[2px] focus:border-light-blue">
        Contact Us
      </button>
    </form>
  </div>
</div>

<div className='w-[30%]'>
  <div className='font-proxima-nova-bold text-6xl text-beige'>Stay Social!</div>
  <p className='font-proxima-nova text-2xl text-beige '>Follow us on social media and keep updated about the global
    Network</p>
  <div className="flex justify-start gap-6 items-center mt-3">
    <a className="text-[#1F2029] " aria-label="Visit TrendyMinds LinkedIn" href="" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-10 w-10 bg-none">
        <path className="text-beige" fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
      </svg>
    </a>
    <a className="text-[#1F2029] " aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-9 w-10 bg-none ">
        <path className="text-beige" fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
    </a>
    <a className="text-[#1F2029] " aria-label="Visit TrendyMinds Instagram" href="" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-12 w-12 bg-none">
        <path className="text-beige" fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
      </svg>
    </a>
  </div>
</div>
</div> */}