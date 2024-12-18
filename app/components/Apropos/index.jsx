import Image from "next/image";
// import Portrait from "../../assets/portrait.jpg";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";
import Portrait from "../../assets/portrait-zoomout.jpg";
import PortraitAPropos from "../../assets/apropos.jpg"
import BebeCharlotte from "../../assets/bebe-charlotte.jpg"

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

    <div id="apropos" className="flex flex-col justify-center">
      <div className="apropos-desktop md:apropos-desktop bg-cover bg-center h-96 md:h-[1300px] flex items-center justify-center text-[#fff] opacity-85">
        <h1 className={`${sendFlowers.className} text-xl md:text-3xl font-bold text-center`}>Lolita,<br/>Accompagnante périnatale<br/>Praticienne en soins féminins et bébé
        </h1>
      </div>
      <div className="min-h-[90vh] pt-10 flex justify-center items-center">
        <div className="flex flex-col md:flex-row md:justify-around md:items-center space-y-6 md:space-y-0 md:space-x-8 mx-auto px-4">
          <div className="bg-rose-poudre px-8 py-6 shadow text-[#3f3a36] md:max-w-lg">
            <h2 className={`${sendFlowers.className} text-2xl font-bold leading-tight mt-1.5 mb-2.5`}>
              Lolita Garnier
            </h2>
            <p className={`${alice.className} text-gray-800 text-sm mt-7 mb-2 leading-relaxed`}>
              Passionn&eacute;e par le soin et prendre soin, j&apos;ai &eacute;t&eacute; infirmière en
              chirurgie canc&eacute;rologique pendant 7 ans. Maman de deux enfants,
              j&apos;ai compris la n&eacute;cessit&eacute; et le besoin d&apos;apporter plus de
              confort et de bien-être durant cette p&eacute;riode et dans la vie en
              g&eacute;n&eacute;ral. Je souhaite mettre la femme au cœur de mon
              engagement. Pour que toutes les femmes se sentent l&eacute;gitimes
              dans leur corps et leur esprit. Je vous propose un
              accompagnement complet pour accueillir vos histoires en
              prenant soin de vous.<br></br> A très vite, Lolita
            </p>
          </div>
          <Image
            src={Portrait}
            alt="bain sensoriel"
            width={350}
            height={500}
            className="h-auto max-w-full rounded-lg"
          />
        </div>
      </div>
    </div>

  );
};

export default Apropos;
