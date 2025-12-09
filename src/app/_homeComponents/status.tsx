"use client";

export default function Status() {
  return (
    <div className="fixed top-0 w-full border-2 flex items-center gap-2 p-2 bg-card-white dark:bg-card-white/75">
      {/* Blinking Green Dot */}
      <span className="w-5 h-5 bg-tertiary-green rounded-full blink"></span>
      <p className="text-sm text-primary-dark">
        Quantum computing & ML researcher with web development experience, open
        to partnerships or professional roles.
      </p>

      {/* Custom CSS for blinking */}
      <style jsx>{`
        .blink {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
