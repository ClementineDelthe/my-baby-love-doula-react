import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Image from "next/image";
import Link from "next/link";
import YellowTemple from "../../assets/yellow-temple.jpg";
import PresentationRounded from "../../assets/presentation-contact.jpg";
// import Portrait from "../../assets/portrait-zoomout.jpg";
import HomePic1 from "../../assets/domicile_pic2.jpg";
import HomePic2 from "../../assets/bain-sensoriel2.jpg";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Marques from "../Marques";

import Oracle from "../../assets/soin-oracle2.jpg"


// const aProposImage = require('../../assets/a_propos.png');

const Retrouve = () => {
  return (

    <div id="retrouve" className="flex flex-col items-center justify-center pt-16 md:pt-24">
    <div className="mx-auto w-full max-w-4xl">
      <div className="">
        <div className="text-center">
          <div>
            <h2 className="text-xl font-semibold">
              Retrouve-moi dans mon cocon sur Villenave d&apos;Ornon
            </h2>
            <div className="my-4 text-lg">
              <Link href="https://www.google.com/maps/place/My+baby+love+-+Doula/@44.7782579,-0.5424504,17z/data=!3m1!4b1!4m6!3m5!1s0xd5527e745720d09:0x2be563342a7d92c3!8m2!3d44.7782541!4d-0.5398755!16s%2Fg%2F11vj05ws4m?entry=ttu">
                <p>Déplacement à domicile<br /> Bordeaux CUB / Arès</p>
              </Link>
              <div className="py-4 flex flex-col items-center justify-center">

                <div className="flex flex-col md:flex-row md:justify-between w-full items-center">
                  <Image
                    src={HomePic1}
                    alt="bain sensoriel"
                    width={250}
                    height={400}
                    className="rounded-lg mb-4 md:mb-0"
                  />
                  <video
                    controls
                    width={250}
                    height="auto"
                    className="rounded-lg shadow-lg mb-4 md:mb-0"
                  >
                    <source src="/videos/domicile_vid.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={HomePic2}
                    alt="bain sensoriel"
                    width={250}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full py-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.124952567947!2d-0.5424504237519604!3d44.7782578789438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e745720d09%3A0x2be563342a7d92c3!2sMy%20baby%20love%20-%20Doula!5e0!3m2!1sfr!2sfr!4v1707322023998!5m2!1sfr!2sfr"
                    width="100%"
                    height="150"
                    className="rounded-xl"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4 text-xl font-semibold">
              <Link href="https://www.google.com/maps/place/53+Av.+du+Truc+Vert,+33950+L%C3%A8ge-Cap-Ferret/@44.7259654,-1.2196288,17z/data=!3m1!4b1!4m5!3m4!1s0xd535f843c1d4777:0x4308683d18c0fe5!8m2!3d44.7259616!4d-1.2170539?entry=ttu">
                <p>Yellow Temple</p>
              </Link>
              <Marques />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Retrouve;
