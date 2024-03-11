"use client";
import {
  Animator,
  FadeIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { useState } from "react";
import IconSoin1 from "../../assets/icon_soin1.png";
import IconSoin2 from "../../assets/icon_soin2.png";
import IconSoin3 from "../../assets/icon_soin3.png";
import IconSoin4 from "../../assets/icon_soin4.png";
import Image from "next/image";

const Formules = () => {
  const [iconStates, setIconStates] = useState([
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
  ]);

  const handleMouseEnter = (index) => {
    setIconStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isFlipped = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setIconStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isFlipped = false;
      return newStates;
    });
  };
  const bebe = ``;

  const iconContent = [
    {
      image: IconSoin1,
      title1: "Parenthèse enchantée",
      prix: "160€",
      text2: "Massage femme enceinte ET Douceur du rebozo",
    },
    {
      image: IconSoin2,
      title1: "Amour pour toujours",
      prix: "210€",
      text2: "Un soin féminin au choix ET Un rituel du bain sensoriel®",
    },
    {
      image: IconSoin3,
      title1: "Tendre découverte",
      prix: "150€",
      text2:
        "4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé",
    },
    {
      image: IconSoin4,
      title1: "Instant infini",
      prix: "240€",
      text2:
        "Rituel du bain sensoriel® photographié. Avec Amélie, Mayä Photographie.",
    },
  ];

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div id="soins" className="bg-[#F2F3F5] contain">
      {/* <div className="flex flex-wrap justify-around columns-3	p-2 min-h-screen"> */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4	p-2 min-h-screen place-items-center">
          {iconContent.map((icon, index) => (
            <div
              key={index}
              className={`min-h-80 text-center w-80 rounded p-6 hover:scale-105 mb-3 ${
                iconStates[index].isFlipped
                  ? "bg-[#F2F3F5] border-[#f3e9e7] border-4 transform rotate-y-180 transition-transform duration-2500"
                  : "bg-[#f3e9e7] transform rotate-y-180 transition-transform duration-2500"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {iconStates[index].isFlipped ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="pb-10 text-2xl">{icon.title1}</h2>
                  <p>{icon.text2}</p>
                </div>
              ) : (
                <div className="">
                  <Image
                    src={icon.image}
                    alt={icon.title1}
                    width={300}
                    height={300}
                    className=""
                  />
                  <h2 className="">{icon.title1}</h2>
                </div>
              )}
            </div>
          ))}
        </div>
        <p><i>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour du RDV</i></p>
      </div>
    </div>
  );
};

export default Formules;
