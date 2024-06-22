import React from "react";

const Valeur = ({ backgroundColor, iconBackground, iconBackgroundImage, title, lineColor, textColor, description, marginTop, marginBottom }) => {
  console.log("Icon background image:", iconBackgroundImage);
  return (
    <div className={` relative flex flex-col items-center justify-center xxs:w-[240px] xxs:h-[190px] xxs:mx-1 ${marginTop} ${marginBottom} dmd:mx-2 dmd:w-[270px] dmd:h-[220px] lg:mx-6 dlg:mx-8 dlg:w-[320px] dlg:h-[270px]`} style={{ background: backgroundColor }}>
      <div className=" xxs:w-[40px] xxs:h-[40px] xxs:m-2 dmd:m-2 dmd:w-[50px] dmd:h-[50px] lg:m-4 dlg:m-6 dlg:w-[90px] dlg:h-[90px]" style={{ background: iconBackground, backgroundImage: `url(${iconBackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="text-center font-photograph-signature mb-6 xxs:text-[25px] xxs:mb-2 dmd:text-4xl dlg:text-4xl" style={{ color: textColor }}>
        {title}
        <hr className="w-[80%] h-[4px] left-0 absolute border-none xxs:h-[3px]" style={{ background: lineColor, zIndex: 1 }} />
      </div>
      <div className="w-[90%] text-center xxs:text-[12px] xxs:mb-2 dmd:mb-4 dmd:text-[13px] dlg:mb-6 dlg:text-[15px]" style={{ color: textColor }}>
        {description}
      </div>
    </div>
  );
};

export default Valeur;
