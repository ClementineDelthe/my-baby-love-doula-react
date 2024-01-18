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
    <div id="marques" className="contain max-h-min bg-[#F2F3F5]">
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        stopOnHover
      >
        <div className="p-8">
          {/* <img
            className=""
            src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
            alt="photo 1"
          /> */}
          {/* <img
            className=""
            src={LogoLolita}
            alt="photo 1"
          /> */}
          <Image src={Marque1} alt="Marque1" width={350} height={500} className="object-scale-down h-48 w-96" />
          {/* <Image
            // style={styles.tinyLogo}
            source={require("../../assets/a_propos.png")}
          /> */}
          {/* <Image
            source={{
              uri: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
            }}
          /> */}
          <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">
              marque 1
            </h2>
            <p className="">la super marque 1</p>
          </div>
        </div>
        <div className="p-8">
          {/* <img
            className="imageCarousel"
            src="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
            alt="photo 1"
          /> */}
        <Image src={Marque2} alt="Marque2" width={150} height={300} className="object-scale-down h-48 w-96" />

        <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">
              marque 1
            </h2>
            <p className="">la super photo 1</p>
          </div>
        </div>
        <div className="p-8">
        <Image src={Marque3} alt="Marque3" width={350} height={500} className="object-scale-down h-48 w-96" />

          {/* <img
            className="imageCarousel"
            src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            alt="photo 1"
          /> */}
          <div className="p-4">
            <h2 className="text-3xl text-gray-900 italic">
              marque 1
            </h2>
            <p className="">la super marque 1</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Marques;
