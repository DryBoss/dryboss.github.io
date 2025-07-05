"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Category = "web development" | "machine learning" | "none";

interface FilterProps {
  categories: readonly Category[];
  currentCategory: Category;
  setCurrentCategory: React.Dispatch<React.SetStateAction<Category>>;
}

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export default function Filter({
  categories,
  currentCategory,
  setCurrentCategory,
}: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (category: Category) => {
    const nextCategory = currentCategory === category ? "none" : category;
    setCurrentCategory(nextCategory);

    const params = new URLSearchParams(searchParams.toString());
    if (nextCategory === "none") {
      params.delete("category");
    } else {
      params.set("category", slugify(nextCategory));
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mx-4">
      <div className="flex">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleClick(category)}
            className={`m-2 px-4 py-2 text-sm tracking-widest flex items-center rounded cursor-pointer text-primary-dark ${
              currentCategory === category
                ? "bg-tertiary-green"
                : "bg-card-red text-primary-light"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
