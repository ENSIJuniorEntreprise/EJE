import React from "react";
import mailIcon  from "/assets/mailIcon.png";
import { useNavigate } from "react-router-dom";

const ContactButton = () => {
  const navigate = useNavigate ();
  const borderStyle = {
    borderImage: 'linear-gradient(to bottom, rgba(45, 162, 221, 1) 0%, rgba(45, 162, 221, 0) 100%)',
    borderImageSlice: '1'
  };

  const handleContactClick = () => {
    navigate('/contact')
   }

  return (
    <div className="w-[100%] lg:w-96 h-24 flex items-center justify-center gap-6 cursor-pointer" onClick={handleContactClick} >
      <img src={mailIcon} className="w-12 h-12" alt="mail icon" />
      <div className="ser:text-base text-[#2DA2DD] font-semibold text-lg">
        Get in touch with us
      </div>
    </div>
  );
};

export default ContactButton;
