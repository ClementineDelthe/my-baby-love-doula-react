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
      prix: "2h 120€",
      sentence: "première phrase",
      description:
        "Instants de détente absolue et d'émotions pour votre bébé et vous. Vous permet de créer du lien et de prendre confiance dans votre rôle. Le bain enveloppé est réalisé ensemble afin que vous puissiez vous l'approprier et le reproduire. Plusieurs outils vous seront présentés pour vous accompagner dans votre parentalité.",
    },
    {
      image: MassageBebe,
      title: "Massage bébé",
      prix: "1h 55€",
      sentence: "première phrase",
      description:
        "Découvrir son bébé autrement. Moment de découverte et de douceur familiale. Vous apprendrez les gestes pour apaiser bébé et embellirez votre connexion par le toucher.",
    },
    {
      image: SoulagerMaux,
      title: "Soulager les maux de bébé",
      prix: "1h 55€",
      sentence: "première phrase",
      description:
        "Permet de libérer votre tout petit de certains maux. Votre enfant est imprégné de tensions liées à son développement. Vous serez en mesure de reproduire les gestes pour le soulager. ",
    },
    {
      image: MassageYogaBambin,
      title: "Massage/Yoga bambin ",
      prix: "1h 60€",
      sentence: "première phrase",
      description:
        "De façon ludique, vous apprendrez des gestes de massage et une initiation au yoga bambin. Un beau moment de partage à poursuivre à la maison.",
    },
  ];
  return (
    <div className="bg-[#f3e9e7]">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Soins Bébé</h2>
          </div>
          {soinsbebe.map((soin, index) => (
            <div
              key={index}
              className="flex border border-[#fff] rounded-lg p-6 mb-2 bg-[#F2F3F5]"
            >
              <div>
                <Image
                  src={soin.image}
                  alt={soin.title}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div className="p-4 text-right w-full">
                <h3 className="pb-2">{soin.title}</h3>
                {showDescription[index] ? (
                  <div>
                    <p className="pb-2">{soin.description}</p>
                    <button
                      onClick={() => toggleDescription(index)}
                      className="rounded-lg border py-1 px-2"
                    >
                      Voir moins
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="pb-2">{soin.sentence}</p>
                    <button
                      onClick={() => toggleDescription(index)}
                      className="rounded-lg border py-1 px-2"
                    >
                      Voir plus
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <Link href="#formules">Voir les formules</Link>
        </div>
      </div>
    </div>
  );
};

export default SoinsBebe;
