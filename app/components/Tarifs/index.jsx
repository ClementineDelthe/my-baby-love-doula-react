"use client";

const Tarifs = () => {
  const tarifs = [
    { nom: "Massage Femme Enceinte", prix: "120" },
    { nom: "Massage Postnatal", prix: "120" },
    { nom: "Massage Déesse", prix: "120" },
    { nom: "Douceur du Rebozo", prix: "60" },
    { nom: "Rituel autour du Rebozo", prix: "250" },
    { nom: "Rituel du Bain Sensoriel®️", prix: "120" },
    { nom: "Massage bébé", prix: "55" },
    { nom: "Soulager les maux de bébé", prix: "55" },
    { nom: "Massage/Yoga bambin", prix: "60" },
  ];

  return (
    <div className="bg-[#f3e9e7] py-6 border-b border-[#F2F3F5]">
      <div id="tarifs" className="p-8 mx-auto my-5 max-w-7xl ">
        <h2 className="text-2xl mb-2 font-semibold text-[#3f3a36] mb-10">
          Les tarifs
        </h2>
        <ul className="">
          {tarifs.map((tarif, index) => (
          <li key={index} className="mb-10">
            <div className="flex justify-between">
              <p>{tarif.nom}</p>
              <p className="text-slate-300 opacity-55 text-end">{tarif.prix}€</p>
            </div>
            <hr className="rounded-lg shadow" />
          </li>
          ))}
        </ul>
        <p className="mt-10 italic">
          * Les prix indiqués sont les prix appliqués à chaque prestation, pour un devis personnalisé merci de me contacter directement.
        </p>
      </div>
    </div>
  );
};

export default Tarifs;
