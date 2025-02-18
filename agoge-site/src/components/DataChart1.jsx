import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DataChartBar = ({ data }) => {
  if (data.length === 0) return <p className="text-center">Ingen data att visa. Lägg till värden ovan.</p>;
  if (data.length === 1) return <p className="text-center">Lägg till mer data för att visa en graf.</p>;

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Stapeldiagram</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataChartBar;
