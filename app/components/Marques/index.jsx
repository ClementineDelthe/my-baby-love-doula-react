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
    <div id="marques" className="contain h-[70vh] pt-10">
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        stopOnHover
        className="mx-auto max-w-screen-lg"
      >
        <div className="">
          <Image
            src={YellowTemple1}
            alt="YellowTemple1"
            width={800}
            height={950}
            className="md:object-contain h-96 w-full rounded-lg"
          />
        </div>
        <div className="">
          <Image
            src={YellowTemple2}
            alt="YellowTemple2"
            width={800}
            height={950}
            className="md:object-contain h-96 w-full rounded-lg"
          />
        </div>
        <div className="">
          <Image
            src={YellowTemple3}
            alt="YellowTemple3"
            width={800}
            height={950}
            className="md:object-contain h-96 w-full rounded-lg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Marques;
