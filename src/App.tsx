/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import SimulationDashboard from './components/SimulationDashboard';
import AssistantInterface from './components/AssistantInterface';
import QubitExperiment from './components/QubitExperiment';
import EvaluationPanel from './components/EvaluationPanel';
import ModellingInterface from './components/ModellingInterface';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-extrabold tracking-tighter text-blue-500">
          Quantum Technology Ecosystem Suite
        </h1>
        <p className="text-gray-400">Master Orchestrator - All Systems Operational</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SimulationDashboard />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QubitExperiment />
            <EvaluationPanel />
          </div>
          <ModellingInterface />
        </div>
        <div className="lg:col-span-1 h-[800px]">
          <AssistantInterface />
        </div>
      </div>
    </div>
  );
}
