"use client";
import Image from "next/image";
import SoinBebe from "../../assets/massage-bebe12.jpg";
import BainSensoriel1 from "../../assets/bain-sensoriel-lolita.jpg";
import BainSensoriel2 from "../../assets/bain-sensoriel-gallery.jpg";
import Massage4Mains from "../../assets/massage-4mains.jpg";
import MassageNuque from "../../assets/massage-nuque.jpg";
import MassageBebe from "../../assets/massage-bebe3.jpg";
import Massage2 from "../../assets/bebe-zoom.jpg";
import RituelRebozo from "../../assets/rebozo-serrage.jpg";
import MassageVentre from "../../assets/massage-ventre-zoom.jpg";
import Oracle from "../../assets/soin-oracle2.jpg"
import Gallery1 from "../../assets/gallery1.jpeg"
import Gallery2 from "../../assets/gallery2.jpeg"
import Gallery3 from "../../assets/gallery3.jpeg"
import MassageYogaBambin from "../../assets/massage-yoga-bambin.jpeg"
import AmourToujours from "../../assets/amour-toujours.jpeg"
import MassageDos from "../../assets/massage-dos.jpg"
import PiedBebe from "../../assets/pied-bebe.jpg"
import MassageHuile from "../../assets/massage-huile.jpg"
import Link from "next/link";


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
                // src={Massage4Mains}
                src={MassageHuile}
                alt="Icone Femme"
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={PiedBebe}
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
          <div className="grid gap-4">
            <div className="">
              <Image
                src={Gallery1}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={MassageDos}
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
                src={MassageYogaBambin}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={Gallery2}
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
                src={Gallery3}
                alt="Icone Femme"
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={BainSensoriel2}
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
                src={Massage2}
                alt="Bain Sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={AmourToujours}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-7 italic ml-2 md:ml-0">
          <Link href="https://www.mayaphotographie.fr/" target="_blank">
            Photographies réalisées par Amélie, Mayä Photographie. Tous droits reservés.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
