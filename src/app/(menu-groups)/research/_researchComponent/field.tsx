"use client";

export default function Field() {
  const fields = [
    "Artificial Intelligence and Machine Learning",
    "Data Science and Big Data Analytics",
    "Computer Vision and Image Processing",
    "Quantum Computing",
  ];

  return (
    // Added 'transition-none duration-0' for instant theme switching
    <div className="p-4 m-4 text-primary-dark dark:text-primary-light transition-none duration-0">
      {/* Header: Bold, Uppercase, Widest to match the Title component */}
      <h3 className="m-2 mb-6 text-2xl font-bold uppercase tracking-widest">
        Field of Interests
      </h3>

      <div className="m-2 flex flex-wrap gap-4">
        {fields.map((field, index) => (
          <p
            key={index}
            // Styling Changes:
            // 1. rounded-full & border-[3px] for the consistent chunky look
            // 2. border-black & shadow for the physical 'sticker' feel
            // 3. hover effects to make them pop slightly
            className={`
              px-6 py-3 text-sm md:text-base font-bold tracking-widest uppercase
              border-[3px] border-black rounded-full 
              bg-tertiary-green text-primary-dark
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-0
              hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              cursor-default
            `}
          >
            {field}
          </p>
        ))}
      </div>
    </div>
  );
}
