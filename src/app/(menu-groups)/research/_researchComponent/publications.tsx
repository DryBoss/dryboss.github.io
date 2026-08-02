"use client";

type Publication = {
  title: string;
  venue: string;
  year: string;
  url?: string;
};

// Add real entries here as they become available — title, venue/journal, year, and an optional link.
const publications: Publication[] = [];

export default function Publications() {
  if (publications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <p className="text-sm md:text-base font-bold uppercase tracking-widest opacity-60">
          No published papers yet.
        </p>
        <a
          href="https://www.researchgate.net/profile/Abu-Saiman-Taiham"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 text-xs font-black uppercase tracking-[0.2em] border-2 border-black dark:border-white transition-all duration-150 ease-out hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-0 active:translate-x-0 active:shadow-none bg-primary-green/20 text-current"
        >
          Follow on Research Gate
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {publications.map((pub, index) => {
        const card = (
          <div className="h-full border-2 border-black dark:border-white p-5 bg-primary-light dark:bg-primary-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-sm md:text-base font-black uppercase tracking-wide leading-snug mb-3">
              {pub.title}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60">
              {pub.venue} · {pub.year}
            </p>
          </div>
        );

        return pub.url ? (
          <a
            key={index}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {card}
          </a>
        ) : (
          <div key={index}>{card}</div>
        );
      })}
    </div>
  );
}
