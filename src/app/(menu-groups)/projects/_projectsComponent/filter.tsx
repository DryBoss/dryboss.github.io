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
    <Suspense
      fallback={
        <div className="mx-4 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse border-2 border-dashed border-current p-4 w-fit opacity-50">
          [ Sorting Deck... ]
        </div>
      }
    >
      <div className="mx-4">
        <div className="flex flex-wrap gap-6">
          {categories.map((category) => {
            const isActive = currentCategory === category;

            return (
              <button
                key={category}
                onClick={() => handleClick(category)}
                type="button"
                className={`
                  relative px-6 py-2 text-xs font-bold tracking-[0.15em] uppercase 
                  border-2 transition-all duration-150 ease-out
                  /* Tactile movement */
                  ${
                    isActive
                      ? "translate-x-[2px] translate-y-[2px] bg-tertiary-green border-black text-black shadow-none"
                      : "bg-primary-light dark:bg-primary-dark border-black dark:border-white text-current hover:-translate-y-1 hover:-translate-x-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
                  }
                `}
              >
                {/* Active Indicator "Sticker" */}
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-black dark:bg-white rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-tertiary-green" />
                  </div>
                )}

                <span className="relative z-10">{category}</span>

                {/* Decorative corner accents */}
                {!isActive && (
                  <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-30" />
                )}
              </button>
            );
          })}

          {/* Optional "Clear" indicator if a filter is active */}
          {currentCategory !== "none" && (
            <button
              onClick={() => handleClick("none" as any)}
              className="text-[10px] font-bold uppercase opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
            >
              <span>✕ Clear Filter</span>
            </button>
          )}
        </div>
      </div>
    </Suspense>
  );
}
