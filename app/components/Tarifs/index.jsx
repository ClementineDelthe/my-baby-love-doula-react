"use client";

import Image from "next/image";
// import IconSoin1 from "../../assets/icon_soin1.png";
// import SoinBebe from "../../assets/bain-sensoriel2.jpg";
import SoinBebe from "../../assets/bebe-zoom-main-cube.jpg";
import SoinFeminin from "../../assets/massage-dos5-cube.jpg";
import SoinRebozo from "../../assets/massage-4mains3-cube.jpg";
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

import { useState } from "react";

const Tarifs = () => {
  const categories = [
    { nom: "Féminin", img: SoinFeminin },
    { nom: "Rebozo", img: SoinRebozo },
    { nom: "Bébé", img: SoinBebe },
  ];
  // const tarifsFeminins = [
  //   { nom: "Massage Femme Enceinte", prixDomicile: "1h-80€/ 2h-120€", prixCocon: "1h-70€/ 2h-100€"},
  //   { nom: "Massage Postnatal", prixDomicile: "1h-80€/ 2h-120€", prixCocon: "1h-70€/ 2h-100€"},
  //   { nom: "Massage Energétique crânien et dos", prixDomicile: "1h-60€", prixCocon: "1h-50€"},
  //   { nom: "Massage Déesse", prixDomicile: "1h45-110€", prixCocon: "1h45-90€"},
  //   { nom: "Massage Ayurvédique", prixDomicile: "1h15-80€", prixCocon: "1h15-70€"},
  // ];
  // const tarifsRebozo = [
  //   { nom: "Douceur du Rebozo", prixDomicile: "1h-1h30 60€", prixCocon: "1h-1h30 60€", prixYT:"1h-1h30 60€" },
  //   { nom: "Rituel autour du Rebozo", prixCocon: "3h-250€", prixYT: "3h-250€" },
  // ];
  // const tarifsBebe = [
  //   { nom: "Rituel du Bain Sensoriel®", prixDomicile: "2h-120€", prixCocon: "2h-100€", prixYT: "2h-120€" },
  //   { nom: "Rituel du Bain Sensoriel® Photographié", prixDomicile: "2h-240€", prixCocon: "2h-220€", prixYT: "2h-270€" },
  //   { nom: "Massage bébé", prixDomicile: "1h-55€", prixCocon: "1h-45€", prixYT: "1h-55€" },
  //   { nom: "Soulager les maux de bébé", prixDomicile: "1h-55€", prixCocon: "1h-45€", prixYT: "1h-55€" },
  //   // { nom: "Massage/Yoga bambin", prixDomicile: "1h-60€", prixCocon: "1h-50€", prixYT: "1h-60€" },
  // ];
  const tarifsFeminins = [
    { nom: "Massage Femme Enceinte", prixCocon: "2h-100€", prixYT: "2h-120€"},
    { nom: "Massage Postnatal", prixCocon: "2h-100€", prixYT: "2h-120€"},
    { nom: "Massage Energétique crânien et dos", prixCocon: "1h-50€"},
    { nom: "Massage Déesse", prixCocon: "1h45-90€"},
    { nom: "Massage Ayurvédique", prixCocon: "1h15-70€"},
  ];
  const tarifsRebozo = [
    { nom: "Douceur du Rebozo", prixDomicile: "1h-1h30 60€", prixCocon: "1h-1h30 60€" },
    { nom: "Rituel autour du Rebozo", prixCocon: "3h-250€", prixYT: "3h-270€" },
  ];
  const tarifsBebe = [
    { nom: "Rituel du Bain Sensoriel®", prixDomicile: "2h-120€", prixCocon: "2h-100€", prixYT: "2h-120€" },
    { nom: "Rituel du Bain Sensoriel® Photographié", prixDomicile: "2h-240€", prixCocon: "2h-220€", prixYT: "2h-270€" },
    { nom: "Massage bébé", prixDomicile: "1h-55€", prixCocon: "1h-45€" },
    { nom: "Soulager les maux de bébé", prixDomicile: "1h-55€", prixCocon: "1h-45€" },
    // { nom: "Massage/Yoga bambin", prixDomicile: "1h-60€", prixCocon: "1h-50€", prixYT: "1h-60€" },
  ];

  const [affichage, setAffichage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (index) => {
    setSelectedCategory(index);
    setAffichage(index);
    console.log(affichage);
  };

  return (
    <div id="tarifs" className="py-6 min-h-[90vh] pt-">
      <div className="p-8 mx-auto my-5 max-w-7xl ">
        {/* <h2 className="text-2xl font-semibold text-[#3f3a36] mb-10"> */}
        <h2 className={`${sendFlowers.className} text-3xl font-bold tracking-tight mb-10 text-[#DD2D4A]`}>

          Les tarifs
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex -space-x-16">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`bg-[#F9F1E7] rounded-full cursor-pointer ${
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
                <h3 className={`${alice.className} text-center text-sm md:text-base`}>{cat.nom}</h3>
              </div>
            ))}
          </div>
        </div>
        {affichage === 0 ? (
          // <ul className="my-8">
          //   {tarifsFeminins.map((tarif, index) => (
          //     <li key={index} className="mb-10">
          //       <div className={`${alice.className} flex justify-between`}>
          //         <p>{tarif.nom}</p>
          //         <p className="text-slate-300 opacity-55 text-end">
          //           {tarif.prixDomicile}€
          //         </p>
          //       </div>
          //       <hr className="rounded-lg shadow" />
          //     </li>
          //   ))}
          // </ul>
          <ul className="my-8">

            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>Dans mon cocon sur Villenave-d&apos;Ornon</h4>
            {tarifsFeminins.map((tarif, index) => (
              <li key={index} className="mb-10">
                <div className={`${alice.className} flex justify-between`}>
                  <p>{tarif.nom}</p>
                  <p className="text-slate-300 opacity-55 text-end">
                    {tarif.prixCocon}
                  </p>
                </div>
                <hr className="rounded-lg shadow" />
              </li>
            ))}
            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>Au Yellow Temple</h4>
            {tarifsFeminins.map((tarif, index) => (
              <li key={index} className="mb-10">
                {
                  (tarif.prixYT) &&
                  <div>
                    <div className={`${alice.className} flex justify-between`}>
                      <p>{tarif.nom}</p>
                      <p className="text-slate-300 opacity-55 text-end">
                        {tarif.prixYT}
                      </p>
                    </div>
                    <hr className="rounded-lg shadow" />
                  </div>
                }
              </li>
            ))}
          </ul>

        ) : null}
        {affichage === 1 ? (
          // <ul className="my-8">
          //   {tarifsRebozo.map((tarif, index) => (
          //     <li key={index} className="mb-10">
          //       <div className={`${alice.className} flex justify-between border-b`}>
          //         <p>{tarif.nom}</p>
          //         <p className="text-slate-300 opacity-55 text-end">
          //           {tarif.prixDomicile}€
          //         </p>
          //       </div>
          //       {/* <hr className="rounded-lg shadow bg-red-400 opacity-55" /> */}
          //     </li>
          //   ))}
          // </ul>
          <ul className="my-8">

            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>Dans mon cocon sur Villenave-d&apos;Ornon</h4>
            {tarifsRebozo.map((tarif, index) => (
              <li key={index} className="mb-10">
                <div className={`${alice.className} flex justify-between`}>
                  <p>{tarif.nom}</p>
                  <p className="text-slate-300 opacity-55 text-end">
                    {tarif.prixCocon}
                  </p>
                </div>
                <hr className="rounded-lg shadow" />
              </li>
            ))}
            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>À domicile</h4>
            {tarifsRebozo.map((tarif, index) => (
              <li key={index} className="mb-10">
                {
                  (tarif.prixDomicile) &&
                  <div>
                    <div className={`${alice.className} flex justify-between`}>
                      <p>{tarif.nom}</p>
                      <p className="text-slate-300 opacity-55 text-end">
                        {tarif.prixDomicile}
                      </p>
                    </div>
                    <hr className="rounded-lg shadow" />
                  </div>
                }
              </li>
            ))}
            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>Au Yellow Temple</h4>
            {tarifsRebozo.map((tarif, index) => (
              <li key={index} className="mb-10">
                {
                  (tarif.prixYT) &&
                  <div>
                    <div className={`${alice.className} flex justify-between`}>
                      <p>{tarif.nom}</p>
                      <p className="text-slate-300 opacity-55 text-end">
                        {tarif.prixYT}
                      </p>
                    </div>
                    <hr className="rounded-lg shadow" />
                  </div>
                }
              </li>
            ))}
          </ul>
        ) : null}
        {affichage === 2 ? (
          // <ul className="my-8">
          //   {tarifsBebe.map((tarif, index) => (
          //     <li key={index} className="mb-10">
          //       <div className={`${alice.className} flex justify-between`}>
          //         <p>{tarif.nom}</p>
          //         <p className="text-slate-300 opacity-55 text-end">
          //           {tarif.prixDomicile}€
          //         </p>
          //       </div>
          //       <hr className="rounded-lg shadow" />
          //     </li>
          //   ))}
          // </ul>
          <ul className="my-8">

            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>Dans mon cocon sur Villenave-d&apos;Ornon</h4>
            {tarifsBebe.map((tarif, index) => (
              <li key={index} className="mb-10">
                <div className={`${alice.className} flex justify-between`}>
                  <p>{tarif.nom}</p>
                  <p className="text-slate-300 opacity-55 text-end">
                    {tarif.prixCocon}
                  </p>
                </div>
                <hr className="rounded-lg shadow" />
              </li>
            ))}
            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>À domicile autour de Bordeaux</h4>
            {tarifsBebe.map((tarif, index) => (
              <li key={index} className="mb-10">
                <div className={`${alice.className} flex justify-between`}>
                  <p>{tarif.nom}</p>
                  <p className="text-slate-300 opacity-55 text-end">
                    {tarif.prixDomicile}
                  </p>
                </div>
                <hr className="rounded-lg shadow" />
              </li>
            ))}
            <h4 className={`${sendFlowers.className} text-2xl font-semibold mt-8 pb-4`}>Au Yellow Temple et ses alentours</h4>
            {tarifsBebe.map((tarif, index) => (
              <li key={index} className="mb-10">
                {
                  (tarif.prixYT) &&
                  <div>
                    <div className={`${alice.className} flex justify-between`}>
                      <p>{tarif.nom}</p>
                      <p className="text-slate-300 opacity-55 text-end">
                        {tarif.prixYT}
                      </p>
                    </div>
                    <hr className="rounded-lg shadow" />
                  </div>
                }
              </li>
            ))}
          </ul>
        ) : null}
        <div className={`${alice.className}`}>
          <p className="mt-16 italic">
            Les prix indiqués sont les prix appliqués à chaque prestation, pour un
            devis personnalisé merci de me contacter directement.
          </p>
          <p className="mt-4 italic">
            * Des frais supplémentaires peuvent s&apos;ajouter suivant le secteur et les frais de parking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
