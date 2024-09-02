import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import { Comfortaa } from "next/font/google";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import Link from "next/link";
import Tarifs from "../components/Tarifs";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import NavClem from "../components/NavClem";

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



export default function Tarif() {
  return (
    <div id="total" className={comfortaa.className}>
      <BackToTopButton />
      <NavClem />
      <Tarifs />
      <Footer />

    </div>
  );
}
