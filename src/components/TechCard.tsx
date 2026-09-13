import React from "react";
import Button from "./ui/Button";

function TechCard() {
  return (
    <div className="py-6 px-5 rounded-2xl bg-gray-50 shadow">
      {/* header */}
      <div className="flex justify-between pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-md bg-blue-100">
            <img
              src="https://icon.icepanel.io/Technology/svg/React.svg"
              alt="tech icon"
              className="w-8 h-8"
            />
          </span>
          <h3 className="font-inter font-bold text-xl">React</h3>
        </div>

        <span className="self-center bg-blue-100 rounded-3xl px-6 py-1 text-blue-500 text-sm font-bold">
          Popular
        </span>
      </div>

      {/* body */}
      <p className="text-gray-600 pb-4 border-b border-b-gray-100">
        A declarative, component-based JavaScript library for building modern
        user interfaces.
      </p>

      {/* footer */}
      <div className="flex justify-between items-center py-4 gap-4">
        <span className="py-1 px-4 rounded text-gray-500 text-sm bg-gray-200">
          frontend
        </span>
        <span className="text-gray-500 text-sm">Beginner friendly</span>
        <span className="flex items-center gap-2 text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          4.9
        </span>
      </div>

      <Button size="full" variant="black">
        Add to Stack
      </Button>
    </div>
  );
}

export default TechCard;
