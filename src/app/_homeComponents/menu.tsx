"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "projects",
    route: "/projects",
    rotation: "-5",
    translateY: "0",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-16"
      >
        <g transform="translate(4, 4)">
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
        </g>
      </svg>
    ),
  },
  {
    title: "research",
    route: "/research",
    rotation: "5",
    translateY: "0",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-16"
      >
        <g>
          <path
            d="M23.8,25l-1.5-1.6C20.2,21,19,17.8,19,14.6c0-1.9,1-3.7,2.6-4.8c0.4-0.2,0.5-0.7,0.4-1.1C21.8,8.3,21.4,8,21,8H11
          c-0.4,0-0.8,0.3-1,0.7c-0.1,0.4,0,0.9,0.4,1.1c1.6,1.1,2.6,2.9,2.6,4.8c0,3.2-1.2,6.3-3.3,8.8L8.2,25c-0.8,0.9-1,2.1-0.5,3.2
          c0.5,1.1,1.5,1.8,2.7,1.8h11.1c1.2,0,2.2-0.7,2.7-1.8C24.8,27.1,24.6,25.9,23.8,25z M13.5,10h5c-1,1.3-1.5,2.9-1.5,4.6
          c0,3.4,1.2,6.7,3.3,9.4h-8.5c2.1-2.7,3.3-6,3.3-9.4C15,12.9,14.5,11.3,13.5,10z"
          ></path>
          <path d="M19,3c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C18,2.6,18.4,3,19,3z"></path>
          <path d="M13,4c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C12,3.6,12.4,4,13,4z"></path>
          <path d="M16,7c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C15,6.6,15.4,7,16,7z"></path>
        </g>
      </svg>
    ),
  },

  /*{
    title: "achievements",
    route: "/achievements",
    rotation: "5",
    translateY: "0",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-20"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },*/
];

export default function Menu() {
  const router = useRouter();

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    menuItems.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, 300 + 200 * index);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const handleCLick = (route: string, index: number) => {
    setClickedIndex(index);
    setTimeout(() => {
      router.push(route);
    }, 300);
  };

  return (
    <div className={`flex fixed bottom-[-30] left-1/2 -translate-x-1/2 z-99`}>
      {menuItems.map(({ title, route, rotation, translateY, icon }, index) => (
        <div
          key={title}
          className={`w-32 h-40 mx-[-10] p-3 bg-card-white text-sm ${
            index % 2 ? "text-card-red" : "text-card-black"
          } tracking-widest flex flex-col justify-between items-center rounded drop-shadow-lg hover:-translate-y-5 hover:scale-110 cursor-pointer transition-transform duration-200 ease-out`}
          style={{
            transform: `
      rotate(${rotation}deg) 
      translateY(${
        clickedIndex === index
          ? parseInt(translateY) - 50
          : visibleItems.includes(index)
          ? translateY
          : 500
      }px)
    `,
          }}
          onClick={() => handleCLick(route, index)}
        >
          <p>{title}</p>
          {icon}
          <p className="rotate-180">{title}</p>
        </div>
      ))}
    </div>
  );
}
