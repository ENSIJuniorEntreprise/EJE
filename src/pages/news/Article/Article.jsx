import Banner from "../Banner";
import  bannerImg from "/assets/ENSIJE.jpg";
import  image from "/assets/EJE.jpg";
import { useLocation } from 'react-router-dom';

export function Article() {
  const location = useLocation();
  const { state } = location;

  console.log(state); 


  let article0 = {
    cover:
      "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/327260744_1253007542241258_2832372787297641473_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Abn_l4vjlP0AX-dugDU&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAdwHGwxDqobndvOcn1nGffDzSxWsNqE5jgenjsUOdaMg&oe=6560D41F",
    publishedAt: "July 24, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  const divStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
  };
  return (
    <div>
      <div className="bg-[#1F2029]">
        <div className="relative h-[300px] w-[100%] flex items-center justify-center xl:h-[500px] lg:h-[400px] md:h-[400px] sm:h-[300px] yxs:h-[250px]">
          <div
            className="opacity-30"
            style={{
              backgroundImage: `url(${state.photo})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {/* Image content */}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#e0ded3] items-center justify-center lg:gap-16 xxs:gap-6">
        <h1 className="title text-4xl md:text-5xl lg:text-6xl font-bold my-8 font-proxima-nova-bold text-center yyxs:text-3xl xxs:text-2xl">
          {state.title}
          <div className="bg-[#2DA2DD] h-1  mt-8 xxs:w-[40%] xxs:ml-[30%] mmmxs:ml-[0%] mmmxs:w-[25%] md:w-[70%]"></div>
        </h1>


        <div className="flex flex-col justify-center items-center gap-[25px] lg:flex lg:flex-row lg:gap-[50px] lg:w-[85%] xl:w-[80%] xl:gap-[35px]">

          {/* image et cadre */}
          <div className="flex flex-col w-full justify-start xxs:items-start lg:items-start relative xxs:w-[80%] xxs:ml-[5%] mmmxs:ml-[20%] sm:items-center sm:ml-[0%] lg:ml-[0%] lg:w-[30%] xl:w-[30%] ">
            <div className="bg-[#2DA2DD] absolute xxs:top-[6vw] lg:top-[20px] w-[400px] h-[400px] xxs:w-[90%] xxs:h-[70vw] mmmxs:w-[70%] mmmxs:h-[54vw] sm:w-[60%] sm:h-[44vw] mdd:w-[50%] mdd:h-[36vw] lg:w-[270px] lg:h-[270px] "></div>
            <div className="w-[400px] relative h-[20px]  lg:ml-[20px] xxs:w-[90%] xxs:h-[80vw] xxs:ml-[5%] mmmxs:w-[70%] mmmxs:h-[60vw] sm:w-[60%] sm:h-[50vw] mdd:w-[50%] mdd:h-[45vw] lg:w-[270px] lg:h-[270px]" style={{ zIndex: 1 }}>
              <img src={image} alt="Banner" className="w-[100%] h-[100%] object-cover" />
            </div>
          </div>





          <div className="w-[80%] p-8 xxs:h-auto  left-0 bg-[#1F2029] h-[200px] lg:w-[70%]  lg:h-[270px] xl:w-[80%]">
            <div className="details text-[#2eaded] font-montserrat md:text-2xl 2xl:text-3xl ">
              <span>{new Date(state.submissionDate).toLocaleDateString()}</span>
            </div>
            <br />
            <p className="description text-[#DFDED2] font-montserrat md:text-2xl 2xl:text-3xl  ">
              {state.description}
            </p>
          </div>

        </div>


        <div className="flex bg-white  bg-opacity-[49%] xxs:w-[85%]    h-auto  xxs:p-6 md:p-16 lg:w-[85%] xl:w-[80%] ">
          <p className="text-[#1F2029] font-proxima-nova-regular md:text-2xl 2xl:text-3xl">
            {state.content}
          </p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
