import React from 'react';

function Description() {
  return (
    <div className="p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          <span className="block italic text-purple-500 font-semibold text-xl border-l-4 border-purple-500 pl-4">
            "The greatness of a nation can be judged by the way its animals are treated"
          </span>
        </h2>
        <p className="text-gray-600 text-lg font-bold italic leading-relaxed">
          Animals have a unique way of touching our hearts, reminding us of the deep bonds we share with them. They are more than just creatures inhabiting our planet; they are companions, protectors, and sometimes even our closest friends. Each animal, with its own personality, quirks, and emotions, holds a special place in our lives.
        </p>
      </div>
    </div>
  );
}

export default Description;
