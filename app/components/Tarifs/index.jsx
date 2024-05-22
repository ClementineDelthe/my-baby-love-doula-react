"use client";

import Image from "next/image";
import IconSoin1 from "../../assets/icon_soin1.png";
// import SoinBebe from "../../assets/bain-sensoriel2.jpg";
import SoinBebe from "../../assets/bebe-zoom-main-cube.jpg";
import SoinFeminin from "../../assets/massage-dos5-cube.jpg";
import SoinRebozo from "../../assets/massage-4mains3-cube.jpg";

import { useState } from "react";

const Tarifs = () => {
  const categories = [
    { nom: "Féminin", img: SoinFeminin },
    { nom: "Rebozo", img: SoinRebozo },
    { nom: "Bébé", img: SoinBebe },
  ];
  const tarifsFeminins = [
    { nom: "Massage Femme Enceinte", prix: "120" },
    { nom: "Massage Postnatal", prix: "120" },
    { nom: "Massage Déesse", prix: "120" },
  ];
  const tarifsRebozo = [
    { nom: "Douceur du Rebozo*", prix: "60" },
    { nom: "Rituel autour du Rebozo*", prix: "250" },
  ];
  const tarifsBebe = [
    { nom: "Rituel du Bain Sensoriel®️*", prix: "120" },
    { nom: "Massage bébé*", prix: "55" },
    { nom: "Soulager les maux de bébé*", prix: "55" },
    { nom: "Massage/Yoga bambin*", prix: "60" },
  ];

  const [affichage, setAffichage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (index) => {
    setSelectedCategory(index);
    setAffichage(index);
    console.log(affichage);
  };

  return (
    <div id="tarifs" className="bg-[#FFE8D6] py-6 border-b border-[#F2F3F5]">
      <div className="p-8 mx-auto my-5 max-w-7xl ">
        <h2 className="text-2xl font-semibold text-[#3f3a36] mb-10">
          Les tarifs
        </h2>
        <div className="flex justify-center items-center">
          <div class="flex -space-x-16">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`bg-[#F2F3F5] rounded-full cursor-pointer ${
                  selectedCategory === index ? "z-40" : ""
                }`}
                onClick={() => selectCategory(index)}
              >
                <Image
                  src={cat.img}
                  alt={cat.nom}
                  width={300}
                  height={300}
                  className="w-90 h-90 border-2 border-white rounded-full border-double

                  "
                />
                <h3 className="text-center text-sm md:text-base">{cat.nom}</h3>
              </div>
            ))}
          </div>
        </div>
        {affichage === 0 ? (
          <ul className="my-8">
            {tarifsFeminins.map((tarif, index) => (
              <li key={index} className="mb-10">
                <div className="flex justify-between">
                  <p>{tarif.nom}</p>
                  <p className="text-slate-300 opacity-55 text-end">
                    {tarif.prix}€
                  </p>
                </div>
                <hr className="rounded-lg shadow" />
              </li>
            ))}
          </ul>
        ) : null}
        {affichage === 1 ? (
          <ul className="my-8">
            {tarifsRebozo.map((tarif, index) => (
              <li key={index} className="mb-10">
                <div className="flex justify-between border-b">
                  <p>{tarif.nom}</p>
                  <p className="text-slate-300 opacity-55 text-end">
                    {tarif.prix}€
                  </p>
                </div>
                {/* <hr className="rounded-lg shadow bg-red-400 opacity-55" /> */}
              </li>
            ))}
          </ul>
        ) : null}
        {affichage === 2 ? (
          <ul className="my-8">
            {tarifsBebe.map((tarif, index) => (
              <li key={index} className="mb-10">
                <div className="flex justify-between">
                  <p>{tarif.nom}</p>
                  <p className="text-slate-300 opacity-55 text-end">
                    {tarif.prix}€
                  </p>
                </div>
                <hr className="rounded-lg shadow" />
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-16 italic">
          Les prix indiqués sont les prix appliqués à chaque prestation, pour un
          devis personnalisé merci de me contacter directement.
        </p>
        <p className="mt-4 italic">
          * Une majoration peut s&apos;exercer en fonction du lieu
          d&apos;habitation et du jour du RDV
        </p>
      </div>
    </div>
  );
};

export default Tarifs;
