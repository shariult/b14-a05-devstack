function TechCartItem() {
  return (
    <div className="p-6 flex items-center border border-gray-300 rounded-2xl border-solid">
      <img
        src="https://icon.icepanel.io/Technology/svg/React.svg"
        alt="react icon"
        className="h-8 mr-2.5"
      />

      <div>
        <h5 className="text-lg font-bold">React</h5>
        <p className="text-sm text-gray-500">Front-end</p>
      </div>

      <button className="text-gray-500 ml-auto cursor-pointer hover:bg-gray-300 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-8 h-8"
        >
          <rect width="256" height="256" fill="none" />
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <line
            x1="200"
            y1="200"
            x2="56"
            y2="56"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </svg>
      </button>
    </div>
  );
}

export default TechCartItem;
