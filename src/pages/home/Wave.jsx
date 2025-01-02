function Wave() {
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
      <rect x="0" y="0" width="100%" height="100px" fill="#0a0c10"></rect>
      <path
        d="M0 151L9.3 170.2C18.7 189.3 37.3 227.7 56.2 273.5C75 319.3 94 372.7 112.8 402.5C131.7 432.3 150.3 438.7 169 410C187.7 381.3 206.3 317.7 225 270.5C243.7 223.3 262.3 192.7 281.2 206.5C300 220.3 319 278.7 337.8 310.5C356.7 342.3 375.3 347.7 394 328C412.7 308.3 431.3 263.7 450 265C468.7 266.3 487.3 313.7 506.2 324C525 334.3 544 307.7 562.8 305.8C581.7 304 600.3 327 619 330.5C637.7 334 656.3 318 675 295.2C693.7 272.3 712.3 242.7 731.2 242.7C750 242.7 769 272.3 787.8 298.7C806.7 325 825.3 348 844 343.5C862.7 339 881.3 307 890.7 291L900 275L900 601L890.7 601C881.3 601 862.7 601 844 601C825.3 601 806.7 601 787.8 601C769 601 750 601 731.2 601C712.3 601 693.7 601 675 601C656.3 601 637.7 601 619 601C600.3 601 581.7 601 562.8 601C544 601 525 601 506.2 601C487.3 601 468.7 601 450 601C431.3 601 412.7 601 394 601C375.3 601 356.7 601 337.8 601C319 601 300 601 281.2 601C262.3 601 243.7 601 225 601C206.3 601 187.7 601 169 601C150.3 601 131.7 601 112.8 601C94 601 75 601 56.2 601C37.3 601 18.7 601 9.3 601L0 601Z"
        fill="#24292f"
        strokeLinecap="round"
        strokeLinejoin="miter"
      ></path>
    </svg>
  );
}

export default Wave;