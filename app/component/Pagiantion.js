import React from "react";

const Pagiantion = ({ selectedCell, ChangePageIndex }) => {
  return (
    <div>
      <button onClick={() => ChangePageIndex("left")}>left</button>
      <span>page no {selectedCell} of 1000</span>
      <button onClick={() => ChangePageIndex("right")}>right</button>
    </div>
  );
};

export default Pagiantion;
