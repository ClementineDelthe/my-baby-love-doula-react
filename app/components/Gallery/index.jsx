"use client";
import Image from "next/image";
import Bain1 from "../../assets/bain1.png";
import Bain2 from "../../assets/bain2.png";
import Soin1 from "../../assets/soin1.png";
import Soin2 from "../../assets/soin2.png";
import Famille from "../../assets/famille.png";
import IconFemme1 from "../../assets/icone_femme1.png";
import IconFemme2 from "../../assets/icone_femme2.png";
import IconFemme3 from "../../assets/icon_femme3.png";
import Massage1 from "../../assets/massage1.jpg";
import Massage2 from "../../assets/massage2.jpg";
import Massage3 from "../../assets/massage3.jpg";
import MassageBebe1 from "../../assets/massage_bebe1.jpg";
import MassageBebe2 from "../../assets/massage_bebe2.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="bg-[#F2F3F5] py-4">
      <div id="gallery" className="contain max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="../../assets/bain1.png"
              alt=""
            /> */}
              <Image
                src={Bain1}
                alt="bain sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            /> */}
              <Image
                src={Massage1}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            /> */}
              <Image
                src={Soin1}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            /> */}

              <Image
                src={Massage3}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            /> */}
              <Image
                src={IconFemme1}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            /> */}
              <Image
                src={Bain2}
                alt="Bain Sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            /> */}
              <Image
                src={IconFemme3}
                alt="Icone Femme"
                width={500}
                height={400}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            /> */}
              <Image
                src={Massage2}
                alt="Soin"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            /> */}


              <Image
                src={MassageBebe2}
                alt="Lolita Garnier"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            /> */}
              <Image
                src={MassageBebe1}
                alt="Bain Sensoriel"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            /> */}
              <Image
                src={IconFemme2}
                alt="Icone Femme"
                width={700}
                height={600}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div className="">
              {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            /> */}
              <Image
                src={Soin2}
                alt="Soin"
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
