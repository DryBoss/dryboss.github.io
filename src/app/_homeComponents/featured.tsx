"use client";

import { useEffect, useState } from "react";

// Type definitions
type Feature = {
  _id: string;
  title: string;
  description: string;
};

export default function Intro() {
  const [mounted, setMounted] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [currentFeature, setCurrentFeature] = useState<Feature | null>(null);
  const [flip, setFlip] = useState(false);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Fetch features
  useEffect(() => {
    fetch("/api/features")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Feature[]) => {
        setFeatures(data);

        // Pick initial random feature
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setCurrentFeature(data[randomIndex]);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Update feature every 10 seconds with flip animation
  useEffect(() => {
    if (features.length === 0) return;

    const interval = setInterval(() => {
      // Trigger flip-out
      setFlip(true);

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * features.length);

        // Change feature after flip-out
        setCurrentFeature(features[randomIndex]);

        // Trigger flip-in
        setFlip(false);
      }, 300); // Match animation duration
    }, 10000);

    return () => clearInterval(interval);
  }, [features]);

  return (
    <div
      className={`h-100 w-80 p-10 rounded-2xl flex flex-col items-center bg-card-white dark:bg-card-white/75 rotate-[-3deg] hover:rotate-[3deg] transition duration-300 drop-shadow-lg ${
        mounted ? "translate-x-0" : "translate-x-500"
      } ${flip ? "scale-x-[0]" : "scale-x-[1]"}`}
    >
      <h3 className="text-2xl">
        {currentFeature?.title || "Featured Project"}
      </h3>
      <p className="flex-grow my-5 tracking-widest text-center">
        {currentFeature?.description ||
          "Check out some of our highlighted work."}
      </p>
      <button className="px-4 py-2 w-full bg-card-black text-white rounded">
        View
      </button>
    </div>
  );
}
