import React, { useState, useEffect, useRef } from "react";
import img1 from './img/Mohamed Lahiani.jpg'
import img2 from './img/Islem Nasri.jpg';
import img3 from './img/Amine Fakhfekh.jpg';
import img4 from './img/Syrine Hammami.jpg';
import img5 from './img/Rawen Sahraoui.jpg';
import img6 from './img/Oumayma Riahi.jpg';
import img8 from './img/Takwa Abdellaoui.jpg';
import img7 from './img/eje4.jpg';



const images = {
  'Mohamed Lahiani.jpg': img1,
  'Islem Nasri.jpg': img2,
  'Amine Fakhfekh.jpg':img3,
  'Rawen Sahraoui.jpg':img5,
  'Syrine Hammami.jpg':img4,
  'Takwa Abdellaoui.jpg':img8,
  'Oumayma Riahi.jpg':img6,
  'eje4.jpg':img7,

};

const ImageWithBlock = ({ imagePath, altText, poste }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showInnerBlock, setShowInnerBlock] = useState(false);
  // const [image, setImage] = useState(null);
  const image = images[imagePath];
  const targetRef = useRef(null);

  // useEffect(() => {
  //   const importImage = async () => {
  //     try {
          
  //       const importedImage = await import(/* @vite-ignore */`./img/${imagePath}`);
  //       setImage(importedImage.default);
  //     } catch (error) {
  //       console.error("Error importing image:", error);
  //     }
  //   };

  //   importImage();
  // }, [imagePath]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsHovered(true);
          setShowInnerBlock(true);
        } else {
          setIsHovered(false);
          setShowInnerBlock(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowInnerBlock(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowInnerBlock(false);
  };

  return (
    <div
      ref={targetRef}
      className={
        "cont flex flex-col justify-center relative  cursor-pointer xxs:h-[300px] xxs:w-[220px] xs:w-[270px] xs:h-[380px] mmmxs:h-[250px] mmmxs:w-[180px] xsm:h-[300px] xsm:w-[220px]  mx-auto "
      }
      style={{
        borderColor: "#1F2029",
        transition: "0.7s",
        zIndex: 0,
        
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <img
          className="w-[100%] h-[100%] ml-[3%] object-cover absolute mx-auto "
          src={image}
          alt={altText}
          style={{
            backgroundPosition: showInnerBlock ? "0 0" : "",
            backgroundSize: showInnerBlock
              ? "calc(100% - var(--offset)) calc(100% - var(--offset))"
              : "",
            filter: showInnerBlock ? "grayscale(40%)" : "",
            zIndex: 2,
          }}
        />
      )}
      {showInnerBlock && (
        <div
          className="flex flex-col justify-center items-center text-center absolute w-[90%] ml-[5%] h-[90%]"
          style={{
            opacity: 1,
            transition: "opacity 0.7s, transform 0.7s",
            zIndex: 2,
          }}
        >
          <div
            className="text-[13px] font-bold proxima-nova-bold"
            style={{ color: "#E0DED2", whiteSpace: "pre-line" }}
          >
            {poste}
          </div>
          <div
            className="text-[25px] font-photograph-signature"
            style={{ color: "#E0DED2" }}
          >
            {altText}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithBlock;
