import React, { useState } from "react";

export const HackingGame = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEnter = () => {
    if (input === "hack") {
      setOutput("🔓 Password cracked: P@ssw0rd123");
    } else {
      setOutput("❌ Access Denied.");
    }
  };

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">🔓 Hacking Simulation</h3>
      <p>Type 'hack' and press Enter:</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-black text-green-400 p-2 mt-2"
      />
      <button onClick={handleEnter} className="bg-green-400 text-black px-4 py-2 rounded-lg mt-2">
        Enter
      </button>
      <p className="mt-4">{output}</p>
    </div>
  );
};
