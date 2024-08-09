"use client";
import React from "react";
import { useStore } from "../store/store";

const Toolbar = ({ selectedCell, applyValidation }) => {
  const setFormat = useStore((state) => state.setFormat);

  return (
    <div className="flex space-x-2 mb-4">
      <button onClick={() => applyValidation("number")}>Numeric Only</button>
      <button onClick={() => applyValidation(null)}>No Validation</button>

      {/* Alignment buttons */}
      <button onClick={() => setFormat(selectedCell, "alignment", "left")}>
        Align Left
      </button>
      <button onClick={() => setFormat(selectedCell, "alignment", "center")}>
        Align Center
      </button>
      <button onClick={() => setFormat(selectedCell, "alignment", "right")}>
        Align Right
      </button>

      {/* Font size buttons */}
      <button onClick={() => setFormat(selectedCell, "fontSize", "small")}>
        Small Font
      </button>
      <button onClick={() => setFormat(selectedCell, "fontSize", "medium")}>
        Medium Font
      </button>
      <button onClick={() => setFormat(selectedCell, "fontSize", "large")}>
        Large Font
      </button>
    </div>
  );
};

export default Toolbar;
