import React from "react";


const Footer = () => {
  return (
    <div className="bg-[#f3e9e7] py-1">
      <footer class="bg-white rounded-lg shadow m-4 bg-light-pink-bg">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {" "}
            <a href="" class="hover:underline">
              My Baby Love Doula
            </a>
            . Tous droits réservés.
          </span>
          {/* <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
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
