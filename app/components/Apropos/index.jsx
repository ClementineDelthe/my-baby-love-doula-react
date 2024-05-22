import Image from "next/image";
// import Portrait from "../../assets/portrait.jpg";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import Portrait from "../../assets/portrait-zoomout.jpg";



const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: ['400'],
});
const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
});

const Apropos = () => {
  return (
    <div id="apropos">
      <main class="relative min-h-screen bg-[#FFE8D6] py-14">
        <section class="md:flex items-center justify-center relative z-10 min-h-screen">
          <article>
            <div class="relative">
              <Image
                src={Portrait}
                alt="bain sensoriel"
                width={380}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
              <div class="md:rounded-l-[30px] md:rounded-t-[30px] bg-[#FCD5CE] md:absolute -bottom-16 -right-48 md:w-[19rem] px-8 py-6 md:h-[550px] shadow text-[#3f3a36]">
                {/* <span class="inline-block text-sm text-gray-500">
                  13. Oct, 2019
                </span> */}
                <h2 class={`${sendFlowers.className} text-2xl font-bold leading-tight mt-1.5 mb-2.5`}>
                  Lolita Garnier
                </h2>
                {/* <a
                  href="#"
                  class="inline-block text-blue-400 text-sm capitalize hover:underline"
                >
                  new article
                </a> */}
                <p class="text-gray-800 text-sm mt-7 mb-4 leading-relaxed">
                  Passionnée par le soin et prendre soin, j&apos;ai été infirmière en
                  chirurgie cancérologique pendant 7 ans. Maman de deux enfants,
                  j&apos;ai compris la nécessité et le besoin d&apos;apporter plus de
                  confort et de bien-être durant cette période et dans la vie en
                  général. Je souhaite mettre la femme au cœur de mon
                  engagement. Pour que toutes les femmes se sentent légitimes
                  dans leur corps et leur esprit. Je vous propose un
                  accompagnement complet pour accueillir vos histoires en
                  prenant soin de vous. A très vite, Lolita
                </p>
                <a
                  href="#soins-feminins"
                  class={`${alice.className} flex justify-end items-center uppercase font-semibold text-sm hover:underline`}
                >
                  Découvrir
                </a>
              </div>
            </div>
          </article>
        </section>
        <div class="bg-[#FCD5CE] absolute bottom-0 w-full h-[30vh] rounded-tr-[17rem]"></div>
      </main>
    </div>
  );
};

export default Apropos;
