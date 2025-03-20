import React, { useState } from "react";

const ManualInput = ({ onDataUpdate }) => {
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");
  const [data, setData] = useState([]);

  const handleAddData = () => {
    if (xValue.trim() === "" || isNaN(yValue)) {
      alert("Fyll i ett giltigt X och Y-värde.");
      return;
    }

    const newData = [...data, { name: xValue, value: Number(yValue) }];
    setData(newData);
    onDataUpdate(newData);

    // Rensa inputfält
    setXValue("");
    setYValue("");
  };

  return (
    <div className="pt-10">
      <h2 className="text-2xl font-bold mb-2 text-gray-400 pb-3">Testa vårat linjediagram</h2>
    <div className="p-4 border rounded-lg shadow-lg ">
      <h2 className="text-sl font-bold mb-2 text-white">Lägg till er egen data för att se visualiseringen i realtid!</h2>
      <div className=" gap-2">
        <input
          type="text"
          placeholder="X (t.ex. Januari)"
          value={xValue}
          onChange={(e) => setXValue(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Y (t.ex. 100)"
          value={yValue}
          onChange={(e) => setYValue(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={handleAddData} className="p-2 text-black rounded mt-4">
          Lägg till Data
        </button>
      </div>
    </div>
    </div>

  );
};

export default ManualInput;
