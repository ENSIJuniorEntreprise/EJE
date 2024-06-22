import React, { useState, useEffect, useRef } from "react";
import  logo  from "/assets/photoo.jpg";

const ServiceComponent = ({
  paragraphs,
  onClickP,
  onHover,
  onHoverOut,
  parag,
  index,
}) => {
  const [selectedService, setSelectedService] = useState(parseInt(index));
  const [isSmall, setIsSmall] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 639);
    };

    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pStyles = [
    {
      backgroundImage: `url(${logo})`,
      backgroundSize: "200%",
      backgroundPosition: "20% 45%",
    },
    {
      backgroundImage: `url(${logo})`,
      backgroundSize: "200%",
      backgroundPosition: "20% 45%",
    },
    {
      backgroundImage: `url(${logo})`,
      backgroundSize: "200%",
      backgroundPosition: "20% 45%",
    },
    {
      backgroundImage: `url(${logo})`,
      backgroundSize: "200%",
      backgroundPosition: "20% 45%",
    }
  ];

  const basePStyle = {
    width: "100%",
    height: "auto",
    flex: "1",
    overflow: "hidden",
    cursor: "pointer",
    borderRadius: "30px",
    transition: "all 0.5s",
    border: "1px solid #2DA2DD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const spanStyle = {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    minWidth: "14em",
    padding: ".5em",
    textAlign: "center",
    transition: "all 0.5s",
    textTransform: "uppercase",
    letterSpacing: ".1em",
  };

  const handleClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
    onClickP(index);
  };

  return (
    <div
      className="xxs:mx-6 xxs:mb-0 lg:w-[350px] sm:w-full rounded-[7px] lg:flex lg:flex-col sm:grid sm:grid-cols-2 flex flex-col mx-12 sm:mx-0 px-0 sm:px-12 lg:px-0 gap-4 mt-[2rem] p-[.4rem]"
      style={{ height: containerHeight, justifyContent: "center" }}
    >
      {paragraphs.map((paragraph, index) => (
        <div className="flex flex-col" key={index}>
          <p
            style={{ ...basePStyle, ...pStyles[index % pStyles.length] }}
            onClick={() => handleClick(index)}
            onMouseOver={onHover}
            onMouseOut={onHoverOut}
          >
            <div
              className="w-full h-full"
              style={{ backgroundColor: "rgba(31, 32, 41, 0.85)" }}
            >
              <span
                style={{
                  ...spanStyle,
                  color: selectedService === index ? "#2DA2DD" : "#E0DED2",
                  height: selectedService === index && !isSmall ? "140px" : "90px",
                }}
              >
                {paragraph.text}
              </span>
            </div>
          </p>
          {selectedService === index && isSmall && (
            <div>
              <div className="pt-[30px] relative">
                <div className="bg-[#2DA2DD] xxs:w-[90%] xxs:h-[80%] w-72 h-60 absolute sm:right-[-10px] right-[-5px]"></div>
                <img
                  src={parag.image}
                  style={{ objectFit: "cover" }}
                  alt="Banner"
                  className="xxs:w-[95%] w-72 h-60 relative top-[20px]"
                />
              </div>
              <div key={index} className="flex-col sm:w-[500px]">
                <h2 className="mt-[50px] pb-4 text-[#2DA2DD] font-bold">
                  {parag.title}
                </h2>
                <h1 className="font-extrabold text-[#1F2029] pb-3">
                  {parag.subtitle}
                </h1>
                <p>{parag.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceComponent;
