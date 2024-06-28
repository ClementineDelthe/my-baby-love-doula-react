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

const Formules = () => {
  const formules = [
    {
      title: "Parenthèse enchantée",
      prix: "160€",
      description: "Massage femme enceinte ET Douceur du rebozo",
    },
    {
      title: "Amour pour toujours",
      prix: "210€",
      description: "Un soin féminin au choix ET Un rituel du bain sensoriel®",
    },
    {
      title: "Tendre découverte",
      prix: "150€",
      description:
        "4 séances massage bébé : Apprentissage massage du corps complet de votre bébé + soulager les maux de bébé",
    },
    {
      title: "Instant infini",
      prix: "240€",
      description:
        "Rituel du bain sensoriel® photographié. Avec Amélie, Mayä Photographie.",
    },
  ];
  return (
    <div id="formules" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto pt-26">
      <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight pt-10`}>
          Formules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 my-12 text-[#3f3a36] align-middle">
          {formules.map((formule, index) => (
            <div key={index} className="max-w-80 bg-rose-poudre py-9 px-3 rounded-lg flex flex-col justify-between items-center text-center min-h-[250px]">
                <h3 className={`${sendFlowers.className} text-bold text-center pb-2 text-3xl`}>{formule.title}</h3>
                <div className={alice.className}>
                  <p className="text-base">{formule.description}</p>
                  <p className="text-sm p-2">{formule.prix}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formules;
