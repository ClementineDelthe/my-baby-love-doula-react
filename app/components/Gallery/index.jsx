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
import Oracle from "../../assets/soin-oracle2.jpg"

const Gallery = () => {
  return (
    <div id="gallery" className="py-12">
      <div className="contain max-w-7xl mx-auto pt-16">
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
                src={Oracle}
                alt="Soin et Oracle"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
