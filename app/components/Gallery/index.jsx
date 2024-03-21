"use client";
import Image from "next/image";
import SoinBebe from "../../assets/massage-bebe12.jpg";
import BainSensoriel1 from "../../assets/bain-sensoriel-lolita.jpg";
import Massage4Mains from "../../assets/massage-4mains.jpg";
import MassageNuque from "../../assets/massage-nuque.jpg";
import MassageBebe from "../../assets/massage-bebe3.jpg";
import Massage2 from "../../assets/bebe-zoom.jpg";
import RituelRebozo from "../../assets/rebozo-serrage.jpg";
import MassageVentre from "../../assets/massage-ventre-zoom.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="bg-[#F2F3F5] py-12">
      <div className="contain max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="">
              <Image
                src={MassageBebe}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={SoinBebe}
                alt="bain sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            {/* <div className="">
              <Image
                src={Soin1}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div> */}
          </div>
          <div className="grid gap-4">
            <div className="">
              <Image
                src={RituelRebozo}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={BainSensoriel1}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            {/* <div className="">
              <Image
                src={Bain2}
                alt="Bain Sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div> */}
          </div>
          <div className="grid gap-4">
            <div className="">
              <Image
                src={Massage4Mains}
                alt="Icone Femme"
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={Massage2}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            {/* <div className="">
              <Image
                src={MassageBebe2}
                alt="Lolita Garnier"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div> */}
          </div>
          <div className="grid gap-4">
            <div className="">
              <Image
                src={MassageVentre}
                alt="Bain Sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={MassageNuque}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            {/* <div className="">
              <Image
                src={Soin2}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
