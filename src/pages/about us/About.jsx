import ImageWithBlock from "./ImageWithBlock";
import { imageBlocks } from "./BE";
import { BEcarousel } from "./BEcarousel";
import eje from "./img/eje.jpg";
import eje4 from "./img/eje4.jpg";
import global from "./img/global.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Valeur from "./Value";
import Valeurs from "./Valeurs";
import { lazy } from "react";

export function About() {
  return (
    <div className="w-[100%] " style={{ background: "#1F2029" }}>
      <div className="w-[100%] h-[600px] md:h-[550px] xxs:h-[450px] " style={{ backgroundImage: `url(${eje4})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <div className="w-[100%] h-[100%]  pt-24 md:pb-24 xxs:pb-12 flex flex-col  items-center justify-center" style={{ backgroundColor: "rgba(31, 32, 41, 0.8)" }} >
          <div className="border p-[1%] pl-4 pr-4 dlg:pr-[3%] dlg:pl-[3%] md:w-[600px] xxs:w-[90vw] mmmxs:w-[80vw] h-28 flex xxs:flex-col xs:flex-row items-center justify-center"
            style={{ backgroundColor: "rgba(31, 32, 41, 0.8)", borderColor: "#2DA2DD", borderWidth: "4px", zIndex: 1, whiteSpace: "pre-line", }}>
            <span
              className="md:text-[55px] font-bold proxima-nova-extrabold xxs:text-3xl mxms:text-5xl text-center"
              style={{ color: "#2DA2DD" }}
            >
              ENSI&nbsp;
            </span>

            <span
              className="md:text-[55px] font-bold proxima-nova-extrabold xxs:text-3xl mxms:text-5xl text-center"
              style={{ color: "#E0DED2" }}
            >
              Junior&nbsp;Enterprise
            </span>
          </div>

        </div>
      </div>



      <div className=" bg-no-repeat relative xs:px-6  xxs:px-4 xxs:py-10 md:px-2 md:pb-16  xxs:rounded-br-[80px] dmd:p-16 md:rounded-br-[100px] xl:rounded-br-[200px] " style={{ backgroundColor: "#E0DED2", backgroundSize: "60%", backgroundPosition: "center", }}>
        <div className=" w-[100%] h-[100%]  relative xxs:rounded-br-[180px] sm:rounded-br-[200px] xxs:grid xxs:grid-cols-1 md:grid md:grid-cols-2 md:gap-y-[30px] ddlg:gap-y-[50px]  md:rounded-br-[200px] dlg:rounded-br-[260px] dxl:rounded-br-[270px] " style={{ backgroundColor: "rgba(224, 222, 210, 0.8)", }}>

          <div className="w-[100%] h-[100%] xxs:relative  flex xxs:flex-col xxs:mt-6 xxs:order-2 md:order-1">
            <div className="xxs:w-[90%] xxs:h-[200px] mmxs:w-[80%] mmxs:h-[250px] mmxs:ml-[10%] mxs:w-[70%] mxs:h-[280px] mxs:ml-[15%] sm:w-[60%] sm:h-[280px] sm:ml-[20%]   md:w-[90%] md:h-[30vw] md:ml-[5%] ddlg:w-[80%] ddlg:ml-[10%] ddlg:h-[25vw] z-10" style={{ backgroundImage: `url(${eje})`, backgroundSize: "cover", backgroundPosition: "center" }} onLoad={lazy}></div>
            <div className="xxs:w-[90%] xxs:h-[200px] mmxs:w-[80%] mmxs:h-[250px] mmxs:ml-[10%] mxs:w-[70%] mxs:h-[280px] mxs:ml-[15%] sm:w-[60%] sm:h-[280px] sm:ml-[20%]  xxs:absolute xxs:top-[15px] xxs:left-4 md:w-[90%] md:h-[30vw] md:ml-[2%] md:left-[-3px] ddlg:w-[80%] ddlg:ml-[10%] ddlg:h-[25vw] ddlg:left-[-15px] top-0 bg-light-blue absolute z-0"></div>
          </div>


          <div className="flex flex-col xxs:w-[100%] xxs:ml-[0%] mxms:px-12 md:px-6  md:w-[100%] ddlg:w-[90%] ddlg:ml-[5%] pl-0 xxs:order-1 md:order-2 " >
            <div className=" h-[100%] flex items-center font-normal font-proxima-nova flex-col  xxs:w-[100%] md:w-[100%] md:text-left " style={{ color: "#1F2029" }}>

              <div className="w-[100%] h-auto xs:mb-[1%] ">
                <span className="  font-proxima-nova-extrabold xxs:text-[40px] xxs:border-b-4 xxs:bor  mmxs:text-[46px] mxs:text-[50px] md:text-[30px] dmd:text-4xl dlg:text-5xl  dxl:text-[3.25rem]   " style={{ color: "#1F2029" }}>About</span>
                <span className="  font-proxima-nova-extrabold xxs:text-[40px] xxs:border-b-4 xxs:bor mmxs:text-[46px] mxs:text-[50px] md:text-[30px] dmd:text-4xl dlg:text-5xl dxl:text-[3.25rem]  " style={{ color: "#2DA2DD" }}>{" "}Us</span>
              </div>

              <p className="w-[100%] text-xl xxs:text-[16px] xxs:m-2 mmxs:text-[18px] mxs:text-[22px] md:text-base ddmd:text-[1rem] lg:text-lg xl:text-xl xl:py-4 dxl:text-2xl" style={{ color: "#1F2029" }}>
                ENSI Junior Enterprise is a student association affiliated with the National School of Computer Science (ENSI). Our mission is to prepare students for the world of business.
                <br />
                <br className="xxs:hidden ddmd:block"/>
                Since 2006, we have gained experience and expertise, always driven by a wide range of know-how, skills, and entrepreneurial spirit. We have successfully earned the satisfaction of our members through educational training, technical projects, and events.
              </p>
            </div>
          </div>



          <div className="flex flex-col xxs:w-[100%]  xxs:ml-[0%] xxs:mt-12  mxms:px-12 md:px-6 md:mt-0 md:w-[100%] ddlg:w-[90%] ddlg:ml-[5%] ml-[10%] pl-0 xxs:order-3 " >
            <div className=" h-[100%] flex items-center font-normal font-proxima-nova flex-col  xxs:w-[100%] md:w-[100%] md:text-left " style={{ color: "#1F2029" }}>

              <div className="w-[100%] h-auto xs:mb-[1%] xxs:pr-4 md:text-left">
                <span className="  font-proxima-nova-extrabold xxs:border-b-4 xxs:bor xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:border-b-4 md:bor md:text-[30px] dmd:text-4xl dlg:text-5xl dxl:text-[3.25rem] " style={{ color: "#1F2029" }}>EJE</span>
                <span className="  font-proxima-nova-extrabold xxs:border-b-4 xxs:bor xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[30px] dmd:text-4xl dlg:text-5xl  dxl:text-[3.25rem]  " style={{ color: "#2DA2DD" }}>{" "}Globally</span>
              </div>

              <p className="w-[100%] text-xl xxs:text-[16px] xxs:m-2 mmxs:text-[18px] mxs:text-[22px] md:text-base ddmd:text-[1rem] lg:text-lg xl:text-xl xl:py-4 dxl:text-2xl" style={{ color: "#1F2029" }}>
               As part of JE Global, EJE engages in cross-border collaborations, international exchange programs, and global events. This membership enables our students to gain invaluable international experience, learn from diverse business practices, and build a worldwide network of peers and mentors.                <br />
                <br className="xxs:hidden ddmd:block" />
                Being part of JE Global enhances EJE's commitment to preparing students for global business challenges, fostering a community of future leaders with a broad, international perspective.    </p>
            </div>
          </div>

          <div className="w-full h-full flex xxs:flex-col xxs:mt-6 xxs:mb-6 xxs:relative xxs:order-4">
            <div className="xxs:ml-[5%] xxs:w-[90%] xxs:h-[200px] mmxs:w-[80%] mmxs:h-[250px] mmxs:ml-[10%] mxs:w-[70%] mxs:h-[280px] mxs:ml-[15%] sm:w-[60%] sm:h-[280px] sm:ml-[20%] md:w-[90%] md:h-[30vw] md:ml-[5%] ddlg:w-[80%] ddlg:ml-[10%] ddlg:h-[25vw] z-10" style={{ backgroundImage: `url(${global})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="xxs:w-[90%] xxs:h-[200px] xxs:absolute xxs:top-[15px]  xxs:left-0 mmxs:w-[80%] mmxs:h-[250px] mmxs:ml-[6%] mxs:w-[70%] mxs:h-[280px] mxs:ml-[12%] sm:w-[60%] sm:h-[280px] sm:ml-[17%]  md:w-[90%] md:h-[30vw] md:ml-[2%] md:left-[28px] ddlg:w-[80%] ddlg:ml-[10%] ddlg:h-[25vw] ddlg:left-[17px] top-0 left-16 bg-light-blue absolute z-0"></div>
          </div> 


        </div>
      </div>
      {/* partie 2 */}



      {/* values */}
      <div
        className=" flex flex-col items-center pt-12  mb-2  xxs:h-[800px] md:h-[450px] md:bg-gradient-pattern-sm dmd:h-[530px] dlg:h-[650px]  "
        style={{
          backgroundSize: "40% 90%, 40% 90%",
          backgroundPosition: "left, right",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1F2029",
        }}
      >
        <div className="text-center">
          <span
            className=" font-bold proxima-nova-extrabold  xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px] "
            style={{ color: "#2DA2DD" }}
          >
            Our
          </span>
          <span
            className=" font-bold proxima-nova-extrabold xxs:text-[40px] mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px]"
            style={{ color: "#E0DED2" }}
          >
            {" "}
            Values
          </span>
        </div>

        <div className="flex justify-center mb-2  max-md:flex-col ">
          {Valeurs.map((values, index) => (
            <Valeur key={index} {...values} />
          ))}
        </div>
      </div>

      {/* BEX */}
      <div
        className="w-full md:flex flex-col items-center justify-center xxs:p-0 xs:p-6 mt-6 shadow xxs:pb-[100px] xxs:rounded-tl-[80px] md:rounded-tl-[150px] xl:rounded-tl-[250px] "
        style={{ background: "#E0DED2" }}
      >
        <div className="text-center xxs:pt-8 xs:pt-0">
          <span
            className=" font-bold proxima-nova-extrabold xxs:text-4xl mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px] "
            style={{ color: "#1F2029" }}
          >
            Executive{" "}
          </span>
          <span
            className=" font-bold proxima-nova-extrabold xxs:text-4xl mmxs:text-[46px] mxs:text-[50px] md:text-[44px] dmd:text-[50px] dlg:text-[58px]  2xl:text-[65px]"
            style={{ color: "#2DA2DD" }}
          >
            Board
          </span>
          <hr
            className="w-[80%] h-[4px] mt-6 left-0 absolute  border-none max-md:h-[3px] "
            style={{ background: "#1F2029", zIndex: 1 }}
          />
          <hr
            className="w-[80%] h-[4px] mt-16 right-0 absolute border-none max-md:h-[3px] max-md:hidden "
            style={{ background: "#2DA2DD", zIndex: 1 }}
          />
        </div>
        {imageBlocks.length === 6 ? (
  <div className="grid gap-y-20 mt-[140px] max-md:hidden mxs:grid-cols-2 mxs:gap-x-16 dmd:grid-cols-3 sm:gap-x-20 dlg:gap-x-32">
    {imageBlocks.map((block, index) => (
      <ImageWithBlock key={index} {...block} />
    ))}
  </div>
) : imageBlocks.length === 7 ? (
  <div className="flex flex-col items-center gap-y-20 mt-[140px] max-md:hidden mxs:grid-cols-2 mxs:gap-x-16 sm:gap-x-26 dlg:gap-x-32">
    <div className="grid grid-cols-3 gap-x-4 w-full max-w-[calc(3*var(--gap-x))] justify-items-center">
      {imageBlocks.slice(0, 3).map((block, index) => (
        <ImageWithBlock key={index} {...block} />
      ))}
      {/* Ajout d'un espace vide pour centrer les éléments s'il y a moins de 3 éléments */}
      {imageBlocks.length < 3 && <div></div>}
    </div>
    <div className="grid grid-cols-2 dlg:grid-cols-4 gap-x-16 w-full max-w-[calc(4*var(--gap-x))] justify-items-center">
      {imageBlocks.slice(3).map((block, index) => (
        <ImageWithBlock key={index + 3} {...block} />
      ))}
    </div>
  </div>
) : (
  <div className="flex flex-col items-center gap-y-20 mt-[140px] max-md:hidden mxs:grid-cols-2 mxs:gap-x-16 sm:gap-x-20 dlg:gap-x-32">
    {/* Cas par défaut ou pour d'autres nombres d'éléments */}
    <div className="grid grid-cols-3 gap-x-4 w-full max-w-[calc(3*var(--gap-x))] justify-items-center">
      {imageBlocks.map((block, index) => (
        <ImageWithBlock key={index} {...block} />
      ))}
    </div>
  </div>
)}

        <BEcarousel />
      </div>


    </div>
  );
}
