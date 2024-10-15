import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <li><Link to="/#services" className="text-stone-600 hover:text-orange-600 transition duration-300">Services</Link></li>
            <li><Link to="/#about" className="text-stone-600 hover:text-green-600 transition duration-300">About</Link></li>
            <li><Link to="/#contact" className="text-stone-600 hover:text-blue-600 transition duration-300">Contact</Link></li>
            <li><Link to="/employees" className="text-stone-600 hover:text-purple-600 transition duration-300">Our Team</Link></li>
            <li><Link to="/portfolio" className="text-stone-600 hover:text-pink-600 transition duration-300">Portfolio</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
