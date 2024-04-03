"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface Props {
  href: string;
  label: string;
  className: string;
}

const TransitionLink = ({ href, label, className }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    if (pathName !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button className={`${className}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
