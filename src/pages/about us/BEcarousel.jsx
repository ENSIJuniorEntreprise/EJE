import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBlock from "./ImageWithBlock2";
import { imageBlocks } from "./BE";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function BEcarousel() {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setShowArrows(false);
      } else {
        setShowArrows(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially
    return () => window.removeEventListener('resize', handleResize);
  }, []);  

  const slickSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px", // Adjust this value as needed
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: showArrows,
          dots: showArrows
        }
      }
    ],
    prevArrow: showArrows ? <FaChevronLeft style={{ color: 'red' }} /> : null,
    nextArrow: showArrows ? <FaChevronRight style={{ color: 'red' }} /> : null,
  };

  return (
    <div className="md:hidden xs:p-5" >
      <Slider {...slickSettings}
        className=" gap-x-20 mt-[80px] xs:mb-[60px] w-full md:hidden "
      >
        {imageBlocks.map((block, index) => (
          <div className={`flex items-center justify-center ${index === Math.floor(imageBlocks.length / 2) ? 'mx-4' : ''}`} key={index}>
            <ImageWithBlock {...block} />
          </div>
        ))}
      </Slider>
      <hr
            className="w-[80%] h-[4px] mt-16 xs:mt-0 mb-16 right-0  absolute border-none max-md:h-[3px]  "
            style={{ background: "#2DA2DD", zIndex: 1 }}
          />
    </div>
  );
}
