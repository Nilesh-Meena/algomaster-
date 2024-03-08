"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pic1 from "@/public/pic1.jpg";

type Props = {
  posts: BlogPost[];
};

const Card = ({ posts }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerPage < posts.length
        ? prevIndex + cardsPerPage
        : prevIndex
    );
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerPage >= 0 ? prevIndex - cardsPerPage : prevIndex
    );
  };
  const hasNextPage = currentIndex + cardsPerPage < posts.length;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mb-12 w-full gap-8 overflow-hidden">
        {posts.slice(currentIndex, currentIndex + cardsPerPage).map((post) => (
          <div
            key={post.id}
            className="w-full sm:w-full md:w-[300px] relative bg-[antiquewhite] text-black transition-transform duration-[0.3s] ease-[ease] delay-[0s] text-3xl"
          >
            <Link href={`/posts/${post.id}`} className="">
              <Image
                className="border-t-2 border-l-2 border-r-2 border-solid border-black"
                src={pic1}
                alt="Picture 1"
                width={300}
                height={400}
              />
            </Link>
            <div className="absolute top-[-16px] right-[-16px] font-normal text-base text-black bg-green-600 border-2 border-black border-solid px-4 py-2">
              {post.tag}
            </div>
            {/* Title and Date */}
            <div className="border-2 border-black border-solid">
              <div className="px-4">
                <Link
                  href={`/posts/${post.id}`}
                  className="text-xl text-black hover:underline"
                >
                  Title: {post.title}
                </Link>
                <p className="text-base">Date: {post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`absolute right-0 top-[-40px] transform -translate-y-1/2 px-4 py-2 bg-white  border-2 border-solid border-black ${
          hasNextPage ? "" : "pointer-events-none bg-gray-200"
        }`}
        onClick={nextPage}
        disabled={!hasNextPage}
      >
        Next
      </button>
      <button
        className={`absolute right-[100px] top-[-40px] bg-white transform -translate-y-1/2 px-4 py-2 border-2 border-solid border-black ${
          currentIndex > 0 ? "" : "pointer-events-none bg-gray-200 "
        }`}
        onClick={prevPage}
        disabled={currentIndex === 0}
      >
        Prev
      </button>
    </div>
  );
};

export default Card;
