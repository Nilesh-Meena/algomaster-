"use client";
// Sideheading.tsx
import React from "react";

type Props = {
  contentHtml: string;
};

const Sideheading: React.FC<Props> = ({ contentHtml }) => {
  const parseHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc;
  };

  const getHeadings = (html: string): string[] => {
    const doc = parseHTML(html);
    const headings = Array.from(doc.querySelectorAll("h1")).map(
      (heading) => heading.textContent || ""
    );
    return headings;
  };

  const scrollToHeading = (heading: string) => {
    const offset = 80; // Adjust this value as needed
    const headingElements = document.querySelectorAll("h1");
    for (const element of headingElements) {
      if (element.textContent === heading) {
        const scrollPosition = element.offsetTop - offset;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        break; // Stop searching once we've found the matching heading
      }
    }
  };

  const headings = getHeadings(contentHtml);

  return (
    <div>
      <h2 className="text-base font-semibold">On this page</h2>
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
