import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2026', co2: 425, amoc: 15 },
  { name: '2036', co2: 410, amoc: 14 },
  { name: '2046', co2: 390, amoc: 12 },
  { name: '2056', co2: 370, amoc: 8 },
  { name: '2066', co2: 350, amoc: 2 },
];

export default function SimulationDashboard() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-4">Command 04: 11D Multiverse Manifold Scaling</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Line type="monotone" dataKey="co2" stroke="#8884d8" name="CO2 (ppm)" />
            <Line type="monotone" dataKey="amoc" stroke="#82ca9d" name="AMOC (Sv)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
