import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmployeeSummary from './components/EmployeeSummary';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
              </>
            } />
            <Route path="/employees" element={<EmployeeSummary />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
