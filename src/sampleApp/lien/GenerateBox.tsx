import React from "react";

interface Box {
  id: number;
  color: string;
}
function GenerateBox() {
  const [count, setCount] = React.useState<string>("");
  const [boxes, setBoxes] = React.useState<Box[]>([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = parseInt(count, 10);

    if (!value || value === 0) {
      setBoxes([]);
      return;
    }

    if (value > 128) {
      alert("Value must be between 1 and 128");
      return;
    }

    const newBoxes = Array.from({ length: value }, (_, i) => ({
      id: i + 1,
      color: "#FAEBD7",
    }));

    // const newBoxes: Box[] = Array.from({ length: value }, (_, i): Box => ({
    //   id: i + 1,
    //   color: "#FAEBD7",
    // }));

    setBoxes(newBoxes);
  };

  const handleBoxClick = (id: number) => {
    setBoxes((prev) =>
      prev.map((box) =>
        box.id === id ? { ...box, color: getRandomColor() } : box
      )
    );
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center p-8">
      <main className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-6">Generate Boxes</h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <label htmlFor="boxCount" className="font-medium">
            Number of boxes:
          </label>
          <input
            id="boxCount"
            type="number"
            min="0"
            max="128"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="border rounded px-2 py-1 w-24"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate
          </button>
        </form>

        {/* Result */}
        <section className="flex flex-wrap gap-4 justify-center">
          {boxes.length === 0 ? (
            <p>No box</p>
          ) : (
            boxes.map((box) => (
              <div
                key={box.id}
                onClick={() => handleBoxClick(box.id)}
                className="w-24 h-24 flex items-center justify-center font-semibold cursor-pointer rounded-lg shadow-md transition-colors"
                style={{ backgroundColor: box.color }}
              >
                Box #{box.id}
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default GenerateBox;