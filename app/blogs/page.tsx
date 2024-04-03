import React from "react";
import { SparklesPreview } from "../component/ui/SparklePreview";
import Posts from "../component/Posts";

export default function Home() {
  const title = "Blogs";
  return (
    <div className=" w-full mx-auto justify-center items-center">
      <Posts />
    </div>
  );
}
