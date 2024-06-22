import React, { useState } from 'react';


function ArchiveCard(props) {
    const { date, month, title1, title2, description, image, isActive,setShowModal } = props;


    return (
        <div className={`relative flex flex-col bg-[#e0ded2] xxs:w-[98%] xxs:h-[350px] xxs:ml-[1%]  xxxs:w-[80%] xxxs:ml-[10%] mmmxs:h-[400px] mxs:w-[60%] mxs:ml-[20%] md:w-[50%] md:ml-[25%] h-auto  ${props.className} ${isActive ? ' opacity-100 ddmd:w-[95%] ddmd:ml-[2.5%]  md:h-[420px] dlg:w-[90%] dlg:ml-[5%]' : 'opacity-20 ddmd:h-[380px] ddmd:mt-[20px] ddmd:w-[90%] ddmd:ml-[5%] dlg:w-[80%] dlg:ml-[10%]'}`}>
            <div className={`absolute w-0 h-0 top-0 left-0  border-l-[#2da2dd] border-t-[#2da2dd] border-r-transparent border-b-transparent z-0  font-medium xxs:border-l-[80px] xxs:border-t-[80px] xxs:border-r-[80px] xxs:border-b-[80px]
            ${isActive ? 'border-l-[6vw] border-t-[6vw] border-r-[6vw] border-b-[6vw]' : 'border-l-[5vw] border-t-[5vw] border-r-[5vw] border-b-[5vw]'}`}></div>
            <div className="flex flex-col items-center z-10 xxs:py-2 py-5 w-full">
                <div className={`relative flex flex-col xxs:w-[95%] h-[150px] mmmxs:h-[180px] ${isActive ? 'ddmd:h-[200px]': 'ddmd:h-[180px]'}`}>
                    <img
                        alt="event"
                        src={image}
                        className={`z-10 w-[100%] h-[100%] ${isActive ? '' : ''}`}
                        style={{
                            objectFit: 'cover',
                    }}
                    />
                    <div className={`bg-[#1f212d] shadow-cardShadow absolute z-20 flex flex-col mmmxs:top-[87%] left-4 top-40 text-center font-proxima-nova-regular text-white xxs:pt-1 md:pt-1 ${isActive ? 'xxs:w-[45px] xxs:h-[40px] dlg:w-[50px] dlg:h-[50px] top-[82%]' : ' w-[40px] h-[40px] top-[85%]'}`} >
                        <div className={` font-semibold ${isActive ? 'xxs:text-[12px] dlg:text-[16px]' : 'text-[12px]'}`}>{date}</div>
                        <div className={` font-medium ${isActive ? 'xxs:text-[10px] dlg:text-[12px]' : 'text-[8px]'}`}>{month}</div>
                    </div>
                </div>
                <span className={`z-10 flex flex-row items-center space-x-2 xxs:text-[1.3rem] mmmxs:text-[1.65rem] text-3xl font-bold pt-3 ${isActive ? 'ddmd:text-[1.35rem] dlg:text-[1.7rem] mt-3' : 'ddmd:text-[1.25rem] dlg:text-[1.5rem] mt-2'}`}>
                    <p className=" text-[#1f212d] font-proxima-nova-bold">{title1}</p>
                    <p className="text-[#2da2dd] font-proxima-nova-bold">{title2}</p>
                </span>
                <p className={`font-proxima-nova-regular font-normal xxs:text-[0.8rem] mmmxs:text-[1rem] xxs:px-4 px-7 pt-1 overflow-hidden dlg:w-[90%] ${isActive ? 'ddmd:text-[0.9rem] dlg:text-[1rem]' : 'ddmd:text-[0.8rem] dlg:text-[0.9rem]'}`} style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{description}</p>
                <button className="bg-[#1f212d] font-proxima-nova-bold xxs:text-sm xxs:w-[100px] xxs:h-[30px] text-lg font-semibold text-[#e0ded2] mmmxs:w-[130px] mmmxs:h-[35px] shadow-cardShadow mt-3 absolute top-[82%] btn-4" onClick={() => setShowModal(true)}>Learn more</button>
            </div>
        </div>
    );
}

export default ArchiveCard;
