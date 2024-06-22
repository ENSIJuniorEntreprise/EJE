import React from "react";

const Testemonie = ({ bannerImg, name, description }) => {
  return (
    <div className="flex xxs:flex-col xxs:items-center gap-3 xs:flex-row xs:items-center">
      <img
        src={bannerImg}
        alt=""
        style={{ objectFit: 'cover' }}
        className="w-[7rem] h-[7rem] rounded-full border-8 border-[#2DA2DD]"
      />
      <div className="md:pl-6 justify-between xxs:flex-col xxs:gap-2 xs:flex xs:flex-col xs:gap-0 xs:items-start">
        <p className="text-[#E0DED2] max-w-xs">{description}</p>
        <h1 className="text-[#2DA2DD] xxs:text-right xs:text-left">{name}</h1>
      </div>
    </div>
  );
};

export default Testemonie;
