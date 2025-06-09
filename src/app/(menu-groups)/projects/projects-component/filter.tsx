"use client";

import { useState } from "react";

export default function Filter() {
  const categories = ["web development", "machine learning"] as const;

  type Category = (typeof categories)[number] | "none";

  const [currentCategory, setCurrentCategory] = useState<Category>("none");

  return (
    <div className="mx-4">
      <div className="flex">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() =>
              currentCategory == category
                ? setCurrentCategory("none")
                : setCurrentCategory(category)
            }
            className={`m-2 px-3 py-1 text-sm tracking-widest flex items-center border-2 border-primary-dark rounded cursor-pointer ${
              currentCategory == category
                ? "bg-primary-dark text-primary-light"
                : "bg-primary-light text-primary-dark"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
