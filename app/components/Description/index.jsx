"use client";
import Image from "next/image";

import ImagePresentation from "../../assets/presentation-couleur.jpg"
import ImagePresentationBW from "../../assets/portrait-bw.jpg"



const Description = () => {
  return (
    <div id="" className="flex items-center justify-center min-h-screen bg-[#f3e9e7] border-b border-[#F2F3F5]">
      <div className="relative">
        <div className="absolute md:top-20 sm:top-14 right-10 mr-1 self-center md:w-2/4 justify-between p-10 bg-light-pink-bg rounded-bl-lg rounded-tr-lg z-10">
          <div>
            <h1 className="md:text-5xl sm:text-sm font-bold text-[#3f3a36] mb-6">
              LOLITA GARNIER
            </h1>
            <p className="sm:text-xs md:text-xl text-[#3f3a36] mb-4">
              Passionnée par le soin et prendre soin, j&apos;ai été infirmière en
              chirurgie cancérologique pendant 7 ans.<br></br>
              Maman de deux enfants,
              j&apos;ai compris la nécessité et le besoin d&apos;apporter plus de confort
              et de bien-être durant cette période et dans la vie en général. Je
              souhaite mettre la femme au cœur de mon engagement. Pour que
              toutes les femmes se sentent légitimes dans leur corps et leur
              esprit. Je vous propose un accompagnement complet pour accueillir
              vos histoires en prenant soin de vous.<br></br>
              A très vite, Lolita
            </p>
          </div>
          {/* <Link
            href=""
            className="w-full border border-pink-bg shadow shadow-pink-p p-1 rounded bg-pink-bg hover:bg-pink-p animate-pulse "
          >
            DECOUVRIR
          </Link> */}
        </div>
        <div className="ml-1 relative z-1 items-center justify-center w-3/5 mt-10">
          {/* <Image
            src={Presentation}
            alt="Exemple"
            width={800}
            height={1500}
            className="object-cover sm:w-full lg:aspect-square"
          /> */}
          {/* <Image
            src={ImagePresentation}
            alt="Exemple"
            width={800}
            height={1500}
            className="object-cover sm:w-full lg:aspect-square"
          /> */}
          <Image
            src={ImagePresentationBW}
            alt="Exemple"
            width={800}
            height={1500}
            className="object-cover sm:w-full lg:aspect-square"
          />

        </div>
      </div>
    </div>
  );
};

export default Description;
