import React, { lazy, useState } from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rectangle from '/assets/slider1.JPG'
import Card from './components/Card.jsx'
import ArchiveCard from './components/ArchiveCard.jsx'
import get from "/assets/batch_DSC_1434.jpg";
import hackprise from "/assets/Cover.jpg"
import Modal from './components/Modal.jsx'; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "/assets/batch_DSC_1495.jpg"
import img2 from "/assets/DSC_0182.JPG"
import img3 from "/assets/WhatsApp_Image_2023-02-23_at_2.47.56_PM.png"
import img4 from "/assets/InShot_20231126_220153746.jpg"
import img5 from "/assets/IMG_6340.jpg"
import img6 from "/assets/WhatsApp_Image_2023-02-23_at_2.47.56_PM_1.jpeg"
import Anniv1 from "/assets/DSC_0182.JPG"
import Anniv2 from "/assets/annivv.JPG"
import EJIS from "/assets/_DSC8105.jpg"
import Forum from "/assets/forum.JPG"
import gete from "/assets/gete.jpeg"
const events = [
  { id: 1, date: "2024", month: "Apr", title1: "18th", title2: "anniversary", description: "The EJE anniversary celebration brought together members from all the junior enterprises for a spirited football match, fostering camaraderie and teamwork. This vibrant event not only marked the anniversary but also strengthened the bonds among participants, creating lasting memories and reinforcing the sense of community within the junior enterprise network.", image: Anniv2 },
  { id: 2, date: "2023", month: "Feb", title1: "17th", title2: "anniversary", description: "The EJE anniversary celebration brought together members from all the junior enterprises for a spirited football match, fostering camaraderie and teamwork. This vibrant event not only marked the anniversary but also strengthened the bonds among participants, creating lasting memories and reinforcing the sense of community within the junior enterprise network.", image: Anniv1 },
  { id: 3, date: "2018", month: "", title1: "EJIS", title2: "", description: "The ENSI Junior Enterprise Association aims to immerse its members in professional and entrepreneurial life, emphasizing collaboration and effective communication. The ENSI Junior Integration Seminar (EJIS) is a full day of team-building activities designed to strengthen member relationships. The seminar also showcases the association's impact on alumni careers, inspiring new members and fostering a sense of belonging to the EJE family.", image: EJIS },
  { id: 4, date: "2021", month: "Nov", title1: "Annual forum", title2: "16th", description: "The 16th edition of the Annual Forum by ENSI Junior Entreprise, scheduled for November 2021, will spotlight the theme 'The Fintech and Regtech Tandem: A New Era of Financial Expansion.' This event underscores the innovative convergence of financial technology and regulatory technology, highlighting their combined potential to revolutionize the financial sector. Attendees will explore how Fintech innovations are transforming financial services and how Regtech solutions are ensuring regulatory compliance in this rapidly evolving landscape. The forum promises engaging discussions, networking opportunities, and insights from industry leaders, aiming to inspire and educate participants on the future of finance.", image: Forum },
  { id: 5, date: "2025", month: "Feb", title1: "Get Entrepreneurial 2.0", title2: "", description: "Get Entrepreneurial 2.0 – Taking place on February 5th, 2025, at UTICA, this event serves as a key platform for young entrepreneurs, start-ups, and recent graduates to connect with incubators, investors, and industry professionals. As a B2B trade fair, it offers networking opportunities with B2B and B2C companies, along with expert-led conferences and panel discussions. Themed \"Tunisia and Its Future: Rethinking Economic Development in the Age of Innovation,\" the event will explore innovation-driven growth, digital transformation, and investment strategies to shape Tunisia’s economic future." , image: gete },
  { id: 6, date: "2024", month: "Jan", title1: "Get", title2: "Entrepreneurial", description: "The Get Entrepreneurial event, scheduled for January 24, 2024, at UTICA, is designed to provide a platform for young entrepreneurs, start-ups, and project creators to present their ideas to incubators and market professionals. This B2B trade fair also offers recent graduates a deeper immersion into the professional world, allowing direct interaction with B2B and B2C companies and attendance at various conferences. The event's theme, 'Innovation and Entrepreneurship for a Sustainable Future' aims to raise awareness, inspire creativity, educate on best practices, facilitate collaboration, and encourage actionable initiatives in sustainable entrepreneurship. Key discussion topics include entrepreneurial education, innovation-driven growth, sustainable start-up financing, and corporate social responsibility.", image: get },
  { id: 7, date: "2022", month: "Jun", title1: "Hack'prise", title2: "2.0", description: "ENSI Junior Entreprise continues its tradition of innovation by offering students the best opportunities to immerse themselves in the professional world. This commitment gave rise to HackPrise, a hackathon that challenges participants to devise solutions to IT and entrepreneurial problems proposed by renowned companies. This year's HackPrise will take place in June as a fully online event, attracting participants nationwide and internationally, ensuring diverse representation. In collaboration with partners such as INFOR, a cloud technology leader, and STB, a prestigious bank, HackPrise 1.0 achieved significant success with over 200 participants, 80 teams, 10 published articles, and 8000 DT in rewards. Following this success, HackPrise 2.0 saw more than 250 participants and 97 teams from Value and Euranova competing in data science challenges, guided by technical support, and competing for valuable prizes.", image: hackprise },

]



