"use client";

import { Suspense } from "react";
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
    <Suspense fallback={<div>Loading filters...</div>}>
      <div className="mx-4">
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleClick(category)}
              className={`m-2 px-4 py-2 text-base tracking-widest flex items-center border-3 rounded cursor-pointer ${
                currentCategory === category
                  ? "bg-tertiary-green text-primary-dark dark:text-primary-dark"
                  : "text-primary-dark dark:text-primary-light"
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
