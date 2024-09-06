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
    { id: 1, name: "Infor", description: "Infor is a software company specializing in enterprise solutions, offering ERP systems and tools to enhance operations and management.", link: "https://www.infor.com", image: infor },
    { id: 2, name: "STB Bank", description: "STB Bank is a Tunisian bank providing a wide range of banking services, including accounts, loans, and wealth management.", link: "https://www.stb.com.tn/fr/", image: stb },
    { id: 3, name: "Talan", description: "Talan is a consulting firm specializing in digital transformation, offering services in consulting, technology, and operations.", link: "https://www.talan.com/", image: talan },
    { id: 4, name: "Cognira", description: "Cognira offers artificial intelligence and data analytics solutions to help businesses optimize data management and decision-making.", link: "https://www.cognira.com", image: cognira },
    { id: 5, name: "iObeya", description: "iObeya provides digital visual management solutions for teams, allowing interactive collaboration and project tracking.", link: "https://www.iobeya.com", image: iobeya },
    { id: 6, name: "3s Standard Sharing Software", description: "3S specializes in sharing and collaboration software to enhance productivity and communication within organizations.", link: "https://www.3s.com.tn/", image: SSS },
    { id: 7, name: "New Access for Bankers", description: "New Access provides secure access and identity management solutions for the banking sector, facilitating security and compliance.", link: "https://www.newaccess.com", image: newAccess },
    { id: 8, name: "FinLogic", description: "FinLogic is a provider of financial and banking solutions, specializing in transaction management and financial services.", link: "https://www.finlogic.it/", image: finlogik },
    { id: 9, name: "Minotore", description: "Minotore specializes in digital solutions for financial markets. Founded in 2013 by financial experts, it operates from Paris and Tunis. Minotore provides tailored, secure, and cost-effective digital tools, supported by a skilled team, and focuses on long-term client partnerships.", link: "https://www.minotore.com", image: minotore },
    { id: 10, name: "Instadeep", description: "Instadeep specializes in artificial intelligence and machine learning, offering solutions to enhance decision-making and automation.", link: "https://www.instadeep.com", image: instadeep },
    { id: 11, name: "EuraNova", description: "EuraNova is a digital transformation consulting firm, offering services to support businesses in their digital transition.", link: "https://www.euranova.eu", image: euranova },
    { id: 12, name: "Habemus", description: "Habemus provides document management and business process solutions, facilitating digitization and organization of information.", link: "https://www.habemus.com", image: habemus },
    { id: 13, name: "Integration Objects", description: "Integration Objects offers system integration solutions to improve interoperability and communication between different applications.", link: "https://integrationobjects.com/", image: io },
    { id: 14, name: "Horizons Audit & Consulting", description: "Horizons Audit & Consulting provides audit and consulting services to help businesses improve their processes and compliance.", link: "https://www.horizons-audit.com/", image: Horizons },
    { id: 15, name: "Machinestalk", description: "Machinestalk offers comprehensive IoT solutions that streamline operations for businesses, combining hardware, software, and support into seamless, efficient products. It aims to be a key player in the regional IoT market by delivering innovative and user-friendly solutions.", link: "https://www.machinestalk.com/", image: machinestalk },
    { id: 16, name: "UIB", description: "Union Internationale de Banques (UIB) is a Tunisian bank offering a full range of financial and banking services to individuals and businesses.", link: "https://www.uib.com.tn", image: uib },
    { id: 17, name: "société monétique tunisie", description: "SMT provides efficient and secure payment solutions, reducing transaction costs and ensuring seamless interoperability, with no extra charges for cardholders and comprehensive support for merchants.", link: "https://monetiquetunisie.com/", image: smt },
    { id: 18, name: "Novastore Print", description: "Novastore excels in crafting high-quality blinds, eye-catching promotional items, dynamic point-of-sale displays, impactful signage, versatile pop-up stands, and innovative exhibition setups.", link: "https://www.facebook.com/profile.php?id=100064168410054", image: novastore },
    { id: 19, name: "Opus Lab", description: "Opus Lab is a top training school focused on building digital skills. It helps create a new generation of tech experts through hands-on courses and practical learning.", link: "https://www.opuslab.tn", image: opus },
    { id: 20, name: "Managers", description: "Managers is a magazine dedicated to business enthusiasts, offering insights into entrepreneurship, digital finance, business succession, real estate, high-tech trends, and expert advice on coaching, HR, and business law.", link: "https://www.managers.tn", image: Managers },
    { id: 21, name: "ATB", description: "Arab Tunisian Bank (ATB) is a Tunisian bank offering a comprehensive range of financial services to individuals and businesses.", link: "https://www.atb.tn", image: atb },
    { id: 22, name: "Asteel Flash", description: "Asteelflash is a global leader in Electronic Manufacturing Services (EMS) and Supply-Chain Management, part of Universal Scientific Industrial (Shanghai) Co., Ltd. it provides advanced technical and manufacturing solutions to accelerate the transition from technological innovations to market-ready products.", link: "https://asteelflash.com", image: Asteel },
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
