import React, { useState } from 'react';
import { Leaf, ChevronDown, Briefcase, Users, Phone, UserCircle, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stone-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-green-600 mr-2" />
          <span className="text-xl font-bold text-stone-800">Sweet Success Consulting</span>
        </div>
        <nav className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center text-stone-600 hover:text-green-600 transition duration-300"
          >
            Menu <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          <ul className={`absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-10 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}>
            <li>
              <Link to="/#services" className="flex items-center px-4 py-2 text-stone-600 hover:bg-stone-100">
                <Briefcase className="h-5 w-5 mr-3" /> Services
              </Link>
            </li>
            <li>
              <Link to="/#about" className="flex items-center px-4 py-2 text-stone-600 hover:bg-stone-100">
                <Users className="h-5 w-5 mr-3" /> About
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="flex items-center px-4 py-2 text-stone-600 hover:bg-stone-100">
                <Phone className="h-5 w-5 mr-3" /> Contact
              </Link>
            </li>
            <li>
              <Link to="/employees" className="flex items-center px-4 py-2 text-stone-600 hover:bg-stone-100">
                <UserCircle className="h-5 w-5 mr-3" /> Our Team
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="flex items-center px-4 py-2 text-stone-600 hover:bg-stone-100">
                <Image className="h-5 w-5 mr-3" /> Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
