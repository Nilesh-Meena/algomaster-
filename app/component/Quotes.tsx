"use client";

import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const quotes = [
      "May the Force be with you.",
      "Do. Or do not. There is no try.",
      "I find your lack of faith disturbing.",
      "The Force will be with you. Always.",
      "It's a trap!",
      "I am your father.",
      "Fear is the path to the dark side.",
      "In my experience, there's no such thing as luck.",
      "Your focus determines your reality.",
      "It's over, Anakin! I have the high ground!",
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
  }, []);

  return (
    <div>
      <span className="self-center text-2xl whitespace-nowrap dark:text-white">
        {quote}
      </span>
      <div className="text-right text-xs mt-2">~ Unknown</div>
    </div>
  );
};

export default Quotes;
