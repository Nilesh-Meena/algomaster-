import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: BlogPost[];
};

const Card = ({ post }: Props) => {
  // console.log(post);
  if (!post || post.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mb-12 w-full gap-8">
      {post.map((post) => (
        <div
          key={post.id}
          className=" w-full sm:w-full md:w-300 
          relative bg-[antiquewhite] text-black hover:-translate-y-1  duration-[0.3s] ease-[ease] text-3xl"
        >
          <Link href={`/posts/${post.id}`} className="">
            <Image
              className="border-t-2 border-l-2 border-r-2 border-solid border-black"
              src={post.image}
              alt="Picture 1"
              width="500"
              height="600"
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
  );
};

export default Card;
