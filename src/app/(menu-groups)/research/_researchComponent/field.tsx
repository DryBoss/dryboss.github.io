"use client";

export default function Field() {
  const fields = [
    "Artificial Intelligence and Machine Learning",
    "Data Science and Big Data Analytics",
    "Computer Vision and Image Processing",
    "Quantum Computing",
  ];

  return (
    <div className="p-4 m-4 text-primary-dark dark:text-primary-light">
      <h3 className="m-2 text-2xl">Field of Interests</h3>

      <div className="m-2 flex flex-wrap">
        {fields.map((field, index) => (
          <p
            key={index}
            className="m-2 px-4 py-2 flex text-lg text-primary-dark tracking-wide border-4 rounded-lg bg-tertiary-green"
          >
            {field}
          </p>
        ))}
      </div>
    </div>
  );
}
