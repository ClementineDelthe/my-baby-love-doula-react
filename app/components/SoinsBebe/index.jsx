"use client";
import Image from "next/image";
import BainSensoriel from "../../assets/bain-sensoriel2.jpg";
import MassageBebe from "../../assets/massage-bebe11.jpg";
import SoulagerMaux from "../../assets/massage-bebe7.jpg";
import MassageYogaBambin from "../../assets/massage-bebe4.jpg";

import { useState } from "react";
import Link from "next/link";

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
    <div id="soins-bebe" className="bg-[#f3e9e7] min-h-[1050px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight pb-2">
              Soins Bébé
            </h2>
          </div>
          <div className="w-fit mx-auto flex flex-wrap justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {soinsbebe.map((soin, index) => (
              <div
                key={index}
                className={`border border-[#fff] rounded-lg p-6 mb-2 bg-[#F2F3F5] w-80 relative flex-shrink-0 ${showDescription[index] ? '' : 'max-h-[450px]' }`}
                style={{ transform: showDescription[index] ? 'scale(1.05)' : 'scale(1)' }}
              >
                <div className="p-4 flex flex-col  justify-between items-center text-center">
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
                    {showDescription[index] ? (
                      <div>
                        <p className="pb-2">{soin.description}</p>
                        <span className="font-light text-xs">{soin.prix}</span>
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-sm rounded-full py-2 px-3 absolute bottom-1 right-1 border border-[#fff] bg-[#f3e8e6] hover:bg-transparent"
                        >
                          -
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="pb-2">{soin.sentence}</p>
                        <button
                          onClick={() => toggleDescription(index)}
                          className="text-sm rounded-full py-2 px-3 absolute bottom-1 right-1 border border-[#fff] bg-[#f3e8e6] hover:bg-transparent"
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
          <Link href="#formules" className="button-white">Voir les formules</Link>
        </div>
      </div>
    </div>
  );
};

export default SoinsBebe;
