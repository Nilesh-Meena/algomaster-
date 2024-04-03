"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import TransitionLink from "./ui/TransitionLink";
import Toggle from "./ui/Toggle";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const path = usePathname();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    // Header
    <div className="bg-white/80 dark:bg-darkBg/80 dark:text-white/70 sticky z-[10] w-full py-0 border-b-2 border-solid border-black dark:border-white/80 top-0 box-border font-normal not-italic block ">
      {/* Navbar */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 relative">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Inkwell
          </span>
        </Link>
        <button
          onClick={toggleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:w-auto md:block ${isNavOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <Toggle />
            <NavItem href="/" label="Home" isActive={path === "/"} />
            <NavItem href="/blogs" label="Blogs" isActive={path === "/blogs"} />
            <NavItem
              href="/projects"
              label="Projects"
              isActive={path === "/projects"}
            />
            <NavItem
              href="/contact"
              label="Contacts"
              isActive={path === "/contact"}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) => {
  return (
    <li className="flex items-center">
      <TransitionLink
        href={href}
        label={label}
        className={`hover:underline hover:underline-offset-2 dark:hover:text-white ${
          isActive
            ? "text-black dark:text-white underline underline-offset-2"
            : ""
        }`}
      />
    </li>
  );
};

export default Navbar;
