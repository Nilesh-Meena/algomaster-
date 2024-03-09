import React from "react";
import { SparklesPreview } from "../component/ui/SparklePreview";

export default function Home() {
  return (
    <div className=" w-full h-full max-h-[400px] mx-auto justify-center items-center">
      <div className="w-full px-4 py-8">
        <SparklesPreview title="Coming Soon..." />
      </div>
    </div>
  );
}
