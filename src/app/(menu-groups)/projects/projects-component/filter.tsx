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
            className={`m-2 px-4 py-2 text-sm tracking-widest flex items-center border-2 border-primary-dark dark:border-primary-light rounded cursor-pointer text-primary-dark ${
              currentCategory == category
                ? "bg-primary-green"
                : "bg-tertiary-red"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
