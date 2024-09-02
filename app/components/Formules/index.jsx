"use client";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import { useState } from "react";


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

  const formules = [
    {
      title: "Parenthèse enchantée",
      prix: "160€",
      description: "Massage femme enceinte ET Douceur du rebozo",
      photo: "bg-massage-deesse",
    },
    {
      title: "Amour pour toujours",
      prix: "210€",
      description: "Un soin féminin au choix ET Un rituel du bain sensoriel®",
      photo: "bg-massage-deesse",
    },
    {
      title: "Tendre découverte",
      prix: "150€",
      description:
        "4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé",
      photo: "bg-massage-deesse",
    },
    {
      title: "Instant infini",
      prix: "240€",
      description:
        "Rituel du bain sensoriel® photographié. Avec Amélie, Mayä Photographie.",
        photo: "bg-massage-deesse",
    },
  ];
  return (
    <div id="formules" className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
      <div className="space-y-2 py-6">
      <div className="space-y-2">
      <h2 className={`${sendFlowers.className} text-3xl font-bold text-[#DD2D4A] tracking-tight pt-10`}>
          Formules
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-1 my-12 text-[#3f3a36] align-middle"> */}
        <div className="mx-auto justify-items-center justify-center mt-10 mb-5">
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
        </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Formules;
