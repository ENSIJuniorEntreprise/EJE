import React, { useState, useEffect } from "react";
import img1 from './img/Sofiene Trabelsi.jpg';
import img2 from './img/Mouna Hachicha.jpg';
import img3 from './img/Emna Aissaoui.jpg';
import img4 from './img/Iyadh Gharbi.jpg';
import img5 from './img/Selim Ketata.jpg';
import img6 from './img/Maissa El Hamdi2.jpg';
import img7 from './img/eje4.jpg';



const images = {
  'Sofiene Trabelsi.jpg': img1,
  'Mouna Hachicha.jpg': img2,
  'Emna Aissaoui.jpg':img3,
  'Iyadh Gharbi.jpg':img4,
  'Selim Ketata.jpg':img5,
  'Maissa El Hamdi2.jpg':img6,
  'eje4.jpg':img7,

};

const ImageWithBlock = ({ imagePath, altText, poste }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showInnerBlock, setShowInnerBlock] = useState(false);
    // const [image, setImage] = useState(null);
  const image = images[imagePath];

  // useEffect(() => {
  //   try {
  //     const importedImage = require(`./img/${imagePath}`).default;
  //     setImage(importedImage);
  //   } catch (error) {
  //     console.error("Error importing image:", error);
  //   }
  // }, [imagePath]);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Set a timeout to show the inner block after a certain time (e.g., 500 milliseconds)
    
      setShowInnerBlock(true);
    
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowInnerBlock(false);
  };

  return (
    <div
      className={
        "cont flex flex-col justify-center  relative w-[255px] h-[330px] cursor-pointer   "
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
          className="w-[100%] h-[100%] object-cover absolute "
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
          className="flex flex-col justify-center items-center text-center absolute w-[90%] h-[90%]"
          style={{
            opacity: 1,
            transition: "opacity 0.7s, transform 0.7s",
            zIndex: 2
          }}
        >
          <div
            className="text-[15px] font-bold proxima-nova-bold"
            style={{ color: "#E0DED2", whiteSpace: "pre-line" }}
          >
            {poste}
          </div>
          <div
            className="text-[30px] font-photograph-signature"
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
