"use client";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import RituelRebozo from "../../assets/rebozo-serrage3.jpg";
import DouceurRebozo from "../../assets/douceur-rebozo.jpg";
import ParentheseEnchantee from "../../assets/massage-dos4.jpg"
import AmourPourToujours from "../../assets/amour-toujours.jpeg"
import TendreDecouverte from "../../assets/massage-bebe5.jpg";
import InstantInfini from "../../assets/bain-sensoriel-lolita.jpg";


const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: ['400'],
});

const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
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
      prix: "150€",
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
            {/* <div className="mx-auto justify-items-center justify-center mt-10 mb-5">
              {formules.map((formule, index) => (
                <div
                  key={index}
                  className="p-6 mb-2 w-full"
                >
                  <div className={`w-full ${formule.photo} bg-cover bg-center flex items-center justify-center text-[#OOO] pt-40 opacity-85 cursor-pointer rounded-lg`}
                    onClick={() => toggleDescription(index)}
                    >
                    <h3 className={`${sendFlowers.className} pb-2 font-extrabold text-lg bg-[#FFF] rounded-md m-1 p-2 opacity-85 hover:opacity-100`}>{formule.title}</h3>
                  </div>
                    <div className="py-2 w-full">
                      {showDescription[index] &&
                        <div>
                          <p className="py-4 text-justify">{formule.description}</p>
                          <p className="text-sm p-2">{formule.prix}</p>
                        </div>
                      }
                    </div>
                </div>
              ))}
            </div> */}
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
                <h3 className="mb-2">Parenthèse enchantée</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Véritable ode à la détente et à la revitalisation.”</p> */}
                {
                  (showFormuleParentheseEnchantee === true) &&
                  <p className="text-sm">
                    Massage femme enceinte ET Douceur du rebozo
                    <br></br>
                    160€*
                  </p>
                }
                <button onClick={toggleFormuleParentheseEnchantee} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showFormuleParentheseEnchantee === true ? "Voir moins" : "Voir plus"}</button>
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
                <h3 className="mb-2">Amour pour toujours</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Toutes les femmes méritent d&apos;être honorées et célébrées.”</p> */}
                {
                  (showFormuleAmourToujours === true) &&
                  <p className="text-sm">
                    Un soin féminin au choix ET Un rituel du bain sensoriel®
                    <br></br>
                    210€*
                  </p>
                }
                <button onClick={toggleFormuleAmourToujours} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showFormuleAmourToujours === true ? "Voir moins" : "Voir plus"}</button>
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
                <h3 className="mb-2">Tendre découverte</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Véritable ode à la détente et à la revitalisation.”</p> */}
                {
                  (showFormuleTendreDecouverte === true) &&
                  <p className="text-sm">
                    4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé
                    <br></br>
                    150€*
                  </p>
                }
                <button onClick={toggleFormuleTendreDecouverte} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showFormuleTendreDecouverte === true ? "Voir moins" : "Voir plus"}</button>
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
                <h3 className="mb-2">Instant infini</h3>
                {/* <p className={`${homemadeApple.className} mb-2`}>“Toutes les femmes méritent d&apos;être honorées et célébrées.”</p> */}
                {
                  (showFormuleInstantInfini === true) &&
                  <p className="text-sm">
                    Rituel du bain sensoriel® photographié. Avec Amélie, Mayä Photographie.
                    <br></br>
                    240€*
                  </p>
                }
                <button onClick={toggleFormuleInstantInfini} className={`${alice.className} button bg-rose-poudre border-none my-2`}>{showFormuleInstantInfini === true ? "Voir moins" : "Voir plus"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formules;
