"use client";
import Link from "next/link";
import IconBaby from "../../assets/icon_baby.png";
import IconPregnant from "../../assets/icon_pregnant.png";
import IconRebozo from "../../assets/icon_rebozo.png";
import Image from "next/image";
import { useState } from "react";

const Infos = () => {
  const [iconStates, setIconStates] = useState([
    { isFlipped: false },
    { isFlipped: false },
    { isFlipped: false },
  ]);

  const handleMouseEnter = (index) => {
    setIconStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isFlipped = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setIconStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index].isFlipped = false;
      return newStates;
    });
  };

  const iconContent = [
    { image: IconRebozo, text: "Rituel du Rebozo" },
    { image: IconPregnant, text: "Soin Femme Enceinte" },
    { image: IconBaby, text: "Soins bébé" },
  ];

  return (
    <div id="apropos" className="flex flex-col min-h-[93vh] bg-[#F2F3F5] text-gray-800">
      <div className="mx-auto my-auto">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Lolita Garnier - Doula
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    L&apos;accompagnement dont vous avez besoin, maman, bébé et
                    esprit.
                  </p>
                </div>
                <div className="flex justify-center space-x-4 lg:justify-start">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-light-pink-bg px-4 py-2 text-sm font-medium transition-colors hover:bg-pink-bg hover:text-gray-900 focus:bg-[#FBB6CE] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="#soins"
                  >
                    Découvrir
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-pink-bg rounded-lg border border-pink-bg">
                <Link
                className=""
                href="#gallery"
                >
                  <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x divide-pink-bg md:grid-cols-3">
                    {iconContent.map((icon, index) => (
                      <div
                        key={index}
                        className={`mx-auto flex w-full items-center justify-center p-4 sm:p-8 ${
                          iconStates[index].isFlipped
                            ? "transform rotate-y-180 transition-transform duration-2000"
                            : "transition-transform duration-2000"
                        }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        {iconStates[index].isFlipped ? (
                          <p className="text-center text-red-p text-lg font-bold p-4">
                            {icon.text}
                          </p>
                        ) : (
                          <Image
                            src={icon.image}
                            alt={icon.text}
                            width={400}
                            height={600}
                            className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Infos;
