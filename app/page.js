import Clem from "./components/Clem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Soins from "./components/Soins";
import Tarifs from "./components/Tarifs";
import Slider from "./components/Marques";
import Infos from "./components/Infos";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import Oui from "./components/Oui";
import Marques from "./components/Marques";



export default function Home() {
  return (
    <div>
      {/* <Slider />
      <Clem /> */}
      <NavBar />
      <Description />
      <Infos />
      <Oui />
      {/* <Soins /> */}
      <Gallery />
      <Tarifs />
      <Marques />
      <Contact />
      <Footer />


    </div>
  );
}
