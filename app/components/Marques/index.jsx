"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import LogoLolita from "../../assets/a_propos.png"
import YellowTemple1 from "../../assets/YT_pic1.jpg";
import YellowTemple2 from "../../assets/YT_pic2.jpg";
import YellowTemple3 from "../../assets/YT_pic3.jpg";

const Marques = () => {
  return (
    <div id="marques" className="contain h-[45vh]">
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
            src={YellowTemple1}
            alt="YellowTemple1"
            width={400}
            height={500}
            className="object-contain h-48 w-96"
          />

          {/* <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">marque 1</h2>
            <p className="">la super marque 1</p>
          </div> */}
        </div>
        <div className="p-8">
          <Image
            src={YellowTemple2}
            alt="YellowTemple2"
            width={150}
            height={300}
            className="object-contain h-48 w-96"
          />

          {/* <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">marque 1</h2>
            <p className="">la super photo 1</p>
          </div> */}
        </div>
        <div className="p-8">
          <Image
            src={YellowTemple3}
            alt="YellowTemple3"
            width={400}
            height={500}
            className="object-contain h-48 w-96"
          />

          {/* <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">marque 1</h2>
            <p className="">la super marque 1</p>
          </div> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Marques;
