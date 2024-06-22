import React from "react";

const DiveButton = ({ bgColor, title, subtitle }) => {
  return (
    <div
      className={`ser:w-[80vw] service:w-[70vw] lg:w-96 h-24 sm:w-[37vw] ${bgColor} text-[#E0DED2] flex flex-col items-center justify-center gap-1`}
    >
      <div className="text-2xl font-semibold">{title}</div>
      <h2 className="text-sm pt-1">{subtitle}</h2>
    </div>
  );
};

export default DiveButton;
