import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import { Comfortaa } from "next/font/google";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import Link from "next/link";
import Gallery from "../components/Gallery";
import { Footer } from "flowbite-react";
import NavClem from "../components/NavClem";
import ML from "../components/ML";
import BackToTopButton from "../components/BackToTopButton";

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



export default function Mentions() {
  return (
    <div id="total" className={comfortaa.className}>
      <BackToTopButton />
      <NavClem />
      <div className="min-h-[130vh]">
        <ML />
        <Footer />

      </div>

    </div>
  );
}
