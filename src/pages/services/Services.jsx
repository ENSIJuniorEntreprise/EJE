import { useState } from "react";
import  bannerImg  from "/assets/photoo.jpg";
import Testemonie from "./Testemonie";
import ServiceComponent from "./ServiceComponent";
import DownloadButton from "./DownloadButton";
import ContactButton from "./ContactButton";
import { useParams,useNavigate } from "react-router-dom";
import web from "/assets/web.jpg"
import mobile from "/assets/Mobile App.jpg"
import chatbot from "/assets/chatbot.jpg"
import Desktop from "/assets/Desktop.jpg"



export function Services() {
  const { serviceId } = useParams();
  console.log(serviceId)
  const navigate = useNavigate();


  // Background pour le banner //
  const divStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const Services = [
    { id:0, text: "web development" },
    { id:1, text: "mobile development" },
    { id:2, text: "Chatbot" },
    { id:3, text: "Desktop application" },
  ];

  const onHover = (event) => {
    event.currentTarget.style.flex = "2";
    // event.currentTarget.querySelector("span").style.transform = "rotate(0)";
  };

  const onHoverOut = (event) => {
    event.currentTarget.style.flex = "1";
    // event.currentTarget.querySelector("span").style.transform =
    //   "rotate(-90deg)";
  };

  const [selectedParagraph, setSelectedParagraph] = useState(parseInt(serviceId));
  const [selectedServiceId, setSelectedServiceId] = useState(parseInt(serviceId)); // Initialize with the serviceId from the URL


  const onClickP = (index) => {

    setSelectedParagraph((prevSelected) =>
      prevSelected === index ? index : index
    );
    setSelectedServiceId(index); // Update the selected service ID

    navigate(`/services/${[index]}`);

  };

   // Find the selected service based on the serviceId
   const selectedService = Services.find((service) => service.id === selectedServiceId);
   // If no matching service is found, handle it accordingly
   if (!selectedService) {
     return <div>Service not found</div>;
   }


   const data = [
    {
        id: "1",
        title: "Web Development",
        subtitle: "We Are Leaders in Web Development",
        content:
            "Transform your digital presence with our cutting-edge web development services. We deliver innovation and quality that sets you apart. From responsive design to e-commerce integration, our custom solutions ensure your success online.",
        image: web,
        features: [
            "Responsive Design",
            "SEO Optimization",
            "Custom Solutions",
            "E-commerce Integration"
        ],
        callToAction: "Contact us to build your dream website today!"
    },
    {
        id: "2",
        title: "Mobile Development",
        subtitle: "Your Vision, Our Innovation",
        content:
        "Take your business mobile with our expert development services. We create high-performance, user-friendly apps that engage your audience and enhance your brand's reach.",
        image: mobile,
        features: [
            "Cross-Platform Compatibility",
            "User-Friendly Interfaces",
            "High Performance",
            "Secure & Scalable"
        ],
        callToAction: "Get started on your mobile app journey today!"
    },
    {
        id: "3",
        title: "Chatbot Agent",
        subtitle: "Enhance Customer Engagement",
        content:
        "Revolutionize customer interactions with our intelligent chatbot solutions. Our chatbots provide personalized operations, and boost customer satisfaction.",
        image: chatbot,
        features: [
            "AI-Powered Conversations",
            "Personalized Responses",
            "Multi-Platform Integration",
            "Analytics & Insights"
        ],
        callToAction: "Empower your customer service with our chatbot solutions!"
    },
    {
        id: "4",
        title: "Desktop Development",
        subtitle: "Robust Solutions for Your Business",
        content:
            "Elevate your business operations with our comprehensive desktop development services. Create powerful, efficient, and user-friendly desktop applications tailored to your needs.",
        image: Desktop,
        features: [
            "Custom Software Development",
            "High Performance",
            "User-Friendly Interfaces",
            "Maintenance & Support"
        ],
        callToAction: "Let's build the perfect desktop application for you!"
    }
];

const testemonieParts = [
  {
    id: "2",
    bannerImg: bannerImg,
    name: "Jane Smith",
    description:
      "Working with the association was a breeze! Their attention to detail and commitment made our mobile app development project a success. Highly recommended.",
  },
  {
    id: "3",
    bannerImg: bannerImg,
    name: "David Wilson",
    description:
      "ENSI Junior Enterprise's expertise in web development is unmatched. They created a responsive, SEO-optimized website for us that has significantly boosted our online presence and customer engagement.",
  },
  {
    id: "4",
    bannerImg: bannerImg,
    name: "Sarah Martinez",
    description:
      "I'm thrilled with the service provided by ENSI Junior Enterprise. Their team is knowledgeable, responsive, and dedicated to delivering high-quality solutions. I look forward to working with them again.",
  },
  {
    id: "1",
    bannerImg: bannerImg,
    name: "John Doe",
    description:
      "I was amazed by the professionalism and quality of service provided by the team at the organisation. They transformed our website into a modern, user-friendly platform that exceeded our expectations.",
  },
];


  return (
    <div className="bg-[#1F2029]" id={`service`}>
      <div
        className=" w-[100%] flex items-center justify-center md:h-[550px] xxs:h-[450px] "
        style={divStyle}
      >
                <div
          className="w-[100%] h-[100%] flex justify-center items-center text-center "
          style={{ backgroundColor: "rgba(31, 32, 41, 0.8)" }}
        >
          <div
            className="border  p-[1%] pl-4 pr-4 dlg:pr-[3%] dlg:pl-[3%] md:w-[600px] xxs:w-[90vw] mmmxs:w-[80vw] h-28 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(31, 32, 41, 0.8)",
              borderColor: "#2DA2DD",
              borderWidth: "4px",
              zIndex: 1,
              whiteSpace: "pre-line",
            }}
          >
            <span
              className="md:text-[55px] font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl text-center"
              style={{ color: "#2DA2DD" }}
            >
              What&nbsp;
            </span>

          
            <span
              className="md:text-[55px] font-bold proxima-nova-extrabold xxs:text-4xl mxs:text-5xl text-center"
              style={{ color: "#E0DED2" }}
            >
              We&nbsp;Do&nbsp;!
            </span>
            
            
          </div>
        </div>
      </div>
      {/*  done*/}

      <div className="bg-[#E0DED2] xxs:rounded-br-[80px] md:rounded-br-[150px] xl:rounded-br-[250px] pb-11">
        <div className=" flex flex-col p-4  items-center ">
          <div className="md:text-5xl text-4xl font-semibold text-[#1F2029]">
            <span className="text-[#2DA2DD]">Our&nbsp;</span>Services
          </div>
          {/* <h2 className="text-xl font-extralight text-[#1F2029] pt-1">
            Discover the core of our services
          </h2> */}
        </div>

        {/* done */}

        <div className="border-t-[3px] border-black w-9/12"></div>


        {/* partie services */}
        <div className="lg:flex justify-center lg:gap-8 xl:gap-32 ">
          <ServiceComponent
            paragraphs={Services}
            onClickP={onClickP}
            onHover={onHover}
            onHoverOut={onHoverOut}
            parag={data[selectedParagraph]}
            index={serviceId}
          />

          <div className="xxs:hidden sm:block">
            {data.map((item, index) => (
              <div
                className=" flex-col items-center justify-center gap-7 pl-10 pr-10 mt-10 "
                style={{
                  display: selectedParagraph === index ? "flex" : "none",
                }}
              >
                <div className="pt-1 relative">
                  <div className="bg-[#2DA2DD] sm:w-[450px] w-72 h-72 absolute  sm:right-[-0px] right-[-10px] "></div>
                  <img
                    src={item.image}
                    style={{ objectFit: 'cover' }}
                    alt="Banner"
                    className="sm:w-[450px] w-72 h-72 relative top-[25px] right-[30px]" />
                </div>
                <div key={index} className="flex-col sm:w-[500px]">
                  <h2 className="pb-2 pt-2 text-[#2DA2DD] font-bold text-xl">
                    {item.title}
                  </h2>
                  <h1 className="font-extrabold text-[#1F2029] pb-3 ">
                    {item.subtitle}
                  </h1>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* partie temoignages */}
      <div className=" flex flex-col justify-center items-center ">
        {/* titre  */}
        <div className=" flex text-center justify-center mt-6">
          <div className="sm:text-5xl text-4xl font-semibold text-[#2DA2DD]">
            Testimonials
          </div>
        </div>
        <div className=" sm:grid justify-center mt-20 gap-20 xl:gap-x-44 xl:gap-y-16 sm:grid-cols-2 flex flex-col px-5">
          {testemonieParts.map((part, index) => (
            <Testemonie
              key={index}
              bannerImg={part.bannerImg}
              name={part.name}
              description={part.description}
            />
          ))}
        </div>
      </div>

      {/* partie contact */}
      <div className="bg-[#E0DED2] mt-24 pt-10 pb-16 xxs:rounded-tl-[80px] md:rounded-tl-[150px] xl:rounded-tl-[250px]" >
        {/* titre */}
        <div className="flex flex-col items-center">
          <div className="xxs:mt-[20px] sm:text-5xl text-4xl  font-semibold text-[#1F2029]">
            <span className="text-[#2DA2DD]">Dive </span>Deeper
          </div>
          <h2 className="xxs:text-lg text-xl  font-semibold text-[#1F2029] pt-1">
            Discover the core of our service
          </h2>
        </div>

        {/* 2éme partie */}

        <section className=' xl:w-[90%] xl:ml-[5%] flex flex-col justify-center font-proxima-nova items-center bg-beige h-fit gap-16 p-4'>
          <div className='grid md:grid-cols-2 gap-2'>
            <div className='bg-dark-blue flex flex-col justify-center items-center gap-3 text-beige p-4 lg:p-8'><h1 className='text-3xl'>Our Portfolio</h1>
              <p className='opacity-90 text-center'>Discover the core of our services</p>
            </div>

            <div className=' border-[3px] border-gradient-dark-blue flex justify-center items-center gap-5 px-8 font-medium md:row-start-2'>
            <DownloadButton />
            </div>

            <div className='bg-light-blue flex flex-col justify-center items-center gap-3 text-beige p-4 lg:p-8'>
              <h1 className='text-3xl'>Work With Us</h1>
              <p className='opacity-90 text-center'>Lorem ipsum dolor sit amet</p>
            </div>

            <div className=' border-[3px] border-gradient-blue flex items-center justify-center gap-5 px-8 font-medium' >
              <ContactButton/>

            </div>

          </div>
        </section>
      </div>
    </div>
  );
}


