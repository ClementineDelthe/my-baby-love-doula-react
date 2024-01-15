import Clem from "./components/Clem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MarquesPartenaires from "./components/MarquesPartenaires";
import NavBar from "./components/NavBar";
import Soins from "./components/Soins";
import Tarifs from "./components/Tarifs";

export default function Home() {
  return (
    <div>


      {/* <Clem /> */}
      <NavBar />
      <Soins />
      <Tarifs />
      <MarquesPartenaires />
      <Contact />
      <Footer />


    </div>
  );
}
