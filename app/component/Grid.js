"use client";
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import { useStore } from "../store/store";
import Pagiantion from "./Pagiantion";

const Grid = () => {
  const cells = useStore((state) => state.cells);
  const searchQuery = useStore((state) => state.searchQuery);
  const updateCell = useStore((state) => state.updateCell);
  const setValidation = useStore((state) => state.setValidation);
  const [selectedCell, setSelectedCell] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
    console.log(index);

    setSelectedCell(index);
  };

  const applyValidation = (validationType) => {
    if (selectedCell !== null) {
      setValidation(selectedCell, validationType);
    }
  };

  const filteredCells = cells
    .map((cell, index) => ({ ...cell, originalIndex: index }))
    .filter((cell) =>
      cell.value.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const ChangePageIndex = (direction) => {
    if (direction === "left") {
      if (currentPage < 0) {
        return;
      } else {
        setCurrentPage((pre) => pre - 1);
      }
    }
    if (direction === "right") {
      if (currentPage > cells.length) {
        return;
      } else {
        setCurrentPage((pre) => pre + 1);
      }
    }
  };

  return (
    <div>
      <Toolbar selectedCell={selectedCell} applyValidation={applyValidation} />

      <div className="grid grid-cols-10 gap-1">
        {filteredCells
          .slice((currentPage - 1) * 100, currentPage * 100)

          .map((cell, index) => (
            <input
              key={index}
              type="text"
              value={cell.value}
              onClick={() => handleCellClick(index + (currentPage - 1) * 100)}
              onChange={(e) =>
                handleCellChange(
                  index + (currentPage - 1) * 100,
                  e.target.value
                )
              }
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
      <Pagiantion
        selectedCell={selectedCell}
        ChangePageIndex={ChangePageIndex}
      />
    </div>
  );
};

export default Grid;
