"use client";
import Image from "next/image";
import BainSensoriel from "../../assets/bain-sensoriel2.jpg";
import MassageBebe from "../../assets/massage-bebe11.jpg";
import SoulagerMaux from "../../assets/massage-bebe7.jpg";
import MassageYogaBambin from "../../assets/massage-bebe4.jpg";

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
const SoinsBebe = () => {
  const baseSrc = "/img/";

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const soinsbebe = [
    {
      // image: `${baseSrc}massage-bebe3.jpg`,
      image: BainSensoriel,
      title: "Rituel du bain sensoriel",
      prix: "2h - 120€*",
      sentence: "Instants de détente absolue et d'émotions pour vous et votre bébé.",
      description:
        "Instants de détente absolue et d'émotions pour votre bébé et vous. Vous permet de créer du lien et de prendre confiance dans votre rôle. Le bain enveloppé est réalisé ensemble afin que vous puissiez vous l'approprier et le reproduire. Plusieurs outils vous seront présentés pour vous accompagner dans votre parentalité.",
    },
    {
      image: MassageBebe,
      title: "Massage bébé",
      prix: "1h - 55€*",
      sentence: "Découvrir son bébé autrement.",
      description:
        "Découvrir son bébé autrement. Moment de découverte et de douceur familiale. Vous apprendrez les gestes pour apaiser bébé et embellirez votre connexion par le toucher.",
    },
    {
      image: SoulagerMaux,
      title: "Soulager les maux de bébé",
      prix: "1h - 55€*",
      sentence: "Permet de libérer votre tout petit de certains maux.",
      description:
        "Permet de libérer votre tout petit de certains maux. Votre enfant est imprégné de tensions liées à son développement. Vous serez en mesure de reproduire les gestes pour le soulager. ",
    },
    {
      image: MassageYogaBambin,
      title: "Massage/Yoga bambin ",
      prix: "1h - 60€*",
      sentence: "De façon ludique, vous apprendrez des gestes de massage et une initiation au yoga bambin.",
      description:
        "De façon ludique, vous apprendrez des gestes de massage et une initiation au yoga bambin. Un beau moment de partage à poursuivre à la maison.",
    },
  ];
  return (
    <div id="soins-bebe" className="min-h-[1050px]">
      <div className="px-4 pt-40">
        <div className="space-y-2 py-6">
          <div className="max-w-6xl mx-auto space-y-2">
            <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]`}>
              Soins Bébé
            </h2>
          </div>
          <div className="w-fit mx-auto flex flex-wrap justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {soinsbebe.map((soin, index) => (
              <div
                key={index}
                className={`border border-[#fff] rounded-lg p-6 mb-2 bg-rose-poudre w-96 relative flex-shrink-0 ${showDescription[index] ? '' : 'max-h-[450px]' }`}
                style={{ transform: showDescription[index] ? 'scale(1.05)' : 'scale(1)' }}
              >
                <div className="py-4 flex flex-col justify-between items-center text-center">
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
                    {showDescription[index] ? (
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
          <div className="max-w-6xl mx-auto">
            <p className={`${alice.className} italic text-sm`}>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour du RDV</p>
            <br></br>
            <Link href="/formule" className={`${alice.className} button bg-rose-poudre`}>Voir les formules</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SoinsBebe;
