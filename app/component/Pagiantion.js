import React from "react";

const Pagiantion = ({ selectedCell, ChangePageIndex }) => {
  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <button
        onClick={() => ChangePageIndex("left")}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Left
      </button>
      <span className="text-lg font-semibold text-gray-700">
        Page {selectedCell} of 100
      </span>
      <button
        onClick={() => ChangePageIndex("right")}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Right
      </button>
    </div>
  );
};

export default Pagiantion;
