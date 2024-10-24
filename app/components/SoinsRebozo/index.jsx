"use client";
import Image from "next/image";
import RituelRebozo from "../../assets/rebozo-serrage3.jpg";
import DouceurRebozo from "../../assets/douceur-rebozo.jpg";

import { useState } from "react";
import Link from "next/link";

import { Comfortaa, Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import { Homemade_Apple } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400'],
});
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

const SoinsRebozo = () => {
  const baseSrc = "/img/";

  const [expandedCard, setExpandedCard] = useState({}); // New state to track the expanded card

  const toggleDescription = (index) => {
     if (expandedCard === index) {
       setExpandedCard(false);
     } else {
       setExpandedCard(index);
     }
  };

  const [showSoinRituelRebozo, setShowSoinRituelRebozo] = useState(false);
  const toggleSoinRituelRebozo = () => {
    if(showSoinRituelRebozo === false) {
      setShowSoinRituelRebozo(true);
    } else {
      setShowSoinRituelRebozo(false);
    }
  }
  const [showSoinDouceurRebozo, setShowSoinDouceurRebozo] = useState(false);
  const toggleSoinDouceurRebozo = () => {
    if(showSoinDouceurRebozo === false) {
      setShowSoinDouceurRebozo(true);
    } else {
      setShowSoinDouceurRebozo(false);
    }
  }


  const soinsrebozo = [
    {
      // image: `${baseSrc}massage-bebe3.jpg`,
      image: DouceurRebozo,
      title: "Douceur du rébozo",
      prix: "1h - 60€*",
      sentence:
        "En postpartum immédiat, avec votre bébé, je vous fais un massage.",
      description:
        `A réaliser en postpartum immédiat, idéalement dans le mois suivant votre accouchement. Dans votre cocon, avec votre bébé, je me faufile discrètement. Un temps pour vous, durant lequel je vous propose un bain de pieds aux plantes, suivi d'un massage jambes et dos .
        Je suis spectatrice des moments de douceur familiale que vous vivez et je serai attentive à votre histoire, votre récit. Une belle manière de libérer votre vécu de fin de grossesse, votre enfantement et vos premiers pas en tant que parent Je réalise un resserrage du bassin pour adoucir votre bassin, vos tensions et douleurs. Cela aide vos organes et vos os à reprendre le chemin vers leur place initial. Par cette parenthèse, on vient clôturer symboliquement la fin de votre grossesse et honorer la mère que vous êtes.`,
        photo: "bg-douceur-rebozo"
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
        photo: "bg-rituel-rebozo",
    },
  ];
  return (
    <div id="soins-rebozo" className="min-h-screen">
    <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
      <div className="space-y-2 py-6">
        <div className="space-y-2">
          <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight my-2 md:pb-10 text-[#DD2D4A]`}>
            Soins et Rebozo
          </h2>
        </div>
        <div className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 min-h-[300px]">
            <Image
                src={DouceurRebozo}
                alt="Douceur Rebozo"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Douceur du rébozo</h3>
            {/* <p className={`${homemadeApple.className} mb-2`}>“Véritable ode à la détente et à la revitalisation.”</p> */}
            {
              (showSoinDouceurRebozo === true) &&
              <div>
                <p className={`text-lg ${comfortaa.className}`}>
                  A réaliser en postpartum immédiat, idéalement dans le mois suivant votre accouchement. Dans votre cocon, avec votre bébé, je me faufile discrètement. Un temps pour vous, durant lequel je vous propose un bain de pieds aux plantes, suivi d&apos;un massage jambes et dos .
                  Je suis spectatrice des moments de douceur familiale que vous vivez et je serai attentive à votre histoire, votre récit. Une belle manière de libérer votre vécu de fin de grossesse, votre enfantement et vos premiers pas en tant que parent Je réalise un resserrage du bassin pour adoucir votre bassin, vos tensions et douleurs. Cela aide vos organes et vos os à reprendre le chemin vers leur place initial. Par cette parenthèse, on vient clôturer symboliquement la fin de votre grossesse et honorer la mère que vous êtes.
                  <br></br>
                  <span className="font-extrabold">1h/1h30 - 60€*</span>

                </p>
                <p className={`${alice.className} text-xl text-[#DD2D4A]`}>Les contre-indications</p>
                <p className={`text-lg ${comfortaa.className}`}>
                  En cas de césarienne, il est recommandé d&apos;attendre la cicatrisation ou de demander l&apos;avis de votre sage-femme ou gynécologue.
                </p>
              </div>
            }
            <button onClick={toggleSoinDouceurRebozo} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showSoinDouceurRebozo === true ? "Voir moins" : "Voir plus"}</button>
          </div>
        </div>
        <div className="md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 md:min-h-[400px]">
            <Image
                src={RituelRebozo}
                alt="Rituel Rebozo"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Rituel autour du rebozo</h3>
            {/* <p className={`${homemadeApple.className} mb-2`}>“Toutes les femmes méritent d&apos;être honorées et célébrées.”</p> */}
            {
              (showSoinRituelRebozo === true) &&
              <p className={`text-lg ${comfortaa.className}`}>
                Véritable expérience de vie, ce rituel est fait pour toutes les femmes qui souhaitent se sentir honorées et célébrées. Inspirés des rituels traditionnels mexicains et des rites à travers le monde pour célébrer la jeune mère, il permet de marquer holistiquement le passage d&apos;une période de sa vie. Que ce soit pour clôre un chapitre : dernière grossesse, deuil, rupture, fin d&apos;une thérapie psychologique, rémission cancer, ou accompagner une nouvelle voie : nouveau travail, emménagement, mariage, enfantement... les sujets sont vastes et vous appartiennent.
                Lors de ce rituel, vous serez choyée, enveloppée d&apos;amour et de chaleur. Vous recevrez un massage à quatre mains, un temps de hammam et un serrage de différentes parties du corps. Ces étapes vous aideront à traverser et à laisser derrière vous, de façon apaisée, ce que vous êtes venu déposer. Durant tout ce temps, nous vous soutiendrons et vous accompagnerons.
                <br></br>
                <span className="font-extrabold">3h - 250€*</span>
              </p>
            }
            <button onClick={toggleSoinRituelRebozo} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showSoinRituelRebozo === true ? "Voir moins" : "Voir plus"}</button>
          </div>
        </div>
        <div className="mt-2 md:pt-10">
          <p className={`${homemadeApple.className} text-md pb-2`}>
            <span className="text-[#DD2D4A]">Offrez un moment de bonheur.</span>
          </p>
          <p className={`text-md ${comfortaa.className}`}>
            Vous pouvez retrouver toutes mes prestations en carte cadeau.
            <br/>
            Vous pouvez venir les retirer sur Villenave d'Ornon ou au Yellow Temple.
            <br/>
            Je peux également les envoyer directement par voie postale.
            <br/>
            Je peux aussi vous les envoyer de façon dématérialisée.
            <br/>
            N'hésitez pas à me contacter, retrouvez moi
            <span className="text-[#DD2D4A]">
              <Link href="/coordonnees"> ici.</Link>
            </span>
          </p>
        </div>
        <p className={`${alice.className} italic text-sm pt-2 md:pt-10`}>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour de la prestation</p>
        <br />
        <Link href="/formule" className={`${alice.className} button bg-rose-poudre border-none`}>Voir les formules</Link>
      </div>
    </div>
  </div>
  );
};

export default SoinsRebozo;
