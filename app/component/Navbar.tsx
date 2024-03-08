import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // Header
    <div className="px-4 bg-white sticky z-[1] w-full py-0 border-b-2 border-solid border-black top-0 box-border font-normal not-italic block">
      {/* Navbar */}
      <div className="py-2 flex justify-between items-center m-auto px-0 text-3xl">
        {/* Title */}
        <div className="leading-normal font-sans font-semibold">
          <Link href="/" className="hover:underline">
            Inkwell
          </Link>
        </div>
        {/* Nav Items */}
        <div className="justify-between box-border">
          <Link href="/" className="hover:underline mr-4">
            Home
          </Link>
          <Link href="/" className="hover:underline mr-4">
            Blogs
          </Link>
          <Link href="/" className="hover:underline mr-4">
            Projects
          </Link>
          <Link href="/" className="hover:underline">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
