"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Portrait from "../../assets/portrait.jpg";
import { Comfortaa, Alice } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400'],
});
const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
});

const Contact = () => {
  // Use useEffect to load the Calendly script only on the client-side
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return (
    <div id="contact" className={`${alice.className} min-h-[90vh] flex items-center justify-center pt-10 md:pt-16`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row items-center justify-center mb-10 md:mb-[50px]">
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
                    style={{ color: "#FCD4CD" }}
                  />
                  &nbsp;&nbsp;mybabylove.doula@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a href="tel:+33782384003" className="hover:underline">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#FCD4CD" }}
                  />
                  &nbsp;&nbsp;07 82 38 40 03
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
                    style={{ color: "#FCD4CD" }}
                  />
                  &nbsp;&nbsp;mybabylove_doula
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
                    style={{ color: "#FCD4CD" }}
                  />
                  &nbsp;&nbsp;My Baby Love Doula
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Calendly widget loaded client-side */}
        <div className="flex flex-col items-center justify-center mb-2"><p>Prenez rendez-vous pour votre moment de douceur</p></div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/mybabylove-doula?text_color=4c261a&primary_color=d52d5d"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
