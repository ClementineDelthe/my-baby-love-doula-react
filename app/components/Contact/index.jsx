import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Image from "next/image";
import Link from "next/link";
import LogoLolita from "../../assets/Lolita_Doula.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const aProposImage = require('../../assets/a_propos.png');

const Contact = () => {
  return (
    <div id="contact" className="bg-[#f3e9e7]">
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
              <a href="#navbar" class="flex items-center">

                <Image
                  src={LogoLolita}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                {/* <Image src="" alt="logo" width={32} height={32}></Image>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  MBLD
                </span> */}
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contactez moi
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
                      &nbsp;mybabylovedoula@gmail.com
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
                  <li>
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
                  Retrouvez moi
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
