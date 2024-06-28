"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoLolita from "../../assets/Lolita_Doula.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Send_Flowers } from "next/font/google";
import { Alice } from "next/font/google";

const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: ['400'],
});
const alice = Alice({
  subsets: ['latin'],
  weight: ['400'],
});

const NavClem = () => {
  const [navbar, setNavbar] = useState(false);
  const [showSoins, setShowSoins] = useState(false);

  return (
    <div>
      <nav className="w-full bg-rose-poudre fixed top-0 left-0 right-0 z-50 text-[#3f3a36]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 py-0">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div className="flex space-x-3">
                <Link href="/">
                  <Image
                    src={LogoLolita}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                </Link>
                {/* <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2> */}
                <h2 className={` ${sendFlowers.className} self-center text-2xl font-semibold whitespace-nowrap`}>
                  My Baby Love Doula
                </h2>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // <Image src="/close.svg" width={30} height={30} alt="logo" />
                    <XMarkIcon className="h-5" />
                  ) : (
                    // <Image
                    //   src="/hamburger-menu.svg"
                    //   width={30}
                    //   height={30}
                    //   alt="logo"
                    //   className="focus:border-none active:border-none"
                    // />
                    <Bars3Icon className="h-5 text-pink-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className={`${sendFlowers.className} h-screen md:h-auto items-center justify-center md:flex  `}>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    href="/"
                    onClick={() => [
                      setNavbar(!navbar),
                      setShowSoins(!showSoins),
                    ]}
                  >
                    A propos
                  </Link>
                </li>
                <li className="group pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link
                    href=""
                    // onClick={() => setNavbar(!navbar)}
                    // onClick={() => {
                    //   setNavbar(!navbar);
                    //   setShowSoins(!showSoins);
                    // }}
                  >
                    Les Soins
                  </Link>
                  {/* <div className="hidden group-hover:block absolute text-left text-base border border-[#FFF] shadow bg-light-pink-bg p-2 rounded-lg"> */}
                  <div className={`hidden group-hover:block absolute text-left text-base border border-[#FFF] shadow bg-light-pink-bg p-2 rounded-lg ${showSoins ? 'block' : 'hidden'}`}>
                    <Link href="feminin" className="cursor-pointer">Féminins<br></br></Link>
                    <Link href="/rebozo" className="cursor-pointer">Rebozo<br></br></Link>
                    <Link href="/bebe" className="cursor-pointer">Bébé<br></br></Link>
                  </div>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link href="/galerie" onClick={() => setNavbar(!navbar)}>
                    Galerie
                  </Link>
                </li>
                <li className="group pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link href=""
                    // onClick={() => setNavbar(!navbar)}
                  >
                    Tarifs
                  </Link>

                  <div className="hidden group-hover:block dropdown-menu absolute text-left text-base border border-[#FFF] shadow bg-[#f3e9e7] p-2 rounded-lg">
                    <Link href="/tarif" className="cursor-pointer">Prestations<br></br></Link>
                    <Link href="/formule" className="cursor-pointer">Formules<br></br></Link>
                    {/* <Link href="/cadeaux" className="cursor-pointer">Cartes Cadeau<br></br></Link> */}
                  </div>
                </li>
                <li className="group pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link href=""
                    // onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </Link>

                  <div className="hidden group-hover:block dropdown-menu absolute text-left text-base border border-[#FFF] shadow bg-[#f3e9e7] p-2 rounded-lg">
                    <Link href="/coordonnees" className="cursor-pointer">Contacte moi<br></br></Link>
                    <Link href="/retrouvemoi" className="cursor-pointer">Retrouve moi<br></br></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className={`${alice.className} hidden md:block lg:block text-sm pb-4 mx-auto lg:max-w-7xl md:px-8`}>
          Lolita,<br />
          Doula et praticienne en soins féminins et bébé
        </p>

      </nav>
    </div>
  );
};

export default NavClem;
