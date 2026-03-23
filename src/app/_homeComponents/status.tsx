"use client";
import { useEffect, useState } from "react";

export default function Status() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const TickerContent = () => (
    <div className="flex items-center gap-6 lg:gap-8">
      <span>Quantum computing & ML researcher</span>
      <span className="text-tertiary-green">•</span>
      <span>Full Stack Web Dev</span>
      <span className="text-tertiary-green">•</span>
      <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 whitespace-nowrap">
        Open to partnerships
      </span>
    </div>
  );

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-[9999] min-h-[40px]
        flex items-center px-6 py-2
        bg-primary-light dark:bg-primary-dark 
        text-primary-dark dark:text-primary-light
        border-b-4 border-black dark:border-white
        transform transition-transform duration-700 ease-out
        ${mounted ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Balatro "Chip" Indicator */}
      <div className="relative z-10 mr-4 flex-shrink-0 w-3 h-3 bg-tertiary-green border-2 border-black dark:border-white shadow-[0_0_10px_rgba(34,197,94,0.5)] overflow-hidden">
        <div className="absolute inset-0 blink bg-white opacity-40" />
      </div>

      {/* The Ticker Container */}
      <div className="flex-1 overflow-hidden">
        <div className="ticker-wrapper flex whitespace-nowrap">
          <div className="ticker-inner text-[10px] md:text-xs font-black uppercase tracking-[0.3em] flex items-center">
            <TickerContent />
            {/* Duplicate content: Only visible/active when scrolling (below lg) */}
            <div className="lg:hidden flex items-center gap-6 ml-6">
              <TickerContent />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blink {
          animation: blink 1s infinite step-end;
        }

        .ticker-inner {
          width: max-content;
        }

        /* Scroll only on screens smaller than 1024px (lg) */
        @media (max-width: 1023px) {
          .ticker-inner {
            animation: scroll 18s linear infinite;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50.5%);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
