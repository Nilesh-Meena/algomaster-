import Link from "next/link";
import React from "react";
import TransitionLink from "./ui/TransitionLink";

const Footer = () => {
  return (
    <footer className="mt-auto bg-white rounded-lg  shadow dark:bg-[#020617] mx-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Inkwell
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 m-0">
            {" "}
            {/* Added m-0 class to remove default margin */}
            <li>
              <TransitionLink
                href="/"
                className="hover:underline me-4 md:me-6"
                label="Home"
              />
            </li>
            <li>
              <TransitionLink
                href="/blogs"
                className="hover:underline me-4 md:me-6"
                label="Blogs"
              />
            </li>
            <li>
              <TransitionLink
                href="/projects"
                className="hover:underline me-4 md:me-6"
                label="Project"
              />
            </li>
            <li>
              <TransitionLink
                href="/contact"
                className="hover:underline me-4 md:me-6"
                label="Contact"
              />
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
