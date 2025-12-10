"use client";

import { useEffect, useState } from "react";

export default function Status() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 1000); // 2s delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        h-[56px] fixed top-0 w-full z-[9999] border-b-2 
        flex items-center gap-2 p-2 
        bg-primary-light dark:bg-primary-dark 
        text-primary-dark dark:text-primary-light
        transform transition-all duration-200
        ${mounted ? "translate-y-0" : "-translate-y-20"}
      `}
    >
      <div className="w-5 h-5 mx-2 bg-tertiary-green rounded-full blink"></div>

      <p className="text-sm tracking-widest">
        Quantum computing & ML researcher with web development experience, open
        to partnerships or professional roles.
      </p>

      <style jsx>{`
        .blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
