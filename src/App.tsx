import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Company from './components/company';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Contact />
        <Company />
      </main>
      <Footer />
    </div>
  );
}

export default App;
