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
    <div id="contact" className="min-h-[90vh] flex items-center justify-center pt-10 md:pt-16">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <Image
              src={Portrait}
              alt="Portrait"
              width={230}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="text-center md:text-left leading-10">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contacte-moi
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="mailto:mybabylovedoula@gmail.com"
                  className="hover:underline"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: '#FCD4CD' }}
                  />
                  &nbsp;mybabylove.doula@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a href="tel:+33782384003" className="hover:underline">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: '#FCD4CD' }}
                  />
                  &nbsp;07 82 38 40 03
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.instagram.com/mybabylove_doula/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: '#FCD4CD' }}
                  />
                  &nbsp;mybabylove_doula
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/My-baby-love-doula/61551775324005/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: '#FCD4CD' }}
                  />
                  &nbsp;My Baby Love Doula
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
