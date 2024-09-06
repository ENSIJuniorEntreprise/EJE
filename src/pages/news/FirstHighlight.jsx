import  bannerImg  from "/assets/ENSIJE.jpg";
import  image  from "/assets/EJE.jpg";
import { useNavigate } from 'react-router-dom';

function FirstHighLight({ photo, submissionDate, title, description , content }) {
  const navigate = useNavigate(); 
  const handleLearnMoreClick = (item) => {
    navigate('/article', { state: item }); 
  };
  return (
    <div className="h-auto w-[100%] flex flex-col-reverse bg-[#E0DED2] xxs:rounded-bl-[80px] md:rounded-bl-[150px] bl:rounded-tr-[250px] overflow-hidden justify-center items-center lg:flex-row lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] ">
      {/* Partie gauche (texte) */}
      <div className="flex flex-col w-full xxs:px-[5%] xs:px-[10%] xxs:pb-[10%] xs:pb-[5%] bg-[#E0DED3]  lg:justify-start lg:items-start lg:w-[50%] lg:p-[5%] justify-center  font-montserrat">
        <div className="text-xl xxs:hidden md:text-3xl  lg:block lg:text-5xl xl:text-5xl 2xl:text-5xl    text-[#2DA2DD] font-photograph-signature lg:mb-4">
          On the front page
        </div>
        <div className="xxs:hidden lg:block">
        <h2 className="xxs:hidden text-2xl lg:block lg:text-4xl xl:text-5xl 2xl:text-4xl font-semibold  border-[#2eaded] font-proxima-nova-bold text-[#1F2029] " style={{ maxHeight: "calc(1.5em * 4)", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 }}>
          {title}
        </h2>
        </div>
        <div className="bg-[#2DA2DD] xxs:hidden lg:block h-[0.15rem] w-[15vw] mb-4"></div>
        <div className="details text-[#1F2029] mb-2 opacity-[78%] font-montserrat text-lg md:text-xl xl:text-2xl">
          <span>{new Date(submissionDate).toLocaleDateString()}</span>
        </div>
        <p className="description text-[#1F2029]  sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-proxima-nova line-clamp-3">
          {description}
        </p>
        <br />
        <button  onClick={() => handleLearnMoreClick({ photo, submissionDate, title, description , content })}  className="xxs:w-[60%] xxs:ml-[40%] mxs:w-[40%] mxs:ml-[60%] relative overflow-hidden bg-transparent text-center text-[#1F2029] font-bold text-lg lg:text-xl transition duration-300 z-10 py-2 px-4 border-2 border-[#1f20297e] hover:text-black hover:bg-[#2eaded] hover:text-beige font-proxima-nova-bold ">
          Learn more
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-300% bg-[#2eaded] transition duration-500 block z-[-1]"></span>
        </button>
      </div>

      {/* Partie droite (image) */}
      <div className="bg-[#E0DED2] w-full h-full xxs:py-6 lg:py-0 lg:px-0 yxs:h-full lg:h-full lg:flex-1">
      <div className="text-xl xxs:text-5xl xxs:pb-4 xxs:text-center font-photograph-signature lg:hidden sm:text-5xl   text-[#2DA2DD]">
          On the front page
        </div>
        <h2 className="title xxs:pl-4 mxs:max-w-[95%] xxs:text-[1.4rem] mmmxs:pl-8 mxs:text-3xl xsm:pl-[10%] sm:text-4xl xxs:font-proxima-nova-bold md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl  lg:hidden font-semibold  border-[#2eaded] font-montserrat text-[#1F2029] ">
          {title}
        </h2>
        <div className="bg-[#2DA2DD] xxs:ml-4 mmmxs:ml-8 xsm:ml-[10%] h-[0.15rem] xxs:w-[50vw] mmxs:w-[35vw] mxs:w-[25vw] lg:hidden  mb-4"></div>

        <img
          src={photo}
          alt="Description de l'image"
          className="w-full  h-full xs:w-[90%] xs:ml-[5%] xsm:w-[80%] xsm:ml-[10%] lg:w-[100%] lg:ml-[0%] object-cover"
        />
      </div>
    </div>
  );
}

export default FirstHighLight;
