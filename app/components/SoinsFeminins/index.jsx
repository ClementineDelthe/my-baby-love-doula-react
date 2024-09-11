"use client";
import Image from "next/image";
import MassageFemmeEnceinte from "../../assets/massage-ventre.jpg";
import MassagePostNatal from "../../assets/massage-dos6.jpg";
import MassageDeesse from "../../assets/massage-deesse.jpg";
import MassageEnergetique from "../../assets/massage_energetique.jpeg"


import { useState } from "react";
import Link from "next/link";

import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import { Homemade_Apple } from 'next/font/google';


const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: ['400'],
});
const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
});
const homemadeApple = Homemade_Apple({
  subsets: ['latin'],
  weight: '400',
});

const SoinsFeminins = () => {
  const baseSrc = "/img/";

  const [showDescription, setShowDescription] = useState({});
  const [showSoinEnceinte, setShowSoinEnceinte] = useState(false);
  const toggleSoinEnceinte = () => {
    if(showSoinEnceinte === false) {
      setShowSoinEnceinte(true);
    } else {
      setShowSoinEnceinte(false);
    }
  }
  const [showSoinDeesse, setShowSoinDeesse] = useState(false);
  const toggleSoinDeesse = () => {
    if(showSoinDeesse === false) {
      setShowSoinDeesse(true);
    } else {
      setShowSoinDeesse(false);
    }
  }
  const [showSoinEnergetique, setShowSoinEnergetique] = useState(false);
  const toggleSoinEnergetique = () => {
    if(showSoinEnergetique === false) {
      setShowSoinEnergetique(true);
    } else {
      setShowSoinEnergetique(false);
    }
  }

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
        photo: "bg-massage-femme-enceinte",
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
        photo: "bg-massage-postnatal",
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
        Si vous avez ou avez eu un cancer, ce soin est pour vous également. Cette période nécessite tout l'amour et l'attention que vous pourrez lui procurer. Par mon expérience d'infirmière en cancérologie, je m'appliquerai à lui insuffler toute la douceur et la délicatesse que nécessite votre être dans ce moment.`,
        photo: "bg-massage-deesse",
    },
  ];
  return (
    <div id="soins-feminins" className="min-h-screen">
    <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
      <div className="space-y-2 py-6">
        <div className="space-y-2">
          <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]`}>
            Soins Feminins
          </h2>
          <p className={`${alice.className} pb-2 `}>
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
        {/* <div className="mx-auto justify-items-center justify-center mt-10 mb-5">
          {soinsfeminins.map((soin, index) => (
            <div
              key={index}
              className="p-6 mb-2 w-full"
            >
              <div className="p-2 flex flex-col flex-grow justify-between items-center text-center w-full">
                <div className={`w-full ${soin.photo} bg-cover bg-center flex items-center justify-center text-[#OOO] pt-40 opacity-85 cursor-pointer rounded-lg`}
                onClick={() => toggleDescription(index)}
                >
                  <h3 className={`${sendFlowers.className} pb-2 font-extrabold text-lg bg-[#FFF] rounded-md m-1 p-2 opacity-85 hover:opacity-100`}>{soin.title}</h3>
                </div>
                <div className="py-2 w-full">
                  {showDescription[index] &&
                    <div>
                      <p className="py-4 text-justify">{soin.description}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          ))}
        </div> */}
        {/* <div className="mx-auto justify-items-center justify-center mt-10 mb-5">
          {soinsfeminins.map((soin, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between"
            >
              <Image
                src={soin.image}
                alt="Massage énergétique"
                width={200}
                height={300}
                className="h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
              <div className="px-4 md:px-10">
                <div>
                  <h3 className={`${sendFlowers.className} pb-2 font-extrabold text-lg bg-[#FFF] rounded-md m-1 p-2 opacity-85 hover:opacity-100`}>{soin.title}</h3>
                </div>
                <div className="py-2 w-full">
                  <div>
                    <p className="py-4 text-justify">{soin.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 min-h-[300px]">
            <Image
                src={MassageEnergetique}
                alt="Massage énergétique"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className="mb-2">Massage énergétique crânien et dos</h3>
            <p className={`${homemadeApple.className} mb-2`}>“Véritable ode à la détente et à la revitalisation.”</p>
            <button onClick={toggleSoinEnergetique} className={`${alice.className} button bg-rose-poudre border-none mb-2`}>{showSoinEnergetique === true ? "Voir moins" : "Voir plus"}</button>
            {
              (showSoinEnergetique === true) &&
              <p className="text-sm">
                En combinant des mouvements doux et appuyés, je stimule les points énergétiques situés sur le crâne et le long de la colonne vertébrale, libérant ainsi les tensions accumulées et rétablissant l'harmonie du corps et de l'esprit. Les bienfaits de ce massage sont nombreux dont apporter une sensation générale de sérénité.
                Que ce soit en fin de journée pour évacuer le stress ou en début de journée pour se recharger en énergie, le massage énergétique crânien et dos est une pratique qui s'adapte à tous les besoins. Chaque séance devient un moment unique de relaxation profonde et de renouvellement intérieur.
                Combiné avec des pierres de lithothérapie, ce massage prend une dimension d&apos;autant plus holistique et apaisante. Les pierres, choisies pour leurs propriétés énergétiques spécifiques et vos besoins, sont placées stratégiquement sur le corps pour amplifier les effets du massage.
                Venez vous offrir une expérience riche et complète, permettant de retrouver un état de paix intérieure. Les bienfaits se font sentir bien au-delà de la séance. Une véritable invitation à prendre soin de soi.
              </p>
            }
          </div>
        </div>

        <div className="md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 md:min-h-[400px]">
            <Image
                src={MassageDeesse}
                alt="Massage Déesse"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className="mb-2">Massage déesse</h3>
            <p className={`${homemadeApple.className} mb-2`}>“Toutes les femmes méritent d'être honorées et célébrées.”</p>
            <button onClick={toggleSoinDeesse} className={`${alice.className} button bg-rose-poudre border-none mb-2`}>{showSoinDeesse === true ? "Voir moins" : "Voir plus"}</button>
            {
              (showSoinDeesse === true) &&
              <p className="text-sm">
                Ce massage a été conçu pour cela. Mêlant le massage ayurvédique, des bercements, des pressions, des mouvements doux et appuyés, vous trouverez réconfort et sérénité. Je prends le temps d'accompagner les zones sensibles de votre corps et m'adapte à vos maux féminins pour les soulager. Ce massage est réalisable pendant les règles pour justement apaiser les zones de tension comme le dos, les cuisses, le ventre. Si vous avez ou avez eu un cancer, ce soin est pour vous également. Cette période nécessite tout l'amour et l'attention que vous pourrez lui procurer. Par mon expérience d'infirmière en cancérologie, je m'appliquerai à lui insuffler toute la douceur et la délicatesse que nécessite votre être dans ce moment délicat. Mon objectif est de créer un espace où vous pouvez vous détendre complètement et vous reconnecter avec votre corps. Chaque geste est pensé pour vous offrir un cocon de bien-être, loin du stress quotidien.
                Cette approche holistique ne se limite pas à l'apaisement physique ; elle vise également à nourrir votre esprit et votre âme. En utilisant une huile chaude, biologique, elle vous enveloppera, ajoutant une dimension supplémentaire à votre expérience de relaxation.
                Vous êtes invitée à vous abandonner à ce moment de pure détente, où chaque pression et chaque mouvement sont destinés à harmoniser votre énergie et à revitaliser votre être tout entier. Parce que vous méritez de vous sentir bien dans votre peau, de vous sentir forte et aimée.
                Prenez soin de vous, car votre bien-être est précieux.
              </p>
            }
          </div>
        </div>
        <div className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-80 py-5">
          <div className="md:w-1/5">
            <Image
                src={MassageFemmeEnceinte}
                alt="Massage Femme Enceinte"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 text-left md:w-4/5">
            <h3 className="mb-2">Massage femme enceinte</h3>
            <p className={`${homemadeApple.className} mb-2`}>“Une période unique dans la vie d'une femme.”</p>
            <button onClick={toggleSoinEnceinte} className={`${alice.className} button bg-rose-poudre border-none mb-2`}>{showSoinEnceinte === true ? "Voir moins" : "Voir plus"}</button>
            {
              (showSoinEnceinte === true) &&
            <p className="text-sm ">
              La grossesse peut être douce comme difficile à vivre au quotidien. Par le rituel du massage, je vous apporte une écoute bienveillante dans un cadre chaleureux. Un temps de pause dans votre quotidien pour vous recentrer et profiter pleinement de ce que vous êtes en train de vivre. Je porte une attention particulière à chaque détail pour que vous vous sentiez en sécurité et enveloppée de bien-être. Le massage se réalise au sol, sur un matelas épais et confortable. Installée sur le côté vous aurez un coussin d'allaitement. Sur le dos, j'ajuste votre position à l'aide de serviettes roulées, qui viendront vous apporter confort et douceur aux niveaux des jambes. Les huiles utilisées sont spécialement sélectionnées pour leurs propriétés apaisantes et sécuritaires pour la grossesse. Elles sont délicatement chauffées pour offrir une sensation de chaleur réconfortante sur votre peau.
              Le massage commence par des mouvements doux et enveloppants, favorisant la circulation sanguine et lymphatique. Je m'attarde sur les points de tension, souvent présents dans le dos, les épaules et les jambes, pour libérer les nœuds et les inconforts. Chaque geste est pensé pour harmoniser votre énergie, vous reconnecter à vous-même et à votre bébé.
              Après la séance, vous vous sentirez revitalisée, votre esprit apaisé et votre corps léger. Le massage prénatal est une véritable parenthèse enchantée dans le tourbillon de la grossesse, un moment privilégié où vous prenez soin de vous, en toute sérénité.
              Il vous procurera de multiples bienfaits comme une détente profonde, un assouplissement du corps, une meilleure qualité de sommeil... Il apaisera également votre bébé ! L'ocytocine que vous produisez et la détente que vous aurez se répercuteront bénéfiquement sur votre bébé. N'est-ce pas merveilleux de pouvoir partager ce bien-être avec votre petit trésor qui grandit en vous ?<br></br>

              <i className="text-xs">
                Massage réalisable à partir du deuxième trimestre de grossesse jusqu'à la fin. Les contre-indications sont : pathologie cardiaque et anomalie de tension ou de fréquence cardiaque, malaise, problème connu... diabète, contractions, grossesse à risque élevé, toutes contre-indication mentionnées par le corps médical. Si vous avez un doute, n'hésitez pas à demander l'aval de votre sage-femme ou gynécologue. Nous pouvons échanger pour plus de précisions également.
              </i>
              <br></br>
              Bain de pieds + temps d'échange + massage corps complet 1h30 = 120 euros
            </p>
            }
          </div>
        </div>

        <p className={`${alice.className} italic text-sm`}>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour du RDV</p>
        <br />
        <Link href="/formule" className={`${alice.className} button bg-rose-poudre border-none`}>Voir les formules</Link>
      </div>
    </div>
  </div>
  );
};

export default SoinsFeminins;
