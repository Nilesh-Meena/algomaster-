import React from "react";
import { SparklesPreview } from "../component/ui/SparklePreview";
import Posts from "../component/Posts";

export default function Home() {
  const title = "Blogs";
  return (
    <div className=" w-full mx-auto justify-center items-center">
      <div className="w-full px-4 py-8">
        <SparklesPreview title={title} />
      </div>
      <Posts />
    </div>
  );
}
