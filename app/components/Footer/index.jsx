import Link from "next/link";
import React from "react";
import { Comfortaa, Alice } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400'],
});
const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
});

const Footer = () => {
  return (
    <div className={`${alice.className} py-1`}>
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
