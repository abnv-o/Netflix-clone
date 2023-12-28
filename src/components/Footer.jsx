import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-black bg-opacity-70">
        <div class="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            class="flex justify-center items-center text-2xl font-semibold text-gray-500 dark:text-white"
          >

            <img className="h-15 w-20 rounded-full" src="https://brandemia.org/sites/default/files/sites/default/files/icono_netflix_nuevo.jpg" alt="hi" />

            NETFLIX
          </a>
          <p class="my-6 text-gray-500 dark:text-gray-400">
            Watch anywhere. Cancel anytime.
          </p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-500 dark:text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Premium
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Campaigns
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <a href="#" class="hover:underline">
              Netflix™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
