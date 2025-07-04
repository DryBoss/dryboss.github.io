"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`p-4 m-8 bg-primary-dark text-primary-light rounded-lg border-2 transition-all duration-200 ease-out ${
        mounted ? "translate-y-0" : "translate-y-500"
      } dark:border-2 dark:border-primary-light lg:w-240`}
    >
      <h1
        className={`m-2 text-2xl overflow-hidden whitespace-nowrap 
              transition-all duration-[1000ms] ${mounted ? "w-[13ch]" : "w-0"}`}
      >
        Hi, I&apos;m Taiham
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
      <div className="m-1 mt-4 flex justify-between items-center">
        <div>
          <button className="m-1 px-2 py-1 text-sm tracking-widest bg-tertiary-blue text-primary-dark rounded hover:shadow-lg active:shadow-inner">
            linkedin
          </button>
          <button className="m-1 px-2 py-1 text-sm tracking-widest bg-tertiary-black text-primary-dark rounded hover:shadow-lg active:shadow-inner">
            github
          </button>
          <br className="sm:hidden"></br>
          <button className="m-1 px-2 py-1 text-sm tracking-widest bg-tertiary-red text-primary-dark rounded hover:shadow-lg active:shadow-inner">
            mail
          </button>
        </div>
        <button className="m-1 px-4 py-2 text-sm tracking-widest bg-tertiary-green text-primary-dark rounded hover:shadow-lg active:shadow-inner">
          resume
        </button>
      </div>
    </div>
  );
}
