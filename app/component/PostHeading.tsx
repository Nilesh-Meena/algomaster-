import React from "react";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

const PostHeading = ({ title, date }: { title: string; date: string }) => {
  const pubDate = getFormattedDate(date);
  return (
    <div>
      <div className="w-full mx-0 border-2 border-black my-auto font-light font-serif break-words">
        <section className="px-24 py-8 items-start gap-4 justify-center min-h-[195px] p-6">
          <h1 className="mt-0">{pubDate}</h1>
          <h1 className="text-3xl text-black mt-4 mb-0 ">{title}</h1>
        </section>
      </div>
    </div>
  );
};

export default PostHeading;
