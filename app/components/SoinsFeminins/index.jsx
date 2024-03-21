"use client";
import Image from "next/image";
import MassageFemmeEnceinte from "../../assets/massage-ventre.jpg";
import MassagePostNatal from "../../assets/massage-dos6.jpg";
import MassageDeesse from "../../assets/massage-deesse.jpg";

import { useState } from "react";
import Link from "next/link";

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
      title: "Massage femme enceinte",
      sentence: "Massage enveloppant redessinant le contour du corps qui évolue.",
      description:
        "Massage enveloppant redessinant le contour du corps qui évolue. Je m'adapte à votre état et physionomie pour vous procurer détente et connexion avec votre corps et votre bébé.",
    },
    {
      image: MassagePostNatal,
      title: "Massage postnatal",
      sentence: "Massage ressourçant, permet de prendre un temps pour soi.",
      description:
        "Massage ressourçant, permet de prendre un temps pour soi, de se réapproprier son corps, réinvestir le vécu de la grossesse et de l'accouchement. Se clôture par un resserrage du bassin.",
    },
    {
      image: MassageDeesse,
      title: "Massage déesse",
      sentence: "Massage pour toutes les femmes.",
      description:
        "Massage pour toutes les femmes. Se veut pour apporter : une détente absolue, soulager les maux féminins (règles, endométriose, ménopause), se recentrer sur soi.",
    },
  ];
  return (
    <div id="soins-feminins" className="bg-[#f3e9e7] min-h-[700px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight pb-2">
              Soins Féminins
            </h2>
            <p className="pb-2">
              Inspiré de l&apos;ayurvédique, je propose des massages du corps
              complet à l&apos;huile chaude, mêlant bercement, serrage, massage
              enveloppant. Véritable rituel, je prends le temps de vous écouter
              dans un cadre bienveillant autour d&apos;une tisane et d&apos;un
              bain de pieds aux plantes.
            </p>
            <p className="text-sm pb-4">
              Rituel de 2H-2H30 dont 1H30 de massage - 120€*
            </p>
          </div>
          <div className="w-fit mx-auto flex flex-wrap justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {soinsfeminins.map((soin, index) => (
              <div
                key={index}
                className={`border border-[#fff] rounded-lg p-6 mb-2 bg-[#F2F3F5] w-80 relative flex-shrink-0 ${showDescription[index] ? '' : 'max-h-[450px]' }`}
                style={{ transform: showDescription[index] ? 'scale(1.05)' : 'scale(1)' }}
              >
                <div className="p-2 flex flex-col  justify-between items-center text-center">
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
          <br></br>
          <Link href="#formules" className="button">Voir les formules</Link>
        </div>
      </div>
    </div>
  );
};

export default SoinsFeminins;
