"use client";
import {
  Animator,
  Fade,
  MoveIn,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
} from "react-scroll-motion";
import Image from "next/image";
import MassageBebe from "../../assets/massage_bebe.png";
import BainSensoriel from "../../assets/bain_sensoriel.png";
import MassageFemmeEnceinte from "../../assets/massage_femme_enceinte.png";
import MassagePostNatal from "../../assets/massage_post_natal.png";
import MassageRebozo from "../../assets/rebozo.png";
import IconSoin1 from "../../assets/icon_soin1.png";
import IconSoin2 from "../../assets/icon_soin2.png";
import IconSoin3 from "../../assets/icon_soin3.png";
import IconSoin4 from "../../assets/icon_soin4.png";
// import { useState } from "react";

const Soins = () => {
  return (
    <div id="" className="contain">
      <ScrollContainer>
        <ScrollPage>
          <div className=" flex flex-row justify-around p-2">
            {/* <Animator animation={MoveIn(1000, 0)}> */}
              <div className="w-96 min-h-96 text-center bg-[#f3e9e7] rounded p-2">
                <Image
                  src={IconSoin1}
                  alt="Icone Femme"
                  width={800}
                  height={800}
                  className=""
                />
                <h2>Les soins féminins</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  perspiciatis sequi quis provident hic aperiam, blanditiis
                  possimus commodi reprehenderit.<br></br>A alias dignissimos
                  odit optio iure ipsam nam reprehenderit veniam rerum.
                </p>
              </div>
            {/* </Animator> */}

            <div className="w-96 min-h-96 text-center bg-[#f3e9e7] rounded p-2">
              <Image
                src={IconSoin2}
                alt="Icone Femme"
                width={800}
                height={800}
                className=""
              />
              <h2>Les soins avec bébé</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem nulla iure molestias voluptates aliquid explicabo
                fugit sequi,<br></br>ipsa ullam sunt esse aut quo illo eveniet
                repellendus rem quod commodi. Id.
              </p>
            </div>
            <div className="w-96 min-h-96 text-center bg-[#f3e9e7] rounded p-2">
              <Image
                src={IconSoin3}
                alt="Icone Femme"
                width={800}
                height={800}
                className=""
              />
              <h2>Le Rebozo</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus praesentium necessitatibus itaque voluptatibus eaque
                saepe numquam optio aut architecto.<br></br>Doloribus voluptate
                esse exercitationem temporibus odio eveniet magni laudantium
                officiis quaerat!
              </p>
            </div>
            <div className="w-96 min-h-96 text-center bg-[#f3e9e7] rounded p-2">
              <Image
                src={IconSoin4}
                alt="Icone Femme"
                width={800}
                height={800}
                className=""
              />
              <h2>Les soins femme enceinte </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, animi.<br></br>Eveniet, repellendus, doloremque velit
                ratione nemo, natus ex dicta molestiae at odit labore.<br></br>
                Facere laudantium, suscipit neque quibusdam eius rem.
              </p>
            </div>
          </div>

          <div className=" bg-light-blue-bg w-full">
            <div className="mb-4 flex flex-col items-center border border-light-pink-bg rounded-lg shadow-light-pink-bg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 ml-4">
              <div>
                {/* <img
            src="https://picsum.photos/id/237/200/300"
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            alt="Chien"
          /> */}
                {/* <Image
              src={BainSensoriel}
              alt="Bain Sensoriel"
              width={70}
              height={150}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            /> */}
              </div>
              <div className="mb-4 flex flex-col justify-between p-4 leading-normal">
                <h3 className="text-red-p mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Le rituel du bain sensoriel
                </h3>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Bébé bénéficira d'un emmaillotage, d'un bain enveloppé,
                  d'une initiation au massage et à la réflexologie émotionnelle
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Bébé pourra libèrer les tensions cumulé lors de la
                  grossesse et de l'accouchement
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Instants chargés en émotions, et en douceurs qui
                  accenturont la connexion entre vous trois
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Vous apprendrez à reproduire les gestes à la maison, et
                  nous échangerons sur vos besoins
                </p>
              </div>
            </div>

            <div className="mb-4 flex flex-col items-center bg-white border border-light-pink-bg rounded-lg shadow-light-pink-bg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 ml-4">
              <div>
                {/* <img
            src="https://picsum.photos/id/237/200/300"
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            alt="Chien"
          /> */}
                {/* <Image
              src={MassageFemmeEnceinte}
              alt="Massage Femme Enceinte"
              width={70}
              height={150}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            /> */}
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="text-red-p mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Le massage femme enceinte
                </h3>
                <p className="mb-3 font-normal  text-gray-700">
                  ❤️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="mb-4 flex flex-col items-center bg-white border border-light-pink-bg rounded-lg shadow-light-pink-bg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 ml-4">
              <div>
                {/* <img
            src="https://picsum.photos/id/237/200/300"
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-one md:rounded-s-lg"
            alt="Chien"
          /> */}
                {/* <Image
              src={MassagePostNatal}
              alt="Massage Femme Enceinte"
              width={70}
              height={150}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            /> */}
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="text-red-p mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Le massage post natal
                </h3>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Recharge émotionnelle
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Instant suspendu de détente
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Se réapproprier son corps
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Apaiser les tensions physiques
                </p>
              </div>
            </div>

            <div
              id="rebozo"
              className="mb-4 flex flex-col items-center bg-white border border-light-pink-bg rounded-lg shadow-light-pink-bg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 ml-4"
            >
              <div>
                {/* <img
            src="https://picsum.photos/id/237/200/300"
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-one md:rounded-s-lg"
            alt="Chien"
          /> */}
                {/* <Image
              src={MassageRebozo}
              alt="Massage Femme Enceinte"
              width={70}
              height={150}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            /> */}
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="text-red-p mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Le massage rebozo
                </h3>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Rituel holistique de femme à femme empreint de douceur et
                  de bienveillance
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Relaxation profonde par un massage enveloppant aux huiles
                  chaudes
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Enserrage du corps en sept points permettent de se
                  reconnecter à son coprs
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Souligne la transition, accompagne le renouveau dans la vie
                  d'une femme
                </p>
              </div>
            </div>

            <div className="mb-4 flex flex-col items-center bg-white border border-light-pink-bg rounded-lg shadow-light-pink-bg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 ml-4">
              <div>
                {/* <img
            src="https://picsum.photos/id/237/200/300"
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-one md:rounded-s-lg"
            alt="Chien"
          /> */}
                {/* <Image
              src={MassageBebe}
              alt="Massage Femme Enceinte"
              width={70}
              height={150}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            /> */}
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="text-red-p mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Le massage bébé
                </h3>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Soulager les maux comme les gaz, la constipation, les
                  coliques
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Effet relaxant important: aidera bébé à mieux dormir et
                  être moins stressé
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Vous permettra d'approfondir vos liens et la connexion avec
                  bébé
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  ❤️ Aide bébé à délimiter son corps et à vous découvrir
                </p>
              </div>
            </div>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Soins;
