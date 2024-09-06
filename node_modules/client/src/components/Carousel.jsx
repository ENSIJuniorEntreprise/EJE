import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';
import blueDown from '/assets/blue-down.png'
import "./Animation.css";
import PDF from "/assets/brochure.pdf"
import slide1 from "/assets/Slider/1.png"
import slide2 from "/assets/Slider/2.jpg"
import slide3 from "/assets/Slider/3.jpg"
import slide4 from "/assets/Slider/4.jpg"
import slide5 from "/assets/Slider/5.jpg"


function Carousel() {
  const secondSectionRef = useRef(null);
  const Slider_list=[slide1,slide2,slide3,slide4,slide5]
  const handleButtonClick = () => {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };


  const images = Slider_list;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "110px", left: "56%", transform: "translateX(-50%)" }}>
        <ul style={{ display: "flex", justifyContent: "start", listStyle: "none", padding: 0 }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ margin: "0 5px" }}>
              <button style={{
                width: "12px",
                height: "12px",
                backgroundColor: dot.props.className.includes("slick-active") ? "#2DA2DD" : "#e0ded2",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer"
              }} />
            </li>
          ))}
        </ul>
      </div>
    )
  };

  return (
    <section className='w-full h-full carousel-container relative'>
      <div>
        <div className="text-center w-[88%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className='font-bold text-beige font-gilroy-extrabold xxs:text-5xl xxxs:text-6xl text-[4em] leading-tight md:text-left md:text-8xl lg:text-[7em] xl:text-[8em] xl:w-4/6 title-animation'>
            <span className='text-light-blue font-gilroy-extrabold'>ENSI</span> Junior Enterprise
          </div>
          <div className='flex gap-4 mt-10 flex-col md:flex-row'>
            <Link to="/contact">
              <Button bc='border-none' tc='text-dark-blue' bgc='bg-beige' className='font-proxima-nova font-bold group-hover:text-beige group-hover:border-beige btn-4 cursor-pointer hover:ease-in hover-effect button-animation'>
                Submit a request for proposal
              </Button>
            </Link>




            <a href="/assets/brochure.pdf" target="_blank" without rel="noreferrer">
              <Button bc='border-beige' tc='text-beige' bgc='bg-blue-400' className='font-proxima-nova font-bold cursor-pointer h-full button-animation btn-5'>
                Download our brochure
              </Button></a>
          </div>
        </div>
        <Slider {...settings} className='h-[100vh]'>
          {images.map((image, index) => (
            <div key={index} className='image-container' >
              <img src={image} className=' w-full h-[100vh] object-cover' alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <button onClick={handleButtonClick} className="px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            <div>
              <img src={blueDown} className='xxs:w-11 sm:w-20 animate-bounce'></img>
            </div>
          </button>
        </div>
        <div ref={secondSectionRef} className="w-full h-full" style={{ position: "absolute", top: "100%" }}></div>
      </div>
    </section>
  );
}

export default Carousel;
