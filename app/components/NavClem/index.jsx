"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LogoLolita from "../../assets/Lolita_Doula.png";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
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
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div>
      <nav className="w-full bg-rose-poudre fixed top-0 left-0 right-0 z-50 text-[#3f3a36]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 py-0">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex space-x-3">
                <Link href="/">
                  <h2 className={` ${sendFlowers.className} self-center text-2xl font-semibold whitespace-nowrap`}>
                    My Baby Love
                  </h2>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XMarkIcon className="h-5" />
                  ) : (
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
              <ul className={`${alice.className} h-screen md:h-auto items-center justify-center md:flex  md:pt-4`}>
                <li className="md:pb-6 text-xl text-white py-4 md:py-2 px-6 text-start border-b md:border-b-0 md:hover:bg-transparent">
                  <Link
                    href="/"
                    // onClick={() => [
                    //   setNavbar(!navbar),
                    //   setShowSoins(!showSoins),
                    // ]}
                  >
                    A propos
                  </Link>
                </li>
                <li className="md:pb-6 text-xl text-white py-4 md:py-2 px-6 text-center border-b md:border-b-0 md:hover:bg-transparent relative">
                  {/* Version mobile : affichage avec clic */}
                  <div className="flex items-center justify-between cursor-pointer md:hidden" onClick={() => setActiveSection(activeSection === 'soins' ? null : 'soins')}>
                    <p className="">Soins et prestations</p>
                    <p className="">
                      {activeSection === 'soins' ? (
                        <ChevronUpIcon className="h-5 w-5 text-white" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-white" />
                      )}
                    </p>
                  </div>

                  {/* Submenu mobile avec effet slide-down */}
                  <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                      activeSection === 'soins' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <Link href="/feminin" className="block py-2 cursor-pointer text-left text-sm">Massage</Link>
                    <Link href="/rebozo" className="block py-2 cursor-pointer text-left text-sm">Rebozo</Link>
                    <Link href="/bebe" className="block py-2 cursor-pointer text-left text-sm">Bébé</Link>
                    <Link href="/bain" className="block py-2 cursor-pointer text-left text-sm">Bain Bébé</Link>
                  </div>

                  {/* Version laptop : affichage avec hover */}
                  <div className="hidden md:block group">
                    <Link href="">
                      <div className="flex items-center justify-between">
                        <p>Soins et prestations</p>
                      </div>
                    </Link>

                    {/* Submenu laptop avec le carré blanc en hover */}
                    <div className="hidden group-hover:block absolute text-left text-base border border-[#FFF] shadow bg-[#FFF] py-2 rounded-sm pr-4 pl-2">
                      <Link href="/feminin" className="cursor-pointer block py-2 px-1">Massage</Link>
                      <Link href="/rebozo" className="cursor-pointer block py-2 px-1">Rebozo</Link>
                      <Link href="/bebe" className="cursor-pointer block py-2 px-1">Bébé</Link>
                      <Link href="/bain" className="cursor-pointer block py-2 px-1">Bain Bébé</Link>
                    </div>
                  </div>
                </li>
                <li className="md:pb-6 text-xl text-white py-4 md:py-2 px-6 text-start border-b md:border-b-0 md:hover:bg-transparent">
                  <Link href="/galerie" onClick={() => setNavbar(!navbar)}>
                    Galerie
                  </Link>
                </li>
                <li className="md:pb-6 text-xl text-white py-4 md:py-2 px-6 text-center border-b md:border-b-0 md:hover:bg-transparent relative">
                  {/* Version mobile : affichage avec clic */}
                  <div className="flex items-center justify-between cursor-pointer md:hidden" onClick={() => setActiveSection(activeSection === 'tarifs' ? null : 'tarifs')}>
                    <p>Tarifs</p>
                    <p className="">
                      {activeSection === 'tarifs' ? (
                        <ChevronUpIcon className="h-5 w-5 text-white" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-white" />
                      )}
                    </p>
                  </div>

                  {/* Submenu mobile avec effet slide-down */}
                  <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                      activeSection === 'tarifs' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <Link href="/tarif" className="block py-2 cursor-pointer text-left text-sm">Prestations<br></br></Link>
                    <Link href="/formule" className="block py-2 cursor-pointer text-left text-sm">Formules<br></br></Link>
                  </div>

                  {/* Version laptop : affichage avec hover */}
                  <div className="hidden md:block group">
                    <Link href="">
                      <div className="flex items-center justify-between">
                        <p>Tarifs</p>
                      </div>
                    </Link>

                    {/* Submenu laptop avec le carré blanc en hover */}
                    <div className="hidden group-hover:block absolute text-left text-base border border-[#FFF] shadow bg-[#FFF] py-2 rounded-sm pr-4 pl-2">
                      <Link href="/tarif" className="block py-2 cursor-pointer text-left px-1">Prestations<br></br></Link>
                      <Link href="/formule" className="block py-2 cursor-pointer text-left px-1">Formules<br></br></Link>
                    </div>
                  </div>
                </li>
                <li className="md:pb-6 text-xl text-white py-4 md:py-2 px-6 text-center border-b md:border-b-0 md:hover:bg-transparent relative">
                  {/* Version mobile : affichage avec clic */}
                  <div className="flex items-center justify-between cursor-pointer md:hidden" onClick={() => setActiveSection(activeSection === 'contact' ? null : 'contact')}>
                    <p>Contact</p>
                    <p className="">
                      {activeSection === 'contact' ? (
                        <ChevronUpIcon className="h-5 w-5 text-white" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-white" />
                      )}
                    </p>
                  </div>

                  {/* Submenu mobile avec effet slide-down */}
                  <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                      activeSection === 'contact' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <Link href="/coordonnees" className="block py-2 cursor-pointer text-left text-sm">Contacte-moi<br></br></Link>
                    <Link href="/retrouvemoi" className="block py-2 cursor-pointer text-left text-sm">Retrouve-moi<br></br></Link>
                  </div>

                  {/* Version laptop : affichage avec hover */}
                  <div className="hidden md:block group">
                    <Link href="">
                      <div className="flex items-center justify-between">
                        <p>Contact</p>
                      </div>
                    </Link>

                    {/* Submenu laptop avec le carré blanc en hover */}
                    <div className="hidden group-hover:block absolute text-left text-base border border-[#FFF] shadow bg-[#FFF] py-2 rounded-sm pr-4 pl-2">
                      <Link href="/coordonnees" className="block py-2 cursor-pointer text-left px-1 min-w-28">Contacte-moi<br></br></Link>
                      <Link href="/retrouvemoi" className="block py-2 cursor-pointer text-left px-1 min-w-28">Retrouve-moi<br></br></Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavClem;
