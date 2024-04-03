"use client";
import { animatePageIn } from "@/utils/animation";
import React, { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-20 fixed top-0 left-0 w-1/4"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-20 fixed top-0 left-1/4 w-1/4"
      ></div>
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-20 fixed top-0 left-2/4 w-1/4"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-20 fixed top-0 left-3/4 w-1/4"
      ></div>
      {children}
    </div>
  );
};

export default Template;
