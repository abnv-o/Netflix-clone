import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const Faq = () => {
  return (
    <div className="flex flex-col  py-10 px-2 justify-center  items-center bg-white bg-opacity-40">
      <h1 className="text-6xl text-white font-bold py-4 ">FAQ?</h1>
      <Accordion className="bg-black bg-opacity-80 w-full sm:w-1/2">
        <AccordionPanel>
          <AccordionTitle>What is Netflix?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Netflix FAQ is a collection of frequently asked questions and
              answers about Netflix, a streaming service that offers a wide
              variety of TV shows, movies, anime, documentaries, and more
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Where can i watch Netflix?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              You can watch Netflix on any internet-connected device that offers
              the Netflix app, such as smart TVs, smartphones, tablets,
              streaming media players, and game consoles123. You can also watch
              Netflix on your web browser by signing in with your Netflix
              account at netflix.com
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                href="https://flowbite.com/figma/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>
            What are the differences between Flowbite and Tailwind UI?
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default Faq;
