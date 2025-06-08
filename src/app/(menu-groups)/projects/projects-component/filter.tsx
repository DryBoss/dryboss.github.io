"use client";

import { useState } from "react";

export default function Filter() {
  const categories = ["web development", "machine learning"] as const;

  type Category = (typeof categories)[number] | "none";
  type SubCategory =
    | (typeof subcategories)[keyof typeof subcategories][number]
    | "none";

  const subcategories: Record<Exclude<Category, "none">, string[]> = {
    "web development": ["js", "react"],
    "machine learning": ["supervised", "unsupervised"],
  };

  const [currentCategory, setCurrentCategory] = useState<Category>("none");
  const [currentSubCategory, setCurrentSubCategory] =
    useState<SubCategory>("none");

  const visibleSubcategories =
    currentCategory === "none"
      ? Object.values(subcategories).flat()
      : subcategories[currentCategory];

  return (
    <div className="mx-4">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-10 m-2 bg-tertiary-red text-primary-dark border-2 rounded ${
            currentCategory == "none" ? "hidden" : "visible"
          } cursor-pointer`}
          onClick={() => setCurrentCategory("none")}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`m-2 px-3 py-2 text-sm tracking-widest border-2 border-primary-dark rounded cursor-pointer ${
              currentCategory == category
                ? "bg-primary-dark text-primary-light"
                : "bg-primary-light text-primary-dark"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-10 m-2 bg-tertiary-red text-primary-dark border-2 rounded ${
            currentSubCategory == "none" ? "hidden" : "visible"
          } cursor-pointer`}
          onClick={() => setCurrentSubCategory("none")}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>

        {visibleSubcategories.map((subcategory, index) => (
          <div
            key={index}
            onClick={() => setCurrentSubCategory(subcategory)}
            className={`m-2 px-3 py-2 text-sm tracking-widest border-2 border-primary-dark rounded cursor-pointer ${
              currentSubCategory == subcategory
                ? "bg-primary-dark text-primary-light"
                : "bg-primary-light text-primary-dark"
            }`}
          >
            {subcategory}
          </div>
        ))}
      </div>
    </div>
  );
}
