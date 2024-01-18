"use client";
import Image from "next/image";
import Example from "../../assets/example.png";
import Presentation from "../../assets/doulabw.jpg";
import Link from "next/link";

const Description = () => {
  return (
    <div className="items-center static justify-center min-h-screen bg-[#f3e9e7]">
      <div className="flex p-2">
        <div className="absolute z-10 bottom-30 right-40 mr-1 self-center w-2/4 justify-between p-10 bg-light-pink-bg rounded-bl-lg rounded-tr-lg">
          <div>
            <h1 className="text-5xl font-bold text-[#3f3a36] mb-6">
              LOLITA GARNIER - DOULA
            </h1>
            <p className="text-xl text-[#3f3a36] mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              iusto quo, a corporis blanditiis magnam consequuntur at accusamus
              aliquid vel nulla maxime iure repudiandae vero, aut obcaecati,
              modi consectetur. Eius.
            </p>
          </div>
          <Link href="" className="w-full border border-pink-bg shadow shadow-pink-p p-1 rounded bg-pink-bg hover:bg-pink-p">
            DECOUVRIR
          </Link>
        </div>
        <div className="ml-1 relative z-1 items-center justify-center w-3/5 ml-11 mt-10">
          <Image
            src={Presentation}
            alt="Exemple"
            width={800}
            height={1500}
            className="  object-cover sm:w-full lg:aspect-square"
          />
          {/* <img
            alt="Les Jolis Mantras cards"
            className="object-cover w-4/5 h-4/5"
            height="600"
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
            width="600"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Description;
