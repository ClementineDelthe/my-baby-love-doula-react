"use client";
import Image from "next/image";
import RituelRebozo from "../../assets/rebozo-serrage3.jpg";
import DouceurRebozo from "../../assets/douceur-rebozo.jpg";

import { useState } from "react";
import Link from "next/link";

import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";




const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: ['400'],
});
const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
});

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
        `A réaliser en postpartum immédiat, idéalement dans les 15 jours maximum suivant votre accouchement. Dans votre cocon, avec votre bébé, je me faufile discrètement. Un temps pour vous, durant lequel je vous propose un bain de pieds aux plantes, suivi d'un massage des pieds et des jambes ( possibilité de faire une autre zone comme le cou et les épaules).
        Je suis spectatrice des moments de douceur familiale que vous vivez et je serai attentive à votre histoire, votre récit. Une belle manière de libérer votre vécu de fin de grossesse, votre enfantement et vos premiers pas en tant que parent Je réalise un resserrage du bassin pour adoucir votre bassin, vos tensions et douleurs. Cela aide vos organes et vos os à reprendre le chemin vers leur place initial. Par cette parenthèse, on vient clôturer symboliquement la fin de votre grossesse et honorer la mère que vous êtes.`,
    },
    {
      image: RituelRebozo,
      title: "Rituel autour du rebozo ",
      prix: "3h - 250€*",
      sentence:
        "A réaliser pour marquer une transition, une étape, un cheminement dans votre vie.",
      description:
        `Véritable expérience de vie, ce rituel est fait pour toutes les femmes qui souhaitent se sentir honorées et célébrées. Inspirés des rituels traditionnels mexicains et des rites à travers le monde pour célébrer la jeune mère, il permet de marquer holistiquement le passage d'une période de sa vie. Que ce soit pour clôre un chapitre : dernière grossesse, deuil, rupture, fin d'une thérapie psychologique, rémission cancer, ou accompagner une nouvelle voie : nouveau travail, emménagement, mariage, enfantement... les sujets sont vastes et vous appartiennent.
        Lors de ce rituel, vous serez choyée, enveloppée d'amour et de chaleur. Vous recevrez un massage à quatre mains, un temps de hammam et un serrage de différentes parties du corps. Ces étapes vous aideront à traverser et à laisser derrière vous, de façon apaisée, ce que vous êtes venu déposer. Durant tout ce temps, nous vous soutiendrons et vous accompagnerons.`,
    },
  ];
  return (
    <div id="soins-rebozo" className="min-h-screen">

      <div className="max-w-6xl mx-auto px-4 pt-56">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]`}>
              Soins et Rebozo
            </h2>
          </div>
          <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {soinsrebozo.map((soin, index) => (
              <div
                key={index}
                // className="border border-[#fff] rounded-lg p-6 mb-2 bg-[#f3e8e6] w-80 relative"
                className={`border border-[#fff] rounded-lg p-6 mb-2 bg-rose-poudre w-[350px] relative ${expandedCard === index ? '' : 'max-h-[450px]'}`}
                style={{ transform: expandedCard === index ? 'scale(1.05)' : 'scale(1)' }}
              >
                <div className="p-2 flex flex-col flex-grow justify-between items-center text-center">
                  <div className="w-36 h-56">
                    <Image
                      src={soin.image}
                      alt={soin.title}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full shadow-2xl shadow-black"
                    />
                  </div>
                  <div className="py-2 ">
                    <h3 className={`${sendFlowers.className} pb-2 font-bold text-[#DD2D4A]`}>{soin.title}</h3>
                    {expandedCard === index? (
                      <div>
                        <p className="pb-2">{soin.description}</p>
                        <span className={`${alice.className} font-light text-xs`}>{soin.prix}</span>
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-sm rounded-full py-2 px-3 absolute bottom-1 right-1 border border-[#fff] bg-beige hover:bg-transparent"
                        >
                          -
                        </button>
                      </div>
                    ) : (
                      <div>
                        {/* <p className="pb-2">{soin.sentence}</p> */}
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-sm rounded-full py-2 px-3 absolute bottom-1 right-1 border border-[#fff] bg-beige hover:bg-transparent"
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
          <p className={`${alice.className} italic text-sm`}>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour du RDV</p>
          <br></br>
          <Link href="/formule" className={`${alice.className} button bg-rose-poudre`}>Voir les formules</Link>
        </div>
      </div>
    </div>
  );
};

export default SoinsRebozo;
