"use client";
import { useState } from "react";

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState("5Y");
  const handleButtonClick = (duration) => {
    setActiveButton(duration);
  };

  return (
    <div className="flex border-2 border-blue-500 mb-2">
      <button
        className={`w-8 h-8 text-sm font-bold p-1 border-r-2 border-r-blue-400 ${activeButton === "1D" ? "active" : ""}`}
        onClick={() => handleButtonClick("1D")}
      >
        1D
      </button>
      <button
        className={`w-8 h-8 text-sm font-bold p-1 border-r-2 border-r-blue-400 ${activeButton === "1W" ? "active" : ""}`}
        onClick={() => handleButtonClick("1W")}
      >
        1W
      </button>
      <button
        className={`w-8 h-8 text-sm font-bold p-1 border-r-2 border-r-blue-400 ${activeButton === "1M" ? "active" : ""}`}
        onClick={() => handleButtonClick("1M")}
      >
        1M
      </button>
      <button
        className={`w-8 h-8 text-sm font-bold p-1 border-r-2 border-r-blue-400 ${activeButton === "1Y" ? "active" : ""}`}
        onClick={() => handleButtonClick("1Y")}
      >
        1Y
      </button>
      <button className={`w-8 h-8 text-sm font-bold p-1  ${activeButton === "5Y" ? "active" : ""}`} onClick={() => handleButtonClick("5Y")}>
        5Y
      </button>
    </div>
  );
};

export default ButtonGroup;
