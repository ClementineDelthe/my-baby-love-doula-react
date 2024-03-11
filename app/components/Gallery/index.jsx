"use client";
import Image from "next/image";
import Bain1 from "../../assets/massage1.jpg";
import BainSensoriel1 from "../../assets/bain-sensoriel-lolita.jpg";
import BainSensoriel2 from "../../assets/bain-sensoriel1.jpg";
import MassageBebe4 from "../../assets/massage-bebe4.jpg";
import BebeZoom from "../../assets/bebe-zoom.jpg";
import Massage2 from "../../assets/massage2.jpg";
import Massage3 from "../../assets/massage3.jpg";
import MassageBebe1 from "../../assets/massage_bebe1.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="bg-[#F2F3F5] py-4">
      <div className="contain max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="">
              <Image
                src={Bain1}
                alt="bain sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={BebeZoom}
                alt="Soin"
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
                src={Massage3}
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
                src={BainSensoriel2}
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
                src={MassageBebe1}
                alt="Bain Sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              <Image
                src={MassageBebe4}
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
