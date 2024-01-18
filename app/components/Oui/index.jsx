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

const Soins = () => {
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
      title1: "Les soins féminins",
      text2: "Massage du corps, relaxation, soin ayurvediques",
    },
    {
      image: IconSoin2,
      title1: "Les soins avec bébé",
      text2: "Le rituel du bain sensoriel & le massage bébé",
    },
    {
      image: IconSoin3,
      title1: "Le Rebozo",
      text2:
        "Soin autour du Rebozo, de serrage, de reflexion accompagnée par deux femmes, un massage a quatre mains, une période de sudation et un intention spécifique",
    },
    {
      image: IconSoin4,
      title1: "Les soins femme enceinte",
      text2:
        "Massage pré et post natal pour accompagner ou cloturer une grossesse",
    },
    {
      image: IconSoin1,
      title1: "Les soins féminins",
      text2: "Massage du corps, relaxation, soin ayurvediques",
    },
    {
      image: IconSoin2,
      title1: "Les soins avec bébé",
      text2: "Le rituel du bain sensoriel & le massage bébé",
    },
    {
      image: IconSoin3,
      title1: "Le Rebozo",
      text2:
        "Soin autour du Rebozo, de serrage, de reflexion accompagnée par deux femmes, un massage a quatre mains, une période de sudation et un intention spécifique",
    },
    {
      image: IconSoin4,
      title1: "Les soins femme enceinte",
      text2:
        "Massage pré et post natal pour accompagner ou cloturer une grossesse",
    },
  ];

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div id="soins" className="bg-[#F2F3F5]">
      <div className="flex flex-wrap justify-around p-2 min-h-screen">
        {iconContent.map((icon, index) => (
          <div
            key={index}
            className={`w-96 min-h-80 text-center bg-[#f3e9e7] rounded p-6 hover:scale-105 mb-3 ${
              iconStates[index].isFlipped
                ? "transform rotate-y-180 transition-transform duration-2500"
                : "transform rotate-y-180 transition-transform duration-2500"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {iconStates[index].isFlipped ? (
              <div className="">
                <h2>{icon.title1}</h2>
                <p>{icon.text2}</p>
              </div>
            ) : (
              <div className="">
                <Image
                  src={icon.image}
                  alt={icon.title1}
                  width={800}
                  height={800}
                  className=""
                />
                <h2 className="">{icon.title1}</h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soins;
