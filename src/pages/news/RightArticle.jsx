import React from "react";
import { useNavigate } from 'react-router-dom';

export function RightArticle({
  photo,
  submissionDate,
  title,
  description,
  content,
  reverse,
}) {
  const flexDirectionClass = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const navigate = useNavigate(); 


  const handleLearnMoreClick = (item) => {
    navigate('/article', { state: item }); 
  };

  return (
    <div
      className={`xxs:w-[90%] xs:w-[80%] mmmxs:w-[70%] mxms:w-[60%] md:w-[90%] lg:w-[80%] dlg:w-[70%] content-fit flex flex-col md:gap-2 md:flex  ${flexDirectionClass}`}
    >
      {/* Partie gauche (image) */}
      <div className="h-[40vh] xxs:h-[85vw] mmmxs:h-[70vw] mxms:h-[60vw] md:h-[350px] md:w-[49.5%] mdd:w-[43%] xl:h-[350px] lg:w-[400px] flex-shrink-0 ">
        <img
          src={photo}
          alt="Description de l'image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Partie droite (texte) */}
      <div className="overflow-hidden w-full p-4 bg-[#E0DED3] md:h-[350px] lg:h-[350px] md:py-8 lg:px-6 xl:h-[350px]">
        <h2 className="title text-2xl font-semibold text-[#3D3E47] font-proxima-nova-regular md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl " style={{ maxHeight: "calc(1.5em * 4)", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 1 }}>
          {title}
        </h2>
        <div className="bg-[#2DA2DD] h-1 w-[150px] mb-4"></div>
        <div className="details text-[#1F2029] opacity-[44%] font-montserrat lg:text-lg md:text-xl xl:text-xl 2xl:text-2xl">
          <span>{new Date(submissionDate).toLocaleDateString()}</span>
        </div>
        <p className="description text-[#1F2029] font-montserrat lg:text-lg md:text-xl xl:text-xl 2xl:text-2xl" style={{ maxHeight: "calc(1.5em * 4)", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 4 }}>
          {description}
        </p>
        <button  onClick={() => handleLearnMoreClick({
  photo,
  submissionDate,
  title,
  description,
  content,
  reverse,
})}  className="font-proxima-nova-bold mt-4 bg-transparent text-center text-[#2DA2DD] font-medium text-lg transition duration-300 z-10 py-1 px-4 border-2 border-[#2DA2DD] hover:text-black hover:bg-[#2DA2DD] hover:text-beige lg:relative lg:bottom-4 xl:bottom-0 lg:flex xl:flex-none">
          <span className="text-base ">Learn more</span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-300% bg-[#2DA2DD] transition duration-500 block z-[-1]"></span>
        </button>
      </div>
    </div>
  );
}
