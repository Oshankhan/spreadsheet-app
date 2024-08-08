// components/Toolbar.js
"use client";
import React from "react";

const Toolbar = ({ selectedCell, applyValidation }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <button onClick={() => applyValidation("number")}>Numeric Only</button>
      <button onClick={() => applyValidation(null)}>No Validation</button>
      {/* Existing alignment and font size buttons */}
      <button onClick={() => applyValidation("left")}>Align Left</button>
      <button onClick={() => applyValidation("center")}>Align Center</button>
      <button onClick={() => applyValidation("right")}>Align Right</button>
      <button onClick={() => applyValidation("small")}>Small Font</button>
      <button onClick={() => applyValidation("medium")}>Medium Font</button>
      <button onClick={() => applyValidation("large")}>Large Font</button>
    </div>
  );
};

export default Toolbar;
