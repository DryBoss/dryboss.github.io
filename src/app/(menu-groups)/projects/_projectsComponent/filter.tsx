"use client";

import React, { Suspense } from "react";
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
    <div>
      {/* Wrap with Suspense */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <Filter
          categories={["web development", "machine learning", "none"]}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      </Suspense>

      {/* rest of page */}
    </div>
  );
}
