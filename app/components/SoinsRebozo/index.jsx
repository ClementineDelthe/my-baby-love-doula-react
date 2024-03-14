"use client";
import Image from "next/image";
import RituelRebozo from "../../assets/rebozo-serrage3.jpg";
import DouceurRebozo from "../../assets/douceur-rebozo.jpg";

import { useState } from "react";

const SoinsRebozo = () => {
  const baseSrc = "/img/";

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const soinsrebozo = [
    {
      // image: `${baseSrc}massage-bebe3.jpg`,
      image: DouceurRebozo,
      title: "Douceur du rébozo",
      prix: "1h 60€",
      sentence: "première phrase",
      description:
        "En postpartum immédiat, avec votre bébé, je vous fais un massage des jambes, ainsi qu'un bain de pieds. Je réalise un serrage du bassin. Un bercement sera proposé pour clôturer le soin. À votre écoute, je vous laisse déposer votre histoire et vous apporte toute ma douceur et empathie.",
    },
    {
      image: RituelRebozo,
      title: "Rituel autour du rebozo ",
      prix: "3h 250€",
      sentence: "première phrase",
      description:
        "Véritable expérience de vie. A réaliser pour marquer une transition, une étape, un cheminement dans votre vie. Transmissions de deux femmes pour une femme. Vous serez choyée, enveloppée d'amour et de chaleur. Lors de ce rituel, vous recevrez un massage à quatre mains, un temps de hammam et un serrage de différentes parties du corps. Ces étapes vous aideront à traverser et à laisser derrière vous, de façon apaisée, ce que vous êtes venu déposer. Durant tout le rituel, nous vous soutiendrons et vous accompagnerons.",
    },
  ];
  return (
    <div className="bg-[#F2F3F5]">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Soins et Rebozo
            </h2>

          </div>
          {soinsrebozo.map((soin, index) => (
            <div
              key={index}
              className="flex border border-[#fff] rounded-lg p-6 mb-2 bg-[#f3e9e7]"
            >
              <div className="p-4 w-full">
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
              <div>
                <Image
                  src={soin.image}
                  alt={soin.title}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoinsRebozo;
