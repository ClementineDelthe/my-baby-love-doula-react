"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import LogoLolita from "../../assets/a_propos.png"
import Marque1 from "../../assets/marque1.jpg";
import Marque2 from "../../assets/marque2.jpg";
import Marque3 from "../../assets/marque3.jpg";

const Marques = () => {
  return (
    <div id="marques" className="contain h-[45vh] bg-[#F2F3F5]">
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        stopOnHover
        className="mx-auto maw-w-screen-md"
      >
        <div className="p-8">
          <Image
            src={Marque1}
            alt="Marque1"
            width={350}
            height={500}
            className="object-contain h-48 w-96"
          />

          <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">marque 1</h2>
            <p className="">la super marque 1</p>
          </div>
        </div>
        <div className="p-8">
          <Image
            src={Marque2}
            alt="Marque2"
            width={150}
            height={300}
            className="object-contain h-48 w-96"
          />

          <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">marque 1</h2>
            <p className="">la super photo 1</p>
          </div>
        </div>
        <div className="p-8">
          <Image
            src={Marque3}
            alt="Marque3"
            width={350}
            height={500}
            className="object-contain h-48 w-96"
          />

          <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">marque 1</h2>
            <p className="">la super marque 1</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Marques;
