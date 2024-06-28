import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Image from "next/image";
import Link from "next/link";
import YellowTemple from "../../assets/yellow-temple.jpg";
import PresentationRounded from "../../assets/presentation-contact.jpg";
// import Portrait from "../../assets/portrait-zoomout.jpg";
import Portrait from "../../assets/portrait.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const aProposImage = require('../../assets/a_propos.png');

const Retrouve = () => {
  return (

    <div id="retrouve" className="min-h-[90vh] flex items-center justify-center pt-10 md:pt-36">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center leading-10">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Retrouve moi
            </h2>
            <div className="font-medium flex flex-col justify-between">
              <div className="mb-4">
                <Link href="https://www.google.com/maps/place/My+baby+love+-+Doula/@44.7782579,-0.5424504,17z/data=!3m1!4b1!4m6!3m5!1s0xd5527e745720d09:0x2be563342a7d92c3!8m2!3d44.7782541!4d-0.5398755!16s%2Fg%2F11vj05ws4m?entry=ttu">
                  <p>Déplacement à domicile<br/> Bordeaux CUB / Arès</p>
                </Link>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.124952567947!2d-0.5424504237519604!3d44.7782578789438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e745720d09%3A0x2be563342a7d92c3!2sMy%20baby%20love%20-%20Doula!5e0!3m2!1sfr!2sfr!4v1707322023998!5m2!1sfr!2sfr"
                  width="300"
                  height="100"
                  className="rounded-xl"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mb-4">
                <Link href="https://www.google.com/maps/place/53+Av.+du+Truc+Vert,+33950+L%C3%A8ge-Cap-Ferret/@44.7259654,-1.2196288,17z/data=!3m1!4b1!4m5!3m4!1s0xd535f843c1d4777:0x4308683d18c0fe5!8m2!3d44.7259616!4d-1.2170539?entry=ttu">
                  <p>Yellow Temple</p>
                </Link>
                <Image
                src={YellowTemple}
                alt="Yellow Temple Cap Ferret"
                width={290}
                height={300}
                className="h-auto max-w-full rounded-lg"
              />
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.6886557192593!2d-1.219628823754468!3d44.725965382391124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd535f843c1d4777%3A0x4308683d18c0fe5!2s53%20Av.%20du%20Truc%20Vert%2C%2033950%20L%C3%A8ge-Cap-Ferret!5e0!3m2!1sfr!2sfr!4v1713367133474!5m2!1sfr!2sfr"
                  width="300"
                  height="100"
                  className="rounded-xl"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    // <div id="retrouve" className="min-h-[90vh] flex items-center justify-center pt-10 md:pt-36">
    //     <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    //       <div className="md:flex md:justify-between">
    //         <div className="text-center leading-10">
    //           <div>
    //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //               Retrouve moi
    //             </h2>
    //             <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //               <li className="mb-4">
    //                 <Link href="https://www.google.com/maps/place/My+baby+love+-+Doula/@44.7782579,-0.5424504,17z/data=!3m1!4b1!4m6!3m5!1s0xd5527e745720d09:0x2be563342a7d92c3!8m2!3d44.7782541!4d-0.5398755!16s%2Fg%2F11vj05ws4m?entry=ttu">
    //                   <p>Déplacement à domicile Bordeaux CUB / Arès</p>
    //                 </Link>
    //                 <iframe
    //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.124952567947!2d-0.5424504237519604!3d44.7782578789438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e745720d09%3A0x2be563342a7d92c3!2sMy%20baby%20love%20-%20Doula!5e0!3m2!1sfr!2sfr!4v1707322023998!5m2!1sfr!2sfr"
    //                   width="300"
    //                   height="100"
    //                   className="rounded-xl"
    //                   allowFullScreen=""
    //                   loading="lazy"
    //                   referrerPolicy="no-referrer-when-downgrade"
    //                 ></iframe>
    //               </li>
    //               <li className="mb-4">
    //                 <Link href="https://www.google.com/maps/place/53+Av.+du+Truc+Vert,+33950+L%C3%A8ge-Cap-Ferret/@44.7259654,-1.2196288,17z/data=!3m1!4b1!4m5!3m4!1s0xd535f843c1d4777:0x4308683d18c0fe5!8m2!3d44.7259616!4d-1.2170539?entry=ttu">
    //                   <p>Yellow Temple</p>
    //                 </Link>
    //                 <iframe
    //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.6886557192593!2d-1.219628823754468!3d44.725965382391124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd535f843c1d4777%3A0x4308683d18c0fe5!2s53%20Av.%20du%20Truc%20Vert%2C%2033950%20L%C3%A8ge-Cap-Ferret!5e0!3m2!1sfr!2sfr!4v1713367133474!5m2!1sfr!2sfr"
    //                   width="300"
    //                   height="100"
    //                   className="rounded-xl"
    //                   allowFullScreen=""
    //                   loading="lazy"
    //                   referrerPolicy="no-referrer-when-downgrade"
    //                 ></iframe>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </div>
  );
};

export default Retrouve;
