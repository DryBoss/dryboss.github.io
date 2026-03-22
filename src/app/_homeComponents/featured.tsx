"use client";

import { useEffect, useState } from "react";

type Feature = {
  _id: string;
  title: string;
  description: string;
};

export default function Featured() {
  const [mounted, setMounted] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [currentFeature, setCurrentFeature] = useState<Feature | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/api/features")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: Feature[]) => {
        setFeatures(data);
        if (data.length > 0) {
          setCurrentFeature(data[Math.floor(Math.random() * data.length)]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (features.length === 0) return;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentFeature(
          features[Math.floor(Math.random() * features.length)],
        );
        setIsVisible(true);
      }, 150);
    }, 15000); // 15 seconds cycle
    return () => clearInterval(interval);
  }, [features]);

  if (loading) {
    return (
      <div className="w-80 h-[450px] border-2 border-dashed border-black/20 dark:border-white/20 flex flex-col items-center justify-center animate-pulse bg-black/5 dark:bg-white/5">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
          [ Shuffling Deck... ]
        </span>
      </div>
    );
  }

  return (
    <div
      className={`
        relative w-80 min-h-[450px] p-10 flex flex-col items-center justify-between
        bg-primary-light text-black border-2 border-black
        shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]
        
        /* Entrance Slide & Hover */
        transform transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)
        ${mounted ? "translate-x-0 opacity-100 rotate-[-2deg]" : "translate-x-[200%] opacity-0 rotate-12"}
        hover:rotate-0 hover:scale-105 group cursor-default
      `}
    >
      {/* Balatro Card Suit Accents (Top corners) */}
      <div className="absolute top-2 left-2 text-xs font-bold opacity-20">
        ♠
      </div>
      <div className="absolute top-2 right-2 text-xs font-bold opacity-20">
        ♠
      </div>
      <div className="absolute bottom-2 left-2 text-xs font-bold opacity-20 rotate-180">
        ♠
      </div>
      <div className="absolute bottom-2 right-2 text-xs font-bold opacity-20 rotate-180">
        ♠
      </div>

      {/* Decorative "Stamp" or Seal */}
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-card-red text-white flex items-center justify-center font-black border-2 border-black rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-[10px] uppercase tracking-tighter text-center leading-none">
        Top
        <br />
        Pick
      </div>

      <div
        className={`
          flex flex-col items-center justify-between h-full w-full
          transition-opacity duration-300 ease-in-out
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Header Section */}
        <div className="text-center mt-2 w-full">
          <div className="inline-block px-3 py-0.5 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] bg-tertiary-green border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Highlight
          </div>
          <h3 className="text-2xl font-black uppercase tracking-wider leading-none border-b-2 border-black/10 pb-4">
            {currentFeature?.title || "Data Corrupted"}
          </h3>
        </div>

        {/* Description Section */}
        <div className="flex-grow flex items-center py-6">
          <p className="text-xs font-bold uppercase leading-relaxed tracking-wider opacity-70 text-center line-clamp-6">
            {currentFeature?.description ||
              "Awaiting incoming transmission from the archive..."}
          </p>
        </div>

        {/* Action Button - Styled as a Voucher */}
        <button
          className={`
            w-full py-4 px-4
            font-black uppercase tracking-[0.3em] text-[11px] text-white
            bg-black border-2 border-black
            transition-all duration-150
            hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]
            active:translate-y-0 active:translate-x-0 active:shadow-none
          `}
        >
          View Details
        </button>
      </div>

      {/* Subtle Scanline Overlay specific to the card */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
    </div>
  );
}
