import React from "react";

interface BoxData {
  id: number;
  label: string;
  originalClass: string;
}

const boxesData: BoxData[] = [
  { id: 1, label: "Red", originalClass: "bg-red-500" },
  { id: 2, label: "Yellow", originalClass: "bg-yellow-400" },
  { id: 3, label: "Aqua", originalClass: "bg-cyan-500" },
  { id: 4, label: "Purple", originalClass: "bg-purple-500" },
];

function ColorBox() {
  const [activeColor, setActiveColor] = React.useState<string | null>(null);

  const handleBoxClick = (color: string) => {
    setActiveColor((prev) => (prev === color ? null : color));
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">Playing Color Box — Toggle Colors</h1>
      <p className="mb-6 text-gray-700 text-center max-w-md">
        Click a box: all boxes will change to that color. Click it again to restore original colors.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {boxesData.map((box) => {
          const bgClass =
            activeColor !== null && activeColor !== undefined ? activeColor : box.originalClass;

          return (
            <div
              key={box.id}
              onClick={() => handleBoxClick(box.originalClass)}
              className={`w-32 h-32 flex items-center justify-center text-white font-semibold cursor-pointer rounded-lg shadow-lg ${bgClass}`}
            >
              {box.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColorBox;