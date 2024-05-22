import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Image from "next/image";
import Link from "next/link";
import LogoLolita from "../../assets/Lolita_Doula.png";
import PresentationRounded from "../../assets/presentation-contact.jpg";
// import Portrait from "../../assets/portrait-zoomout.jpg";
import Portrait from "../../assets/portrait.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const aProposImage = require('../../assets/a_propos.png');

const Contact = () => {
  return (
    <div id="contact" className="bg-[#FFE8D6]">
      {/* <div>
        <h2>Me contacter</h2>
        <div>
          <p>
            <a href="tel:+33782384003">07 82 38 40 03</a>
          </p>
          <p>
            <a href="https://www.instagram.com/mybabylove_doula/"></a>
            mybabylove_doula
          </p>
          <Link href="https://www.google.com/maps/place/Bordeaux/@44.8638098,-0.6684127,12z/data=!4m6!3m5!1s0xd5527e8f751ca81:0x796386037b397a89!8m2!3d44.837789!4d-0.57918!16zL20vMDFiODU?entry=ttu">
            <p>Déplacement à domicile Bordeaux CUB / Arès</p>
          </Link>
        </div>
      </div>
      <div>
        <p>
          <a href="">Mentions Legales</a>
        </p>
      </div> */}

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              {/* <a href="#navbar" class="flex items-center"> */}
                <Image
                  src={Portrait}
                  alt="Logo"
                  width={130}
                  height={300}
                  className="rounded-lg"
                />
                {/* <Image src="" alt="logo" width={32} height={32}></Image>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  MBLD
                </span> */}
              {/* </a> */}
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-2">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contacte moi
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="mailto:mybabylovedoula@gmail.com"
                      class="hover:underline"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#00000f" }}
                      />
                      &nbsp;mybabylove.doula@gmail.com
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="tel:+33782384003" class="hover:underline">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#00000f" }}
                      />
                      &nbsp;07 82 38 40 03
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/mybabylove_doula/"
                      class="hover:underline "
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#00000f" }}
                      />
                      &nbsp;mybabylove_doula
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/My-baby-love-doula/61551775324005/"
                      class="hover:underline "
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "#00000f" }}
                      />
                      &nbsp;My Baby Love Doula
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Suivez moi
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://www.instagram.com/mybabylove_doula/"
                      class="hover:underline "
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "#00000f" }}
                      />
                      &nbsp;mybabylove_doula
                    </a>
                  </li>

                </ul> */}
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Retrouve moi
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link href="https://www.google.com/maps/place/My+baby+love+-+Doula/@44.7782579,-0.5424504,17z/data=!3m1!4b1!4m6!3m5!1s0xd5527e745720d09:0x2be563342a7d92c3!8m2!3d44.7782541!4d-0.5398755!16s%2Fg%2F11vj05ws4m?entry=ttu">
                      <p>Déplacement à domicile Bordeaux CUB / Arès</p>
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
                  </li>
                  <li class="mb-4">
                    <Link href="https://www.google.com/maps/place/53+Av.+du+Truc+Vert,+33950+L%C3%A8ge-Cap-Ferret/@44.7259654,-1.2196288,17z/data=!3m1!4b1!4m5!3m4!1s0xd535f843c1d4777:0x4308683d18c0fe5!8m2!3d44.7259616!4d-1.2170539?entry=ttu">
                      <p>Yellow Temple</p>
                    </Link>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.6886557192593!2d-1.219628823754468!3d44.725965382391124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd535f843c1d4777%3A0x4308683d18c0fe5!2s53%20Av.%20du%20Truc%20Vert%2C%2033950%20L%C3%A8ge-Cap-Ferret!5e0!3m2!1sfr!2sfr!4v1713367133474!5m2!1sfr!2sfr"
                      width="300"
                      height="100"
                      className="rounded-xl"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </li>
                  {/* <li>
                    <a href="#" class="hover:underline">
                      Mentions légales
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>
    </div>
  );
};

export default Contact;
