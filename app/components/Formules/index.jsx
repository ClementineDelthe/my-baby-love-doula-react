"use client";
import { Send_Flowers } from "next/font/google";
import { Alice, Comfortaa } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import RituelRebozo from "../../assets/rebozo-serrage3.jpg";
import DouceurRebozo from "../../assets/douceur-rebozo.jpg";
import ParentheseEnchantee from "../../assets/massage-dos4.jpg"
import AmourPourToujours from "../../assets/amour-toujours.jpeg"
import TendreDecouverte from "../../assets/massage-bebe5.jpg";
import InstantInfini from "../../assets/bain-sensoriel-lolita.jpg";
import { Homemade_Apple } from 'next/font/google';
import Link from "next/link";

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

const Formules = () => {

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [showFormuleParentheseEnchantee, setShowFormuleParentheseEnchantee] = useState(false);
  const toggleFormuleParentheseEnchantee = () => {
    if(showFormuleParentheseEnchantee === false) {
      setShowFormuleParentheseEnchantee(true);
    } else {
      setShowFormuleParentheseEnchantee(false);
    }
  }
  const [showFormuleAmourToujours, setShowFormuleAmourToujours] = useState(false);
  const toggleFormuleAmourToujours = () => {
    if(showFormuleAmourToujours === false) {
      setShowFormuleAmourToujours(true);
    } else {
      setShowFormuleAmourToujours(false);
    }
  }
  const [showFormuleTendreDecouverte, setShowFormuleTendreDecouverte] = useState(false);
  const toggleFormuleTendreDecouverte = () => {
    if(showFormuleTendreDecouverte === false) {
      setShowFormuleTendreDecouverte(true);
    } else {
      setShowFormuleTendreDecouverte(false);
    }
  }
  const [showFormuleInstantInfini, setShowFormuleInstantInfini] = useState(false);
  const toggleFormuleInstantInfini = () => {
    if(showFormuleInstantInfini === false) {
      setShowFormuleInstantInfini(true);
    } else {
      setShowFormuleInstantInfini(false);
    }
  }

  const formules = [
    {
      title: "Parenthèse enchantée",
      prix: "160€",
      description: "Massage femme enceinte ET Douceur du rebozo",
      photo: "bg-formule-enchantee",
    },
    {
      title: "Amour pour toujours",
      prix: "210€",
      description: "Un soin féminin au choix ET Un rituel du bain sensoriel®",
      photo: "bg-formule-deesse",
    },
    {
      title: "Tendre découverte",
      prix: "140€",
      description:
        "4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé",
      photo: "bg-formule-bebe",
    },
    {
      title: "Instant infini",
      prix: "240€",
      description:
        "Rituel du bain sensoriel® photographié. Avec Amélie, Mayä Photographie.",
        photo: "bg-formule-infini",
    },
  ];
  return (
    <div id="formules" className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
        <div className="space-y-2 py-6">
          <div className="space-y-2">
            <h2 className={`${sendFlowers.className} text-3xl font-bold text-[#DD2D4A] tracking-tight py-5`}>
              Formules
            </h2>
            <div className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
              <div className="md:w-1/5 min-h-[300px]">
                <Image
                    src={ParentheseEnchantee}
                    alt="Formule Parenthèse enchantée"
                    width={200}
                    height={300}
                    className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
                  />
              </div>
              <div className="px-4 md:px-10 md:w-4/5">
                <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Parenthèse enchantée</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Véritable ode à la détente et à la revitalisation.”</p> */}
                {
                  (showFormuleParentheseEnchantee === true) &&
                  <p className={`text-lg ${comfortaa.className}`}>
                    Massage femme enceinte ET Douceur du rebozo
                    <br></br>
                    A partir de 130€*
                  </p>
                }
                <button onClick={toggleFormuleParentheseEnchantee} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showFormuleParentheseEnchantee === true ? "Voir moins" : "Voir plus"}</button>
              </div>
            </div>
            <div className="md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-60 py-5">
              <div className="md:w-1/5 md:min-h-[400px]">
                <Image
                    src={AmourPourToujours}
                    alt="Formule Amour pour toujours"
                    width={200}
                    height={300}
                    className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
                  />
              </div>
              <div className="px-4 md:px-10 md:w-4/5">
                <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Amour pour toujours</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Toutes les femmes méritent d&apos;être honorées et célébrées.”</p> */}
                {
                  (showFormuleAmourToujours === true) &&
                  <p className={`text-lg ${comfortaa.className}`}>
                    Un soin féminin au choix ET Un rituel du bain sensoriel®
                    <br></br>
                    A partir de 180€*
                  </p>
                }
                <button onClick={toggleFormuleAmourToujours} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showFormuleAmourToujours === true ? "Voir moins" : "Voir plus"}</button>
              </div>
            </div>
            <div className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
              <div className="md:w-1/5 min-h-[300px]">
                <Image
                    src={TendreDecouverte}
                    alt="Tendre découverte"
                    width={200}
                    height={300}
                    className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
                  />
              </div>
              <div className="px-4 md:px-10 md:w-4/5">
                <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Tendre découverte</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Véritable ode à la détente et à la revitalisation.”</p> */}
                {
                  (showFormuleTendreDecouverte === true) &&
                  <p className={`text-lg ${comfortaa.className}`}>
                    4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé
                    <br></br>
                    A partir de 140€*
                  </p>
                }
                <button onClick={toggleFormuleTendreDecouverte} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showFormuleTendreDecouverte === true ? "Voir moins" : "Voir plus"}</button>
              </div>
            </div>
            <div className="md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-60 py-5">
              <div className="md:w-1/5 md:min-h-[400px]">
                <Image
                    src={InstantInfini}
                    alt="Instant infini"
                    width={200}
                    height={300}
                    className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
                  />
              </div>
              <div className="px-4 md:px-10 md:w-4/5">
                <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Instant infini</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Toutes les femmes méritent d&apos;être honorées et célébrées.”</p> */}
                {
                  (showFormuleInstantInfini === true) &&
                  <p className={`text-lg ${comfortaa.className}`}>
                    Rituel du bain sensoriel® photographié.
                    <br/>
                    Avec Amélie, Mayä Photographie.
                    <br></br>
                    A partir de 240€*
                  </p>
                }
                <button onClick={toggleFormuleInstantInfini} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showFormuleInstantInfini === true ? "Voir moins" : "Voir plus"}</button>
              </div>
            </div>
          </div>
          <div className="mt-2 md:pt-10">
          <p className={`${homemadeApple.className} text-md pb-2`}>
            <span className="text-[#DD2D4A]">Offrez un moment de bonheur.</span>
          </p>
          <p className={`text-md ${comfortaa.className}`}>
            Vous pouvez retrouver toutes mes formules en carte cadeau.
            <br/>
            Vous pouvez venir les retirer sur Villenave d&apos;Ornon ou au Yellow Temple.
            <br/>
            Je peux également les envoyer directement par voie postale.
            <br/>
            Je peux aussi vous les envoyer de façon dématérialisée.
            <br/>
            N&apos;hésitez pas à me contacter, retrouvez moi
            <span className="text-[#DD2D4A]">
              <Link href="/coordonnees"> ici.</Link>
            </span>
          </p>
        </div>
          <p className={`${alice.className} italic text-sm pt-10`}>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour de la prestation</p>
        </div>
      </div>
    </div>
  );
};

export default Formules;
