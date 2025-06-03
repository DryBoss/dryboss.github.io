import Image from "next/image";

import Menu from "./menu";
import ThemeToggle from "./themeToggleComponent/themeToggle";

import catGif from "./../../public/icons/cat.gif";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <Menu />
        <ThemeToggle />
        <div className="p-4 m-8 bg-secondary-dark text-gray-300 rounded-lg">
          <h1 className="m-2 text-2xl">Hi, I’m Taiham</h1>
          <div className="flex items-center">
            <img src={catGif.src} alt="My GIF" className="w-12 h-12" />
            <p className="m-4 text-base">
              full stack developer | machine learning engineer | quantum
              computing researcher
            </p>
          </div>
          <p className="m-2 text-sm tracking-widest leading-6">
            A curious mind driven by technology, learning, and creating
            meaningful solutions. From intuitive web apps to machine learning
            and math, this site reflects my journey—projects, ideas, and
            experiments along the way.<br></br>Explore and feel free to say hi!
          </p>
        </div>
      </div>
    </div>
  );
}
