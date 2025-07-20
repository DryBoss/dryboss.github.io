export default function Achievements() {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-36 h-45 p-3 my-20 bg-card-white flex justify-center items-center rounded drop-shadow-lg transition-transform duration-200 ease-out animate-flip`}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          className="w-25 h-25"
        >
          <defs>
            <style>
              {`.cls-1 {
          fill: none;
          stroke: #020202;
          stroke-miterlimit: 10;
          stroke-width: 1.91px;
        }`}
            </style>
          </defs>
          <rect
            className="cls-1"
            x="6.6"
            y="9.98"
            width="10.8"
            height="4.05"
            transform="translate(-4.97 12) rotate(-45)"
          />
          <circle className="cls-1" cx="18.68" cy="5.32" r="3.82" />
          <circle className="cls-1" cx="5.32" cy="18.68" r="3.82" />
          <path
            className="cls-1"
            d="M12,9.14,9.14,12,6.27,9.14H4.36A2.87,2.87,0,0,1,1.5,6.27V4.36l.4.4A2.1,2.1,0,0,0,4.69,5a2,2,0,0,0,.15-3L4.36,1.5H6.27A2.87,2.87,0,0,1,9.14,4.36V6.27Z"
          />
          <path
            className="cls-1"
            d="M19.64,14.86a2.87,2.87,0,0,1,2.86,2.87v1.91l-.4-.4A2.1,2.1,0,0,0,19.31,19a2,2,0,0,0-.15,3l.48.48H17.73a2.87,2.87,0,0,1-2.87-2.86V17.73L12,14.86,14.86,12l2.87,2.86Z"
          />
        </svg>
      </div>
    </div>
  );
}
