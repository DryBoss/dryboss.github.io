"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`p-4 overflow-hidden text-primary-dark rounded-lg transition-all duration-200 ease-out ${
        mounted ? "translate-y-0" : "translate-y-500"
      } dark:text-primary-light max-w-180`}
    >
      <h1
        className={`m-8 text-5xl overflow-hidden whitespace-nowrap 
        transition-[width] duration-[1000ms] md:text-6xl
        ${mounted ? "w-[12ch]" : "w-0"}`}
      >
        Hi, I&apos;m Taiham
      </h1>
      <p className="text-xl m-8 opacity-80">
        full stack developer & machine learning engineer
      </p>
      <p className="m-8 text-sm tracking-widest leading-6">
        Exploring technology with curiosity.
        <br />
        Focused on web apps, machine learning and an emerging interest in
        quantum computing.
      </p>
      <div className="flex justify-between items-center">
        <div>
          <button className="m-2 px-4 py-2 tracking-widest bg-tertiary-blue text-primary-dark rounded hover:shadow-lg active:shadow-inner">
            linkedin
          </button>
          <button className="m-2 px-4 py-2 tracking-widest bg-tertiary-black text-primary-dark rounded hover:shadow-lg active:shadow-inner">
            github
          </button>
          <button className="m-2 px-4 py-2 tracking-widest bg-primary-green text-primary-dark rounded hover:shadow-lg active:shadow-inner">
            research gate
          </button>
          <br className="sm:hidden"></br>
          <button className="m-2 px-4 py-2 tracking-widest bg-tertiary-red text-primary-dark rounded hover:shadow-lg active:shadow-inner">
            mail
          </button>
        </div>
        <button className="m-2 px-4 py-2 tracking-widest bg-tertiary-green text-primary-dark rounded hover:shadow-lg active:shadow-inner">
          resume
        </button>
      </div>
    </div>
  );
}
