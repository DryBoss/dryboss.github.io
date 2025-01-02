function Wave({ colorOld, colorNew, waveCode }) {
  return (
    <svg
      id="wave"
      viewBox="0 0 900 600"
      style={{
        width: "100%",
        height: "100px",
      }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none" // This ensures the wave stretches
    >
      <rect x="0" y="0" width="900" height="600" fill={colorOld}></rect>
      {waveCode.map((code, index) => (
        <path
          key={index} // Add a unique key for each element in a list
          d={code}
          fill={colorNew[index]} // Use the corresponding color from colorNew
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      ))}
    </svg>
  );
}

export default Wave;
