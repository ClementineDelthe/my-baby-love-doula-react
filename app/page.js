import Clem from "./components/Clem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Tarifs from "./components/Tarifs";
// import Slider from "./components/Marques";
import Infos from "./components/Infos";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import Soins from "./components/Formules";
import Marques from "./components/Marques";
import BackToTopButton from "./components/BackToTopButton";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import SoinsFeminins from "./components/SoinsFeminins";
import SoinsRebozo from "./components/SoinsRebozo";
import SoinsBebe from "./components/SoinsBebe";
import Formules from "./components/Formules";
import Wave from "./components/Wave";
import NavBar2 from "./components/NavBAr2";
import NavClem from "./components/NavClem";
config.autoAddCss = false;




export default function Home() {
  return (
    <div>
      <BackToTopButton />
      {/* <NavBar /> */}
      {/* <NavBar2 /> */}
      <NavClem />
      <Description />
      {/* <Infos /> */}
      {/* <Clem /> */}
      <SoinsFeminins />
      {/* <Wave /> */}
      <SoinsRebozo />
      <SoinsBebe />
      <Formules />
      {/* <Soins /> */}
      <Gallery />
      <Tarifs />
      {/* <Marques /> */}
      <Contact />
      <Footer />


    </div>
  );
}
