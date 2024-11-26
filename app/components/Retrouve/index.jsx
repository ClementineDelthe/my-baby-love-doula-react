// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Send_Flowers, Alice, Comfortaa } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import YellowTemple from "../../assets/yellow-temple.jpg";
import YellowTemple1 from "../../assets/YT_pic1.jpg";
import YellowTemple2 from "../../assets/YT_pic2.jpg";
import YellowTemple3 from "../../assets/YT_pic3.jpg";

import Retrouve1 from "../../assets/retrouve1.jpeg";
import Retrouve2 from "../../assets/retrouve2.jpg";
import Retrouve3 from "../../assets/retrouve3.jpeg";
import Retrouve4 from "../../assets/retrouve4.jpeg";
import Retrouve5 from "../../assets/retrouve5.jpeg";
// const aProposImage = require('../../assets/a_propos.png');

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

const Retrouve = () => {
  return (
    <div>
      <div className="retrouve-desktop md:apropos-desktop bg-cover bg-center h-64 md:h-[500px] flex items-center justify-center text-[#fff] opacity-85 md:mt-16">
        {/* <h1 className={`${sendFlowers.className} text-xl md:text-3xl font-bold text-center`}>Retrouve-moi dans mon cocon sur Villenave d&apos;Ornon
        </h1> */}
      </div>
      <div id="retrouve" className="flex flex-col items-center justify-center pt-16 md:pt-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="">
          <div className="text-center">
            <div>
              <h2 className={`${alice.className} text-2xl font-semibold pb-2 text-[#DD2D4A]`}>
                Retrouve-moi dans mon cocon sur<br/>Villenave d&apos;Ornon
              </h2>

              <div className="my-4 text-lg">
                <div className="py-4 flex flex-col items-center justify-center">
                  <div className="max-w-4xl flex flex-col md:flex-row md:justify-between w-full items-center pb-4">
                    <Image
                      src={Retrouve3}
                      alt="bain sensoriel"
                      width={250}
                      height={400}
                      className="rounded-lg mb-4 md:mb-0"
                    />

                    <video
                      controls
                      width={250}
                      height="auto"
                      className="rounded-lg shadow-lg mb-4 md:mb-0"
                    >
                      <source src="/videos/domicile_vid.mp4" type="video/mp4" />
                    </video>
                    <Image
                      src={Retrouve2}
                      alt="bain sensoriel"
                      width={250}
                      height={400}
                      className="rounded-lg mb-4 md:mb-0"
                    />
                  </div>
                  <p className={`${comfortaa.className} text-sm text-center`}>
                    Situé au cœur de Villenave d&apos;ornon, mon cocon est spécialement conçu pour vous accueillir dans un environnement chaleureux et accueillant. Car chaque moment passé avec votre bébé est précieux, je souhaite vous offrir un cadre propice à la tendresse et à la convivialité.
                    <br/>
                    Mon espace est équipé de tout le nécessaire pour garantir le confort des petits et le bien-être des parents. Que vous veniez pour des ateliers d&apos;apprentissage du massage bébé ou le rituel du bain sensoriel® vous trouverez ici un lieu où vous pourrez vous sentir à l&apos;aise et soutenu.
                    <br/>
                    J&apos;ai hâte de continuer à vous accueillir et de partager avec vous des moments inoubliables
                  </p>
                  <div className="max-w-4xl flex flex-col md:flex-row md:justify-between w-full items-center py-4">
                    <Image
                      src={Retrouve5}
                      alt="bain sensoriel"
                      width={250}
                      height={400}
                      className="rounded-lg mb-4 md:mb-0"
                    />
                    <video
                      controls
                      width={250}
                      height="auto"
                      className="rounded-lg shadow-lg mb-4 md:mb-0"
                    >
                      <source src="/videos/retrouve6.mp4" type="video/mp4" />
                    </video>
                    <Image
                      src={Retrouve1}
                      alt="bain sensoriel"
                      width={250}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <p className={`${comfortaa.className} text-sm text-center py-2`}>
                    Mon cocon se métamorphose pour recevoir les femmes dans un cadre intimiste et douillet. Favorisant la déconnexion et la confidence, j&apos;aménage mon espace pour le rendre cosy et chaleureux. Que ce soit au sol ou sur table, les massages proposés sont pensés à travers le confort, la douceur et la chaleur ambiante. En lumière naturelle ou éclairée par les bougies, vous serez transportées dans mon univers pour une parenthèse enchantée.
                  </p>

                  <p className={`${alice.className} pt-2`}>Déplacement &agrave; domicile Bordeaux CUB</p>
                  <Link href="https://www.google.com/maps/place/My+baby+love+-+Doula/@44.7782579,-0.5424504,17z/data=!3m1!4b1!4m6!3m5!1s0xd5527e745720d09:0x2be563342a7d92c3!8m2!3d44.7782541!4d-0.5398755!16s%2Fg%2F11vj05ws4m?entry=ttu">
                    <p className={`${alice.className} pt-2`}>Mon cocon sur Villenave-d'Ornon : <u>1 rue Pythagore</u></p>
                  </Link>
                  <div className="w-full max-w-5xl py-5">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.124952567947!2d-0.5424504237519604!3d44.7782578789438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e745720d09%3A0x2be563342a7d92c3!2sMy%20baby%20love%20-%20Doula!5e0!3m2!1sfr!2sfr!4v1707322023998!5m2!1sfr!2sfr"
                      width="100%"
                      height="150"
                      className="rounded-xl"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              <div className="text-xl font-semibold flex flex-col items-center justify-center">
                <Link href="https://www.yellowtemple.fr/" target="_blank">
                  <p className={`${alice.className} pb-2 pt-5 md:pt-0 text-[#DD2D4A] text-2xl`}>Yellow Temple</p>
                </Link>
                <p className={`${comfortaa.className} text-sm text-center`}>Maison holistique centr&eacute;e sur le bien-&ecirc;tre, situ&eacute;e sur la belle presqu&apos;&icirc;le du cap ferret, &agrave; Petit Piquey. Venez d&eacute;couvrir ce lieu plein de charme entre les dunes, l&apos;eau du bassin et les pins. V&eacute;ritable ode &agrave; la d&eacute;tente, je vous accueille dans cette maison pour la r&eacute;alisation de toutes mes prestations. Venez vivre une exp&eacute;rience de d&eacute;tente absolu dans un cadre exceptionnel.</p>
                <Image
                  src={YellowTemple}
                  alt="Yellow Temple"
                  width={500}
                  height={650}
                  className="rounded-lg shadow-lg my-4"
                />
                <Link href="https://www.google.com/maps/place/Yellow+Temple/@44.7265863,-1.2187049,17z/data=!3m1!4b1!4m6!3m5!1s0xd535f4d87dac557:0xb40a72f0479a2d3b!8m2!3d44.7265863!4d-1.21613!16s%2Fg%2F11kphk8vrh?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                  <p className={`${alice.className} text-sm text-center`}>Yellow Temple, 53 avenue du Truc Vert, 33950 Lège-Cap-Ferret</p>
                </Link>
                <div className="max-w-4xl flex flex-col md:flex-row md:justify-between w-full items-center py-5">
                  <Image
                    src={YellowTemple1}
                    alt="YellowTemple1"
                    width={250}
                    height={400}
                    className="rounded-lg mb-4 md:mb-0"
                  />
                  <Image
                    src={YellowTemple2}
                    alt="YellowTemple2"
                    width={250}
                    height={400}
                    className="rounded-lg mb-4 md:mb-0"
                  />
                  <Image
                    src={YellowTemple3}
                    alt="YellowTemple3"
                    width={250}
                    height={400}
                    className="rounded-lg mb-4 md:mb-0"
                  />
                </div>
                {/* <Marques /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Retrouve;
