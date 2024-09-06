import React, { useState } from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerB from "/assets/BannerB.png";
import EJE from "/assets/EJE.jpg"
import ENSIJE from "/assets/ENSIJE.jpg"
import Team from "/assets/team.png"
import infor from "/assets/Partners/infor.png"
import Asteel from "/assets/Partners/asteel flash.png"
import atb from "/assets/Partners/atb.png"
import cognira from "/assets/Partners/cognira.png"
import euranova from "/assets/Partners/euranova.png"
import finlogik from "/assets/Partners/finlogik.png"
import habemus from "/assets/Partners/habemus.png"
import Horizons from "/assets/Partners/Horizons.png"
import instadeep from "/assets/Partners/instadeep.png"
import io from "/assets/Partners/io.jpg"
import iobeya from "/assets/Partners/iobeya.png"
import machinestalk from "/assets/Partners/machinestalk.png"
import Managers from "/assets/Partners/Managers.png"
import minotore from "/assets/Partners/minotore.png"
import newAccess from "/assets/Partners/newAccess.png"
import novastore from "/assets/Partners/novastore.png"
import opus from "/assets/Partners/opus.png"
import smt from "/assets/Partners/smt.png"
import stb from "/assets/Partners/stb.png"
import talan from "/assets/Partners/talan.png"
import uib from "/assets/Partners/uib.png"
import SSS from "/assets/Partners/3s.png"

function Sponsors() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [hoveredId, setHoveredId] = useState(null);

  const sponsorImages = [
    { id: 1, name: "Infor", description: "", link: "", image: infor },
    { id: 2, name: "STB Bank", description: "", link: "", image: stb },
    { id: 3, name: "Talan", description: " ", link: "", image: talan },
    { id: 4, name: "Cognira", description: "", link: "", image: cognira },
    { id: 5, name: "iObeya", description: "", link: "", image: iobeya },
    { id: 6, name: "3s Standard sharing Software ", description: "", link: "", image: SSS },
    { id: 7, name: "New access for bankers", description: "", link: "", image: newAccess },
    { id: 8, name: "FinLogic", description: " ", link: "", image: finlogik },
    { id: 9, name: "Minotore", description: " ", link: "", image: minotore },
    { id: 10, name: "Instadeep", description: " ", link: "", image: instadeep },
    { id: 11, name: "EuraNova", description: " ", link: "", image: euranova },
    { id: 12, name: "habemus", description: " ", link: "", image: habemus },
    { id: 13, name: "integration objects", description: " ", link: "", image: io },
    { id: 14, name: "Horizons Audit & consulting", description: " ", link: "", image: Horizons },
    { id: 15, name: "machinestalk", description: " ", link: "", image: machinestalk },
    { id: 16, name: "uib", description: " ", link: "", image: uib },
    { id: 17, name: "SMT", description: " ", link: "", image: smt },
    { id: 18, name: "Novastore Print", description: " ", link: "", image: novastore },
    { id: 19, name: "Opus Lab", description: " ", link: "", image: opus },
    { id: 20, name: "Managers", description: " ", link: "", image: Managers },
    { id: 21, name: "ATB", description: " ", link: "", image: atb },
    { id: 22, name: "Asteel flash", description: " ", link: "", image: Asteel },
  ];

 

  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-[20%] h-1 bg-beige'></div>
        <div className='w-[80%] h-1 bg-dark-blue'></div>
      </div>
      <section className='xxs:px-[1px] xl:px-[9%] xxs:gap-[10px] pb-[70px] flex flex-col md:gap-[45px] bg-beige'>
        <h1 className='xxs:text-[2.8125rem] mxs:text-6xl text-dark-blue mt-10 md:text-7xl font-proxima-nova-bold font-medium text-center '><span className='text-light-blue font-proxima-nova-bold'>They </span>trusted us</h1>
        <div>
          <SlickSlider {...settings}>
            {sponsorImages.map((sponsor, index) => (
              <div key={index} className='slick-slide w-[100%] py-[30px]'>
                <div className='xxs:w-[90%] xxs:ml-[5%] xxs:h-[260px] mxxs:w-[80%] mxxs:ml-[10%] xs:h-[280px] mmxs:h-[350px] xsm:h-[230px] md:h-[280px] dmd:h-[230px] xxxs:w-[70%] xxxs:ml-[15%] lg:h-[280px] pb-11' style={{ backgroundImage: `url(${sponsor.image})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} onMouseEnter={() => setHoveredId(sponsor.id)} onMouseLeave={() => setHoveredId(null)}>
                  {hoveredId === sponsor.id &&
                    <div className='xxs:h-[260px] xs:h-[280px] mmxs:h-[350px] xsm:h-[230px] md:h-[280px] dmd:h-[230px] w-full lg:h-[280px] bg-[#1f2029b9] backdrop-filter backdrop-blur-[3px] p-6'>
                      <div className='text-beige font-gilroy-extrabold text-xl'>{sponsor.name}</div>
                      <div className='w-[50%] h-[0.15rem] bg-light-blue my-1'></div>
                      <div className='text-beige font-proxima-nova-regular overflow-hidden' style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>{sponsor.description}</div>
                      <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className='text-light-blue font-proxima-nova-bold text-lg absolute top-[80%]'>Check our website...</a>
                    </div>
                  }
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
