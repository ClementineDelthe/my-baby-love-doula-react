import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <div className=" py-1">
      <footer className="bg-white rounded-lg shadow m-4 bg-rose-poudre">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©
            {/* <a href="" className="hover:underline"> */}
            E.I. My baby love - Siret 97962048100015. Tous droits réservés.&nbsp;
            <Link href="/mentionslegales">
              Mentions Légales.&nbsp;
            </Link>
            <Link href="https://www.mayaphotographie.fr/" target="_blank">
              Photos: Mayä Photographie.&nbsp;
            </Link>
            {/* </a> */}
          </span>
          {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