function Events() {
  const [currentSlide, setCurrentSlide] = useState( window.innerWidth>900 ? Math.floor(events.length)/2 + 1 : Math.floor(events.length)/2);
  const [showModal, setShowModal] = useState(false); // State for managing modal visibility

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    initialSlide: Math.floor(events.length / 2),
    
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // centerPadding: '25%',
        },
      },
    ],
    prevArrow: <FaChevronLeft style={{ color: 'red' }} />,
    nextArrow: <FaChevronRight style={{ color: 'red' }} />,
    afterChange: (index) => {
      if(window.innerWidth>900){
      if (index == events.length-1){
        setCurrentSlide(0)
      }
      else {
        setCurrentSlide(index+1)
      }}
      else{
        setCurrentSlide(index)

      }
      },
      appendDots: dots => (
        <div>
          <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}>
            {dots.map((dot, index) => (
              <li key={index} style={{ margin: "0 5px" }}>
                <button style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: dot.props.className.includes("slick-active") ? "#2DA2DD" : "#e0ded2",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer"
                }} />
              </li>
            ))}
          </ul>
        </div>
      )
      
              }    
  return (
    <div>
      <section className="flex items-center justify-center bg-cover bg-center md:h-[550px] xxs:h-[450px]" style={{ backgroundImage: `url(${gete})`, backgroundPositionY:"50%", }}>
        <div
          className="w-[100%] h-[100%] flex justify-center items-center md:text-center "
          style={{ backgroundColor: "rgba(31, 32, 41, 0.8)" }}
        >
          <div
            className="border p-[1%] pl-4 pr-4 dlg:pr-[3%] dlg:pl-[3%] md:w-[600px] xxs:w-[90vw] mmmxs:w-[80vw] h-28 flex xxs:flex-col xxxs:flex-row items-center justify-center"
              style={{
              backgroundColor: "rgba(31, 32, 41, 0.8)",
              borderColor: "#2DA2DD",
              borderWidth: "4px",
              zIndex: 1,
              whiteSpace: "pre-line",
            }}
          >
            <span
              className="text-[65px] font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl"
              style={{ color: "#2DA2DD" }}
            >
              Where&nbsp;
            </span>
            <span
              className="text-[65px] font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl"
              style={{ color: "#E0DED2" }}
            >
              We Gather&nbsp;!
            </span>




          </div>
        </div>
      </section>
      <section className="bg-[#1f212d]">
        <div className=' items-center bg-[#e0ded2] pb-12 shadow-cardShadow xxs:rounded-bl-[80px] md:rounded-bl-[150px] xl:rounded-bl-[250px]'>
          <p className='font-proxima-nova-bold pt-12 text-center text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide'>Newest
            <span className='font-proxima-nova-bold text-2xl sm:text-4xl md:text-6xl text-[#1f212d] font-bold ml-3 md:ml-5'>Events</span></p>
          <p className='text-[#1f212d] text-xs md:text-xl pb-4 px-4 text-center md:pb-10 text-medium font-proxima-nova'>Stay ahead of the curve with our cutting-edge events!</p>


          <span className='flex xxs:flex-col justify-center items-center md:flex-row xxs:w-[95%] xxs:ml-[2.5%] mmmxs:w-[80%] mmmxs:ml-[10%] md:w-[95%] md:ml-[2.5%] sm:w-[70%] sm:ml-[15%] lg:w-[90%] lg:ml-[5%]'>
            <div className='md:w-[500px] lg:w-[600px]'>
              <img
                alt="gallery"
                className="h-full w-full md:rounded-lg sm:rounded-lg object-cover object-center md:w-full md:h-[413px] lg:ml-[0vw]"
                src={get}
              />
            </div>

            <div className='flex justify-center xxs:relative xxs:top-[-20px] mmmxs:top-[-20px] md:top-[0px] md:left-[-70px] md:w-[350px] lg:w-[470px] lg:left-[-30px]'>
              <Card
                title1="GET"
                title2="Entrepreneurial 2.0"
                text="The event connects young entrepreneurs with industry experts and incubators to pitch and grow innovative ideas."
                isBlueTitle={true}
                link="https://www.get-entrepreneurial.com"
                />
            </div>
          </span>



          <div className='flex justify-center xxs:pb-12 xxs:pt-5 mmmxs:pt-0 md:pt-5 md:pb-5'>
            <div className='w-[20%] h-1 bg-beige'></div>
            <div className='w-[80%] h-1 bg-light-blue'></div>

          </div>

          <span className='flex xxs:flex-col justify-center items-center md:flex-row-reverse xxs:w-[95%] xxs:ml-[2.5%] mmmxs:w-[80%] mmmxs:ml-[10%] md:w-[95%] md:ml-[2.5%] sm:w-[70%] sm:ml-[15%] lg:w-[90%] lg:ml-[5%]'>
            <div className='md:w-[500px] lg:w-[600px] '>
              <img
                alt="gallery"
                className="h-full w-full md:rounded-lg sm:rounded-lg object-cover object-center md:w-[500px] lg:w-[600px] md:h-[413px]"
                src={hackprise}
              />
            </div>

            <div className='flex justify-center xxs:relative xxs:top-[-20px] mmmxs:top-[-20px] md:top-[0px] md:right-[-70px] md:w-[350px] lg:w-[470px] lg:right-[-30px]'>
              <Card
                title1="Hack'Prise"
                title2="2.0"
                text="Hack'Prise is an innovative online hackathon fostering interdisciplinary collaboration and creative problem-solving."
                isBlueTitle={false}
              />
            </div>
          </span>
        </div>

      </section>



      <section className="flex flex-col bg-[#1f2029] items-center">
        <span className="flex flex-row items-center pt-8 md:pt-16 pb-10 text-center">
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide'>Event</p>
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#e0ded2] font-bold ml-2 md:ml-5'>Archive</p>
        </span>
        <div className='xxs:w-[80%] xxs:pb-16 w-[90%]  pb-24 carousel-container'>
          <SlickSlider {...settings} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)} className="mx-[1%]">
            {events.map((event, index) => (
              <div key={event.id} className="w-[90%] mr-[2.5%] xxs:mb-5 mb-10 ">
                <ArchiveCard
                  date={event.date}
                  month={event.month}
                  title1={event.title1}
                  title2={event.title2}
                  description={event.description}
                  image={event.image}
                  isActive={index === currentSlide}
                  setShowModal={setShowModal} 
                  />
              </div>
            ))}
          </SlickSlider>
        </div>
      </section> 
      {showModal && (
        <Modal
          event={events[currentSlide]} 
          onClose={() => setShowModal(false)}
        />
      )}






      <section className="bg-[#1f212d]">
        <div className='flex flex-col bg-[#e0ded2] items-center xxs:rounded-tr-[80px] md:rounded-tr-[150px] xl:rounded-tr-[250px]'>
          <p className='font-Montserrat text-2xl sm:text-4xl md:text-6xl text-[#2da2dd] font-bold tracking-wide pt-10'>Gallery</p>
          <p className='text-[#1f212d] text-xs md:text-xl pb-10 text-medium font-Montserrat text-center '>Dive into our gallery and experience the unforgettable moments!</p>
          <div class="container mx-auto xs:px-5 mmmxs:px-5 py-2 lg:px-10 lg:pt-5 lg:pb-16">
            <div class="xxs:flex-col md:flex-row justify-center items-center flex flex-wrap md:m-2">
              <div class="flex xxs:w-[100%] md:w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src={img3} onLoad={lazy}/>
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src={img4} onLoad={lazy}/>
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src={img1} onLoad={lazy}/>
                </div>
              </div>
              <div class="flex xxs:w-[100%] md:w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src={img2} onLoad={lazy}/>
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src={img6} onLoad={lazy} />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full object-cover object-center"
                    src={img5} 
                    onLoad={lazy}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Events;




