"use client";

export default function Title() {
  return (
    <div
      // RESTORED: Transparent background (removed border/shadow box)
      // KEPT: 'transition-none duration-0' for the retro instant-switch feel
      className={`p-5 text-primary-dark dark:text-primary-light flex items-center transition-none duration-0`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 mx-6" // Slightly larger icon to match the bold text
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>

      <h1
        // IMPROVED: Added 'font-bold' and 'tracking-widest' to match your other new components
        // LOGIC: 'transition-[width]' ensures the typing animates, but the color snaps instantly
        className={`
          text-3xl font-bold uppercase tracking-widest
          overflow-hidden whitespace-nowrap
        `}
      >
        Projects
      </h1>
    </div>
  );
}
