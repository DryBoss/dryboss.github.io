"use client";

import { useEffect, useState } from "react";

// Type definitions
type Feature = {
  _id: string;
  title: string;
  description: string;
};

export default function Featured() {
  const [mounted, setMounted] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [currentFeature, setCurrentFeature] = useState<Feature | null>(null);

  // Controls the smooth fade transition
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  // 1. Mount Animation (Slide in from right)
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Fetch Data
  useEffect(() => {
    setLoading(true);
    fetch("/api/features")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Feature[]) => {
        setFeatures(data);
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setCurrentFeature(data[randomIndex]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  // 3. Smooth Cycle Logic
  useEffect(() => {
    if (features.length === 0) return;

    const interval = setInterval(() => {
      // Step A: Fade Out
      setIsVisible(false);

      // Step B: Wait for fade out (400ms), Swap Data, then Fade In
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * features.length);
        setCurrentFeature(features[randomIndex]);
        setIsVisible(true);
      }, 400);
    }, 8000); // 8 seconds per card

    return () => clearInterval(interval);
  }, [features]);

  if (loading) {
    return (
      <div className="w-80 h-96 border-[3px] border-dashed border-primary-dark/30 rounded-[2rem] flex items-center justify-center animate-pulse">
        <span className="font-bold uppercase tracking-widest">
          [ Reading... ]
        </span>
      </div>
    );
  }

  return (
    <div
      // CARD CONTAINER:
      // - Keeps the physical rotation, shadow, and border
      // - Does NOT flip or resize during content updates
      className={`
        relative w-80 min-h-[400px] p-8 flex flex-col items-center justify-between
        bg-card-white text-black
        border-[3px] border-black rounded-[2rem]
        shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]
        
        /* Entrance Slide */
        transform transition-all duration-300 cubic-bezier(0.17, 0.55, 0.55, 1)
        ${
          mounted ? "translate-x-0 opacity-100" : "translate-x-[150%] opacity-0"
        }
        
        /* Hover Interaction */
        rotate-[-3deg] hover:scale-105
      `}
    >
      {/* Tape Decoration */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-tertiary-red/80 rotate-2 border-2 border-black/20 z-10" />

      {/* INNER CONTENT WRAPPER:
          - Handles the smooth fade transition 
      */}
      <div
        className={`
          flex flex-col items-center justify-between h-full w-full
          transition-opacity duration-500 ease-in-out
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Header */}
        <div className="text-center mt-4">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-black uppercase tracking-widest bg-tertiary-green border-2 border-black rounded-full">
            Featured
          </div>
          <h3 className="text-2xl font-black uppercase leading-tight">
            {currentFeature?.title || "Project Name"}
          </h3>
        </div>

        {/* Description */}
        <div className="flex-grow flex items-center my-6">
          <p className="text-sm font-medium text-center tracking-wide leading-relaxed opacity-90 line-clamp-5">
            {currentFeature?.description || "Loading highlighted work..."}
          </p>
        </div>

        {/* Action Button */}
        <button
          className={`
            w-full py-3 px-4
            font-bold uppercase tracking-widest text-white
            bg-card-black border-[3px] border-black rounded-xl
            transition-all duration-0
            hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]
            active:translate-y-0 active:shadow-none
          `}
        >
          View Case Study
        </button>
      </div>
    </div>
  );
}
