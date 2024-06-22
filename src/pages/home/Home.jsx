import Landing from "../../components/Landing";
import Who from "../../components/Who";
import Timeline from "../../components/Timeline";
import Numbers from "../../components/Numbers";
import Services from "../../components/Services";
import Commitment from "../../components/Commitment";
import News from "../../components/News";
import Sponsors from "../../components/Sponsors";
import Carousel from "../../components/Carousel";

export function Home() {
  return (
    <div className='bg-dark-blue overflow-clip font-Monserrat'>
    <Carousel/>
    <Who/>
    <Timeline/>
    <Numbers/>
    <Services/>
    <Commitment/>
    <News/>
    <Sponsors/>
    </div>
  );
}
