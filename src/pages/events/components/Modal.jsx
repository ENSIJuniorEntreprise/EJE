import React from "react";
import "./Modal.css";

export default function Modal({ event, onClose }) {


    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className={`bg-[#1f212d] shadow-cardShadow absolute z-20 flex flex-col top-0 left-4 text-center font-proxima-nova-regular text-white xxs:pt-1 md:pt-1 xxs:w-[45px] xxs:h-[40px] dlg:w-[70px] dlg:h-[70px]  w-[40px] h-[40px] `} >
                    <div className={` font-semibold xxs:text-[12px] dlg:text-[20px]  text-[12px]`}>{event.date}</div>
                    <div className={` font-medium  xxs:text-[10px] dlg:text-[18px] text-[8px]`}>{event.month}</div>
                </div>

                <span className="close-btn" onClick={onClose}>&times;</span>
                   
                <div className="flex flex-row gap-2 mt-[-5px] ml-5 justify-center">
                <div className="xxs:text-2xl mxms:text-5xl text-dark-blue font-proxima-nova-bold">{event.title1}</div>
                <div className="xxs:text-2xl mxms:text-5xl text-light-blue font-proxima-nova-bold">{event.title2}</div>
                </div>

                <div className="flex flex-col-reverse items-center xxs:gap-5 mxs:gap-10 mt-8">
                <div className="xxs:w-[100%] mxms:w-[80%]">
                <div className="xxs:text-xl mxms:text-3xl text-dark-blue font-proxima-nova-bold text-left mt-4">About The <span className="text-light-blue font-proxima-nova-bold ">Event</span> </div>
                <div className="desc">{event.description}</div>
                </div>
                <div className="xxs:w-[100%] mxms:w-[60%]">
                     <img src={event.image} className="ModalImg" />
                </div>
                </div>



            </div>
        </div>
    );
}
