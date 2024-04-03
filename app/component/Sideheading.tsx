"use client";

import React from "react";

type Props = {
  contentHtml: string;
};

const Sideheading: React.FC<Props> = ({ contentHtml }) => {
  const parseHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    // console.log("parse", { doc });
    return doc;
  };

  const getHeadings = (html: string): string[] => {
    const doc = parseHTML(html);
    const headings = Array.from(doc.querySelectorAll("h1")).map(
      (heading) => heading.textContent || ""
    );
    // console.log("get", { headings });
    return headings;
  };

  const scrollToHeading = (heading: string) => {
    // console.log("scroll", { heading });
    const offset = 80; // Adjust this value as needed
    const headingElements = document.querySelectorAll("h1");
    for (const element of headingElements) {
      if (element.textContent === heading) {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        // console.log({ scrollTop }); // Current scroll position
        const rect = element.getBoundingClientRect();
        // console.log({ rect });
        const scrollPosition = rect.top + scrollTop - offset;
        // console.log({ scrollPosition });
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        break; // Stop searching once we've found the matching heading
      }
    }
  };

  const headings = getHeadings(contentHtml);
  // console.log("heading", headings);

  return (
    <div className="sticky top-[72px]">
      <h2 className="text-base font-semibold mb-4">On this page</h2>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <button onClick={() => scrollToHeading(heading)}>{heading}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sideheading;
