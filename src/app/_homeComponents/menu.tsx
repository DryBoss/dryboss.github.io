"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "projects",
    route: "/projects",
    rotation: "-8",
    translateY: "15",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-10 h-10 md:w-12 md:h-12"
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
    rotation: "8",
    translateY: "25",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        <path d="M23.8,25l-1.5-1.6C20.2,21,19,17.8,19,14.6c0-1.9,1-3.7,2.6-4.8c0.4-0.2,0.5-0.7,0.4-1.1C21.8,8.3,21.4,8,21,8H11 c-0.4,0-0.8,0.3-1,0.7c-0.1,0.4,0,0.9,0.4,1.1c1.6,1.1,2.6,2.9,2.6,4.8c0,3.2-1.2,6.3-3.3,8.8L8.2,25c-0.8,0.9-1,2.1-0.5,3.2 c0.5,1.1,1.5,1.8,2.7,1.8h11.1c1.2,0,2.2-0.7,2.7-1.8C24.8,27.1,24.6,25.9,23.8,25z M13.5,10h5c-1,1.3-1.5,2.9-1.5,4.6 c0,3.4,1.2,6.7,3.3,9.4h-8.5c2.1-2.7,3.3-6,3.3-9.4C15,12.9,14.5,11.3,13.5,10z" />
        <path d="M19,3c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C18,2.6,18.4,3,19,3z" />
        <path d="M13,4c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C12,3.6,12.4,4,13,4z" />
        <path d="M16,7c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C15,6.6,15.4,7,16,7z" />
      </svg>
    ),
  },
];

export default function Menu() {
  const router = useRouter();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    menuItems.forEach((_, index) => {
      setTimeout(
        () => {
          setVisibleItems((prev) => [...prev, index]);
        },
        500 + 150 * index,
      );
    });
  }, []);

  const handleClick = (route: string, index: number) => {
    setClickedIndex(index);
    setTimeout(() => {
      router.push(route);
    }, 500);
  };

  return (
    <div className="fixed bottom-[-20px] left-1/2 -translate-x-1/2 z-[100] flex items-end px-12">
      {menuItems.map(({ title, route, rotation, translateY, icon }, index) => {
        const isVisible = visibleItems.includes(index);
        const isClicked = clickedIndex === index;
        const isEven = index % 2 === 0;

        return (
          <div
            key={title}
            onClick={() => handleClick(route, index)}
            className={`
              relative cursor-pointer transition-all duration-300 ease-out
              w-24 h-36 md:w-32 md:h-48 -ml-8 first:ml-0
              flex flex-col justify-between items-center p-3
              bg-white border-[3px] border-black rounded-lg
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              
              /* Balatro inspecting mechanics */
              hover:-translate-y-16 hover:z-[110] hover:scale-110 hover:-rotate-0
              hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
              group
              
              ${isClicked ? "z-[120] !-translate-y-[250px] !scale-125 opacity-0" : "z-10"}
              ${isEven ? "text-card-black" : "text-card-red"}
            `}
            style={{
              transform: `
                rotate(${isVisible ? (isClicked ? "0" : rotation) : isEven ? "-20" : "20"}deg) 
                translateY(${isVisible ? (isClicked ? "-250" : translateY) : "600"}px)
              `,
            }}
          >
            {/* Corner Suit Accent (Balatro style) */}
            <div className="absolute top-1.5 left-1.5 text-[10px] font-bold opacity-30 select-none">
              {isEven ? "♣" : "♥"}
            </div>
            <div className="absolute bottom-1.5 right-1.5 text-[10px] font-bold opacity-30 rotate-180 select-none">
              {isEven ? "♣" : "♥"}
            </div>

            {/* Top Title Tag */}
            <p className="font-black uppercase tracking-widest text-[9px] md:text-[12px] bg-black/5 px-1 rounded-sm">
              {title}
            </p>

            {/* Central Icon - Shakes slightly on group-hover */}
            <div className="flex-grow flex items-center justify-center transition-transform group-hover:scale-110">
              {icon}
            </div>

            {/* Bottom Title Tag (Inverted) */}
            <p className="font-black uppercase tracking-widest text-[9px] md:text-[12px] rotate-180 bg-black/5 px-1 rounded-sm">
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
