"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`p-4 m-8 bg-secondary-dark text-gray-300 rounded-lg transition-all duration-200 ease-out ${
        mounted ? "translate-y-0" : "translate-y-500"
      }`}
    >
      <h1
        className={`m-2 text-2xl overflow-hidden whitespace-nowrap 
              transition-all duration-[1000ms] ${mounted ? "w-[13ch]" : "w-0"}`}
      >
        Hi, I'm Taiham
      </h1>

      <div className="flex items-center">
        <img src="/icons/cat.gif" alt="My GIF" className="w-12 h-12 mx-2" />
        <p className="m-4 text-base">
          full stack developer | machine learning engineer | quantum computing
          researcher
        </p>
      </div>
      <p className="m-2 text-sm tracking-widest leading-6">
        A curious mind driven by technology, learning, and creating meaningful
        solutions. From intuitive web apps to machine learning and math, this
        site reflects my journey—projects, ideas, and experiments along the way.
        <br></br>Explore and feel free to say hi!
      </p>
    </div>
  );
}
