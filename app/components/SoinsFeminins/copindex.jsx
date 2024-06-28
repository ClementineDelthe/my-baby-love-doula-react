"use client";
import Image from "next/image";
import MassageFemmeEnceinte from "../../assets/massage-ventre.jpg";
import MassagePostNatal from "../../assets/massage-dos6.jpg";
import MassageDeesse from "../../assets/massage-deesse.jpg";


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
        `Une période unique dans la vie d'une femme. La grossesse peut être douce comme difficile à vivre au quotidien. Par le rituel du massage, je vous apporte une écoute bienveillante dans un cadre chaleureux. Le massage vous procurera de multiples bienfaits comme une détente profonde, un assouplissement du corps, une meilleure qualité de sommeil... Il apaisera également votre bébé ! L'ocytocine que vous produisez et la détente que vous aurez se répercuteront bénéfiquement sur votre bébé. Incroyable non ?

        Durant le massage, je prends soin de vous installer confortablement sur le côté avec un coussin d'allaitement. Sur le dos, j'ajuste votre position à l'aide de serviettes roulées, qui viendront vous apporter confort et douceur aux niveaux des jambes.

        Massage réalisable à partir du deuxième trimestre de grossesse jusqu'à la fin.
        Les contre-indications sont : pathologie cardiaque et anomalie de tension ou de fréquence cardiaque, malaise, problème connu... diabète, contractions, grossesse à risque élevé, toutes contre-indication mentionnées par le corps médical.
        Si vous avez un doute, n'hésitez pas à demander l'aval de votre sage-femme ou gynécologue.
        Nous pouvons échanger pour plus de précisions également.`,
    },
    {
      image: MassagePostNatal,
      title: "Massage postnatal",
      sentence: "Massage ressourçant, permet de prendre un temps pour soi.",
      description:
        `L'enfantement vous a apporté votre merveille et c'est le plus beau cadeau qui soit. Cependant, physiquement le corps a subi beaucoup de tension qui met du temps à se remettre de cet évènement... Votre être tout entier à conçu un enfant et s'approprie doucement ces changements.
        Par le rituel du massage, je vous offre un cadre sécurisant et doux pour aborder tous les sujets que vous aurez besoin de me confier. J'écouterais avec empathie et justesse votre histoire, vos maux, vos victoires.
        Le massage ayurvédique rééquilibrera vos énergies, apaisera votre corps qui a tant donné et procurera une parenthèse bienvenue à votre esprit. Il se clôture par un resserrage du bassin, permet d'apaiser les tensions du bassin. Symboliquement et physiquement, cela ferme ce dernier, honore la fin de votre grossesse et célèbre votre nouvelle vie de maman.
        Le massage postpartum est réalisé dès que vous le souhaitez et jusqu'à ce que vous en fassiez la demande même plusieurs années après.
        En cas de césarienne, il est recommandé d'attendre la cicatrisation ou de demander l'avis de votre sage-femme ou gynécologue.`,
    },
    {
      image: MassageDeesse,
      title: "Massage déesse",
      sentence: "Massage pour toutes les femmes.",
      description:
        `Toutes les femmes méritent d'être honorées et célébrées. Ce massage a été conçu pour cela.
        Mêlant le massage ayurvédique, des bercements, des pressions, des mouvements doux et appuyés, vous trouverez réconfort et sérénité.
        Je prends le temps d'accompagner les zones sensibles de votre corps et m'adapte à vos maux féminins pour les soulager.
        Ce massage est réalisable pendant les règles pour justement apaiser les zones de tension comme le dos, les cuisses, le ventre.
        Si vous avez ou avez eu un cancer, ce soin est pour vous également. Cette période nécessite tout l'amour et l'attention que vous pourrez lui procurer. Par mon expérience d'infirmière en cancérologie, je m'appliquerai à lui insuffler toute la douceur et la délicatesse que nécessite votre être dans ce moment.`,
    },
  ];
  return (
    <div id="soins-feminins" className="min-h-[700px]">

      <div className="px-4 pt-36">
        <div className="space-y-2 py-6">
          <div className="max-w-6xl mx-auto space-y-2">
            {/* <h2  className="text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]"> */}
            <h2  className={`${sendFlowers.className} text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]`}>

              Soins Féminins
            </h2>
            <p className="pb-2">
              Inspiré de l&apos;ayurvédique, je propose des massages du corps
              complet à l&apos;huile chaude, mêlant bercement, serrage, massage
              enveloppant. Véritable rituel, je prends le temps de vous écouter
              dans un cadre bienveillant autour d&apos;une tisane et d&apos;un
              bain de pieds aux plantes.
            </p>
            <p className={`${alice.className} text-sm pb-4 font-semibold`}>
              Rituel de 2H-2H30 dont 1H30 de massage - 120€*
            </p>
          </div>
          <div className="w-fit mx-auto flex flex-wrap justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {soinsfeminins.map((soin, index) => (
              <div
                key={index}
                className={`border border-[#fff] rounded-lg p-6 mb-2 bg-[#F5CAC3] w-[550px] relative flex-shrink-0 ${showDescription[index] ? '' : 'max-h-[450px]' }`}
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
                    <h3 className={`${sendFlowers.className} pb-2 font-bold text-[#DD2D4A]`}>{soin.title}</h3>
                    {showDescription[index] ? (
                      <div>
                        <p className="pb-2">{soin.description}</p>
                        <span className="font-light text-xs">{soin.prix}</span>
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
          <br></br>
          <Link href="/formule" className={`${alice.className} button bg-rose-poudre`}>Voir les formules</Link>
        </div>
      </div>
    </div>
  );
};

export default SoinsFeminins;
