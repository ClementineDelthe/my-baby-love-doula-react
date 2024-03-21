import Image from "next/image";
import Portrait from "../../assets/portrait.jpg";

const Apropos = () => {
  return (
    <div id="apropos">
      <main class="relative min-h-screen bg-light-pink-bg py-14">
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
              <div class="md:rounded-l-[30px] md:rounded-t-[30px] bg-[#f3e9e7] md:absolute -bottom-16 -right-48 md:w-[19rem] px-8 py-6 md:h-[550px] shadow text-[#3f3a36]">
                {/* <span class="inline-block text-sm text-gray-500">
                  13. Oct, 2019
                </span> */}
                <h2 class="text-2xl font-bold leading-tight mt-1.5 mb-2.5">
                  {/* USPI/Tenet <br /> Surgery Center */}
                  LOLITA GARNIER
                </h2>
                {/* <a
                  href="#"
                  class="inline-block text-blue-400 text-sm capitalize hover:underline"
                >
                  new article
                </a> */}
                <p class="text-gray-800 text-sm my-7 leading-relaxed">
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
                  class="flex justify-end items-center uppercase text-blue-800 font-semibold text-sm hover:underline"
                >
                  <span class="mr-4 block w-10 h-0.5 bg-blue-800"></span>Découvrir
                </a>
              </div>
            </div>
          </article>
        </section>
        <div class="bg-[#F2F3F5] absolute bottom-0 w-full h-[30vh] rounded-tr-[17rem]"></div>
      </main>
    </div>
  );
};

export default Apropos;
