"use client";
import React from "react";
import getFormattedDate from "@/lib/getFormattedDate";
import Share from "@/public/icons/Share";
import Link from "next/link";
import Quotes from "./Quotes";

const CircleShare = () => {
  const handleShareClick = () => {
    const currentPageUrl = window.location.href;

    // Encode the URL component
    const encodedUrl = encodeURIComponent(currentPageUrl);

    // Open Twitter share URL in a new tab
    window.open(
      `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check%20out%20this%20awesome%20post%21`,
      "_blank"
    );
  };
  return (
    <Link
      href="#"
      onClick={handleShareClick}
      aria-label="Share on Twitter"
      className="cursor-pointer"
    >
      <div className="absolute top-[-24px] right-[44px] z-[1] bg-white rounded-full overflow-hidden">
        <div className="w-12 h-12 p-2 rounded-full border-2 border-black border-solid flex items-center justify-center">
          <Share />
        </div>
      </div>
    </Link>
  );
};

const PostHeading = ({
  title,
  date,
  color,
}: {
  title: string;
  date: string;
  color: string;
}) => {
  // console.log("here", color);
  const bgColor = `${color}`;
  const sectionStyle = {
    backgroundColor: bgColor,
  };
  const pubDate = getFormattedDate(date);
  return (
    <div className="mb-8">
      <div className="p-8 justify-center flex items-center relative">
        <Quotes />
      </div>
      {/* Title */}
      <div className="relative">
        <div className="w-full mx-0 border-t-2 border-b-2 border-black my-auto font-light font-serif break-words">
          <CircleShare />
          <section
            className={`px-24 flex flex-col bg-[${color}] justify-center  min-h-[195px] p-6`}
            style={sectionStyle}
          >
            <div className="flex items-center">
              {" "}
              {/* Ensure elements are displayed inline */}
              <span className="h-2 w-2 bg-black rounded-full mr-2"></span>{" "}
              {/* Increase size and make it a circle */}
              <h1 className="mt-0 dark:text-black">{pubDate}</h1>
            </div>
            <h1 className="text-3xl text-black mt-4 mb-0 ">{title}</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostHeading;
