import React from 'react';

function Header() {
  return (
    <nav className="bg-sky-500/75 text-white p-4 rounded-lg shadow-lg mb-8">
      <ul className="flex justify-around text-lg font-semibold">
        <li><a href="#home" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">Home</a></li>
        <li><a href="#about" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">About</a></li>
        <li><a href="#animalcategories" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">Animal Categories</a></li>
        <li><a href="#care" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">Animal Care</a></li>
        <li><a href="#contact" className="hover:underline transition duration-300 ease-in-out transform hover:scale-105">FAQ</a></li>
      </ul>
    </nav>
  );
}

export default Header;
