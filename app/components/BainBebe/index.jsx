"use client";
import Image from "next/image";
import BainSensoriel from "../../assets/bain-sensoriel2.jpg";
import MassageBebe from "../../assets/massage-bebe11.jpg";
import SoulagerMaux from "../../assets/massage-bebe7.jpg";
import MassageYogaBambin from "../../assets/massage-bebe4.jpg";
import CestQuoi from "../../assets/bain-bebe-cest-quoi.jpeg";
import PourQui from "../../assets/bain-bebe-pour-qui.jpeg";
import PourQuoi from "../../assets/bain-bebe-pour-quoi.jpeg";
import Deroule from "../../assets/bain-bebe-deroule.jpeg";

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

const BainBebe = () => {
  const baseSrc = "/img/";

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const bainsbebe = [
    {
      // image: `${baseSrc}massage-bebe3.jpg`,
      image: BainSensoriel,
      title: "Rituel du bain sensoriel®",
      prix: "2h - 120€*",
      sentence: "Instants de détente absolue et d'émotions pour vous et votre bébé.",
      description:
        "Instants de détente absolue et d'émotions pour votre bébé et vous. Vous permet de créer du lien et de prendre confiance dans votre rôle. Le bain enveloppé est réalisé ensemble afin que vous puissiez vous l'approprier et le reproduire. Plusieurs outils vous seront présentés pour vous accompagner dans votre parentalité.",
      photo: "bg-bain-sensoriel",
    },
  ];
  return (
    <div id="bain-bebe" className="min-h-screen">
      <div className="bainbebe-desktop bg-cover bg-center h-64 md:h-[500px] flex items-center justify-center text-[#fff] opacity-85 mt-14">
        <h1 className={`${sendFlowers.className} text-xl md:text-3xl font-bold text-center`}>Bain Bébé
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]`}>
          Rituel du bain sensoriel®
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-1">
          <Image
            src={CestQuoi}
            alt="bain bébé"
            width={200}
            height={300}
            className="h-auto max-w-full rounded-lg pb-4 md:pb-0"
          />
          <p className={`${alice.className}px-4 md:px-10`}>
            C&apos;est quoi ?
            <br/>
            Un accompagnement global au Postpartum pour la famille autour de l&apos;expérience du bain :
            <br/>
            → Permettre à votre enfant de revivre ses sensations in utéro et de se défaire de ses tensions.
            <br/>
            → Pouvoir raconter son récit de naissance. Etre entendu sur son histoire et ses premiers pas de parents avec bienveillance et non jugement.
            <br/>
            → Recevoir des nouveaux outils et de nouvelles compétences tout en étant acteur de chaque étape du rituel.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between py-4 md:py-1">
          <p className={`${alice.className}px-4 md:px-10`}>
            Pour qui ?
            <br/>
            Pour les familles qui veulent partager un moment de douceur familiale tout en apprenant des nouvelles façon de prendre soin de bébé.
            <br/>
            Pour les parents qui veulent une transmission du bain enveloppé dans un cadre sécurisant.
            <br/>
            Pour votre enfant à partir de quatre jours et de moins de deux mois.
            <br/>
            Dans l&apos;idéal, moins de trois semaines car les mémoires prénatales sont encore présentes.
          </p>
          <Image
            src={PourQui}
            alt="bain bébé"
            width={200}
            height={300}
            className="h-auto max-w-full rounded-lg pb-4 md:pb-0"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-1">
          <Image
            src={PourQuoi}
            alt="bain bébé"
            width={200}
            height={300}
            className="h-auto max-w-full rounded-lg pb-4 md:pb-0"
          />
          <p className={`${alice.className}px-4 md:px-10`}>
            Pour quoi faire ce rituel ?
            <br/>
            Encourager les parents en les valorisant dans leurs compétences parentales.
            <br/>
            Permettre aux familles de mieux vivre leur postpartum et de s&apos;offrir une parenthèse afin de se (re) connecter avec leur bébé.
            <br/>
            Célébrer la vie, ritualiser ce passage pour les parents et leur enfant et souhaiter la bienvenue à bébé.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-4 md:pt-10">
          <p className={`${alice.className}px-4 md:px-10`}>
            Comment se passe le rituel ?
            <br/>
            → L&apos;accueil : Je mets en place un environnement chaleureux et intime sur mesure pour vous accueillir dans les meilleures conditions. Un temps d&apos;échange sera consacré pour comprendre vos besoins et vous offrir une écoute juste de votre histoire.
            <br/>
            → L&apos;emmaillotage : je prends le temps de vous montrer la pratique de l&apos;emmaillotage de bain que vous pourrez faire sur un poupon puis sur votre enfant.
            <br/>
            → Le bain sensoriel : lorsque les conditions sont réunis, nous faisons ensemble la mise dans l&apos;eau de bébé. Avec des mouvements précis et en fonction des besoins de votre enfant, je vous montre les gestes à reproduire. Petit à petit, je vous passe le relais et chaque partenaire peut passer un temps les yeux dans les yeux avec bébé. La sortie du bain se fait sur l&apos;un des parents.
            <br/>
            → L&apos;instant cocon : du peau à peau vous est proposé, ainsi qu&apos;allaiter votre tout petit si c&apos;est le cas. Je vous propose ensuite de souhaiter la bienvenue à bébé avec un protocole de réflexologie et une initiation au massage.
          </p>
          <Image
            src={Deroule}
            alt="bain bébé"
            width={200}
            height={300}
            className="h-auto max-w-full rounded-lg pb-4 md:pb-0"
          />
        </div>
      <div className="py-6">
        {/* <div className="space-y-2">
          <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]`}>
            Bain Bébé
          </h2>
        </div> */}
        {/* <div className="mx-auto justify-items-center justify-center mt-10 mb-5">
          {bainsbebe.map((soin, index) => (
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
                      <span className={`${alice.className} font-light text-xs`}>{soin.prix}</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <p className={`${alice.className} italic text-sm mt-4`}>2h - 120€*<br/>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour du RDV</p>
        <br />
        <Link href="/formule" className={`${alice.className} button bg-rose-poudre border-none`}>Voir les formules</Link>
      </div>
    </div>
  </div>
  );
}

export default BainBebe;
