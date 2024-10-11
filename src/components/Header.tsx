import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-stone-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-green-600 mr-2" />
          <span className="text-xl font-bold text-stone-800">Sweet Success Consulting</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-stone-600 hover:text-orange-600 transition duration-300">Services</a></li>
            <li><a href="#about" className="text-stone-600 hover:text-green-600 transition duration-300">About</a></li>
            <li><a href="#contact" className="text-stone-600 hover:text-blue-600 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
