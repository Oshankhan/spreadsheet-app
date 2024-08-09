"use client";
import React from "react";
import { useStore } from "../store/store";
import { GoNumber } from "react-icons/go";
import { FaAlignLeft, FaAlignRight, FaRedo, FaUndo } from "react-icons/fa";
import { RiFontSize2 } from "react-icons/ri";
import { FaAlignCenter } from "react-icons/fa6";
import { ImFileText2, ImFontSize } from "react-icons/im";
import { RxFontRoman } from "react-icons/rx";
const Toolbar = ({ selectedCell, applyValidation }) => {
  const setFormat = useStore((state) => state.setFormat);
  const undo = useStore((state) => state.undo);
  const redo = useStore((state) => state.redo);
  const history = useStore((state) => state.history);
  const future = useStore((state) => state.future);

  console.log(future);

  return (
    <div className="flex w-[80%] h-8 my-2 justify-evenly rounded-md  bg-white">
      <button onClick={undo} disabled={history.length === 0}>
        <FaUndo className={`${history.length === 0 && "opacity-50"}`} />
      </button>
      <button onClick={redo} disabled={future.length === 0}>
        <FaRedo className={`${future.length === 0 && "opacity-50"}`} />
      </button>
      <button onClick={() => applyValidation("number")}>
        <GoNumber />
      </button>

      <button onClick={() => applyValidation(null)}>
        <ImFileText2 />
      </button>
      {/* Alignment buttons */}
      <button onClick={() => setFormat(selectedCell, "alignment", "left")}>
        <FaAlignLeft />
      </button>
      <button onClick={() => setFormat(selectedCell, "alignment", "center")}>
        <FaAlignCenter />
      </button>
      <button onClick={() => setFormat(selectedCell, "alignment", "right")}>
        <FaAlignRight />
      </button>

      {/* Font size buttons */}
      <button onClick={() => setFormat(selectedCell, "fontSize", "small")}>
        <RiFontSize2 />
      </button>
      <button onClick={() => setFormat(selectedCell, "fontSize", "medium")}>
        <RxFontRoman />
      </button>
      <button onClick={() => setFormat(selectedCell, "fontSize", "large")}>
        <ImFontSize />
      </button>
    </div>
  );
};

export default Toolbar;
