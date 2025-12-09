"use client";

export default function Field() {
  const fields = [
    "Artificial Intelligence and Machine Learning",
    "Data Science and Big Data Analytics",
    "Computer Vision and Image Processing",
    "Quantum Computing",
  ];

  return (
    <div className="p-4 m-4 bg-tertiary-green rounded-xl dark:bg-tertiary-green/75">
      <h3 className="m-2 text-2xl">Field of Interests</h3>

      <div className="m-2 flex flex-wrap">
        {fields.map((field, index) => (
          <p
            key={index}
            className="m-2 px-4 py-2 flex text-lg tracking-wide border-4 rounded-lg bg-primary-green/75"
          >
            {field}
          </p>
        ))}
      </div>
    </div>
  );
}
