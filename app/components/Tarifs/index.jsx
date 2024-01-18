"use client";

const Tarifs = () => {
  const tarifs = [
    { nom: "Massage prénatal", prix: "160" },
    { nom: "Massage post natal", prix: "150" },
    { nom: "Massage bébé", prix: "125" },
    { nom: "Massage Rebozo", prix: "375" },
    { nom: "Bain Sensoriel", prix: "145" },
  ];

  return (
    <div className="bg-[#f3e9e7] py-6">
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
          * Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe
          quis quia ea obcaecati repellat tempora magnam sapiente sed corrupti
          sint velit, sit non nulla, beatae porro optio, voluptas iure!
        </p>
      </div>
    </div>
  );
};

export default Tarifs;
