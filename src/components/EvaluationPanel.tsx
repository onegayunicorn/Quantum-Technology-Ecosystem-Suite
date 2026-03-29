import React from 'react';

export default function EvaluationPanel() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Evaluation Metrics</h2>
      <div className="space-y-2">
        <div className="flex justify-between"><span>Simulation Speed</span><span>1 year / 45s</span></div>
        <div className="flex justify-between"><span>Probability Accuracy</span><span>±0.7%</span></div>
      </div>
    </div>
  );
}
