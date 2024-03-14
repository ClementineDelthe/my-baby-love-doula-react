"use client";
import Image from "next/image";
import MassageFemmeEnceinte from "../../assets/massage-ventre.jpg";
import MassagePostNatal from "../../assets/massage-dos6.jpg";
import MassageDeesse from "../../assets/massage-deesse.jpg";


import { useState } from "react";

const SoinsFeminins = () => {
  const baseSrc = "/img/";

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const soinsfeminins = [
    {
      // image: `${baseSrc}massage-bebe3.jpg`,
      image: MassageFemmeEnceinte,
      title: "Massage femme enceinte ",
      sentence: "première phrase",
      description:
        "Massage enveloppant redessinant le contour du corps qui évolue. Je m'adapte à votre état et physionomie pour vous procurer détente et connexion avec votre corps et votre bébé.",
    },
    {
      image: MassagePostNatal,
      title: "Massage postnatal",
      sentence: "première phrase",
      description:
        "Massage ressourçant, permet de prendre un temps pour soi, de se réapproprier son corps, réinvestir le vécu de la grossesse et de l'accouchement. Se clôture par un resserrage du bassin.",
    },
    {
      image: MassageDeesse,
      title: "Massage déesse",
      sentence: "première phrase",
      description:
        "Massage pour toutes les femmes. Se veut pour apporter : une détente absolue, soulager les maux féminins (règles, endométriose, ménopause), se recentrer sur soi.",
    },
  ];
  return (
    <div className="bg-[#f3e9e7]">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Soins Féminins
            </h2>
            <p>
              Inspiré de l&apos;ayurvédique, je propose des massages du corps complet
              à l&apos;huile chaude, mêlant bercement, serrage, massage enveloppant.
              Véritable rituel, je prends le temps de vous écouter dans un cadre
              bienveillant autour d&apos;une tisane et d&apos;un bain de pieds aux
              plantes.
            </p>
            <p>
              <strong>Rituel de 2H-2H30 dont 1H30 de massage - 120€*</strong>
            </p>
          </div>
          {soinsfeminins.map((soin, index) => (
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
                  className=""
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
        </div>
      </div>
    </div>
  );
};

export default SoinsFeminins;
