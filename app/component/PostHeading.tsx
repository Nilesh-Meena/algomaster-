import React from "react";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import pic1 from "@/public/pic1.jpg";
import Share from "@/public/icons/Share";

const CircleShare = () => {
  return (
    <div className="absolute top-[-24px] right-[44px] z-[1] bg-white rounded-full overflow-hidden">
      <div className="w-12 h-12 p-2 rounded-full border-2 border-black border-solid flex items-center justify-center">
        <Share />
      </div>
    </div>
  );
};

const PostHeading = ({ title, date }: { title: string; date: string }) => {
  const pubDate = getFormattedDate(date);
  return (
    <div className="mb-8">
      <div className="p-8 justify-center flex items-center relative">
        <Image
          src={pic1}
          alt="Cover Image"
          width={500}
          height={600} // Aspect ratio: 5:2
          style={{ aspectRatio: "5 / 2" }}
        />
      </div>
      {/* Title */}
      <div className="relative">
        <div className="w-full mx-0 border-t-2 border-b-2 border-black my-auto font-light font-serif break-words">
          <CircleShare />
          <section className="px-24  bg-[#FCFF74] flex flex-col justify-center  min-h-[195px] p-6">
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
