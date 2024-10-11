import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Sweet Success Consulting. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400 transition duration-300"><Facebook /></a>
            <a href="#" className="hover:text-green-400 transition duration-300"><Twitter /></a>
            <a href="#" className="hover:text-green-400 transition duration-300"><Instagram /></a>
            <a href="#" className="hover:text-green-400 transition duration-300"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;