import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ModellingInterface() {
  const [scaling, setScaling] = useState(1.0);
  const [entanglement, setEntanglement] = useState(0.5);
  const [multiverseConstant, setMultiverseConstant] = useState(1.0);
  const [decoherenceRate, setDecoherenceRate] = useState(0.1);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Modelling Interface</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Dimensional Scaling: {scaling.toFixed(2)}</label>
          <input 
            type="range" min="0.1" max="11.0" step="0.1" value={scaling} 
            onChange={(e) => setScaling(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Quantum Entanglement: {(entanglement * 100).toFixed(0)}%</label>
          <input 
            type="range" min="0" max="1" step="0.01" value={entanglement} 
            onChange={(e) => setEntanglement(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Multiverse Constant: {multiverseConstant.toFixed(2)}</label>
          <input 
            type="range" min="0" max="10" step="0.1" value={multiverseConstant} 
            onChange={(e) => setMultiverseConstant(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Quantum Decoherence Rate: {(decoherenceRate * 100).toFixed(0)}%</label>
          <input 
            type="range" min="0" max="1" step="0.01" value={decoherenceRate} 
            onChange={(e) => setDecoherenceRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-sm font-medium mb-4 text-gray-400">Multiverse State Representation</h3>
          <svg width="100%" height="200" viewBox="0 0 400 200">
            {/* Central Node */}
            <motion.circle 
              cx="200" cy="100" r={20 + entanglement * 20} 
              fill="#3b82f6" 
              animate={{ r: 20 + entanglement * 20 }}
            />
            {/* Parallel Nodes */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={200 + Math.cos(i * (Math.PI / 3)) * (60 + entanglement * 100)}
                cy={100 + Math.sin(i * (Math.PI / 3)) * (60 + entanglement * 100)}
                r={10}
                fill="#8b5cf6"
                animate={{ 
                  opacity: 0.2 + entanglement * 0.8,
                  scale: 0.5 + entanglement * 1.5
                }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
