import Clem from "./components/Clem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Tarifs from "./components/Tarifs";
// import Slider from "./components/Marques";
import Gallery from "./components/Gallery";
import Description from "./components/Description";
import Marques from "./components/Marques";
import BackToTopButton from "./components/BackToTopButton";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import SoinsFeminins from "./components/SoinsFeminins";
import SoinsRebozo from "./components/SoinsRebozo";
import SoinsBebe from "./components/SoinsBebe";
import Wave from "./components/Wave";
import NavClem from "./components/NavClem";
import Formules from "./components/Formules";
import Apropos from "./components/Apropos";
config.autoAddCss = false;
import { Comfortaa } from "next/font/google";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import Link from "next/link";

const comfortaa = Comfortaa({
  subsets: ['latin'],
});

const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: ['400'],
});
const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
});



export default function Home() {
  return (
    <div id="total" className={comfortaa.className}>
      <BackToTopButton />
      <NavClem />
      <Apropos />
      <Footer />
    </div>
  );
}
