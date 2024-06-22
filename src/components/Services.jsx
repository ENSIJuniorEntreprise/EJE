import React from 'react';
import Button from "../components/Button";
import { Link } from 'react-router-dom';
const items = [
  {
    id: "0",
    icon:'M53.4688 0H5.53125C2.47754 0 0 2.31439 0 5.16701V43.0584C0 45.911 2.47754 48.2254 5.53125 48.2254H53.4688C56.5225 48.2254 59 45.911 59 43.0584V5.16701C59 2.31439 56.5225 0 53.4688 0ZM53.4688 42.4125C53.4688 42.7678 53.1576 43.0584 52.7773 43.0584H6.22266C5.84238 43.0584 5.53125 42.7678 5.53125 42.4125V17.2234H53.4688V42.4125Z',
    title: 'Web Development',
    description:
    'We craft digital experiences that spring to life within the browser!',
    borderStyle:'border-gradient-beige',
  },
  {
    id: "1",
    icon:'M35.7 0H6.3C2.82187 0 0 2.56084 0 5.71721V55.2664C0 58.4228 2.82187 60.9836 6.3 60.9836H35.7C39.1781 60.9836 42 58.4228 42 55.2664V5.71721C42 2.56084 39.1781 0 35.7 0ZM21 57.1721C18.6769 57.1721 16.8 55.4689 16.8 53.3607C16.8 51.2524 18.6769 49.5492 21 49.5492C23.3231 49.5492 25.2 51.2524 25.2 53.3607C25.2 55.4689 23.3231 57.1721 21 57.1721ZM35.7 44.3084C35.7 45.0945 34.9912 45.7377 34.125 45.7377H7.875C7.00875 45.7377 6.3 45.0945 6.3 44.3084V7.14652C6.3 6.3604 7.00875 5.71721 7.875 5.71721H34.125C34.9912 5.71721 35.7 6.3604 35.7 7.14652V44.3084Z',
    title: 'Mobile Application',
    description:
    'We develop mobile applications that breathe life into digital interactions!',
    borderStyle:'border-gradient-blue',
  },
  {
    id: "2",
    icon:'M16.8806 18.9283C14.8066 18.9283 13.1311 20.4662 13.1311 22.3698C13.1311 24.2734 14.8066 25.8113 16.8806 25.8113C18.9545 25.8113 20.6301 24.2734 20.6301 22.3698C20.6301 20.4662 18.9545 18.9283 16.8806 18.9283ZM30.0039 18.9283C27.9299 18.9283 26.2544 20.4662 26.2544 22.3698C26.2544 24.2734 27.9299 25.8113 30.0039 25.8113C32.0778 25.8113 33.7534 24.2734 33.7534 22.3698C33.7534 20.4662 32.0778 18.9283 30.0039 18.9283ZM43.1272 18.9283C41.0532 18.9283 39.3777 20.4662 39.3777 22.3698C39.3777 24.2734 41.0532 25.8113 43.1272 25.8113C45.2011 25.8113 46.8767 24.2734 46.8767 22.3698C46.8767 20.4662 45.2011 18.9283 43.1272 18.9283ZM30.0039 0C13.4357 0 0.00777652 10.0126 0.00777652 22.3698C0.00777652 27.489 2.33951 32.1781 6.20619 35.953C4.46032 40.1903 0.827983 43.7824 0.769397 43.8254C-0.00394072 44.5782 -0.214851 45.6752 0.230404 46.6216C0.675659 47.5681 1.69506 48.1811 2.81991 48.1811C10.026 48.1811 15.7089 45.4171 19.1186 43.2016C22.5049 44.1803 26.1606 44.7396 30.0039 44.7396C46.5721 44.7396 60 34.7269 60 22.3698C60 10.0126 46.5721 0 30.0039 0ZM30.0039 39.5773C26.8754 39.5773 23.782 39.1364 20.8176 38.276L18.1578 37.5017L15.8729 38.9858C14.1973 40.072 11.9008 41.2873 9.1355 42.1047C9.99086 40.8033 10.8228 39.3407 11.4672 37.7813L12.7093 34.7592L10.2955 32.4147C8.17469 30.339 5.63205 26.9083 5.63205 22.3698C5.63205 12.8841 16.5642 5.16226 30.0039 5.16226C43.4436 5.16226 54.3757 12.8841 54.3757 22.3698C54.3757 31.8554 43.4436 39.5773 30.0039 39.5773Z',
    title: 'Agent Chatbot',
    description:
    'we create agent chatbots that infuse digital interactions with vitality!',
    borderStyle:'border-gradient-beige',
  },
  {
    id: "3",
    icon:'M48.5833 0H4.41667C1.9783 0 0 2.01733 0 4.5038V34.5291C0 37.0156 1.9783 39.0329 4.41667 39.0329H22.0833L20.6111 43.5367H13.9861C12.7623 43.5367 11.7778 44.5407 11.7778 45.7886C11.7778 47.0365 12.7623 48.0405 13.9861 48.0405H39.0139C40.2377 48.0405 41.2222 47.0365 41.2222 45.7886C41.2222 44.5407 40.2377 43.5367 39.0139 43.5367H32.3889L30.9167 39.0329H48.5833C51.0217 39.0329 53 37.0156 53 34.5291V4.5038C53 2.01733 51.0217 0 48.5833 0ZM47.1111 33.0278H5.88889V6.00506H47.1111V33.0278Z',
    title: 'Desktop Application',
    description:
    'We engineer desktop applications that invigorate digital experiences!',
    borderStyle:'border-gradient-blue',
    hover:'hover:bg-gradient-light-blue'
  },
  
]

function Service(props){
  const { id,icon, title, description, borderStyle} = props;
  const handleClick = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  return (
    <Link to={`/services/${id}`} onClick={handleClick} className='hover:bg-dark-blue hover:scale-105'>
    <div className={`xxs:p-2 xxs:pb-15 xxxs:p-2 flex flex-col items-center font-proxima-nova border-[3px] p-7 dxl:w-[20vw] gap-5 ${borderStyle} `}>
      <div className='flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width='50' height='70' viewBox='0 0 60 50'>
          <path d={`${icon}`} fill="#DFDED2"></path></svg></div>
      <h2 className='text-light-blue font-medium text-2xl font-gilroy-extrabold'>{title}</h2>
      <p className='text-beige opacity-90 text-center text-xl'>{description}</p>
      <div className='h-6 '></div>
    </div>
    </Link>
  )
}

function Services() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
<section className='xxs:px-4 xxxs:px-8 dark-blue-gradient flex flex-col justify-center items-center gap-[75px] py-[50px]'>
      <div className='xxs:mt-4 xxs:text-5xl text-beige font-proxima-nova-bold xl:text-7xl'><span className='text-light-blue font-proxima-nova-bold'>Our </span>services</div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-5 justify-center'>
        {items.map((item, index) => (
          <Service
            key={index}
            id={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            borderStyle={item.borderStyle}
          />
        ))}
      </div>
      <Link to='services/0' id='pageService' onClick={handleClick}>
      <Button bc='border-beige' tc='text-beige' bgc='bg-beige-400' className="whitespace-nowrap hover:bg-beige hover:text-dark-blue">Learn more</Button>
      </Link>
    </section>
  );
}


export default Services