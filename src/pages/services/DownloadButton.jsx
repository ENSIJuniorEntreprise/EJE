import React from "react";
import  downloadIcon  from "/assets/downloadIcon.png";

const DownloadButton = () => {
  const borderStyle = {
    borderImage: 'linear-gradient(to bottom, rgba(31, 32, 41, 1) 0%, rgba(31, 32, 41, 0) 100%) 1',
    borderImageSlice: 1
  };

  return (
    <div className="lg:w-96 h-20 flex items-center justify-center gap-6 sm:w-[37vw]">
      <img src={downloadIcon} className="w-12 h-12" alt="download icon" />
      <div className="ser:text-base text-[#1F2029] font-semibold text-lg">Download Here</div>
    </div>
  );
};

export default DownloadButton;
