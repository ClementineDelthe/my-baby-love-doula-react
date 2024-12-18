"use client";
import Image from "next/image";
import MassageFemmeEnceinte from "../../assets/massage-ventre.jpg";
import MassagePostNatal from "../../assets/massage-dos6.jpg";
import MassageDeesse from "../../assets/massage-deesse.jpg";
import MassageEnergetique from "../../assets/massage_energetique.jpeg"
import MassageAyurvedique from "../../assets/massage_ayurvedique.jpeg"
import MassagePostPartum from "../../assets/massage-dos4.jpg"

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

const SoinsFeminins = () => {
  const baseSrc = "/img/";

  // const [showDescription, setShowDescription] = useState({});
  const [showSoinEnceinte, setShowSoinEnceinte] = useState(false);
  const [showBienfaitsSoinEnceinte, setShowBienfaitsSoinEnceinte] = useState(false);
  const [showConditionsSoinEnceinte, setShowConditionsSoinEnceinte] = useState(false);
  const [showContreIndicationsSoinEnceinte, setShowContreIndicationsSoinEnceinte] = useState(false);
  const toggleSoinEnceinte = () => {
    if(showSoinEnceinte === false) {
      setShowSoinEnceinte(true);
    } else {
      setShowSoinEnceinte(false);
    }
  }
  const toggleBienfaitsSoinEnceinte = () => {
    setShowBienfaitsSoinEnceinte(!showBienfaitsSoinEnceinte);
  };

  const toggleConditionsSoinEnceinte = () => {
    setShowConditionsSoinEnceinte(!showConditionsSoinEnceinte);
  };

  const toggleContreIndicationsSoinEnceinte = () => {
    setShowContreIndicationsSoinEnceinte(!showContreIndicationsSoinEnceinte);
  };
  const [showSoinDeesse, setShowSoinDeesse] = useState(false);
  const [showContreIndicationsSoinDeesse, setShowContreIndicationsSoinDeesse] = useState(false);
  const toggleSoinDeesse = () => {
    if(showSoinDeesse === false) {
      setShowSoinDeesse(true);
    } else {
      setShowSoinDeesse(false);
    }
  }
  const toggleContreIndicationsSoinDeesse = () => {
    setShowContreIndicationsSoinDeesse(!showContreIndicationsSoinDeesse);
  };
  const [showSoinEnergetique, setShowSoinEnergetique] = useState(false);
  const [showContreIndicationsSoinEnergetique, setShowContreIndicationsSoinEnergetique] = useState(false);
  const toggleSoinEnergetique = () => {
    if(showSoinEnergetique === false) {
      setShowSoinEnergetique(true);
    } else {
      setShowSoinEnergetique(false);
    }
  }
  const toggleContreIndicationsSoinEnergetique = () => {
    setShowContreIndicationsSoinEnergetique(!showContreIndicationsSoinEnergetique);
  };

  const [showSoinAyurvedique, setShowSoinAyurvedique] = useState(false);
  const [showContreIndicationsSoinAyurvedique, setShowContreIndicationsSoinAyurvedique] = useState(false);
  const toggleSoinAyurvedique = () => {
    if(showSoinAyurvedique === false) {
      setShowSoinAyurvedique(true);
    } else {
      setShowSoinAyurvedique(false);
    }
  }
  const toggleContreIndicationsSoinAyurvedique = () => {
    setShowContreIndicationsSoinAyurvedique(!showContreIndicationsSoinAyurvedique);
  };

  const [showSoinPostPartum, setShowSoinPostPartum] = useState(false);
  const [showBienfaitsSoinPostPartum, setShowBienfaitsSoinPostPartum] = useState(false);
  const [showConditionsSoinPostPartum, setShowConditionsSoinPostPartum] = useState(false);
  const [showContreIndicationsSoinPostPartum, setShowContreIndicationsSoinPostPartum] = useState(false);
  const toggleSoinPostPartum = () => {
    if(showSoinPostPartum === false) {
      setShowSoinPostPartum(true);
    } else {
      setShowSoinPostPartum(false);
    }
  }
  const toggleBienfaitsSoinPostPartum = () => {
    setShowBienfaitsSoinPostPartum(!showBienfaitsSoinPostPartum);
  };

  const toggleConditionsSoinPostPartum = () => {
    setShowConditionsSoinPostPartum(!showConditionsSoinPostPartum);
  };

  const toggleContreIndicationsSoinPostPartum = () => {
    setShowContreIndicationsSoinPostPartum(!showContreIndicationsSoinPostPartum);
  };

  // const toggleDescription = (index) => {
  //   setShowDescription((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (divId, section) => {
    setOpenSections((prev) => ({
      ...prev,
      [`${divId}-${section}`]: !prev[`${divId}-${section}`],
    }));
  };

  const isSectionOpen = (divId, section) => {
    return openSections[`${divId}-${section}`] || false;
  };

  return (
    <div id="soins-feminins" className="min-h-screen">
    <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
      <div className="space-y-2 py-6">
        <div className="space-y-2 md:pb-10">
          <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight pb-2 text-[#DD2D4A]`}>
            Soins Feminins
          </h2>
          <p className={`${alice.className} pb-2 `}>
            Je prend soin de toutes les femmes, pour toutes les &eacute;tapes de votre vie.
            <br/>
            Formée &agrave; diff&eacute;rentes pratique, je vous propose des soins en fonction de vos besoins et de vos d&eacute;sirs.
          </p>
            {/* <p className={`${alice.className} text-sm pb-4 font-semibold`}>
              Rituel de 2H-2H30 dont 1H30 de massage - 120€*
            </p> */}
            <ul className="block md:hidden">
              <li><Link href="#massage-femme-enceinte" className={`${alice.className}`}>✨ Massage Femme Enceinte</Link></li>
              <li><Link href="#massage-post-partum" className={`${alice.className}`}>✨ Massage Post Partum</Link></li>
              <li><Link href="#massage-energetique" className={`${alice.className}`}>✨ Massage Crânien-Dos</Link></li>
              <li><Link href="#massage-deesse" className={`${alice.className}`}>✨ Massage Déesse</Link></li>
              <li><Link href="#massage-ayurvedique" className={`${alice.className}`}>✨ Massage Ayurvédique</Link></li>
            </ul>
        </div>

        <div id="massage-femme-enceinte" className={`md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-80 py-5 ${(showSoinEnceinte === true) ? "" : "" }`}>
          <div className="md:w-1/5">
            <Image
                src={MassageFemmeEnceinte}
                alt="Massage Femme Enceinte"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 text-left md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Massage femme enceinte</h3>
            <p className={`${homemadeApple.className} text-xl mb-2 md:my-3`}>“Une période unique dans la vie d&apos;une femme.”</p>
            {
              (showSoinEnceinte === true) &&
              <div>
                <p className={`text-lg ${comfortaa.className}`}>
                  La grossesse peut être douce comme difficile à vivre au quotidien. Par le rituel du massage, je vous apporte une écoute bienveillante dans un cadre chaleureux. Un temps de pause dans votre quotidien pour vous recentrer et profiter pleinement de ce que vous êtes en train de vivre. Je porte une attention particulière à chaque détail pour que vous vous sentiez en sécurité et enveloppée de bien-être. Le massage se réalise au sol, sur un matelas épais et confortable. Installée sur le côté vous aurez un coussin d&apos;allaitement. Sur le dos, j&apos;ajuste votre position à l&apos;aide de serviettes roulées, qui viendront vous apporter confort et douceur aux niveaux des jambes. Les huiles utilisées sont spécialement sélectionnées pour leurs propriétés apaisantes et sécuritaires pour la grossesse. Elles sont délicatement chauffées pour offrir une sensation de chaleur réconfortante sur votre peau.
                  Le massage commence par des mouvements doux et enveloppants, favorisant la circulation sanguine et lymphatique. Je m&apos;attarde sur les points de tension, souvent présents dans le dos, les épaules et les jambes, pour libérer les nœuds et les inconforts. Chaque geste est pensé pour harmoniser votre énergie, vous reconnecter à vous-même et à votre bébé.
                  Après la séance, vous vous sentirez revitalisée, votre esprit apaisé et votre corps léger. Le massage prénatal est une véritable parenthèse enchantée dans le tourbillon de la grossesse, un moment privilégié où vous prenez soin de vous, en toute sérénité.
                <br></br>
                </p>
                <p onClick={toggleBienfaitsSoinEnceinte} className={`${alice.className} my-4`}><span className="button text-xl bg-rose-poudre my-3 border-none">Les bienfaits</span></p>
                {showBienfaitsSoinEnceinte && (
                  <p className={`text-lg ${comfortaa.className}`}>
                    Il vous procurera de multiples bienfaits comme une détente profonde, un assouplissement du corps, une meilleure qualité de sommeil... Il apaisera également votre bébé ! L&apos;ocytocine que vous produisez et la détente que vous aurez se répercuteront bénéfiquement sur votre bébé. N&apos;est-ce pas merveilleux de pouvoir partager ce bien-être avec votre petit trésor qui grandit en vous ?
                  </p>
                )}
                <p onClick={toggleConditionsSoinEnceinte} className={`${alice.className} text-xl cursor-pointer my-4`}><span className="button bg-rose-poudre my-3 border-none">Les conditions de réalisation</span></p>
                {showConditionsSoinEnceinte && (
                  <p className="py-1">
                    <p className={`text-lg ${comfortaa.className}`}>
                      Massage réalisable à partir du deuxième trimestre de grossesse jusqu&apos;à la fin.
                    </p>
                  </p>
                )}
                <p onClick={toggleContreIndicationsSoinEnceinte} className={`${alice.className} text-xl cursor-pointer my-4`}><span className="button bg-rose-poudre my-3 border-none">Les contre-indications</span></p>
                {showContreIndicationsSoinEnceinte && (
                  <p className={`text-lg ${comfortaa.className}`}>
                    Les contre-indications sont : pathologie cardiaque et anomalie de tension ou de fréquence cardiaque, malaise, problème connu... diabète, contractions, grossesse à risque élevé, toutes contre-indication mentionnées par le corps médical. Si vous avez un doute, n&apos;hésitez pas à demander l&apos;aval de votre sage-femme ou gynécologue. Nous pouvons échanger pour plus de précisions également.
                  </p>
                )}
                <br/>
                <p className="my-2">
                  <span className="font-bold text-lg">
                    {/* Bain de pieds + temps d&apos;échange + massage corps complet 1h30 = 120 euros */}
                    Massage 1h à partir de 70€
                    <br/>
                    Rituel 2h à partir de 100€
                  </span>
                  <br/>
                  <i className="text-sm">
                    massage 1h30 + temps d&apos;accompagnement
                    <br/>
                    <Link href="/tarif" className="">*voir les conditions tarifaires</Link>
                  </i>
                </p>
              </div>
            }
            <button onClick={toggleSoinEnceinte} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showSoinEnceinte === true ? "Voir moins" : "Voir plus"}</button>
          </div>

        </div>
        <div id="massage-post-partum" className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 min-h-[300px]">
            <Image
                src={MassagePostPartum}
                alt="Massage post partum"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Massage post partum</h3>
            <p className={`${homemadeApple.className} text-xl mb-2 md:my-3`}>“Pour retrouver une harmonie intérieur et apaiser votre coprs”</p>
            {
              (showSoinPostPartum === true) &&
              <div>
                <p className={`text-lg ${comfortaa.className}`}>
                  L&apos;enfantement vous a apporté votre merveille et c&apos;est le plus beau cadeau qui soit. Cependant, physiquement le corps a subi beaucoup de tension et il met du temps à se remettre de cet évènement... Votre être tout entier à conçu un enfant et s&apos;approprie doucement ces changements. Par le rituel du massage, je vous offre un cadre sécurisant et doux pour aborder tous les sujets que vous aurez besoin de me confier. J&apos;écouterais avec empathie et justesse votre histoire, vos maux, vos victoires. Par le massage ayurvédique, je cherche à rééquilibrer vos énergies, apaiser votre corps qui a tant donné et vous procurer une parenthèse bienvenue à votre esprit. L&apos;huile chaude, choisie avec soin, nourrit votre peau tout en éveillant vos sens. Les gestes précis et bienveillants, hérités de traditions millénaires, vous enveloppent d&apos;une douceur réconfortante, vous permettant de laisser derrière vous les fatigues et les préoccupations. Je clôture le soin par un resserrage du bassin. Cela permet d&apos;apaiser les tensions du bassin.
                  <br/>
                </p>
                <p onClick={toggleBienfaitsSoinPostPartum} className={`${alice.className} my-4`}><span className="button text-xl bg-rose-poudre my-3 border-none">Les bienfaits</span></p>
                {showBienfaitsSoinPostPartum && (
                  <p className={`text-lg ${comfortaa.className}`}>
                    Symboliquement et physiquement, cela ferme le bassin, honore la fin de votre grossesse et célèbre votre nouvelle vie de maman. Vous pourrez ainsi vous reconnecter à vous-même, retrouver une harmonie intérieure et entamer cette nouvelle étape de votre vie avec plénitude et confiance.
                    Ce moment de détente profonde est aussi une invitation à l&apos;introspection, à écouter les murmures de votre âme et à accueillir les nouvelles émotions qui accompagnent la maternité. Vous ressortirez de cette expérience revitalisée, avec une énergie renouvelée, prête à embrasser pleinement les joies et les défis de votre rôle de maman.
                  </p>
                )}
                <p onClick={toggleConditionsSoinPostPartum} className={`${alice.className} text-xl cursor-pointer my-4`}><span className="button bg-rose-poudre my-3 border-none">Les conditions de réalisation</span></p>
                {showConditionsSoinPostPartum && (
                  <p className="py-1">
                    <p className={`text-lg ${comfortaa.className}`}>
                      Le massage postpartum est réalisé dès que vous le souhaitez et jusqu&apos;à ce que vous en fassiez la demande même plusieurs années après.
                    </p>
                  </p>
                )}
                <p onClick={toggleContreIndicationsSoinPostPartum} className={`${alice.className} text-xl cursor-pointer my-4`}><span className="button bg-rose-poudre my-3 border-none">Les contre-indications</span></p>
                {showContreIndicationsSoinPostPartum && (
                  <p className={`text-lg ${comfortaa.className}`}>
                    En cas de césarienne, il est recommandé d&apos;attendre la cicatrisation ou de demander l&apos;avis de votre sage-femme ou gynécologue.
                  </p>
                )}
                <br/>
                <p className="my-2">
                  <span className="font-bold text-lg">
                    {/* Bain de pieds + temps d&apos;accompagnement + massage corps complet 1h15+ resserage bassin = 120 euros - 2h */}
                    Massage 1h à partir de 70€
                    <br/>
                    Rituel 2h à partir de 100€
                  </span>
                  <br/>
                  <i className="text-sm">
                    massage 1h30 + temps d&apos;accompagnement
                    <br/>
                    <Link href="/tarif" className="">*voir les conditions tarifaires</Link>
                  </i>
                </p>
              </div>
            }
            <button onClick={toggleSoinPostPartum} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showSoinPostPartum === true ? "Voir moins" : "Voir plus"}</button>
          </div>
        </div>
        <div id="massage-energetique" className="md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-80 py-5">
          <div className="md:w-1/5">
            <Image
                src={MassageEnergetique}
                alt="Massage énergétique"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 text-left md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Massage énergétique crânien et dos</h3>
            <p className={`${homemadeApple.className} text-xl mb-2 md:my-3`}>“Véritable ode à la détente et à la revitalisation.”</p>
            {
              (showSoinEnergetique === true) &&
              <p className={`text-lg ${comfortaa.className}`}>
                En combinant des mouvements doux et appuyés, je stimule les points énergétiques situés sur le crâne et le long de la colonne vertébrale, libérant ainsi les tensions accumulées et rétablissant l&apos;harmonie du corps et de l&apos;esprit. Les bienfaits de ce massage sont nombreux dont apporter une sensation générale de sérénité.
                Que ce soit en fin de journée pour évacuer le stress ou en début de journée pour se recharger en énergie, le massage énergétique crânien et dos est une pratique qui s&apos;adapte à tous les besoins. Chaque séance devient un moment unique de relaxation profonde et de renouvellement intérieur.
                Combiné avec des pierres de lithothérapie, ce massage prend une dimension d&apos;autant plus holistique et apaisante. Les pierres, choisies pour leurs propriétés énergétiques spécifiques et vos besoins, sont placées stratégiquement sur le corps pour amplifier les effets du massage.
                Venez vous offrir une expérience riche et complète, permettant de retrouver un état de paix intérieure. Les bienfaits se font sentir bien au-delà de la séance. Une véritable invitation à prendre soin de soi.
                <br></br>
                <p onClick={toggleContreIndicationsSoinEnergetique} className={`${alice.className} text-xl cursor-pointer my-4`}><span className="button bg-rose-poudre my-3 border-none">Les contre-indications</span></p>
                {showContreIndicationsSoinEnergetique && (
                  <p className={`text-lg ${comfortaa.className}`}>
                    Pas de contre-indication particulière, sauf torticolis ou pathologie du dos et de la nuque.
                    <br/>
                    N&apos;hésitez pas à me contacter pour plus de précisions.
                  </p>
                )}
                <br/>
                <span className="font-bold text-lg">
                Massage du dos, des épaules, de la tête et du visage 45 minutes + 15 minutes d&apos;échange
                  <br/>
                  <Link href="/tarif" className="">1h à partir de 50€</Link>
                </span>
              </p>
            }
            <button onClick={toggleSoinEnergetique} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showSoinEnergetique === true ? "Voir moins" : "Voir plus"}</button>
            </div>

        </div>
        <div id="massage-deesse" className="md:relative flex flex-col md:flex-row items-center justify-between md:min-h-60 py-5">
          <div className="md:w-1/5 min-h-[300px]">
            <Image
                src={MassageDeesse}
                alt="Massage Déesse"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:left-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Massage déesse</h3>
            <p className={`${homemadeApple.className} text-xl mb-2 md:my-3`}>“Toutes les femmes méritent d&apos;être honorées et célébrées.”</p>
            {
              (showSoinDeesse === true) &&
              <p className={`text-lg ${comfortaa.className}`}>
                Ce massage a été conçu pour cela. Mêlant le massage ayurvédique, des bercements, des pressions, des mouvements doux et appuyés, vous trouverez réconfort et sérénité. Je prends le temps d&apos;accompagner les zones sensibles de votre corps et m&apos;adapte à vos maux féminins pour les soulager. Ce massage est réalisable pendant les règles pour justement apaiser les zones de tension comme le dos, les cuisses, le ventre. Si vous avez ou avez eu un cancer, ce soin est pour vous également. Cette période nécessite tout l&apos;amour et l&apos;attention que vous pourrez lui procurer. Par mon expérience d&apos;infirmière en cancérologie, je m&apos;appliquerai à lui insuffler toute la douceur et la délicatesse que nécessite votre être dans ce moment délicat. Mon objectif est de créer un espace où vous pouvez vous détendre complètement et vous reconnecter avec votre corps. Chaque geste est pensé pour vous offrir un cocon de bien-être, loin du stress quotidien.
                Cette approche holistique ne se limite pas à l&apos;apaisement physique ; elle vise également à nourrir votre esprit et votre âme. En utilisant une huile chaude, biologique, elle vous enveloppera, ajoutant une dimension supplémentaire à votre expérience de relaxation.
                Vous êtes invitée à vous abandonner à ce moment de pure détente, où chaque pression et chaque mouvement sont destinés à harmoniser votre énergie et à revitaliser votre être tout entier. Parce que vous méritez de vous sentir bien dans votre peau, de vous sentir forte et aimée.
                Prenez soin de vous, car votre bien-être est précieux.
                <br></br>
                <p onClick={toggleContreIndicationsSoinDeesse} className={`${alice.className} text-xl cursor-pointer my-4`}><span className="button bg-rose-poudre my-3 border-none">Les contre-indications</span></p>
                {showContreIndicationsSoinDeesse && (
                  <p className={`text-lg ${comfortaa.className}`}>
                    Merci de me contacter en amont si vous avez des pathologies cardiaques ou des problématiques de tension.
                  </p>
                )}
                <br/>
                <span className="font-bold text-lg">
                  Bain de pieds + temps d&apos;accompagnement + massage corps complet 1h15
                  <br/>
                  <Link href="/tarif" className="">1h45 à partir de 90€</Link>
                </span>
              </p>
            }
            <button onClick={toggleSoinDeesse} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showSoinDeesse === true ? "Voir moins" : "Voir plus"}</button>
            </div>
        </div>
        <div id="massage-ayurvedique" className="md:relative flex flex-col md:flex-row-reverse items-center justify-between md:min-h-80 py-5">
          <div className="md:w-1/5">
            <Image
                src={MassageAyurvedique}
                alt="Massage ayurvédique"
                width={200}
                height={300}
                className="md:absolute md:top-0 md:right-0 h-auto max-w-full rounded-lg pb-4 md:pb-0"
              />
          </div>
          <div className="px-4 md:px-10 text-left md:w-4/5">
            <h3 className={`mb-2 text-2xl ${alice.className} text-[#DD2D4A]`}>Massage ayurvédique</h3>
            <p className={`${homemadeApple.className} text-xl mb-2 md:my-3`}>“Une invitation à un voyage de bien-être.”</p>
            {
              (showSoinAyurvedique === true) &&
              <p className={`text-lg ${comfortaa.className}`}>
                Inspiré de la médecine traditionnelle indienne, l&apos;ayurvéda, le massage est bien plus qu&apos;un simple soin corporel. Il s&apos;agit d&apos;une véritable thérapie holistique visant à harmoniser le corps et l&apos;esprit. Utilisant de l&apos;huile chaude et des gestes spécifiques à chaque dosha (constitution corporelle), le massage ayurvédique aide à détoxifier le corps, améliorer la circulation sanguine et renforcer le système immunitaire. Les mouvements lents et rythmiques, combinés à une pression légère, favorisent la relaxation profonde et la libération des tensions accumulées. C&apos;est une invitation à un voyage intérieur, où chaque toucher devient une caresse apaisante pour l&apos;âme, permettant de retrouver l&apos;équilibre et la sérénité.
                Un bain de pied aux plantes avec un gommage démarre le rituel, invitant à la détente. Ensuite, une serviette chaude et moelleuse enveloppe les pieds. Enfin, vous êtes convié à vous installer sur la table de massage chauffée afin que de profiter d&apos;un pure moment de détente où chaque zone de votre corps recevra une attention particulière. Chaque mouvement est pensé pour maximiser votre confort, afin de vous emmener dans un état de relaxation profonde. Les tensions accumulées se dissoudront lentement, vous laissant une sensation de légèreté mentale et physique. C&apos;est un véritable voyage sensoriel qui vous attend, une parenthèse de bien-être où le temps semble s&apos;arrêter pour vous offrir une pause bien méritée.
                <br></br>
                <p onClick={toggleContreIndicationsSoinAyurvedique} className={`${alice.className} text-xl cursor-pointer my-4`}><span className="button bg-rose-poudre my-3 border-none">Les contre-indications</span></p>
                {showContreIndicationsSoinAyurvedique && (
                  <p className={`text-lg ${comfortaa.className}`}>
                    Merci de me contacter en amont si vous avez des pathologies cardiaques ou des problématiques de tension.
                  </p>
                )}
                <br/>
                <span className="font-bold text-lg">
                  Bain de pied + massage 1 h + 15 min d&apos;échange
                  <br/>
                  <Link href="/tarif" className="">1h15 à partir de 70€</Link>
                </span>
              </p>
            }
            <button onClick={toggleSoinAyurvedique} className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] my-2 text-[#DD2D4A]`}>{showSoinAyurvedique === true ? "Voir moins" : "Voir plus"}</button>
            </div>

        </div>

        <div className="mt-2 md:pt-10">
          <p className={`${homemadeApple.className} text-md pb-2`}>
            <span className="text-[#DD2D4A]">Offrez un moment de bonheur.</span>
          </p>
          <p className={`text-md ${comfortaa.className}`}>
            Vous pouvez retrouver toutes mes prestations en carte cadeau.
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
        <p></p>
        <p className={`${alice.className} italic text-sm pt-2 md:pt-10`}>*Une majoration peut s&apos;exercer en fonction du lieu d&apos;habitation et du jour de la prestation</p>
        <br />
        <Link href="/formule" className={`${alice.className} button bg-[#FFF] border-xl border-[#DD2D4A] text-[#DD2D4A]`}>Voir les formules</Link>
      </div>
    </div>
  </div>
  );
};

export default SoinsFeminins;
