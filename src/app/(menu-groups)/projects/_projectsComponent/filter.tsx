"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Ensure this matches the parent component's types
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
    <Suspense
      fallback={
        <div className="mx-4 text-sm font-bold uppercase tracking-widest animate-pulse border-[3px] border-dashed border-current p-2 w-fit">
          [Loading filters...]
        </div>
      }
    >
      <div className="mx-4">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              type="button"
              className={`
                px-6 py-2 text-base font-bold tracking-widest uppercase flex items-center 
                border-[3px] rounded-full transition-all duration-0
                hover:-translate-y-1 
                active:translate-y-0 active:shadow-none
                ${
                  currentCategory === category
                    ? "bg-tertiary-green border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                    : "bg-transparent border-current text-primary-dark dark:text-primary-light hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
