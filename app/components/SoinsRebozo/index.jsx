"use client";
import Image from "next/image";
import RituelRebozo from "../../assets/rebozo-serrage3.jpg";
import DouceurRebozo from "../../assets/douceur-rebozo.jpg";

import { useState } from "react";
import Link from "next/link";

const SoinsRebozo = () => {
  const baseSrc = "/img/";

  // const [showDescription, setShowDescription] = useState([
  //   { isToggled: false },
  //   { isToggled: false },
  // ]);

  // const toggleDescription = (index) => {
  //   setShowDescription((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };
  // const toggleDescription = (index) => {
  //   console.log(index);
  //   setShowDescription((prevStates) => {
  //     const newStates = [...prevStates];
  //     if (newStates[index].isToggled === false) {
  //       newStates[index].isToggled = true
  //     } else {
  //       newStates[index].isToggled = false;
  //     }
  //     return newStates;
  //   });
  // };

  const [expandedCard, setExpandedCard] = useState({}); // New state to track the expanded card

  const toggleDescription = (index) => {
     if (expandedCard === index) {
       setExpandedCard(false);
     } else {
       setExpandedCard(index);
     }
  };

  // const toggleDescription = (index) => {
  //   console.log(soinsrebozo[index].isToggled);
  //   if (soinsrebozo[index].isToggled === false) {
  //     soinsrebozo[index].isToggled = true;
  //   } else {
  //     soinsrebozo[index].isToggled = false;
  //   }
  //   return soinsrebozo[index].isToggled;
  // }


  const soinsrebozo = [
    {
      // image: `${baseSrc}massage-bebe3.jpg`,
      image: DouceurRebozo,
      title: "Douceur du rébozo",
      prix: "1h - 60€*",
      sentence:
        "En postpartum immédiat, avec votre bébé, je vous fais un massage.",
      description:
        "En postpartum immédiat, avec votre bébé, je vous fais un massage des jambes, ainsi qu'un bain de pieds. Je réalise un serrage du bassin. Un bercement sera proposé pour clôturer le soin. À votre écoute, je vous laisse déposer votre histoire et vous apporte toute ma douceur et empathie.",
    },
    {
      image: RituelRebozo,
      title: "Rituel autour du rebozo ",
      prix: "3h - 250€*",
      sentence:
        "A réaliser pour marquer une transition, une étape, un cheminement dans votre vie.",
      description:
        "Véritable expérience de vie. A réaliser pour marquer une transition, une étape, un cheminement dans votre vie. Transmissions de deux femmes pour une femme. Vous serez choyée, enveloppée d'amour et de chaleur. Lors de ce rituel, vous recevrez un massage à quatre mains, un temps de hammam et un serrage de différentes parties du corps. Ces étapes vous aideront à traverser et à laisser derrière vous, de façon apaisée, ce que vous êtes venu déposer. Durant tout le rituel, nous vous soutiendrons et vous accompagnerons.",
    },
  ];
  return (
    <div id="soins-rebozo" className="bg-[#F2F3F5] min-h-[600px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight pb-2">
              Soins et Rebozo
            </h2>
          </div>
          <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {soinsrebozo.map((soin, index) => (
              <div
                key={index}
                // className="border border-[#fff] rounded-lg p-6 mb-2 bg-[#f3e8e6] w-80 relative"
                className={`border border-[#fff] rounded-lg p-6 mb-2 bg-[#f3e8e6] w-80 relative ${expandedCard === index ? '' : 'max-h-[450px]'}`}
                style={{ transform: expandedCard === index ? 'scale(1.05)' : 'scale(1)' }}
              >
                <div className="p-2 flex flex-col flex-grow justify-between items-center text-center">
                  <div className="w-36 h-56">
                    <Image
                      src={soin.image}
                      alt={soin.title}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full rounded-full shadow-2xl shadow-black"
                    />
                  </div>
                  <div className="py-2 ">
                    <h3 className="pb-2 font-bold">{soin.title}</h3>
                    {expandedCard === index? (
                      <div>
                        <p className="pb-2">{soin.description}</p>
                        <span className="font-light text-xs">{soin.prix}</span>
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-sm rounded-full py-2 px-3 absolute bottom-1 right-1 border border-[#fff] bg-[#F2F3F5] hover:bg-transparent"
                        >
                          -
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="pb-2">{soin.sentence}</p>
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-sm rounded-full py-2 px-3 absolute bottom-1 right-1 border border-[#fff] bg-[#F2F3F5] hover:bg-transparent"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="italic text-sm">*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour du RDV</p>
          <br></br>
          <Link href="#formules" className="button">Voir les formules</Link>
        </div>
      </div>
    </div>
  );
};

export default SoinsRebozo;
