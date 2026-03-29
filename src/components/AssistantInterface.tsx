import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

export default function AssistantInterface() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Master Orchestrator online. Command 03 verified.' },
    { role: 'assistant', text: 'Directive received: Initiating Command 04 - Scaling to 11D Multiverse Manifold.' }
  ]);
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white rounded-xl border border-gray-700">
      <div className="p-4 border-b border-gray-700 flex items-center gap-2">
        <MessageSquare className="text-blue-400" />
        <h2 className="text-xl font-bold">Master Orchestrator</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded-lg ${msg.role === 'assistant' ? 'bg-gray-800' : 'bg-blue-900 ml-auto'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-800 p-2 rounded border border-gray-600 focus:outline-none"
          placeholder="Enter command..."
        />
        <button className="bg-blue-600 p-2 rounded hover:bg-blue-700">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
