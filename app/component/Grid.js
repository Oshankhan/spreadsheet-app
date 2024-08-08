// components/Grid.js
"use client";
import React, { useState } from "react";

import Toolbar from "./Toolbar";
import { useStore } from "../store/store";

const Grid = () => {
  const cells = useStore((state) => state.cells);
  const searchQuery = useStore((state) => state.searchQuery);
  const updateCell = useStore((state) => state.updateCell);
  const setValidation = useStore((state) => state.setValidation);
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellChange = (index, value) => {
    const { validation } = cells[index];

    if (validation) {
      if (validation === "number" && isNaN(value)) {
        alert("Only numeric values are allowed");
        return;
      }
    }

    updateCell(index, value);
  };

  const handleCellClick = (index) => {
    setSelectedCell(index);
  };

  const applyValidation = (validationType) => {
    if (selectedCell !== null) {
      setValidation(selectedCell, validationType);
    }
  };

  const filteredCells = cells.filter((cell) =>
    cell.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Toolbar selectedCell={selectedCell} applyValidation={applyValidation} />

      <div className="grid grid-cols-10 gap-1">
        {filteredCells.map((cell, index) => (
          <input
            key={index}
            type="text"
            value={cell.value}
            onClick={() => handleCellClick(index)}
            onChange={(e) => handleCellChange(index, e.target.value)}
            className={`border p-2 text-${cell.alignment} ${
              cell.fontSize === "small"
                ? "text-sm"
                : cell.fontSize === "large"
                ? "text-lg"
                : "text-base"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
