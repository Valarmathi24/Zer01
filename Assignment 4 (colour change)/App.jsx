import React, { useState } from 'react';
import './index.css'; 

function App() {
  const [color, setColor] = useState('#ffffff'); 
  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  const resetColor = () => {
    setColor('#ffffff'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Color Changer</h1>
      <div
        className="w-48 h-48 border border-gray-800 rounded-lg shadow-lg"
        style={{ backgroundColor: color }}
      ></div>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={changeColor}
          className="px-6 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition-transform transform hover:scale-105"
        >
          Color Change
        </button>
        <button
          onClick={resetColor}
          className="px-6 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-transform transform hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
