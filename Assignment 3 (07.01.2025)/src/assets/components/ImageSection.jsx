import React from 'react';

function ImageSection() {
  return (
    <div className="flex items-center justify-center rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img src="/animal.jpg" alt="Animal" className="mx-auto max-w-full h-auto rounded-lg" />
    </div>
  );
}

export default ImageSection;
