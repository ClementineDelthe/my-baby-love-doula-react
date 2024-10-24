"use client";
import Image from "next/image";
import BainSensoriel from "../../assets/bain-sensoriel2.jpg";
import MassageBebe from "../../assets/massage-bebe11.jpg";
import SoulagerMaux from "../../assets/massage-bebe7.jpg";
import MassageYogaBambin from "../../assets/massage-yoga-bambin-portrait.jpeg";

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

const SoinsBebe = () => {
  const baseSrc = "/img/";

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [showSoinSoulageMaux, setShowSoinSoulageMaux] = useState(false);
  const toggleSoinSoulageMaux = () => {
    if(showSoinSoulageMaux === false) {
      setShowSoinSoulageMaux(true);
    } else {
      setShowSoinSoulageMaux(false);
    }
  }
  const [showSoinMassageBebe, setShowSoinMassageBebe] = useState(false);
  const toggleSoinMassageBebe = () => {
    if(showSoinMassageBebe === false) {
      setShowSoinMassageBebe(true);
    } else {
      setShowSoinMassageBebe(false);
    }
  }

  const [showSoinYogaBambin, setShowSoinYogaBambin] = useState(false);
  const toggleSoinYogaBambin = () => {
    if(showSoinYogaBambin === false) {
      setShowSoinYogaBambin(true);
    } else {
      setShowSoinYogaBambin(false);
    }
  }

  const soinsbebe = [
    {
      image: MassageBebe,
      title: "Massage bébé",
      prix: "1h - 45€*",
      sentence: "Découvrir son bébé autrement.",
      description:
        "Découvrir son bébé autrement. Moment de découverte et de douceur familiale. Vous apprendrez les gestes pour apaiser bébé et embellirez votre connexion par le toucher.",
      photo: "bg-massage-bebe",
    },
    {
      image: SoulagerMaux,
      title: "Soulager les maux de bébé",
      prix: "1h - 45€*",
      sentence: "Permet de libérer votre tout petit de certains maux.",
      description:
        "Permet de libérer votre tout petit de certains maux. Votre enfant est imprégné de tensions liées à son développement. Vous serez en mesure de reproduire les gestes pour le soulager. ",
      photo: "bg-soulager-maux",
    },
    {
      image: MassageYogaBambin,
      title: "Massage/Yoga bambin ",
      prix: "1h - 55*",
      sentence: "De façon ludique, vous apprendrez des gestes de massage et une initiation au yoga bambin.",
      description:
        "De façon ludique, vous apprendrez des gestes de massage et une initiation au yoga bambin. Un beau moment de partage à poursuivre à la maison.",
      photo: "bg-massage-yoga-bambin",
    },
  ];
  return (
    <div id="soins-bebe" className="min-h-screen">
    <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
      <div className="space-y-2 py-6">
        <div className="space-y-2">
          <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight my-2 md:pb-10 text-[#DD2D4A]`}>
            Soins Bebe
          </h2>
        </div>
        <div className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 min-h-[300px]">
            <Image
                src={MassageBebe}
                alt="Massage Bébé"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Massage bébé</h3>
            {/* <p className={`${homemadeApple.className} mb-2`}>“Véritable ode à la détente et à la revitalisation.”</p> */}
            {
              (showSoinMassageBebe === true) &&
              <p className={`text-lg ${comfortaa.className}`}>
                Découvrir son bébé autrement. Moment de découverte et de douceur familiale. Vous apprendrez les gestes pour apaiser bébé et embellirez votre connexion par le toucher.
                <br></br>
                <span className="font-extrabold">1h - à partir de 45€*</span>
              </p>
            }
            <button onClick={toggleSoinMassageBebe} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showSoinMassageBebe === true ? "Voir moins" : "Voir plus"}</button>
          </div>
        </div>
        <div className="md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 md:min-h-[400px]">
            <Image
                src={SoulagerMaux}
                alt="Soulage les maux"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Soulager les maux de bébé</h3>
            {/* <p className={`${homemadeApple.className} mb-2`}>“Toutes les femmes méritent d&apos;être honorées et célébrées.”</p> */}
            {
              (showSoinSoulageMaux === true) &&
              <p className={`text-lg ${comfortaa.className}`}>
                Permet de libérer votre tout petit de certains maux. Votre enfant est imprégné de tensions liées à son développement. Vous serez en mesure de reproduire les gestes pour le soulager.
                <br></br>
                <span className="font-extrabold">1h - à partir de 45€*</span>
              </p>
            }
            <button onClick={toggleSoinSoulageMaux} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showSoinSoulageMaux === true ? "Voir moins" : "Voir plus"}</button>
          </div>
        </div>
        <div className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 min-h-[300px]">
            <Image
                src={MassageYogaBambin}
                alt="Massage Yoga Bambin"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Massage/Yoga bambin</h3>
            {/* <p className={`${homemadeApple.className} mb-2`}>“Une invitation à un voyage de bien-être.”</p> */}
            {
              (showSoinYogaBambin === true) &&
              <p className={`text-lg ${comfortaa.className}`}>
                De façon ludique, vous apprendrez des gestes de massage et une initiation au yoga bambin. Un beau moment de partage à poursuivre à la maison.
                <br></br>
                <span className="font-extrabold">1h - à partir de 55*</span>
              </p>
            }
            <button onClick={toggleSoinYogaBambin} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showSoinYogaBambin === true ? "Voir moins" : "Voir plus"}</button>
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

export default SoinsBebe;
